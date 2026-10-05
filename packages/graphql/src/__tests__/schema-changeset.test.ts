import { describe, expect, it } from "vitest";
import { schemaChangeset } from "../../scripts/schema-changeset.js";

const base = `
  type Query { thread(id: ID!): Thread }
  type Mutation { closeThread(id: ID!): Thread }
  type Thread { id: ID! title: String status: Status }
  enum Status { OPEN DONE }
`;

const bump = (next: string) => schemaChangeset(base, next)?.bump;

describe("schemaChangeset", () => {
  it("returns null when nothing changed", () => {
    expect(schemaChangeset(base, base)).toBeNull();
  });

  it("is a patch when only descriptions change", () => {
    const next = base.replace("type Thread {", '"A conversation." type Thread {');
    expect(bump(next)).toBe("patch");
    expect(schemaChangeset(base, next)?.markdown).not.toContain("ui-components");
  });

  it("is a minor for additions, and bumps ui-components to major alongside", () => {
    const result = schemaChangeset(
      base,
      base.replace("status: Status", "status: Status ref: String"),
    );
    expect(result?.bump).toBe("minor");
    expect(result?.markdown).toContain('"@team-plain/ui-components": major');
    expect(result?.markdown).toContain("1 new field");
  });

  it("is a minor for a new enum value", () => {
    expect(bump(base.replace("OPEN DONE", "OPEN DONE SNOOZED"))).toBe("minor");
  });

  it("lists new root fields as methods", () => {
    const next = base.replace("type Query {", "type Query { threads: [Thread!]!");
    expect(schemaChangeset(base, next)?.markdown).toContain("- `client.query.threads`");
  });

  it("is a major when the schema breaks", () => {
    const result = schemaChangeset(base, base.replace("title: String ", ""));
    expect(result?.bump).toBe("major");
    expect(result?.markdown).toContain("**Breaking schema changes**");
    expect(result?.markdown).toContain("Thread.title was removed");
  });

  it("is a major when an object field is deprecated, since it leaves the result types", () => {
    const result = schemaChangeset(
      base,
      base.replace("title: String", 'title: String @deprecated(reason: "Use name.")'),
    );
    expect(result?.bump).toBe("major");
    expect(result?.markdown).toContain("- `Thread.title`");
  });

  it("is not a major when a new field arrives already deprecated", () => {
    const next = base.replace(
      "status: Status",
      'status: Status old: String @deprecated(reason: "x")',
    );
    expect(bump(next)).toBe("minor");
  });

  it("is a minor when a field stops being deprecated", () => {
    const deprecated = base.replace("title: String", 'title: String @deprecated(reason: "x")');
    const result = schemaChangeset(deprecated, base);
    expect(result?.bump).toBe("minor");
    expect(result?.markdown).toContain("back in the generated result types");
  });

  it("notes a deprecated method, which stays available", () => {
    const next = base.replace(
      "closeThread(id: ID!): Thread",
      'closeThread(id: ID!): Thread @deprecated(reason: "Use updateThread.")',
    );
    const result = schemaChangeset(base, next);
    expect(result?.bump).toBe("patch");
    expect(result?.markdown).toContain("- `client.mutation.closeThread`: Use updateThread.");
  });
});
