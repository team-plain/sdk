// Runs after codegen writes _generated_documents.ts, where each document is a gql`...` template: its
// own definition followed by the fragment documents it uses, interpolated as ${SomeFragmentDoc}.
// Each one becomes a gql("...", SomeFragmentDoc, ...) call:
//
// - The definition loses the indentation and line breaks codegen pretty-prints, about 40% of the
//   text, which every request would upload and every process would keep in memory.
// - Bundlers honour /*#__PURE__*/ on a call but not on a tagged template, so only the call form lets
//   them drop documents an app never uses.
// - Codegen interpolates fragments into operations only. A fragment document that spreads another
//   fragment also gets it, so it can be used on its own, as Apollo Client's readFragment does.
import { readFileSync, writeFileSync } from "node:fs";
import { stripIgnoredCharacters } from "graphql";

const path = process.argv[2];
if (!path) {
  throw new Error("Usage: node scripts/compact-documents.ts <generated file>");
}

const source = readFileSync(path, "utf8");
const declaredAt = new Map(
  Array.from(source.matchAll(/^export const (\w+) = \/\*#__PURE__\*\/ gql`/gm), (m) => [
    m[1],
    m.index,
  ]),
);
let count = 0;
const compacted = source.replace(
  /^(export const \w+ = \/\*#__PURE__\*\/ )gql`([^`]*)`/gm,
  (_match, start: string, template: string, offset: number) => {
    // split() with a capture group alternates: text, interpolation, text, interpolation, …
    const [definition = "", ...rest] = template.split(/\$\{(\w+)\}/);
    if (definition.includes("${")) {
      throw new Error(
        `Unexpected interpolation in a generated document:\n${definition.slice(0, 200)}`,
      );
    }
    const fragments = new Set<string>();
    rest.forEach((part, index) => {
      if (index % 2 === 0) {
        fragments.add(part);
      } else if (part.trim() !== "") {
        throw new Error(
          `Unexpected text between fragments in a generated document:\n${part.slice(0, 200)}`,
        );
      }
    });
    const text = stripIgnoredCharacters(definition);
    if (text.startsWith("fragment ")) {
      for (const spread of text.matchAll(/\.\.\.(?!on\b)([_A-Za-z]\w*)/g)) {
        fragments.add(`${spread[1]}FragmentDoc`);
      }
    }
    for (const name of fragments) {
      const at = declaredAt.get(name);
      if (at === undefined) {
        throw new Error(
          `${name} is used in ${path} but never declared; did codegen's naming change?`,
        );
      }
      // A const read before its declaration throws when the module loads.
      if (at >= offset) {
        throw new Error(`${name} is declared after a document that uses it in ${path}`);
      }
    }
    count++;
    return `${start}gql(${JSON.stringify(text)}${Array.from(fragments, (name) => `, ${name}`).join("")})`;
  },
);

if (count === 0) {
  throw new Error(`No documents found in ${path}; did codegen's output format change?`);
}

writeFileSync(path, compacted);
