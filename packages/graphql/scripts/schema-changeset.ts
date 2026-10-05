// The bump follows what SDK users see. The document generator skips deprecated fields, so
// deprecating an object field removes it from the generated result types, which the schema diff
// alone calls non-breaking.
import type { NewChangeset } from "@changesets/types";
import { type Change, ChangeType, CriticalityLevel, diff } from "@graphql-inspector/core";
import { buildSchema } from "graphql";

type Bump = "major" | "minor" | "patch";

export async function schemaChangeset(
  oldSdl: string,
  newSdl: string,
): Promise<Omit<NewChangeset, "id"> | null> {
  const changes = await diff(buildSchema(oldSdl), buildSchema(newSdl));
  if (changes.length === 0) return null;

  const isMethod = (c: Change) =>
    /^(Query|Mutation)\.\w+$/.test(c.path?.replace(/\.@deprecated$/, "") ?? "");
  const of = (type: ChangeType, method: boolean) =>
    changes.filter((c) => c.type === type && isMethod(c) === method);

  const breaking = changes.filter((c) => c.criticality.level === CriticalityLevel.Breaking);
  // A field that arrives already deprecated was never in the result types.
  const added = new Set(changes.filter((c) => c.type === ChangeType.FieldAdded).map((c) => c.path));
  const dropped = of(ChangeType.FieldDeprecationAdded, false).filter(
    (c) => !added.has(c.path?.replace(/\.@deprecated$/, "")),
  );
  const docsOnly = changes.every(
    (c) => /DESCRIPTION|DEPRECATION|DIRECTIVE_USAGE/.test(c.type) && !dropped.includes(c),
  );
  const bump: Bump =
    breaking.length > 0 || dropped.length > 0 ? "major" : docsOnly ? "patch" : "minor";

  const sections = [
    ["Breaking", breaking],
    ["No longer in the generated result types, because deprecated", dropped],
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
