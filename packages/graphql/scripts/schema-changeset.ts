// The bump follows what SDK users see. The document generator skips deprecated fields and fields
// with a non-null argument, even a defaulted one, so deprecating an object field or giving it such
// an argument removes it from the generated result types, which the schema diff alone calls
// non-breaking.
import type { NewChangeset } from "@changesets/types";
import { type Change, ChangeType, CriticalityLevel, diff } from "@graphql-inspector/core";
import {
  buildSchema,
  type GraphQLSchema,
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

  const breaking = changes.filter((c) => c.criticality.level === CriticalityLevel.Breaking);
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
    ["New methods", of(ChangeType.FieldAdded, true)],
    ["Deprecated methods, still available", of(ChangeType.FieldDeprecationAdded, true)],
  ] as const;
  const summary = [
    "Regenerate against the current API schema.",
    ...sections
      .filter(([, list]) => list.length > 0)
      .map(([title, list]) => `**${title}**\n\n${list.map((c) => `- ${c.message}`).join("\n")}`),
  ].join("\n\n");

  // ui-components publishes an exact peer dependency on this package, and Changesets only bumps
  // peer dependents by a patch.
  const releases: NewChangeset["releases"] = [{ name: "@team-plain/graphql", type: bump }];
  if (bump !== "patch") releases.push({ name: "@team-plain/ui-components", type: "major" });

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
