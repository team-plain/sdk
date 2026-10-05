// Runs after codegen writes _generated_documents.ts. Codegen always inlines its own
// TypedDocumentString class, which is only query text; the SDK's own class in
// src/typed-document-string.ts also reads as a DocumentNode, so code written against the earlier
// AST documents keeps working.
import { readFileSync, writeFileSync } from "node:fs";

const path = process.argv[2];
if (!path) {
  throw new Error("Usage: node scripts/import-typed-document-string.ts <generated file>");
}

function replaceOnce(source: string, pattern: RegExp, replacement: string, what: string): string {
  const matches = source.match(new RegExp(pattern.source, `${pattern.flags}g`))?.length ?? 0;
  if (matches !== 1) {
    throw new Error(
      `Expected one ${what} in ${path}, found ${matches}; did codegen's output change?`,
    );
  }
  return source.replace(pattern, replacement);
}

let source = readFileSync(path, "utf8");
source = replaceOnce(
  source,
  /^import \{ DocumentTypeDecoration \} from '@graphql-typed-document-node\/core';$/m,
  "import { TypedDocumentString } from './typed-document-string.js';",
  "DocumentTypeDecoration import",
);
source = replaceOnce(
  source,
  /^export class TypedDocumentString<TResult, TVariables>\n[\s\S]*?\n\}\n/m,
  "export { TypedDocumentString };\n",
  "TypedDocumentString class",
);
writeFileSync(path, source);
