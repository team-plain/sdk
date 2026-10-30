import { readFileSync } from "node:fs";
import {
  buildSchema,
  isAbstractType,
  NoUnusedFragmentsRule,
  parse,
  specifiedRules,
  TypeInfo,
  validate,
  visit,
  visitWithTypeInfo,
} from "graphql";
import { describe, expect, it } from "vitest";
import { unionFieldKeys } from "../../scripts/schema-changeset.js";

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

  // schema-changeset.ts copies the generator's alias rule to spot renames, so the two must agree.
  it("give union member fields the result keys the schema changeset expects", () => {
    const expected = unionFieldKeys(schema);
    const actual = new Map<string, string>();
    const typeInfo = new TypeInfo(schema);
    const members: { abstract: string; member: string }[] = [];
    visit(
      parse(documents),
      visitWithTypeInfo(typeInfo, {
        InlineFragment: {
          enter(node) {
            const abstract = typeInfo.getParentType();
            const member = node.typeCondition?.name.value ?? "";
            if (isAbstractType(abstract)) members.push({ abstract: abstract.name, member });
          },
          leave(node) {
            if (isAbstractType(typeInfo.getParentType()) && node.typeCondition) members.pop();
          },
        },
        Field(node) {
          const scope = members.at(-1);
          if (!scope || typeInfo.getParentType()?.name !== scope.member) return;
          if (node.name.value.startsWith("__")) return;
          const path = `${scope.abstract}.${scope.member}.${node.name.value}`;
          actual.set(path, node.alias?.value ?? node.name.value);
        },
      }),
    );
    expect(actual.size).toBeGreaterThan(0);
    const mismatches = [...actual].filter(([path, key]) => expected.get(path) !== key);
    expect(mismatches).toEqual([]);
  });
});
