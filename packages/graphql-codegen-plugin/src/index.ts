import type { PluginFunction, Types } from "@graphql-codegen/plugin-helpers";
import {
  type GraphQLField,
  type GraphQLNamedType,
  type GraphQLObjectType,
  type GraphQLOutputType,
  type GraphQLSchema,
  getNamedType,
  isEnumType,
  isListType,
  isNonNullType,
  isObjectType,
  isScalarType,
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
          documentOperations.set(firstSelection.name.value, {
            operationName: def.name.value,
            kind: def.operation === "mutation" ? "mutation" : "query",
          });
        }
      }
    }
  }

  // ── Determine which types get model classes ───────────────────────────────
  // Types with fragments, excluding Output types and utility types
  const modelTypes = new Map<string, GraphQLObjectType>();
  for (const [typeName] of fragmentsByTypeName) {
    if (SKIP_MODEL_TYPES.has(typeName)) continue;
    if (isOutputType(typeName)) continue;
    const gqlType = schema.getType(typeName);
    if (!gqlType || !isObjectType(gqlType)) continue;
    if (isValueObjectType(gqlType, schema)) continue;
    modelTypes.set(typeName, gqlType);
  }

  // ── Analyze fields for each model type ────────────────────────────────────
  interface FieldInfo {
    name: string;
    kind: "scalar" | "enum" | "valueObject" | "objectRelation" | "connection" | "list" | "skip";
    relatedTypeName?: string;
    queryMapping?: TypeQueryMapping;
    hasRequiredArgs: boolean;
  }

  function analyzeField(field: GraphQLField<unknown, unknown>): FieldInfo {
    const { namedType, isList } = unwrapType(field.type);
    const hasRequiredArgs = field.args.some((a) => isNonNullType(a.type));
    const name = field.name;

    if (isValueObjectType(namedType, schema)) {
      return { name, kind: "valueObject", hasRequiredArgs };
    }
    if (isScalarType(namedType) || isEnumType(namedType)) {
      return { name, kind: isEnumType(namedType) ? "enum" : "scalar", hasRequiredArgs };
    }
    if (isList) {
      return { name, kind: "list", relatedTypeName: namedType.name, hasRequiredArgs };
    }
    if (isObjectType(namedType) && isConnectionType(namedType.name)) {
      return { name, kind: "connection", relatedTypeName: namedType.name, hasRequiredArgs };
    }
    if (isObjectType(namedType) && !hasRequiredArgs) {
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

  for (const [typeName, gqlType] of modelTypes) {
    const fragTsName = fragmentTsName(typeName);
    allImportedTypes.add(fragTsName);

    const fields = Object.values(gqlType.getFields());
    const fieldInfos = fields.map(analyzeField);

    // Scalar/enum/valueObject properties (all exposed directly on the model)
    const scalarFields = fieldInfos.filter(
      (f) => f.kind === "scalar" || f.kind === "enum" || f.kind === "valueObject",
    );

    // Object relations with lazy loading
    const relationFields = fieldInfos.filter((f) => f.kind === "objectRelation" && f.queryMapping);

    const lines: string[] = [];
    lines.push(`export class ${modelClassName(typeName)} {`);
    lines.push(`  protected _client: PlainGraphQLClient;`);
    lines.push(`  protected _data: ${fragTsName};`);
    lines.push(``);

    // Property declarations using indexed access types
    for (const f of scalarFields) {
      lines.push(`  public readonly ${f.name}: ${fragTsName}["${f.name}"];`);
    }

    if (scalarFields.length > 0 && relationFields.length > 0) {
      lines.push(``);
    }

    // Constructor
    lines.push(`  constructor(client: PlainGraphQLClient, data: ${fragTsName}) {`);
    lines.push(`    this._client = client;`);
    lines.push(`    this._data = data;`);
    for (const f of scalarFields) {
      lines.push(`    this.${f.name} = data.${f.name};`);
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

    lines.push(`}`);
    modelClassCode.push(lines.join("\n"));
  }

  // ── Generate SDK class ────────────────────────────────────────────────────

  const queryFields = queryType.getFields();
  const mutationFields = mutationType ? mutationType.getFields() : {};
  const queryMethodBodies: string[] = [];
  const querySignatures: string[] = [];
  const mutationMethodBodies: string[] = [];
  const mutationSignatures: string[] = [];

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
        const returnType = `Promise<PlainConnection<${nodeModelClass}>>`;
        querySignatures.push(`${fieldName}(${varsParam}): ${returnType};`);
        queryMethodBodies.push(
          `    async ${fieldName}(${varsParam}): ${returnType} {
      const response = await _client.request${typeArgs}(
        ${documentName}${varsArg}
      );
      const conn = response.${fieldName};
      return new PlainConnection<${nodeModelClass}>({
        nodes: conn.edges.map(e => new ${nodeModelClass}(_client, e.node)),
        pageInfo: conn.pageInfo,${connHasTotalCount ? "\n        totalCount: conn.totalCount," : ""}
        fetch: (cursor) => query.${fieldName}({ ...${hasArgs ? "variables" : "{}"}, ...cursor } as ${varsTsName}),
      });
    }`,
        );
      } else {
        // Connection without model — return raw type
        const returnType = `Promise<${queryTsName}["${fieldName}"]>`;
        querySignatures.push(`${fieldName}(${varsParam}): ${returnType};`);
        queryMethodBodies.push(
          `    async ${fieldName}(${varsParam}): ${returnType} {
      const response = await _client.request${typeArgs}(
        ${documentName}${varsArg}
      );
      return response.${fieldName};
    }`,
        );
      }
    } else if (isList && hasModel) {
      // List of model type
      const nodeModelClass = modelClassName(namedType.name);
      const returnType = `Promise<${nodeModelClass}[]>`;
      querySignatures.push(`${fieldName}(${varsParam}): ${returnType};`);
      queryMethodBodies.push(
        `    async ${fieldName}(${varsParam}): ${returnType} {
      const response = await _client.request${typeArgs}(
        ${documentName}${varsArg}
      );
      return (response.${fieldName} ?? []).map(d => new ${nodeModelClass}(_client, d));
    }`,
      );
    } else if (hasModel && !isList) {
      // Single model type
      const mClass = modelClassName(namedType.name);
      const returnType = `Promise<${mClass}>`;
      querySignatures.push(`${fieldName}(${varsParam}): ${returnType};`);
      if (isNonNull) {
        queryMethodBodies.push(
          `    async ${fieldName}(${varsParam}): ${returnType} {
      const response = await _client.request${typeArgs}(
        ${documentName}${varsArg}
      );
      return new ${mClass}(_client, response.${fieldName});
    }`,
        );
      } else {
        queryMethodBodies.push(
          `    async ${fieldName}(${varsParam}): ${returnType} {
      const response = await _client.request${typeArgs}(
        ${documentName}${varsArg}
      );
      if (!response.${fieldName}) {
        throw new Error("${fieldName} not found");
      }
      return new ${mClass}(_client, response.${fieldName});
    }`,
        );
      }
    } else {
      // Raw return (scalars, enums, types without models, lists of non-models)
      if (!isNonNull && !isList && !isConnection) {
        const returnType = `Promise<NonNullable<${queryTsName}["${fieldName}"]>>`;
        querySignatures.push(`${fieldName}(${varsParam}): ${returnType};`);
        queryMethodBodies.push(
          `    async ${fieldName}(${varsParam}): ${returnType} {
      const response = await _client.request${typeArgs}(
        ${documentName}${varsArg}
      );
      if (!response.${fieldName}) {
        throw new Error("${fieldName} not found");
      }
      return response.${fieldName};
    }`,
        );
      } else {
        const returnType = `Promise<${queryTsName}["${fieldName}"]>`;
        querySignatures.push(`${fieldName}(${varsParam}): ${returnType};`);
        queryMethodBodies.push(
          `    async ${fieldName}(${varsParam}): ${returnType} {
      const response = await _client.request${typeArgs}(
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

    const returnType = `Promise<${mutTsName}["${fieldName}"]>`;
    mutationSignatures.push(`${fieldName}(${varsParam}): ${returnType};`);
    mutationMethodBodies.push(
      `    async ${fieldName}(${varsParam}): ${returnType} {
      const response = await _client.request${typeArgs}(
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

  // Query and mutation interfaces
  output.push(`export interface PlainSdkQueries {`);
  for (const sig of querySignatures) {
    output.push(`  ${sig}`);
  }
  output.push(`}`);
  output.push(``);
  output.push(`export interface PlainSdkMutations {`);
  for (const sig of mutationSignatures) {
    output.push(`  ${sig}`);
  }
  output.push(`}`);
  output.push(``);

  // SDK class
  output.push(`export class PlainSdk {`);
  output.push(`  public readonly query: PlainSdkQueries;`);
  output.push(`  public readonly mutation: PlainSdkMutations;`);
  output.push(``);
  output.push(`  constructor(client: PlainGraphQLClient) {`);
  output.push(`    const _client = client;`);
  output.push(``);
  output.push(`    const query: PlainSdkQueries = {`);
  output.push(queryMethodBodies.join(",\n\n"));
  output.push(`    };`);
  output.push(`    this.query = query;`);
  output.push(``);
  output.push(`    const mutation: PlainSdkMutations = {`);
  output.push(mutationMethodBodies.join(",\n\n"));
  output.push(`    };`);
  output.push(`    this.mutation = mutation;`);
  output.push(`  }`);
  output.push(`}`);
  output.push(``);

  return output.join("\n");
};
