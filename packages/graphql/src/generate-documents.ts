import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildSchema,
  type GraphQLArgument,
  type GraphQLField,
  type GraphQLNamedType,
  type GraphQLObjectType,
  type GraphQLOutputType,
  getNamedType,
  isEnumType,
  isInterfaceType,
  isListType,
  isNonNullType,
  isObjectType,
  isScalarType,
  isUnionType,
} from "graphql";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const schemaPath = resolve(__dirname, "schema.graphql");
const outputPath = resolve(__dirname, "_generated_documents.graphql");

const schemaSource = readFileSync(schemaPath, "utf-8");
const schema = buildSchema(schemaSource);

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toPascalCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Unwrap NonNull and List wrappers to get the named type.
 */
function unwrapType(type: GraphQLOutputType): GraphQLNamedType {
  return getNamedType(type)!;
}

/**
 * Returns true if the outermost named type is a Connection type
 * (ends with "Connection" and has `edges` + `pageInfo` fields).
 */
function isConnectionType(type: GraphQLNamedType): boolean {
  if (!isObjectType(type)) return false;
  const name = type.name;
  if (!name.endsWith("Connection")) return false;
  const fields = type.getFields();
  return "edges" in fields && "pageInfo" in fields;
}

/**
 * Returns true if the field's type is a list (possibly non-null wrapped).
 */
function isList(type: GraphQLOutputType): boolean {
  if (isNonNullType(type)) return isList(type.ofType);
  return isListType(type);
}

/**
 * Check if a type is a "value object" — an object type whose fields are all
 * scalars/enums (no id, no nested objects, no connections). These get inlined
 * in selections rather than treated as relations. Examples: DateTime, PageInfo.
 */
function isValueObjectType(type: GraphQLNamedType): boolean {
  if (!isObjectType(type)) return false;
  const fields = type.getFields();
  return Object.values(fields).every((f) => {
    const named = unwrapType(f.type);
    return isScalarType(named) || isEnumType(named);
  });
}

/**
 * Check if a type is a "simple" type that can be selected directly in a fragment:
 * scalar, enum, or a value object (all-scalar object type like DateTime).
 */
function isSimpleType(type: GraphQLNamedType): boolean {
  return isScalarType(type) || isEnumType(type) || isValueObjectType(type);
}

/**
 * Returns the node type from a Connection type's edges.
 */
function getConnectionNodeType(connType: GraphQLObjectType): GraphQLNamedType | null {
  const edgesField = connType.getFields().edges;
  if (!edgesField) return null;
  const edgeType = unwrapType(edgesField.type);
  if (!isObjectType(edgeType)) return null;
  const nodeField = edgeType.getFields().node;
  if (!nodeField) return null;
  return unwrapType(nodeField.type);
}

// ─── Queryable Types ─────────────────────────────────────────────────────────

/**
 * Build a set of type names that can be fetched by a root query with an ID arg.
 * Used to decide whether an object relation can be lazy-loaded ({ id } only)
 * or must be inlined (full data) in fragments.
 */
const queryableTypes = new Set<string>();

const queryType = schema.getQueryType();
if (queryType) {
  for (const field of Object.values(queryType.getFields())) {
    const { namedType, isList: fieldIsList } = (() => {
      let isNonNull = false;
      let fieldIsList = false;
      let current = field.type as GraphQLOutputType;
      if (isNonNullType(current)) {
        isNonNull = true;
        current = current.ofType;
      }
      if (isListType(current)) {
        fieldIsList = true;
      }
      return { namedType: unwrapType(field.type), isNonNull, isList: fieldIsList };
    })();
    if (fieldIsList) continue;
    if (!isObjectType(namedType)) continue;
    if (isConnectionType(namedType)) continue;
    const idArg = field.args.find(
      (a) => isNonNullType(a.type) && getNamedType(a.type)?.name === "ID",
    );
    if (idArg) {
      queryableTypes.add(namedType.name);
    }
  }
}

// ─── Fragment Generation ──────────────────────────────────────────────────────

/**
 * Collect all type names that need fragments. These are object types referenced
 * as return types of queries, mutation output fields, or connection node types.
 */
const fragmentTypes = new Map<string, GraphQLObjectType>();

function registerFragmentType(type: GraphQLNamedType): void {
  if (!isObjectType(type)) return;
  if (type.name.startsWith("__")) return;
  if (isValueObjectType(type)) return; // Value objects get inlined, not their own fragments
  if (type.name === "MutationError") return;
  if (type.name === "MutationFieldError") return;
  if (fragmentTypes.has(type.name)) return;

  // Only register types that have at least one selectable scalar/enum/DateTime field
  const fields = type.getFields();
  const hasSelectableField = Object.values(fields).some((f) => {
    if (f.deprecationReason != null) return false;
    const named = unwrapType(f.type);
    return isSimpleType(named);
  });

  if (hasSelectableField) {
    fragmentTypes.set(type.name, type);
  }
}

/**
 * Register a union/interface member type for fragment generation.
 * Unlike registerFragmentType, this does NOT skip value-object-like types,
 * because all union members need their own fragment and model class.
 */
function registerUnionMemberType(type: GraphQLNamedType): void {
  if (!isObjectType(type)) return;
  if (type.name.startsWith("__")) return;
  if (type.name === "MutationError") return;
  if (type.name === "MutationFieldError") return;
  if (fragmentTypes.has(type.name)) return;

  const fields = type.getFields();
  const hasSelectableField = Object.values(fields).some((f) => {
    if (f.deprecationReason != null) return false;
    const named = unwrapType(f.type);
    return isSimpleType(named);
  });

  if (hasSelectableField) {
    fragmentTypes.set(type.name, type);
  }
}

/**
 * Register all member types of a union or interface as fragment types.
 */
function registerUnionMembers(type: GraphQLNamedType): void {
  if (isUnionType(type)) {
    for (const member of type.getTypes()) {
      registerUnionMemberType(member);
    }
  } else if (isInterfaceType(type)) {
    for (const impl of schema.getPossibleTypes(type)) {
      registerUnionMemberType(impl);
    }
  }
}

// Scan query return types
if (queryType) {
  for (const field of Object.values(queryType.getFields())) {
    const namedType = unwrapType(field.type);
    if (isConnectionType(namedType)) {
      const nodeType = getConnectionNodeType(namedType as GraphQLObjectType);
      if (nodeType) registerFragmentType(nodeType);
    } else if (isObjectType(namedType)) {
      registerFragmentType(namedType);
    }
  }
}

// Scan mutation output types – register types referenced by fields in the output
const mutationType = schema.getMutationType();
if (mutationType) {
  for (const field of Object.values(mutationType.getFields())) {
    const outputType = unwrapType(field.type);
    if (isObjectType(outputType)) {
      // Look at each field of the output type
      for (const outputField of Object.values(outputType.getFields())) {
        const fieldType = unwrapType(outputField.type);
        if (outputField.name === "error") continue; // skip error field, handled inline
        if (isObjectType(fieldType)) {
          registerFragmentType(fieldType);
        }
        // For lists of object types in mutation outputs
        if (isList(outputField.type)) {
          if (isObjectType(fieldType)) {
            registerFragmentType(fieldType);
          }
        }
      }
    }
  }
}

// Scan registered fragment types for union/interface fields and register their members.
// Repeat until stable since newly registered members may themselves have union fields.
let previousSize = 0;
while (fragmentTypes.size !== previousSize) {
  previousSize = fragmentTypes.size;
  for (const type of [...fragmentTypes.values()]) {
    for (const field of Object.values(type.getFields())) {
      const namedType = unwrapType(field.type);
      registerUnionMembers(namedType);
    }
  }
  // Also scan union/interface members for nested union fields
  for (const type of [...fragmentTypes.values()]) {
    for (const field of Object.values(type.getFields())) {
      const namedType = unwrapType(field.type);
      if (isUnionType(namedType) || isInterfaceType(namedType)) {
        registerUnionMembers(namedType);
      }
    }
  }
}

/**
 * Generate an inline sub-selection for a value object type (all scalar/enum fields).
 * E.g. DateTime → "iso8601", a hypothetical type with {a: String, b: Int} → "a\nb"
 */
function expandValueObject(type: GraphQLObjectType, indent: string): string {
  const fields = type.getFields();
  return Object.keys(fields)
    .map((f) => `${indent}${f}`)
    .join("\n");
}

/**
 * Find fields that have the same name but different type signatures across
 * union/interface members. These need GraphQL aliases to avoid validation
 * errors (the "SameResponseShape" rule rejects e.g. String! vs String).
 */
function findConflictingUnionFields(members: readonly GraphQLObjectType[]): Set<string> {
  const fieldTypeSigs = new Map<string, string>();
  const conflicting = new Set<string>();
  for (const member of members) {
    for (const [fieldName, field] of Object.entries(member.getFields())) {
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
 * Generate an inline selection of all fields for a type, matching what its
 * standalone fragment would contain: scalars, enums, value objects, object
 * relations ({ id } for queryable, full inline for non-queryable), and
 * nested union/interface fields.
 *
 * When `conflictingFields` is provided, fields in that set are aliased as
 * `{TypeName}_{fieldName}: fieldName` to avoid GraphQL SameResponseShape errors.
 */
function generateMemberInlineSelection(
  type: GraphQLObjectType,
  indent: string,
  conflictingFields?: Set<string>,
): string {
  const fields = type.getFields();
  const lines: string[] = [];

  for (const [fieldName, field] of Object.entries(fields)) {
    if (field.deprecationReason != null) continue;
    const namedType = unwrapType(field.type);
    const hasRequiredArgs = field.args.some((a) => isNonNullType(a.type));
    if (hasRequiredArgs) continue;

    // Alias conflicting fields to avoid GraphQL SameResponseShape validation errors
    const needsAlias = conflictingFields?.has(fieldName) ?? false;
    const alias = needsAlias
      ? `${type.name.charAt(0).toLowerCase()}${type.name.slice(1)}${fieldName.charAt(0).toUpperCase()}${fieldName.slice(1)}`
      : undefined;
    const fieldRef = alias ? `${alias}: ${fieldName}` : fieldName;

    if (isScalarType(namedType) || isEnumType(namedType)) {
      lines.push(`${indent}${fieldRef}`);
    } else if (isValueObjectType(namedType)) {
      lines.push(
        `${indent}${fieldRef} {\n${expandValueObject(namedType as GraphQLObjectType, `${indent}  `)}\n${indent}}`,
      );
    } else if (isObjectType(namedType) && !isConnectionType(namedType) && !isList(field.type)) {
      const relatedFields = namedType.getFields();
      if (queryableTypes.has(namedType.name) && "id" in relatedFields) {
        lines.push(`${indent}${fieldRef} {\n${indent}  id\n${indent}}`);
      } else if (fragmentTypes.has(namedType.name)) {
        lines.push(`${indent}${fieldRef} {\n${indent}  ...${namedType.name}Fields\n${indent}}`);
      } else {
        const nested = generateInlineScalarSelection(namedType, `${indent}  `);
        if (nested) {
          lines.push(`${indent}${fieldRef} {\n${nested}\n${indent}}`);
        }
      }
    } else if (isUnionType(namedType) || isInterfaceType(namedType)) {
      // Nested union/interface — recursively generate
      lines.push(generateUnionSelectionInner(fieldRef, namedType, indent));
    }
  }

  return lines.join("\n");
}

/**
 * Generate a union/interface selection with __typename and inline fields for each member.
 * Uses inline fields (not fragment spreads) to avoid GraphQL validation conflicts when
 * different union members have fields with the same name but different types.
 */
function generateUnionSelectionInner(
  fieldName: string,
  type: GraphQLNamedType,
  indent: string,
): string {
  const members = isUnionType(type)
    ? type.getTypes()
    : isInterfaceType(type)
      ? schema.getPossibleTypes(type)
      : [];

  // Detect fields with same name but different types across members
  const conflictingFields = findConflictingUnionFields(members);

  const lines: string[] = [];
  lines.push(`${indent}${fieldName} {`);
  lines.push(`${indent}  __typename`);
  for (const member of members) {
    // Skip members where all fields are deprecated
    if (!Object.values(member.getFields()).some((f) => f.deprecationReason == null)) continue;
    const memberFields = generateMemberInlineSelection(member, `${indent}    `, conflictingFields);
    if (memberFields) {
      lines.push(`${indent}  ... on ${member.name} {\n${memberFields}\n${indent}  }`);
    } else {
      // Member has no selectable fields, just include the type condition
      lines.push(`${indent}  ... on ${member.name} {\n${indent}    __typename\n${indent}  }`);
    }
  }
  lines.push(`${indent}}`);
  return lines.join("\n");
}

function generateUnionSelection(fieldName: string, type: GraphQLNamedType, indent: string): string {
  return generateUnionSelectionInner(fieldName, type, indent);
}

/**
 * Generate a fragment for an object type.
 * Includes: scalars, enums, value objects (expanded inline), object relations ({ id }),
 *           union/interface fields (with __typename + inline fragment spreads).
 * Skips: connections, lists of objects.
 *
 * For object relations: if the related type is queryable (has a root query), include { id }
 * for lazy loading. If not queryable, inline the full scalar data or use a fragment spread.
 */
function generateFragment(type: GraphQLObjectType): string {
  const fields = type.getFields();
  const selections: string[] = [];

  for (const [fieldName, field] of Object.entries(fields)) {
    if (field.deprecationReason != null) continue;
    const namedType = unwrapType(field.type);
    const hasRequiredArgs = field.args.some((a) => isNonNullType(a.type));
    if (hasRequiredArgs) continue;

    if (isScalarType(namedType) || isEnumType(namedType)) {
      selections.push(`  ${fieldName}`);
    } else if (isValueObjectType(namedType)) {
      selections.push(
        `  ${fieldName} {\n${expandValueObject(namedType as GraphQLObjectType, "    ")}\n  }`,
      );
    } else if (isObjectType(namedType) && !isConnectionType(namedType) && !isList(field.type)) {
      // Object relation: include { id } for lazy loading if queryable,
      // or inline full data if not queryable
      const relatedFields = namedType.getFields();
      if (queryableTypes.has(namedType.name) && "id" in relatedFields) {
        selections.push(`  ${fieldName} {\n    id\n  }`);
      } else if (fragmentTypes.has(namedType.name)) {
        selections.push(`  ${fieldName} {\n    ...${namedType.name}Fields\n  }`);
      } else {
        const inlineFields = generateInlineScalarSelection(namedType, "    ");
        if (inlineFields) {
          selections.push(`  ${fieldName} {\n${inlineFields}\n  }`);
        }
      }
    } else if ((isUnionType(namedType) || isInterfaceType(namedType)) && !isList(field.type)) {
      // Union/interface field (single)
      selections.push(generateUnionSelection(fieldName, namedType, "  "));
    } else if ((isUnionType(namedType) || isInterfaceType(namedType)) && isList(field.type)) {
      // List of union/interface
      selections.push(generateUnionSelection(fieldName, namedType, "  "));
    }
    // Skip connections and lists of plain objects
  }

  return `fragment ${type.name}Fields on ${type.name} {\n${selections.join("\n")}\n}`;
}

// ─── Query Operation Generation ─────────────────────────────────────────────

function formatArgType(arg: GraphQLArgument): string {
  return arg.type.toString();
}

function generateVariableDeclarations(args: readonly GraphQLArgument[]): string {
  if (args.length === 0) return "";
  const parts = args.map((arg) => `$${arg.name}: ${formatArgType(arg)}`);
  return `(${parts.join(", ")})`;
}

function generateArgumentPassthrough(args: readonly GraphQLArgument[]): string {
  if (args.length === 0) return "";
  const parts = args.map((arg) => `${arg.name}: $${arg.name}`);
  return `(${parts.join(", ")})`;
}

/**
 * Generate an inline selection of scalar/enum/DateTime fields for a type,
 * without using a fragment. When deep=true, also expands object fields
 * that have fragments or scalar fields (one level deeper).
 */
function generateInlineScalarSelection(
  type: GraphQLObjectType,
  indent: string,
  deep = false,
): string {
  const fields = type.getFields();
  const lines: string[] = [];

  for (const [fieldName, field] of Object.entries(fields)) {
    if (field.deprecationReason != null) continue;
    const namedType = unwrapType(field.type);
    if (isScalarType(namedType) || isEnumType(namedType)) {
      lines.push(`${indent}${fieldName}`);
    } else if (isValueObjectType(namedType)) {
      lines.push(
        `${indent}${fieldName} {\n${expandValueObject(namedType as GraphQLObjectType, `${indent}  `)}\n${indent}}`,
      );
    } else if (deep && isObjectType(namedType)) {
      // Expand nested objects: use fragment if available, else inline scalars
      if (fragmentTypes.has(namedType.name)) {
        lines.push(`${indent}${fieldName} {\n${indent}  ...${namedType.name}Fields\n${indent}}`);
      } else {
        const nested = generateInlineScalarSelection(namedType, `${indent}  `, false);
        if (nested) {
          lines.push(`${indent}${fieldName} {\n${nested}\n${indent}}`);
        }
      }
    }
  }

  return lines.join("\n");
}

/**
 * Generate the selection set body for a type that we want to expand fully
 * (used for mutation output fields that are object types without fragments).
 */
function generateSelectionForType(
  type: GraphQLNamedType,
  indent: string,
  useFragment: boolean,
): string {
  if (isScalarType(type) || isEnumType(type)) {
    return ""; // Will be selected by field name directly
  }

  if (isValueObjectType(type)) {
    return ` {\n${expandValueObject(type as GraphQLObjectType, `${indent}  `)}\n${indent}}`;
  }

  if (isObjectType(type) && useFragment && fragmentTypes.has(type.name)) {
    return ` {\n${indent}  ...${type.name}Fields\n${indent}}`;
  }

  if (isObjectType(type)) {
    const inlineFields = generateInlineScalarSelection(type, `${indent}  `);
    if (inlineFields) {
      return ` {\n${inlineFields}\n${indent}}`;
    }
    return "";
  }

  if (isUnionType(type)) {
    const members = type.getTypes();
    const conflicting = findConflictingUnionFields(members);
    const lines: string[] = [];
    lines.push(` {`);
    lines.push(`${indent}  __typename`);
    for (const member of members) {
      if (!Object.values(member.getFields()).some((f) => f.deprecationReason == null)) continue;
      if (conflicting.size > 0) {
        // Use inline fields with aliases to avoid SameResponseShape validation errors
        const memberFields = generateMemberInlineSelection(member, `${indent}    `, conflicting);
        if (memberFields) {
          lines.push(`${indent}  ... on ${member.name} {\n${memberFields}\n${indent}  }`);
        } else {
          lines.push(`${indent}  ... on ${member.name} {\n${indent}    __typename\n${indent}  }`);
        }
      } else if (fragmentTypes.has(member.name)) {
        lines.push(
          `${indent}  ... on ${member.name} {\n${indent}    ...${member.name}Fields\n${indent}  }`,
        );
      } else {
        const inlineFields = generateInlineScalarSelection(member, `${indent}    `);
        if (inlineFields) {
          lines.push(`${indent}  ... on ${member.name} {\n${inlineFields}\n${indent}  }`);
        }
      }
    }
    lines.push(`${indent}}`);
    return lines.join("\n");
  }

  if (isInterfaceType(type)) {
    const implementations = schema.getPossibleTypes(type);
    const conflicting = findConflictingUnionFields(implementations);
    const lines: string[] = [];
    lines.push(` {`);
    lines.push(`${indent}  __typename`);
    for (const impl of implementations) {
      if (!Object.values(impl.getFields()).some((f) => f.deprecationReason == null)) continue;
      if (conflicting.size > 0) {
        const memberFields = generateMemberInlineSelection(impl, `${indent}    `, conflicting);
        if (memberFields) {
          lines.push(`${indent}  ... on ${impl.name} {\n${memberFields}\n${indent}  }`);
        } else {
          lines.push(`${indent}  ... on ${impl.name} {\n${indent}    __typename\n${indent}  }`);
        }
      } else if (fragmentTypes.has(impl.name)) {
        lines.push(
          `${indent}  ... on ${impl.name} {\n${indent}    ...${impl.name}Fields\n${indent}  }`,
        );
      } else {
        const inlineFields = generateInlineScalarSelection(impl, `${indent}    `);
        if (inlineFields) {
          lines.push(`${indent}  ... on ${impl.name} {\n${inlineFields}\n${indent}  }`);
        }
      }
    }
    lines.push(`${indent}}`);
    return lines.join("\n");
  }

  return "";
}

function generateConnectionSelection(
  connType: GraphQLObjectType,
  nodeType: GraphQLNamedType,
  indent: string,
): string {
  const hasFragment = isObjectType(nodeType) && fragmentTypes.has(nodeType.name);
  const connFields = connType.getFields();
  const hasTotalCount = "totalCount" in connFields;

  const nodeIndent = `${indent}    `;
  let nodeBody: string;
  if (isScalarType(nodeType) || isEnumType(nodeType)) {
    // node is a scalar, no sub-selection needed
    nodeBody = "";
  } else if (hasFragment) {
    nodeBody = ` {\n${nodeIndent}...${nodeType.name}Fields\n${indent}  }`;
  } else if (isUnionType(nodeType) || isInterfaceType(nodeType)) {
    const sel = generateSelectionForType(nodeType, `${indent}  `, true);
    nodeBody = sel;
  } else if (isObjectType(nodeType)) {
    const inlineFields = generateInlineScalarSelection(nodeType, nodeIndent, true);
    nodeBody = inlineFields ? ` {\n${inlineFields}\n${indent}  }` : "";
  } else {
    nodeBody = "";
  }

  const lines: string[] = [];
  lines.push(`${indent}edges {`);
  lines.push(`${indent}  node${nodeBody}`);
  lines.push(`${indent}  cursor`);
  lines.push(`${indent}}`);
  lines.push(`${indent}pageInfo {`);
  lines.push(`${indent}  hasNextPage`);
  lines.push(`${indent}  hasPreviousPage`);
  lines.push(`${indent}  startCursor`);
  lines.push(`${indent}  endCursor`);
  lines.push(`${indent}}`);
  if (hasTotalCount) {
    lines.push(`${indent}totalCount`);
  }

  return lines.join("\n");
}

function generateQueryOperation(fieldName: string, field: GraphQLField<unknown, unknown>): string {
  const opName = toPascalCase(fieldName);
  const args = field.args;
  const returnType = unwrapType(field.type);
  const varDecl = generateVariableDeclarations(args);
  const argPass = generateArgumentPassthrough(args);

  // Connection type
  if (isConnectionType(returnType)) {
    const connType = returnType as GraphQLObjectType;
    const nodeType = getConnectionNodeType(connType);
    if (!nodeType) {
      return `# Skipped ${fieldName}: could not determine node type`;
    }
    const connSelection = generateConnectionSelection(connType, nodeType, "    ");
    return `query ${opName}${varDecl} {\n  ${fieldName}${argPass} {\n${connSelection}\n  }\n}`;
  }

  // List type (not connection)
  if (isList(field.type)) {
    if (isObjectType(returnType) && fragmentTypes.has(returnType.name)) {
      return `query ${opName}${varDecl} {\n  ${fieldName}${argPass} {\n    ...${returnType.name}Fields\n  }\n}`;
    }
    if (isObjectType(returnType)) {
      const inlineFields = generateInlineScalarSelection(returnType, "    ", true);
      if (inlineFields) {
        return `query ${opName}${varDecl} {\n  ${fieldName}${argPass} {\n${inlineFields}\n  }\n}`;
      }
    }
    if (isUnionType(returnType) || isInterfaceType(returnType)) {
      const sel = generateSelectionForType(returnType, "  ", true);
      return `query ${opName}${varDecl} {\n  ${fieldName}${argPass}${sel}\n}`;
    }
    // List of scalars/enums
    return `query ${opName}${varDecl} {\n  ${fieldName}${argPass}\n}`;
  }

  // Scalar/enum return
  if (isScalarType(returnType) || isEnumType(returnType)) {
    return `query ${opName}${varDecl} {\n  ${fieldName}${argPass}\n}`;
  }

  // Value object return (e.g. DateTime)
  if (isValueObjectType(returnType)) {
    const expanded = expandValueObject(returnType as GraphQLObjectType, "    ");
    return `query ${opName}${varDecl} {\n  ${fieldName}${argPass} {\n${expanded}\n  }\n}`;
  }

  // Object type with fragment
  if (isObjectType(returnType) && fragmentTypes.has(returnType.name)) {
    return `query ${opName}${varDecl} {\n  ${fieldName}${argPass} {\n    ...${returnType.name}Fields\n  }\n}`;
  }

  // Object type without fragment - inline scalar fields (deep to handle wrapper types)
  if (isObjectType(returnType)) {
    const inlineFields = generateInlineScalarSelection(returnType, "    ", true);
    if (inlineFields) {
      return `query ${opName}${varDecl} {\n  ${fieldName}${argPass} {\n${inlineFields}\n  }\n}`;
    }
    return `# Skipped ${fieldName}: no selectable fields`;
  }

  // Union type
  if (isUnionType(returnType) || isInterfaceType(returnType)) {
    const sel = generateSelectionForType(returnType, "  ", true);
    return `query ${opName}${varDecl} {\n  ${fieldName}${argPass}${sel}\n}`;
  }

  return `# Skipped ${fieldName}: unhandled return type`;
}

// ─── Mutation Operation Generation ──────────────────────────────────────────

const MUTATION_ERROR_SELECTION = `error {
      message
      type
      code
      fields {
        field
        message
        type
      }
    }`;

function generateMutationOutputSelection(outputType: GraphQLObjectType): string {
  const fields = outputType.getFields();
  const lines: string[] = [];

  for (const [fieldName, field] of Object.entries(fields)) {
    if (field.deprecationReason != null) continue;
    if (fieldName === "error") {
      lines.push(`    ${MUTATION_ERROR_SELECTION}`);
      continue;
    }

    const namedType = unwrapType(field.type);

    if (isScalarType(namedType) || isEnumType(namedType)) {
      lines.push(`    ${fieldName}`);
      continue;
    }

    if (isValueObjectType(namedType)) {
      lines.push(
        `    ${fieldName} {\n${expandValueObject(namedType as GraphQLObjectType, "      ")}\n    }`,
      );
      continue;
    }

    if (isObjectType(namedType) && fragmentTypes.has(namedType.name)) {
      lines.push(`    ${fieldName} {\n      ...${namedType.name}Fields\n    }`);
      continue;
    }

    if (isObjectType(namedType)) {
      // Inline scalar selection for objects without fragments
      const inlineFields = generateInlineScalarSelection(namedType, "      ");
      if (inlineFields) {
        lines.push(`    ${fieldName} {\n${inlineFields}\n    }`);
      }
      continue;
    }

    if (isUnionType(namedType)) {
      const sel = generateSelectionForType(namedType, "    ", true);
      lines.push(`    ${fieldName}${sel}`);
      continue;
    }

    if (isInterfaceType(namedType)) {
      const sel = generateSelectionForType(namedType, "    ", true);
      lines.push(`    ${fieldName}${sel}`);
      continue;
    }

    // List types
    if (isList(field.type)) {
      if (isObjectType(namedType) && fragmentTypes.has(namedType.name)) {
        lines.push(`    ${fieldName} {\n      ...${namedType.name}Fields\n    }`);
      } else if (isObjectType(namedType)) {
        const inlineFields = generateInlineScalarSelection(namedType, "      ");
        if (inlineFields) {
          lines.push(`    ${fieldName} {\n${inlineFields}\n    }`);
        }
      } else if (isScalarType(namedType) || isEnumType(namedType)) {
        lines.push(`    ${fieldName}`);
      }
    }
  }

  return lines.join("\n");
}

function generateMutationOperation(
  fieldName: string,
  field: GraphQLField<unknown, unknown>,
): string {
  const opName = toPascalCase(fieldName);
  const args = field.args;
  const returnType = unwrapType(field.type);

  const varDecl = generateVariableDeclarations(args);
  const argPass = generateArgumentPassthrough(args);

  if (!isObjectType(returnType)) {
    // Unusual case - mutation returning non-object
    if (isScalarType(returnType) || isEnumType(returnType)) {
      return `mutation ${opName}${varDecl} {\n  ${fieldName}${argPass}\n}`;
    }
    return `# Skipped mutation ${fieldName}: unhandled return type`;
  }

  const outputSelection = generateMutationOutputSelection(returnType);
  return `mutation ${opName}${varDecl} {\n  ${fieldName}${argPass} {\n${outputSelection}\n  }\n}`;
}

// ─── Generate Output ─────────────────────────────────────────────────────────

const outputParts: string[] = [];

outputParts.push("# This file is auto-generated by generate-documents.ts");
outputParts.push("# Do not edit manually.\n");

// Generate fragments
const sortedFragmentTypes = [...fragmentTypes.values()].sort((a, b) =>
  a.name.localeCompare(b.name),
);

for (const type of sortedFragmentTypes) {
  outputParts.push(generateFragment(type));
  outputParts.push("");
}

// Generate queries
if (queryType) {
  outputParts.push(
    "# ─── Queries ─────────────────────────────────────────────────────────────────\n",
  );
  for (const [fieldName, field] of Object.entries(queryType.getFields())) {
    outputParts.push(generateQueryOperation(fieldName, field));
    outputParts.push("");
  }
}

// Generate mutations
if (mutationType) {
  outputParts.push(
    "# ─── Mutations ───────────────────────────────────────────────────────────────\n",
  );
  for (const [fieldName, field] of Object.entries(mutationType.getFields())) {
    outputParts.push(generateMutationOperation(fieldName, field));
    outputParts.push("");
  }
}

// ─── Sub-connection Queries ──────────────────────────────────────────────────
// For connection fields on queryable model types, generate nested queries that
// fetch the connection through the parent's root query.
// E.g., Thread.timelineEntries → query ThreadTimelineEntries { thread(...) { timelineEntries(...) { ... } } }

if (queryType) {
  const subConnectionOps: string[] = [];

  for (const [typeName, type] of fragmentTypes) {
    if (!queryableTypes.has(typeName)) continue;

    // Find the root query for this type (e.g., thread(threadId: ID!): Thread)
    let rootField: { fieldName: string; idArg: GraphQLArgument } | null = null;
    for (const [fieldName, field] of Object.entries(queryType.getFields())) {
      const rt = unwrapType(field.type);
      if (rt.name !== typeName) continue;
      if (isList(field.type)) continue;
      if (isConnectionType(rt)) continue;
      const idArg = field.args.find(
        (a) => isNonNullType(a.type) && getNamedType(a.type)?.name === "ID",
      );
      if (idArg) {
        rootField = { fieldName, idArg };
        break;
      }
    }
    if (!rootField) continue;

    // Check the type has an id field (needed for model self-reference)
    if (!("id" in type.getFields())) continue;

    for (const [fieldName, field] of Object.entries(type.getFields())) {
      const namedType = unwrapType(field.type);
      if (!isObjectType(namedType) || !isConnectionType(namedType)) continue;

      // Skip fields with required args
      const hasRequiredArgs = field.args.some((a) => isNonNullType(a.type));
      if (hasRequiredArgs) continue;

      const nodeType = getConnectionNodeType(namedType as GraphQLObjectType);
      if (!nodeType) continue;

      // Only generate if the node type has a fragment (will become a model)
      if (
        isObjectType(nodeType) &&
        !fragmentTypes.has(nodeType.name) &&
        !isValueObjectType(nodeType)
      )
        continue;

      const opName = `${typeName}${toPascalCase(fieldName)}`;

      // Build variable declarations: parent's ID arg (required) + field's own args
      const varParts: string[] = [`$${rootField.idArg.name}: ID!`];
      for (const arg of field.args) {
        varParts.push(`$${arg.name}: ${formatArgType(arg)}`);
      }
      const varDecl = `(${varParts.join(", ")})`;

      const rootArgPass = `(${rootField.idArg.name}: $${rootField.idArg.name})`;
      const fieldArgPass =
        field.args.length > 0
          ? `(${field.args.map((a) => `${a.name}: $${a.name}`).join(", ")})`
          : "";

      const connSelection = generateConnectionSelection(
        namedType as GraphQLObjectType,
        nodeType,
        "      ",
      );

      subConnectionOps.push(
        `query ${opName}${varDecl} {\n  ${rootField.fieldName}${rootArgPass} {\n    ${fieldName}${fieldArgPass} {\n${connSelection}\n    }\n  }\n}`,
      );
    }
  }

  if (subConnectionOps.length > 0) {
    outputParts.push(
      "# ─── Sub-connection Queries ──────────────────────────────────────────────────\n",
    );
    for (const op of subConnectionOps) {
      outputParts.push(op);
      outputParts.push("");
    }
  }
}

const output = outputParts.join("\n");
writeFileSync(outputPath, output, "utf-8");

console.log(`Generated ${outputPath}`);
console.log(`  Fragments: ${sortedFragmentTypes.length}`);
console.log(`  Queries: ${queryType ? Object.keys(queryType.getFields()).length : 0}`);
console.log(`  Mutations: ${mutationType ? Object.keys(mutationType.getFields()).length : 0}`);
