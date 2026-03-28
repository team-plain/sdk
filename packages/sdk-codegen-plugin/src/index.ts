import type { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import {
  type GraphQLField,
  type GraphQLNamedType,
  type GraphQLObjectType,
  type GraphQLOutputType,
  type GraphQLSchema,
  type GraphQLUnionType,
  getNamedType,
  isEnumType,
  isInterfaceType,
  isListType,
  isNonNullType,
  isObjectType,
  isScalarType,
  isUnionType,
  Kind,
} from "graphql";

// ─── Naming ────────────────────────────────────────────────────────────────────

/**
 * Match @graphql-codegen's default naming convention (PascalCase with acronym splitting).
 * "MSTeams" → "MsTeams", "WorkOS" → "WorkOs", etc.
 */
function toCgPascalCase(str: string): string {
  const words = str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .split(/\s+/);
  return words.map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join("");
}

function toPascalCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ─── Schema Analysis ──────────────────────────────────────────────────────────

interface TypeQueryMapping {
  queryFieldName: string;
  idArgName: string;
}

function unwrapType(type: GraphQLOutputType): {
  namedType: GraphQLNamedType;
  isNonNull: boolean;
  isList: boolean;
} {
  let isNonNull = false;
  let isList = false;
  let current = type;
  if (isNonNullType(current)) {
    isNonNull = true;
    current = current.ofType;
  }
  if (isListType(current)) {
    isList = true;
    current = current.ofType;
    if (isNonNullType(current)) {
      current = current.ofType;
    }
  }
  const namedType = getNamedType(current)!;
  return { namedType, isNonNull, isList };
}

function isConnectionType(name: string): boolean {
  return name.endsWith("Connection");
}

function isOutputType(name: string): boolean {
  return name.endsWith("Output");
}

/**
 * Build a mapping: GraphQL type name → root query that fetches it by ID.
 * Looks for Query fields with pattern: entityName(entityNameId: ID!): Entity
 */
function buildTypeQueryMap(schema: GraphQLSchema): Map<string, TypeQueryMapping> {
  const map = new Map<string, TypeQueryMapping>();
  const queryType = schema.getQueryType();
  if (!queryType) return map;

  for (const [fieldName, field] of Object.entries(queryType.getFields())) {
    const { namedType, isList } = unwrapType(field.type);
    if (isList) continue;
    if (!isObjectType(namedType)) continue;
    if (isConnectionType(namedType.name)) continue;

    // Find the first required ID argument
    const idArg = field.args.find(
      (a) => isNonNullType(a.type) && getNamedType(a.type)?.name === "ID",
    );
    if (!idArg) continue;

    // Only map if we haven't already (first match wins)
    if (!map.has(namedType.name)) {
      map.set(namedType.name, {
        queryFieldName: fieldName,
        idArgName: idArg.name,
      });
    }
  }

  return map;
}

// ─── Value object detection ───────────────────────────────────────────────────

/**
 * An object type whose fields are all scalars/enums (no id, no nested objects).
 * These get inlined in selections rather than becoming model classes.
 * Examples: DateTime ({ iso8601, unixTimestamp }), PageInfo.
 */
function isValueObjectType(type: GraphQLNamedType, _schema: GraphQLSchema): boolean {
  if (!isObjectType(type)) return false;
  const fields = type.getFields();
  return Object.values(fields).every((f) => {
    const named = getNamedType(f.type);
    return named ? isScalarType(named) || isEnumType(named) : false;
  });
}

const SKIP_MODEL_TYPES = new Set(["MutationError", "MutationFieldError"]);

// ─── Plugin ───────────────────────────────────────────────────────────────────
//
// The plugin runs as part of @graphql-codegen and produces a single TypeScript
// file containing:
//   1. Model classes — one per object type that has a fragment. Each class wraps
//      fragment data, exposes scalar fields as properties, and provides lazy-loading
//      getters for object relations (fetched by id via root queries).
//   2. PlainSdk class — one async method per query/mutation. Query methods return
//      model instances or PlainConnection<Model>. Mutation methods return the raw
//      Output type (error as data, not thrown).

export const plugin: PluginFunction = (schema: GraphQLSchema, documents: Types.DocumentFile[]) => {
  const queryType = schema.getQueryType();
  const mutationType = schema.getMutationType();
  if (!queryType) throw new Error("Schema must have a Query type");

  const typeQueryMap = buildTypeQueryMap(schema);

  // ── Collect fragments from documents ──────────────────────────────────────
  // Map: GraphQL type name → fragment name (as in .graphql file)
  const fragmentsByTypeName = new Map<string, string>();
  for (const doc of documents) {
    if (!doc.document) continue;
    for (const def of doc.document.definitions) {
      if (def.kind === Kind.FRAGMENT_DEFINITION) {
        fragmentsByTypeName.set(def.typeCondition.name.value, def.name.value);
      }
    }
  }

  // ── Collect operations from documents ─────────────────────────────────────
  const documentOperations = new Map<
    string,
    { operationName: string; kind: "query" | "mutation" }
  >();
  for (const doc of documents) {
    if (!doc.document) continue;
    for (const def of doc.document.definitions) {
      if (def.kind === Kind.OPERATION_DEFINITION && def.name) {
        const firstSelection = def.selectionSet.selections[0];
        if (firstSelection?.kind === Kind.FIELD) {
          // First mapping wins — sub-connection queries (e.g. ThreadTimelineEntries)
          // share the same root field as regular queries (e.g. Thread), so don't overwrite.
          if (!documentOperations.has(firstSelection.name.value)) {
            documentOperations.set(firstSelection.name.value, {
              operationName: def.name.value,
              kind: def.operation === "mutation" ? "mutation" : "query",
            });
          }
        }
      }
    }
  }

  // ── Determine which types get model classes ───────────────────────────────
  // Types with fragments, excluding Output types and utility types.
  // Note: we don't skip value-object-like types here because union member types
  // (e.g. DeletedCustomerActor) may be all-scalar but still need model classes.
  // The fragment generator controls which types get fragments.
  const modelTypes = new Map<string, GraphQLObjectType>();
  for (const [typeName] of fragmentsByTypeName) {
    if (SKIP_MODEL_TYPES.has(typeName)) continue;
    if (isOutputType(typeName)) continue;
    const gqlType = schema.getType(typeName);
    if (!gqlType || !isObjectType(gqlType)) continue;
    modelTypes.set(typeName, gqlType);
  }

  // ── Analyze fields for each model type ────────────────────────────────────
  interface FieldInfo {
    name: string;
    kind:
      | "scalar"
      | "enum"
      | "valueObject"
      | "objectRelation"
      | "connection"
      | "list"
      | "union"
      | "inlinedObject"
      | "skip";
    relatedTypeName?: string;
    queryMapping?: TypeQueryMapping;
    hasRequiredArgs: boolean;
    unionMemberTypeNames?: string[];
    isList?: boolean;
  }

  /**
   * Get the member type names of a union or interface type.
   */
  function getUnionMemberNames(namedType: GraphQLNamedType): string[] {
    if (isUnionType(namedType)) {
      return (namedType as GraphQLUnionType).getTypes().map((t) => t.name);
    }
    if (isInterfaceType(namedType)) {
      return schema.getPossibleTypes(namedType).map((t) => t.name);
    }
    return [];
  }

  function analyzeField(field: GraphQLField<unknown, unknown>): FieldInfo {
    const { namedType, isList } = unwrapType(field.type);
    const hasRequiredArgs = field.args.some((a) => isNonNullType(a.type));
    const name = field.name;

    if (field.deprecationReason != null) {
      return { name, kind: "skip", hasRequiredArgs };
    }

    if (hasRequiredArgs) {
      return { name, kind: "skip", hasRequiredArgs };
    }

    if (isValueObjectType(namedType, schema)) {
      return { name, kind: "valueObject", hasRequiredArgs };
    }
    if (isScalarType(namedType) || isEnumType(namedType)) {
      return { name, kind: isEnumType(namedType) ? "enum" : "scalar", hasRequiredArgs };
    }

    // Union/interface fields (single or list)
    if (isUnionType(namedType) || isInterfaceType(namedType)) {
      const memberNames = getUnionMemberNames(namedType).filter((memberName) => {
        const memberType = schema.getType(memberName);
        if (!memberType || !isObjectType(memberType)) return true;
        return Object.values(memberType.getFields()).some((f) => f.deprecationReason == null);
      });
      return {
        name,
        kind: "union",
        relatedTypeName: namedType.name,
        hasRequiredArgs,
        unionMemberTypeNames: memberNames,
        isList,
      };
    }

    if (isList) {
      return { name, kind: "list", relatedTypeName: namedType.name, hasRequiredArgs };
    }
    if (isObjectType(namedType) && isConnectionType(namedType.name)) {
      return { name, kind: "connection", relatedTypeName: namedType.name, hasRequiredArgs };
    }
    if (isObjectType(namedType)) {
      // Object relation — check if we can lazy-load it
      const hasId = "id" in namedType.getFields();
      const mapping = typeQueryMap.get(namedType.name);
      if (hasId && mapping) {
        return {
          name,
          kind: "objectRelation",
          relatedTypeName: namedType.name,
          queryMapping: mapping,
          hasRequiredArgs,
        };
      }
      // Non-queryable object relation — expose as inlined property if it has a fragment or is a model
      if (modelTypes.has(namedType.name) || fragmentsByTypeName.has(namedType.name)) {
        return { name, kind: "inlinedObject", relatedTypeName: namedType.name, hasRequiredArgs };
      }
    }
    return { name, kind: "skip", hasRequiredArgs };
  }

  // ── Codegen naming helpers ────────────────────────────────────────────────
  function fragmentTsName(typeName: string): string {
    const fragName = fragmentsByTypeName.get(typeName);
    if (!fragName) return `${toCgPascalCase(typeName)}FieldsFragment`;
    return `${toCgPascalCase(fragName)}Fragment`;
  }

  function modelClassName(typeName: string): string {
    return `${typeName}Model`;
  }

  function opCgName(operationName: string): string {
    return toCgPascalCase(operationName);
  }

  // ── Generate model classes ────────────────────────────────────────────────

  const allImportedDocuments = new Set<string>();
  const allImportedTypes = new Set<string>();
  const modelClassCode: string[] = [];

  /**
   * Find fields that have the same name but different type signatures across
   * union/interface members. Mirrors the same logic in generate-documents.ts.
   */
  function findConflictingUnionFields(memberTypeNames: string[]): Set<string> {
    const fieldTypeSigs = new Map<string, string>();
    const conflicting = new Set<string>();
    for (const memberName of memberTypeNames) {
      const memberType = schema.getType(memberName);
      if (!memberType || !isObjectType(memberType)) continue;
      for (const [fieldName, field] of Object.entries(memberType.getFields())) {
        if (field.deprecationReason != null) continue;
        const sig = field.type.toString();
        const existing = fieldTypeSigs.get(fieldName);
        if (existing === undefined) {
          fieldTypeSigs.set(fieldName, sig);
        } else if (existing !== sig) {
          conflicting.add(fieldName);
        }
      }
    }
    return conflicting;
  }

  /**
   * Generate a __typename switch expression that constructs the right model class
   * for a union field. Returns the switch expression as a string.
   *
   * When `conflictingFields` is provided, generates remapping code to convert
   * aliased field names (e.g. `TypeName_field`) back to original names (`field`)
   * so that model constructors receive the expected data shape.
   */
  function generateUnionSwitch(
    memberTypeNames: string[],
    dataExpr: string,
    clientExpr: string,
    conflictingFields?: Set<string>,
  ): string {
    const cases: string[] = [];
    for (const memberName of memberTypeNames) {
      if (modelTypes.has(memberName)) {
        const memberModelClass = modelClassName(memberName);
        // Check if this member has any conflicting fields that need remapping
        const remaps: string[] = [];
        if (conflictingFields && conflictingFields.size > 0) {
          const memberType = schema.getType(memberName);
          if (memberType && isObjectType(memberType)) {
            const memberFields = memberType.getFields();
            for (const fieldName of conflictingFields) {
              if (fieldName in memberFields) {
                const alias = `${memberName.charAt(0).toLowerCase()}${memberName.slice(1)}${fieldName.charAt(0).toUpperCase()}${fieldName.slice(1)}`;
                remaps.push(`${fieldName}: (${dataExpr} as any).${alias}`);
              }
            }
          }
        }
        if (remaps.length > 0) {
          cases.push(
            `      case "${memberName}": return new ${memberModelClass}(${clientExpr}, { ...${dataExpr} as any, ${remaps.join(", ")} } as any);`,
          );
        } else {
          cases.push(
            `      case "${memberName}": return new ${memberModelClass}(${clientExpr}, ${dataExpr} as any);`,
          );
        }
      } else {
        cases.push(`      case "${memberName}": return ${dataExpr} as any;`);
      }
    }
    cases.push(`      default: return ${dataExpr} as any;`);
    return `(() => {\n    switch ((${dataExpr} as any).__typename) {\n${cases.join("\n")}\n    }\n  })()`;
  }

  /**
   * Generate the TypeScript union type for a union field's model types.
   */
  function generateUnionModelType(memberTypeNames: string[]): string {
    const types = memberTypeNames.map((name) =>
      modelTypes.has(name) ? modelClassName(name) : `{ __typename: "${name}" }`,
    );
    return types.join(" | ");
  }

  for (const [typeName, gqlType] of modelTypes) {
    const fragTsName = fragmentTsName(typeName);
    allImportedTypes.add(fragTsName);

    const fields = Object.values(gqlType.getFields());
    const fieldInfos = fields.map(analyzeField);

    // Scalar/enum/valueObject/inlinedObject properties (all exposed directly on the model)
    const scalarFields = fieldInfos.filter(
      (f) =>
        f.kind === "scalar" ||
        f.kind === "enum" ||
        f.kind === "valueObject" ||
        f.kind === "inlinedObject",
    );

    // Object relations with lazy loading
    const relationFields = fieldInfos.filter((f) => f.kind === "objectRelation" && f.queryMapping);

    // Union/interface fields
    const unionFields = fieldInfos.filter((f) => f.kind === "union" && f.unionMemberTypeNames);

    const lines: string[] = [];
    lines.push(`export class ${modelClassName(typeName)} {`);
    lines.push(`  protected _client: PlainGraphQLClient;`);
    lines.push(`  protected _data: ${fragTsName};`);
    lines.push(`  public readonly __typename = "${typeName}" as const;`);
    lines.push(``);

    // Property declarations using indexed access types
    for (const f of scalarFields) {
      lines.push(`  public readonly ${f.name}: ${fragTsName}["${f.name}"];`);
    }

    // Union field property declarations
    for (const f of unionFields) {
      if (!f.unionMemberTypeNames) continue;
      const unionType = generateUnionModelType(f.unionMemberTypeNames);
      if (f.isList) {
        lines.push(`  public readonly ${f.name}: (${unionType})[];`);
      } else {
        // Check if the GraphQL field is nullable
        const gqlField = gqlType.getFields()[f.name];
        const isNonNull = gqlField ? isNonNullType(gqlField.type) : false;
        if (isNonNull) {
          lines.push(`  public readonly ${f.name}: ${unionType};`);
        } else {
          lines.push(`  public readonly ${f.name}: (${unionType}) | null;`);
        }
      }
    }

    // Constructor
    lines.push(``);
    lines.push(`  constructor(client: PlainGraphQLClient, data: ${fragTsName}) {`);
    lines.push(`    this._client = client;`);
    lines.push(`    this._data = data;`);
    for (const f of scalarFields) {
      lines.push(`    this.${f.name} = data.${f.name};`);
    }

    // Construct union field models
    for (const f of unionFields) {
      if (!f.unionMemberTypeNames) continue;
      const gqlField = gqlType.getFields()[f.name];
      const fieldIsNonNull = gqlField ? isNonNullType(gqlField.type) : false;

      // Detect conflicting fields for alias remapping
      const conflicting = findConflictingUnionFields(f.unionMemberTypeNames);

      if (f.isList) {
        const switchExpr = generateUnionSwitch(
          f.unionMemberTypeNames,
          "item",
          "client",
          conflicting,
        );
        lines.push(
          `    this.${f.name} = ((data.${f.name} as any[]) ?? []).map((item: any) => ${switchExpr});`,
        );
      } else if (fieldIsNonNull) {
        const switchExpr = generateUnionSwitch(
          f.unionMemberTypeNames,
          `data.${f.name}`,
          "client",
          conflicting,
        );
        lines.push(`    this.${f.name} = ${switchExpr};`);
      } else {
        const switchExpr = generateUnionSwitch(
          f.unionMemberTypeNames,
          `data.${f.name}`,
          "client",
          conflicting,
        );
        lines.push(`    this.${f.name} = data.${f.name} ? ${switchExpr} : null;`);
      }
    }

    lines.push(`  }`);

    // Lazy-loading getters for object relations
    for (const f of relationFields) {
      if (!f.queryMapping || !f.relatedTypeName) continue;

      const relatedModelClass = modelClassName(f.relatedTypeName);
      const mapping = f.queryMapping;
      const cgOpName = opCgName(toPascalCase(mapping.queryFieldName));
      const docName = `${cgOpName}Document`;
      const queryTsName = `${cgOpName}Query`;
      const varsTsName = `${cgOpName}QueryVariables`;

      allImportedDocuments.add(docName);
      allImportedTypes.add(queryTsName);
      allImportedTypes.add(varsTsName);

      lines.push(``);
      lines.push(`  public get ${f.name}(): Promise<${relatedModelClass} | undefined> {`);
      lines.push(`    const id = this._data.${f.name}?.id;`);
      lines.push(`    if (!id) return Promise.resolve(undefined);`);
      lines.push(`    return this._client.request<${queryTsName}, ${varsTsName}>(`);
      lines.push(`      ${docName},`);
      lines.push(`      { ${mapping.idArgName}: id } as ${varsTsName}`);
      lines.push(
        `    ).then(r => r.${mapping.queryFieldName} ? new ${relatedModelClass}(this._client, r.${mapping.queryFieldName}) : undefined);`,
      );
      lines.push(`  }`);
    }

    // Connection methods — sub-queries for connection fields on this model type.
    // E.g., ThreadModel.timelineEntries() fetches Thread.timelineEntries via a nested query.
    const connectionFields = fieldInfos.filter((f) => f.kind === "connection" && f.relatedTypeName);
    const parentQueryMapping = typeQueryMap.get(typeName);
    const hasIdField = "id" in gqlType.getFields();

    if (parentQueryMapping && hasIdField && connectionFields.length > 0) {
      for (const f of connectionFields) {
        if (!f.relatedTypeName) continue;

        const connGqlType = schema.getType(f.relatedTypeName);
        if (!connGqlType || !isObjectType(connGqlType)) continue;

        const edgesField = connGqlType.getFields().edges;
        if (!edgesField) continue;
        const edgeType = getNamedType(edgesField.type);
        if (!edgeType || !isObjectType(edgeType)) continue;
        const nodeField = edgeType.getFields().node;
        if (!nodeField) continue;
        const nodeTypeName = getNamedType(nodeField.type)?.name;
        if (!nodeTypeName || !modelTypes.has(nodeTypeName)) continue;

        const nodeModelClass = modelClassName(nodeTypeName);
        const connHasTotalCount = "totalCount" in connGqlType.getFields();

        // Compute operation names matching generate-documents.ts convention
        const subOpName = `${typeName}${toPascalCase(f.name)}`;
        const cgSubOpName = opCgName(subOpName);
        const docName = `${cgSubOpName}Document`;
        const queryTsName = `${cgSubOpName}Query`;
        const varsTsName = `${cgSubOpName}QueryVariables`;

        allImportedDocuments.add(docName);
        allImportedTypes.add(queryTsName);
        allImportedTypes.add(varsTsName);

        const parentFieldName = parentQueryMapping.queryFieldName;
        const idArgName = parentQueryMapping.idArgName;

        lines.push(``);
        lines.push(
          `  async ${f.name}(variables?: Omit<${varsTsName}, "${idArgName}">): Promise<PlainConnection<${nodeModelClass}>> {`,
        );
        lines.push(`    const allVars = { ...variables, ${idArgName}: this.id } as ${varsTsName};`);
        lines.push(
          `    const response = await this._client.request<${queryTsName}, ${varsTsName}>(`,
        );
        lines.push(`      ${docName}, allVars`);
        lines.push(`    );`);
        lines.push(`    const parent = response.${parentFieldName};`);
        lines.push(`    if (!parent) throw new Error("${parentFieldName} not found");`);
        lines.push(`    const conn = parent.${f.name};`);
        lines.push(`    return new PlainConnection<${nodeModelClass}>({`);
        lines.push(
          `      nodes: conn.edges.map(e => new ${nodeModelClass}(this._client, e.node)),`,
        );
        lines.push(
          `      pageInfo: conn.pageInfo,${connHasTotalCount ? "\n      totalCount: conn.totalCount," : ""}`,
        );
        lines.push(`      fetch: (cursor) => this.${f.name}({ ...variables, ...cursor }),`);
        lines.push(`    });`);
        lines.push(`  }`);
      }
    }

    lines.push(`}`);
    modelClassCode.push(lines.join("\n"));
  }

  // ── Generate SDK class ────────────────────────────────────────────────────

  const queryFields = queryType.getFields();
  const mutationFields = mutationType ? mutationType.getFields() : {};
  const sdkMethods: string[] = [];

  // Process queries
  for (const [fieldName, field] of Object.entries(queryFields)) {
    const opInfo = documentOperations.get(fieldName);
    if (!opInfo || opInfo.kind !== "query") continue;

    const cgName = opCgName(opInfo.operationName);
    const documentName = `${cgName}Document`;
    const queryTsName = `${cgName}Query`;
    const varsTsName = `${cgName}QueryVariables`;

    allImportedDocuments.add(documentName);
    allImportedTypes.add(queryTsName);

    const hasArgs = Object.keys(field.args).length > 0;
    if (hasArgs) allImportedTypes.add(varsTsName);

    const { namedType, isNonNull, isList } = unwrapType(field.type);
    const isConnection = isConnectionType(namedType.name);
    const hasModel = modelTypes.has(namedType.name);

    const varsParam = hasArgs ? `variables: ${varsTsName}` : "";
    const varsArg = hasArgs ? `, variables` : "";
    const typeArgs = hasArgs
      ? `<${queryTsName}, ${varsTsName}>`
      : `<${queryTsName}, Record<string, never>>`;

    if (isConnection) {
      // Connection query → return PlainConnection<Model>
      // Determine the node type
      const connGqlType = schema.getType(namedType.name);
      let nodeTypeName: string | null = null;
      if (connGqlType && isObjectType(connGqlType)) {
        const edgesField = connGqlType.getFields().edges;
        if (edgesField) {
          const edgeType = getNamedType(edgesField.type);
          if (edgeType && isObjectType(edgeType)) {
            const nodeField = edgeType.getFields().node;
            if (nodeField) {
              nodeTypeName = getNamedType(nodeField.type)?.name ?? null;
            }
          }
        }
      }

      const nodeHasModel = nodeTypeName ? modelTypes.has(nodeTypeName) : false;
      const connHasTotalCount =
        connGqlType && isObjectType(connGqlType) ? "totalCount" in connGqlType.getFields() : false;

      if (nodeHasModel && nodeTypeName) {
        const nodeModelClass = modelClassName(nodeTypeName);
        sdkMethods.push(
          `  async ${fieldName}(${varsParam}): Promise<PlainConnection<${nodeModelClass}>> {
    const response = await this._client.request${typeArgs}(
      ${documentName}${varsArg}
    );
    const conn = response.${fieldName};
    return new PlainConnection<${nodeModelClass}>({
      nodes: conn.edges.map(e => new ${nodeModelClass}(this._client, e.node)),
      pageInfo: conn.pageInfo,${connHasTotalCount ? "\n      totalCount: conn.totalCount," : ""}
      fetch: (cursor) => this.${fieldName}({ ...${hasArgs ? "variables" : "{}"}, ...cursor } as ${varsTsName}),
    });
  }`,
        );
      } else {
        // Connection without model — return raw type
        sdkMethods.push(
          `  async ${fieldName}(${varsParam}): Promise<${queryTsName}["${fieldName}"]> {
    const response = await this._client.request${typeArgs}(
      ${documentName}${varsArg}
    );
    return response.${fieldName};
  }`,
        );
      }
    } else if (isList && hasModel) {
      // List of model type
      const nodeModelClass = modelClassName(namedType.name);
      sdkMethods.push(
        `  async ${fieldName}(${varsParam}): Promise<${nodeModelClass}[]> {
    const response = await this._client.request${typeArgs}(
      ${documentName}${varsArg}
    );
    return (response.${fieldName} ?? []).map(d => new ${nodeModelClass}(this._client, d));
  }`,
      );
    } else if (hasModel && !isList) {
      // Single model type
      const mClass = modelClassName(namedType.name);
      if (isNonNull) {
        sdkMethods.push(
          `  async ${fieldName}(${varsParam}): Promise<${mClass}> {
    const response = await this._client.request${typeArgs}(
      ${documentName}${varsArg}
    );
    return new ${mClass}(this._client, response.${fieldName});
  }`,
        );
      } else {
        sdkMethods.push(
          `  async ${fieldName}(${varsParam}): Promise<${mClass}> {
    const response = await this._client.request${typeArgs}(
      ${documentName}${varsArg}
    );
    if (!response.${fieldName}) {
      throw new Error("${fieldName} not found");
    }
    return new ${mClass}(this._client, response.${fieldName});
  }`,
        );
      }
    } else {
      // Raw return (scalars, enums, types without models, lists of non-models)
      if (!isNonNull && !isList && !isConnection) {
        sdkMethods.push(
          `  async ${fieldName}(${varsParam}): Promise<NonNullable<${queryTsName}["${fieldName}"]>> {
    const response = await this._client.request${typeArgs}(
      ${documentName}${varsArg}
    );
    if (!response.${fieldName}) {
      throw new Error("${fieldName} not found");
    }
    return response.${fieldName};
  }`,
        );
      } else {
        sdkMethods.push(
          `  async ${fieldName}(${varsParam}): Promise<${queryTsName}["${fieldName}"]> {
    const response = await this._client.request${typeArgs}(
      ${documentName}${varsArg}
    );
    return response.${fieldName};
  }`,
        );
      }
    }
  }

  // Process mutations — return raw output types (errors as data, not thrown)
  for (const [fieldName, field] of Object.entries(mutationFields)) {
    const opInfo = documentOperations.get(fieldName);
    if (!opInfo || opInfo.kind !== "mutation") continue;

    const cgName = opCgName(opInfo.operationName);
    const documentName = `${cgName}Document`;
    const mutTsName = `${cgName}Mutation`;
    const varsTsName = `${cgName}MutationVariables`;

    allImportedDocuments.add(documentName);
    allImportedTypes.add(mutTsName);

    const hasArgs = Object.keys(field.args).length > 0;
    if (hasArgs) allImportedTypes.add(varsTsName);

    const varsParam = hasArgs ? `variables: ${varsTsName}` : "";
    const varsArg = hasArgs ? `, variables` : "";
    const typeArgs = hasArgs
      ? `<${mutTsName}, ${varsTsName}>`
      : `<${mutTsName}, Record<string, never>>`;

    sdkMethods.push(
      `  async ${fieldName}(${varsParam}): Promise<${mutTsName}["${fieldName}"]> {
    const response = await this._client.request${typeArgs}(
      ${documentName}${varsArg}
    );
    return response.${fieldName};
  }`,
    );
  }

  // ── Assemble output ───────────────────────────────────────────────────────

  const output: string[] = [];

  // Imports
  output.push(`import type { PlainGraphQLClient } from "./graphql-client.js";`);
  output.push(`import { PlainConnection } from "./connection.js";`);

  const sortedDocs = [...allImportedDocuments].sort();
  const sortedTypes = [...allImportedTypes].sort();

  output.push(`import {`);
  for (const d of sortedDocs) {
    output.push(`  ${d},`);
  }
  output.push(`} from "./_generated_documents.js";`);

  output.push(`import type {`);
  for (const t of sortedTypes) {
    output.push(`  ${t},`);
  }
  output.push(`} from "./_generated_documents.js";`);

  output.push(``);

  // Model classes
  for (const code of modelClassCode) {
    output.push(code);
    output.push(``);
  }

  // SDK class
  output.push(`export class PlainSdk {`);
  output.push(`  protected _client: PlainGraphQLClient;`);
  output.push(``);
  output.push(`  constructor(client: PlainGraphQLClient) {`);
  output.push(`    this._client = client;`);
  output.push(`  }`);
  output.push(``);
  output.push(sdkMethods.join("\n\n"));
  output.push(`}`);
  output.push(``);

  return output.join("\n");
};
