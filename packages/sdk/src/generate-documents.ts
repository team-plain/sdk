import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildSchema,
  getNamedType,
  isEnumType,
  isInterfaceType,
  isListType,
  isNonNullType,
  isObjectType,
  isScalarType,
  isUnionType,
  type GraphQLField,
  type GraphQLNamedType,
  type GraphQLOutputType,
  type GraphQLArgument,
  type GraphQLObjectType,
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
    const named = unwrapType(f.type);
    return isSimpleType(named);
  });

  if (hasSelectableField) {
    fragmentTypes.set(type.name, type);
  }
}

// Scan query return types
const queryType = schema.getQueryType();
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
 * Generate a fragment for an object type.
 * Includes: scalars, enums, value objects (expanded inline), object relations ({ id }).
 * Skips: connections, lists of objects, unions, interfaces.
 */
function generateFragment(type: GraphQLObjectType): string {
  const fields = type.getFields();
  const selections: string[] = [];

  for (const [fieldName, field] of Object.entries(fields)) {
    const namedType = unwrapType(field.type);

    if (isScalarType(namedType) || isEnumType(namedType)) {
      selections.push(`  ${fieldName}`);
    } else if (isValueObjectType(namedType)) {
      selections.push(
        `  ${fieldName} {\n${expandValueObject(namedType as GraphQLObjectType, "    ")}\n  }`,
      );
    } else if (isObjectType(namedType) && !isConnectionType(namedType) && !isList(field.type)) {
      // Object relation: include { id } for lazy loading (if the type has an id field)
      // Skip fields with required arguments (can't include them without args)
      const hasRequiredArgs = field.args.some((a) => isNonNullType(a.type));
      if (hasRequiredArgs) continue;
      const relatedFields = namedType.getFields();
      if ("id" in relatedFields) {
        selections.push(`  ${fieldName} {\n    id\n  }`);
      }
    }
    // Skip connections and lists of objects
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
    const lines: string[] = [];
    lines.push(` {`);
    lines.push(`${indent}  __typename`);
    for (const member of members) {
      if (fragmentTypes.has(member.name)) {
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
    const lines: string[] = [];
    lines.push(` {`);
    lines.push(`${indent}  __typename`);
    for (const impl of implementations) {
      if (fragmentTypes.has(impl.name)) {
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

const output = outputParts.join("\n");
writeFileSync(outputPath, output, "utf-8");

console.log(`Generated ${outputPath}`);
console.log(`  Fragments: ${sortedFragmentTypes.length}`);
console.log(`  Queries: ${queryType ? Object.keys(queryType.getFields()).length : 0}`);
console.log(`  Mutations: ${mutationType ? Object.keys(mutationType.getFields()).length : 0}`);
