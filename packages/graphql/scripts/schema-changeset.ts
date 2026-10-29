// The bump follows what SDK users see. The document generator keeps deprecated fields, so a
// deprecation stays a patch until the API removes the field. It skips fields with a non-null
// argument, even a defaulted one, so giving an object field such an argument removes it from the
// generated result types, which the schema diff alone calls non-breaking. The reverse also holds for an enum the API only returns: no request can send a
// removed value, so dropping it only flags comparisons against a value that no longer arrives.
import type { NewChangeset } from "@changesets/types";
import {
  type Change,
  ChangeType,
  CriticalityLevel,
  diff,
  type TypeOfChangeType,
} from "@graphql-inspector/core";
import {
  buildSchema,
  type GraphQLField,
  type GraphQLSchema,
  type GraphQLType,
  getNamedType,
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isListType,
  isNonNullType,
  isObjectType,
  isScalarType,
  isUnionType,
} from "graphql";

type Bump = "major" | "minor" | "patch";

export async function schemaChangeset(
  oldSdl: string,
  newSdl: string,
): Promise<Omit<NewChangeset, "id"> | null> {
  const oldSchema = buildSchema(oldSdl);
  const newSchema = buildSchema(newSdl);
  const changes = await diff(oldSchema, newSchema);
  if (changes.length === 0) return null;

  const isMethod = (c: Change) => /^(Query|Mutation)\./.test(c.path ?? "");
  const of = (type: TypeOfChangeType, method: boolean) =>
    changes.filter((c) => c.type === type && isMethod(c) === method);
  // Comparing both schemas, rather than trusting the change type, keeps a field that was already
  // skipped, or arrives skipped, out of the lists.
  const moves = (types: TypeOfChangeType[], from: GraphQLSchema, to: GraphQLSchema) =>
    changes.filter(
      (c) => types.includes(c.type) && !isMethod(c) && isSelected(from, c) && !isSelected(to, c),
    );

  const unreturned = changes.filter(
    (c) => c.type === ChangeType.EnumValueRemoved && !usesEnum(oldSchema, c, "input"),
  );
  // Only a value added to an enum the API already returned can reach an exhaustive switch.
  const added = changes.filter(
    (c) =>
      c.type === ChangeType.EnumValueAdded &&
      oldSchema.getType(c.path?.split(".")[0] ?? "") !== undefined &&
      usesEnum(newSchema, c, "output"),
  );
  const breaking = changes.filter(
    (c) => c.criticality.level === CriticalityLevel.Breaking && !unreturned.includes(c),
  );
  const dropped = moves([ChangeType.FieldArgumentAdded], oldSchema, newSchema);
  const restored = moves([ChangeType.FieldArgumentRemoved], newSchema, oldSchema);
  const renamed = renamedUnionFields(oldSchema, newSchema);
  const docsOnly = changes.every(
    (c) =>
      /DESCRIPTION|DEPRECATION|DIRECTIVE_USAGE/.test(c.type) &&
      !dropped.includes(c) &&
      !restored.includes(c),
  );
  const bump: Bump =
    breaking.length > 0 || dropped.length > 0 || renamed.length > 0
      ? "major"
      : docsOnly
        ? "patch"
        : "minor";

  const sections = [
    ["Breaking", breaking],
    ["No longer in the generated result types", dropped],
    ["Renamed in the generated result types", renamed],
    ["Back in the generated result types", restored],
    ["Enum values the API no longer returns", unreturned],
    ["New values in returned enums", added],
    ["New methods", of(ChangeType.FieldAdded, true)],
    ["Deprecated methods, still available", of(ChangeType.FieldDeprecationAdded, true)],
    ["Deprecated fields, still available", of(ChangeType.FieldDeprecationAdded, false)],
  ] as const;
  const summary = [
    "Regenerate against the current API schema.",
    ...sections
      .filter(([, list]) => list.length > 0)
      .map(([title, list]) => `**${title}**\n\n${list.map((c) => `- ${c.message}`).join("\n")}`),
  ].join("\n\n");

  // ui-components peer-depends on a caret range of this package, which a major leaves. Changesets
  // only bumps peer dependents by a patch, which would narrow the range in a patch release.
  const releases: NewChangeset["releases"] = [{ name: "@team-plain/graphql", type: bump }];
  if (bump === "major") releases.push({ name: "@team-plain/ui-components", type: "major" });

  return { summary, releases };
}

function isSelected(schema: GraphQLSchema, change: Change): boolean {
  const [typeName, fieldName] = change.path?.split(".") ?? [];
  const type = schema.getType(typeName ?? "");
  if (!isObjectType(type) && !isInterfaceType(type)) return false;
  const field = type.getFields()[fieldName ?? ""];
  return field !== undefined && !field.args.some((a) => isNonNullType(a.type));
}

function usesEnum(schema: GraphQLSchema, change: Change, as: "input" | "output"): boolean {
  const enumName = change.path?.split(".")[0];
  const isEnum = (t: GraphQLType) => getNamedType(t).name === enumName;
  return Object.values(schema.getTypeMap()).some((type) => {
    if (isInputObjectType(type)) {
      return as === "input" && Object.values(type.getFields()).some((f) => isEnum(f.type));
    }
    if (isObjectType(type) || isInterfaceType(type)) {
      return Object.values(type.getFields()).some((f) =>
        as === "input" ? f.args.some((a) => isEnum(a.type)) : isEnum(f.type),
      );
    }
    return false;
  });
}

// A deprecation that starts or ends a clash between union members renames the result key of a
// field that did not itself change, which the schema diff alone calls a patch.
function renamedUnionFields(
  oldSchema: GraphQLSchema,
  newSchema: GraphQLSchema,
): { message: string }[] {
  const before = unionFieldKeys(oldSchema);
  const after = unionFieldKeys(newSchema);
  return [...before].flatMap(([path, was]) => {
    const now = after.get(path);
    if (now === undefined || now === was) return [];
    const [abstract, member, field] = path.split(".");
    return [
      {
        message: `Field '${member}.${field}' in '${abstract}' is now returned as '${now}' instead of '${was}'`,
      },
    ];
  });
}

/**
 * The result key the document generator gives each selected field of each union or interface
 * member, by `Abstract.Member.field`. Mirrors findConflictingUnionFields, needsUnionAlias and
 * generateMemberInlineSelection in src/generate-documents.ts: clashes count every field, but
 * fields the generator never selects have no key.
 */
export function unionFieldKeys(schema: GraphQLSchema): Map<string, string> {
  const keys = new Map<string, string>();
  for (const type of Object.values(schema.getTypeMap())) {
    if (!isUnionType(type) && !isInterfaceType(type)) continue;
    const members = schema.getPossibleTypes(type);
    const clashes = (includeDeprecated: boolean) => {
      const signatures = new Map<string, string>();
      const clashing = new Set<string>();
      for (const member of members) {
        for (const [name, field] of Object.entries(member.getFields())) {
          if (!includeDeprecated && field.deprecationReason != null) continue;
          const signature = field.type.toString();
          const seen = signatures.get(name);
          if (seen === undefined) signatures.set(name, signature);
          else if (seen !== signature) clashing.add(name);
        }
      }
      return clashing;
    };
    const all = clashes(true);
    const current = clashes(false);
    for (const member of members) {
      for (const [name, field] of Object.entries(member.getFields())) {
        if (!isSelectedMemberField(field)) continue;
        const aliased = all.has(name) && (field.deprecationReason != null || current.has(name));
        const alias = `${member.name.charAt(0).toLowerCase()}${member.name.slice(1)}${name.charAt(0).toUpperCase()}${name.slice(1)}`;
        keys.set(`${type.name}.${member.name}.${name}`, aliased ? alias : name);
      }
    }
  }
  return keys;
}

// The generator skips fields with a non-null argument, and connections and lists of objects that
// are not value objects (objects whose fields are all scalars or enums).
function isSelectedMemberField(field: GraphQLField<unknown, unknown>): boolean {
  if (field.args.some((a) => isNonNullType(a.type))) return false;
  const named = getNamedType(field.type);
  if (!isObjectType(named)) return true;
  const fields = Object.values(named.getFields());
  const isValueObject = fields.every((f) => {
    const t = getNamedType(f.type);
    return isScalarType(t) || isEnumType(t);
  });
  const isConnection =
    named.name.endsWith("Connection") &&
    "edges" in named.getFields() &&
    "pageInfo" in named.getFields();
  const isList = isListType(isNonNullType(field.type) ? field.type.ofType : field.type);
  return isValueObject || !(isList || isConnection);
}
