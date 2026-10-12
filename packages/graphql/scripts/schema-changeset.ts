// The bump follows what SDK users see. The document generator skips deprecated fields and fields
// with a non-null argument, even a defaulted one, so deprecating an object field or giving it such
// an argument removes it from the generated result types, which the schema diff alone calls
// non-breaking. The reverse also holds for an enum the API only returns: no request can send a
// removed value, so dropping it only flags comparisons against a value that no longer arrives.
import type { NewChangeset } from "@changesets/types";
import { type Change, ChangeType, CriticalityLevel, diff } from "@graphql-inspector/core";
import {
  buildSchema,
  type GraphQLSchema,
  getNamedType,
  isInputObjectType,
  isInterfaceType,
  isNonNullType,
  isObjectType,
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
  const of = (type: ChangeType, method: boolean) =>
    changes.filter((c) => c.type === type && isMethod(c) === method);
  // Comparing both schemas, rather than trusting the change type, keeps a field that was already
  // skipped, or arrives skipped, out of the lists.
  const moves = (types: ChangeType[], from: GraphQLSchema, to: GraphQLSchema) =>
    changes.filter(
      (c) =>
        types.includes(c.type as ChangeType) &&
        !isMethod(c) &&
        isSelected(from, c) &&
        !isSelected(to, c),
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
  const dropped = moves(
    [ChangeType.FieldDeprecationAdded, ChangeType.FieldArgumentAdded],
    oldSchema,
    newSchema,
  );
  const restored = moves([ChangeType.FieldDeprecationRemoved], newSchema, oldSchema);
  const docsOnly = changes.every(
    (c) =>
      /DESCRIPTION|DEPRECATION|DIRECTIVE_USAGE/.test(c.type) &&
      !dropped.includes(c) &&
      !restored.includes(c),
  );
  const bump: Bump =
    breaking.length > 0 || dropped.length > 0 ? "major" : docsOnly ? "patch" : "minor";

  const sections = [
    ["Breaking", breaking],
    ["No longer in the generated result types", dropped],
    ["Back in the generated result types", restored],
    ["Enum values the API no longer returns", unreturned],
    ["New values in returned enums", added],
    ["New methods", of(ChangeType.FieldAdded, true)],
    ["Deprecated methods, still available", of(ChangeType.FieldDeprecationAdded, true)],
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
  return (
    field !== undefined &&
    field.deprecationReason == null &&
    !field.args.some((a) => isNonNullType(a.type))
  );
}

function usesEnum(schema: GraphQLSchema, change: Change, as: "input" | "output"): boolean {
  const enumName = change.path?.split(".")[0];
  const isEnum = (t: Parameters<typeof getNamedType>[0]) => getNamedType(t).name === enumName;
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
