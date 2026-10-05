---
"@team-plain/graphql": major
---

Generated documents are now compact query text instead of GraphQL ASTs, and the package is marked side-effect free. It now bundles to 120 kB gzipped, down from 229 kB. Bundlers drop documents an app never uses (`sideEffects: false`). 

Each exported `…Document` and `…FragmentDoc` is now a `TypedDocumentString`: a `String` that carries the result and variables types. It still reads as a `DocumentNode`, parsed on first access, so passing documents to Apollo Client, urql or `print()` keeps working, as do `TypedDocumentNode` annotations.

`request()` now takes any `GraphQLDocument`: a generated document, a document from `parse()`, or query text as a plain string.

`typeof document === "string"` is false for a generated document; use `document.toString()` for its query text.
