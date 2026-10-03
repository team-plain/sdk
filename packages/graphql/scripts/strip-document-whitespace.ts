// Runs after codegen writes _generated_documents.ts. Codegen pretty-prints each document's query
// text; about 40% of it is indentation and line breaks that every request would upload and every
// process would keep in memory.
import { readFileSync, writeFileSync } from "node:fs";
import { stripIgnoredCharacters } from "graphql";

const path = process.argv[2];
if (!path) {
  throw new Error("Usage: node scripts/strip-document-whitespace.ts <generated file>");
}

const source = readFileSync(path, "utf8");
let count = 0;
const stripped = source.replace(/new TypedDocumentString\(`([^`]*)`/g, (_match, text: string) => {
  // Query text can't contain a backtick, but `${` would be interpolated rather than sent.
  if (text.includes("${")) {
    throw new Error(`Unexpected interpolation in a generated document:\n${text.slice(0, 200)}`);
  }
  count++;
  return `new TypedDocumentString(\`${stripIgnoredCharacters(text)}\``;
});

if (count === 0) {
  throw new Error(`No documents found in ${path}; did codegen's output format change?`);
}

writeFileSync(path, stripped);
