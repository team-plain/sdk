import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

function read(file: string): string {
  return readFileSync(new URL(`../${file}`, import.meta.url), "utf-8");
}

function names(source: string, pattern: RegExp): Set<string> {
  return new Set([...source.matchAll(pattern)].map((match) => match[1]!));
}

// `export type *` loses any schema type that shares its name with a document const, so each clash
// needs its own alias in the add plugin's content in codegen.yml.
describe("generated exports", () => {
  it("aliases every schema type hidden by a same-named document", () => {
    const documents = read("_generated_documents.ts");
    const types = names(read("_generated_types.ts"), /^export type (\w+)\b/gm);
    const consts = names(documents, /^export const (\w+)\b/gm);
    const aliases = names(documents, /^export type (\w+) = Types\.\1;$/gm);

    const clashes = [...consts].filter((name) => types.has(name));
    expect(clashes.filter((name) => !aliases.has(name))).toEqual([]);
  });
});
