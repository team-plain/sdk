import { readFileSync } from "node:fs";
import { buildSchema, NoUnusedFragmentsRule, parse, specifiedRules, validate } from "graphql";
import { describe, expect, it } from "vitest";

// The codegen config skips OverlappingFieldsCanBeMergedRule, but the API runs every standard
// rule, so a clash that slips past codegen would fail the whole request in production. Unused
// fragments are fine: the SDK sends each operation with only the fragments it spreads.
const rules = specifiedRules.filter((rule) => rule !== NoUnusedFragmentsRule);

describe("generated documents", () => {
  const schema = buildSchema(readFileSync(new URL("../schema.graphql", import.meta.url), "utf8"));
  const documents = readFileSync(
    new URL("../_generated_documents.graphql", import.meta.url),
    "utf8",
  );

  it("pass the validation rules the API runs", () => {
    const errors = validate(schema, parse(documents), rules, { maxErrors: Infinity });
    expect(errors.map((e) => e.message)).toEqual([]);
  });

  it("alias a deprecated union field on its own, leaving the current field's name alone", () => {
    expect(documents).toContain("threadStatusDetailLinearUpdatedLinearIssueId: linearIssueId");
    expect(documents).not.toContain("threadStatusDetailThreadLinkUpdatedLinearIssueId");
  });
});
