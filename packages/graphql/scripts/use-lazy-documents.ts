// Runs after codegen writes _generated_documents.ts. In string mode codegen inlines a
// TypedDocumentString class, a String subclass holding only query text. Each document becomes a
// lazyDocument(...) instead: a plain DocumentNode object typed as a TypedDocumentNode, as the
// earlier inlined ASTs were, that keeps its query text to send as is.
import { readFileSync, writeFileSync } from "node:fs";

const path = process.argv[2];
if (!path) {
  throw new Error("Usage: node scripts/use-lazy-documents.ts <generated file>");
}

function replaceAll(
  source: string,
  pattern: RegExp,
  replacement: string,
  what: string,
  expected: "one" | "some",
): string {
  const global = new RegExp(pattern.source, `${pattern.flags}g`);
  const matches = source.match(global)?.length ?? 0;
  if (expected === "one" ? matches !== 1 : matches === 0) {
    throw new Error(
      `Expected ${expected} ${what} in ${path}, found ${matches}; did codegen's output change?`,
    );
  }
  return source.replace(global, replacement);
}

let source = readFileSync(path, "utf8");
source = replaceAll(
  source,
  /^import \{ DocumentTypeDecoration \} from '@graphql-typed-document-node\/core';$/m,
  "import type { TypedDocumentNode } from '@graphql-typed-document-node/core';\nimport { lazyDocument } from './lazy-document.js';",
  "DocumentTypeDecoration import",
  "one",
);
source = replaceAll(
  source,
  /^export class TypedDocumentString<TResult, TVariables>\n[\s\S]*?\n\}\n/m,
  "",
  "TypedDocumentString class",
  "one",
);
source = replaceAll(source, /new TypedDocumentString\(`/, "lazyDocument(`", "document", "some");
// Codegen's fragment metadata (the fragment's name) isn't read by anything.
source = replaceAll(source, /`, \{"fragmentName":"\w+"\}\)/, "`)", "fragment metadata", "some");
source = replaceAll(
  source,
  / as unknown as TypedDocumentString</,
  " as unknown as TypedDocumentNode<",
  "document type",
  "some",
);
if (source.includes("TypedDocumentString")) {
  throw new Error(
    `TypedDocumentString is still referenced in ${path}; did codegen's output change?`,
  );
}
writeFileSync(path, source);
