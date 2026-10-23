import { describe, expect, it } from "vitest";
import { schemaChangeset } from "../../scripts/schema-changeset.js";

const base = `
  type Query { thread(id: ID!): Thread }
  type Mutation { closeThread(id: ID!): Thread }
  type Thread { id: ID! title: String status: Status }
  enum Status { OPEN DONE }
`;

const deprecate = (sdl: string, field: string) =>
  sdl.replace(field, `${field} @deprecated(reason: "Gone.")`);

describe("schemaChangeset", () => {
  it("returns null when nothing changed", async () => {
    expect(await schemaChangeset(base, base)).toBeNull();
  });

  it("is a patch, without ui-components, when only descriptions change", async () => {
    const result = await schemaChangeset(
      base,
      base.replace("type Thread {", '"Hi." type Thread {'),
    );
    expect(result?.releases).toEqual([{ name: "@team-plain/graphql", type: "patch" }]);
  });

  it("is a minor for additions, without ui-components", async () => {
    const result = await schemaChangeset(base, base.replace("OPEN DONE", "OPEN DONE SNOOZED"));
    expect(result?.releases).toEqual([{ name: "@team-plain/graphql", type: "minor" }]);
    expect(result?.summary).toContain("**New values in returned enums**");
  });

  it("leaves values of new enums and of enums only sent out of the enum list", async () => {
    const old = `${base.replace("closeThread(id: ID!)", "closeThread(id: ID!, by: Sort)")} enum Sort { NAME }`;
    const next = `${old.replace("NAME }", "NAME AGE }").replace("status: Status", "status: Status kind: Kind")} enum Kind { A B }`;
    const result = await schemaChangeset(old, next);
    expect(result?.summary).not.toContain("**New values in returned enums**");
  });

  it("adds a ui-components major to a major, since it leaves the peer range", async () => {
    const result = await schemaChangeset(base, base.replace("title: String ", ""));
    expect(result?.releases).toEqual([
      { name: "@team-plain/graphql", type: "major" },
      { name: "@team-plain/ui-components", type: "major" },
    ]);
  });

  it("is a minor when a value leaves an enum the API only returns", async () => {
    const result = await schemaChangeset(base, base.replace("OPEN DONE", "OPEN"));
    expect(result?.releases[0].type).toBe("minor");
    expect(result?.summary).toContain("**Enum values the API no longer returns**");
    expect(result?.summary).not.toContain("**Breaking**");
  });

  it("is a major when a value leaves an enum a method takes", async () => {
    const old = base.replace("closeThread(id: ID!)", "closeThread(id: ID!, to: Status)");
    const result = await schemaChangeset(old, old.replace("OPEN DONE", "OPEN"));
    expect(result?.releases[0].type).toBe("major");
    expect(result?.summary).toContain("**Breaking**");
  });

  it("is a major when a value leaves an enum an input type holds", async () => {
    const old = `${base} input ThreadFilter { status: [Status!] }`;
    const result = await schemaChangeset(old, old.replace("OPEN DONE", "OPEN"));
    expect(result?.releases[0].type).toBe("major");
  });

  it("lists new methods", async () => {
    const result = await schemaChangeset(base, base.replace("type Query {", "type Query { me: ID"));
    expect(result?.summary).toContain("**New methods**");
    expect(result?.summary).toContain("'me'");
  });

  it("is a major when the schema breaks", async () => {
    const result = await schemaChangeset(base, base.replace("title: String ", ""));
    expect(result?.releases[0].type).toBe("major");
    expect(result?.summary).toContain("**Breaking**");
  });

  it("is a patch when an object field is deprecated, since it stays in the result types", async () => {
    const result = await schemaChangeset(base, deprecate(base, "title: String"));
    expect(result?.releases).toEqual([{ name: "@team-plain/graphql", type: "patch" }]);
    expect(result?.summary).toContain("**Deprecated fields, still available**");
    expect(result?.summary).toContain("'Thread.title' is deprecated");
    expect(result?.summary).not.toContain("**No longer in the generated result types**");
  });

  it("is a major when a deprecated object field is removed", async () => {
    const old = deprecate(base, "title: String");
    const result = await schemaChangeset(
      old,
      old.replace(/title: String @deprecated\(reason: "Gone."\) /, ""),
    );
    expect(result?.releases[0].type).toBe("major");
    expect(result?.summary).toContain("**Breaking**");
  });

  it("is a patch when an object field is undeprecated", async () => {
    const result = await schemaChangeset(deprecate(base, "title: String"), base);
    expect(result?.releases[0].type).toBe("patch");
    expect(result?.summary).not.toContain("**Back in the generated result types**");
  });

  it("is a major when an object field gains a defaulted non-null argument", async () => {
    const result = await schemaChangeset(
      base,
      base.replace("title: String", "title(n: Int! = 1): String"),
    );
    expect(result?.releases[0].type).toBe("major");
    expect(result?.summary).toContain("**No longer in the generated result types**");
  });

  it("is a minor when an object field gains a nullable argument", async () => {
    const result = await schemaChangeset(
      base,
      base.replace("title: String", "title(n: Int): String"),
    );
    expect(result?.releases[0].type).toBe("minor");
  });

  it("is a minor when a method gains a defaulted non-null argument", async () => {
    const next = base.replace("closeThread(id: ID!)", "closeThread(id: ID!, n: Int! = 1)");
    expect((await schemaChangeset(base, next))?.releases[0].type).toBe("minor");
  });

  it("is a major when a deprecated object field gains a required argument", async () => {
    const old = deprecate(base, "title: String");
    const next = old.replace("title: String", "title(n: Int! = 1): String");
    expect((await schemaChangeset(old, next))?.releases[0].type).toBe("major");
  });

  it("is a minor when a new field arrives already deprecated", async () => {
    const next = base.replace("status: Status", 'status: Status old: ID @deprecated(reason: "x")');
    expect((await schemaChangeset(base, next))?.releases[0].type).toBe("minor");
  });

  it("is a patch when a method is deprecated, since it stays available", async () => {
    const result = await schemaChangeset(base, deprecate(base, "closeThread(id: ID!): Thread"));
    expect(result?.releases[0].type).toBe("patch");
    expect(result?.summary).toContain("**Deprecated methods, still available**");
  });
});
