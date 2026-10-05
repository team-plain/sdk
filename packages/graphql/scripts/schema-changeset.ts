// Turns the difference between two schemas into a changeset for the regenerated SDK. The bump
// follows what SDK users see, which is not always what the schema diff calls breaking: the
// document generator skips deprecated fields, so deprecating an object field removes it from the
// generated result types even though the API still serves it.
import {
  BreakingChangeType,
  buildSchema,
  DangerousChangeType,
  findSchemaChanges,
  type GraphQLSchema,
  isInterfaceType,
  isObjectType,
} from "graphql";

export type Bump = "major" | "minor" | "patch";

export interface SchemaChangeset {
  bump: Bump;
  markdown: string;
}

const BREAKING = new Set<string>(Object.values(BreakingChangeType));
const DANGEROUS = new Set<string>(Object.values(DangerousChangeType));

export function schemaChangeset(oldSdl: string, newSdl: string): SchemaChangeset | null {
  const oldSchema = buildSchema(oldSdl);
  const newSchema = buildSchema(newSdl);
  const changes = findSchemaChanges(oldSchema, newSchema);

  const breaking = changes.filter((c) => BREAKING.has(c.type)).map((c) => c.description);
  const dangerous = changes.filter((c) => DANGEROUS.has(c.type));
  const safe = changes.filter((c) => !BREAKING.has(c.type) && !DANGEROUS.has(c.type));
  const onlyDescriptions = safe.every((c) => c.type === "DESCRIPTION_CHANGED");

  // Only fields the SDK used to return: one that arrives already deprecated was never in it.
  const oldFields = objectFields(oldSchema);
  const droppedFields = [...objectFields(newSchema)]
    .filter(([name, deprecated]) => deprecated && oldFields.get(name) === false)
    .map(([name]) => name);
  const restoredFields = [...objectFields(newSchema)]
    .filter(([name, deprecated]) => !deprecated && oldFields.get(name) === true)
    .map(([name]) => name);

  const methods = (schema: GraphQLSchema, kind: "query" | "mutation") => {
    const root = kind === "query" ? schema.getQueryType() : schema.getMutationType();
    return new Map(Object.values(root?.getFields() ?? {}).map((f) => [f.name, f]));
  };
  const newMethods: string[] = [];
  const deprecatedMethods: string[] = [];
  for (const kind of ["query", "mutation"] as const) {
    const before = methods(oldSchema, kind);
    for (const [name, field] of methods(newSchema, kind)) {
      if (!before.has(name)) newMethods.push(`\`client.${kind}.${name}\``);
      else if (field.deprecationReason && !before.get(name)?.deprecationReason) {
        deprecatedMethods.push(`\`client.${kind}.${name}\`: ${field.deprecationReason}`);
      }
    }
  }

  if (
    changes.length === 0 &&
    droppedFields.length === 0 &&
    restoredFields.length === 0 &&
    deprecatedMethods.length === 0
  ) {
    return null;
  }

  const bump: Bump =
    breaking.length > 0 || droppedFields.length > 0
      ? "major"
      : dangerous.length > 0 || !onlyDescriptions || restoredFields.length > 0
        ? "minor"
        : "patch";

  const sections: string[] = ["Regenerate against the current API schema."];
  if (breaking.length > 0) {
    sections.push(`**Breaking schema changes**\n\n${list(breaking)}`);
  }
  if (droppedFields.length > 0) {
    sections.push(
      `**Deprecated, so no longer in the generated result types**\n\n${list(droppedFields.map((f) => `\`${f}\``))}`,
    );
  }
  if (restoredFields.length > 0) {
    sections.push(
      `**No longer deprecated, so back in the generated result types**\n\n${list(restoredFields.map((f) => `\`${f}\``))}`,
    );
  }
  if (newMethods.length > 0) sections.push(`**New methods**\n\n${list(newMethods)}`);
  if (deprecatedMethods.length > 0) {
    sections.push(`**Deprecated methods**, still available\n\n${list(deprecatedMethods)}`);
  }
  const counts = countByType(changes.filter((c) => !BREAKING.has(c.type)));
  if (counts.length > 0) sections.push(`**Other changes**: ${counts.join(", ")}.`);

  // ui-components publishes an exact peer dependency on this package, and Changesets doesn't bump
  // peer dependents past a patch, so a release that needs a new minor or major here would ship a
  // ui-components patch that only accepts it.
  const packages = [`"@team-plain/graphql": ${bump}`];
  if (bump !== "patch") packages.push(`"@team-plain/ui-components": major`);

  return { bump, markdown: `---\n${packages.join("\n")}\n---\n\n${sections.join("\n\n")}\n` };
}

/** Every non-root object and interface field, mapped to whether it is deprecated. */
function objectFields(schema: GraphQLSchema): Map<string, boolean> {
  const roots = new Set(
    [schema.getQueryType(), schema.getMutationType(), schema.getSubscriptionType()].filter(Boolean),
  );
  const out = new Map<string, boolean>();
  for (const type of Object.values(schema.getTypeMap())) {
    if (type.name.startsWith("__") || roots.has(type as never)) continue;
    if (!isObjectType(type) && !isInterfaceType(type)) continue;
    for (const field of Object.values(type.getFields())) {
      out.set(`${type.name}.${field.name}`, field.deprecationReason != null);
    }
  }
  return out;
}

const LABELS: Record<string, [string, string]> = {
  TYPE_ADDED: ["new type", "new types"],
  FIELD_ADDED: ["new field", "new fields"],
  VALUE_ADDED_TO_ENUM: ["new enum value", "new enum values"],
  TYPE_ADDED_TO_UNION: ["new union member", "new union members"],
  OPTIONAL_INPUT_FIELD_ADDED: ["new optional input field", "new optional input fields"],
  OPTIONAL_ARG_ADDED: ["new optional argument", "new optional arguments"],
  DESCRIPTION_CHANGED: ["description change", "description changes"],
  FIELD_CHANGED_KIND_SAFE: ["compatible field type change", "compatible field type changes"],
  ARG_CHANGED_KIND_SAFE: ["compatible argument type change", "compatible argument type changes"],
};

function countByType(changes: Array<{ type: string }>): string[] {
  const counts = new Map<string, number>();
  for (const { type } of changes) counts.set(type, (counts.get(type) ?? 0) + 1);
  return [...counts]
    .sort(([, a], [, b]) => b - a)
    .map(([type, n]) => {
      const [one, many] = LABELS[type] ?? [type.toLowerCase().replaceAll("_", " "), ""];
      return `${n} ${n === 1 || !many ? one : many}`;
    });
}

function list(items: string[]): string {
  return items.map((item) => `- ${item}`).join("\n");
}
