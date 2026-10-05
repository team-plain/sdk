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

  it("is a minor for additions, with a ui-components major", async () => {
    const result = await schemaChangeset(base, base.replace("OPEN DONE", "OPEN DONE SNOOZED"));
    expect(result?.releases).toEqual([
      { name: "@team-plain/graphql", type: "minor" },
      { name: "@team-plain/ui-components", type: "major" },
    ]);
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

  it("is a major when an object field is deprecated, since it leaves the result types", async () => {
    const result = await schemaChangeset(base, deprecate(base, "title: String"));
    expect(result?.releases[0].type).toBe("major");
    expect(result?.summary).toContain("'Thread.title' is deprecated");
  });

  it("is a minor when an object field is undeprecated, since it rejoins the result types", async () => {
    const result = await schemaChangeset(deprecate(base, "title: String"), base);
    expect(result?.releases[0].type).toBe("minor");
    expect(result?.summary).toContain("**Back in the generated result types**");
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

  it("is a minor when an already deprecated object field gains a required argument", async () => {
    const old = deprecate(base, "title: String");
    const next = old.replace("title: String", "title(n: Int! = 1): String");
    expect((await schemaChangeset(old, next))?.releases[0].type).toBe("minor");
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
