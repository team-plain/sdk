---
"@team-plain/graphql": major
---

Generated documents are now compact query text instead of GraphQL ASTs, and the package is marked side-effect free. It now bundles to 113 kB gzipped, down from 229 kB. Bundlers drop documents an app never uses (`sideEffects: false`). 

Each exported `…Document` and `…FragmentDoc` is now a `TypedDocumentString`: a `String` that carries the result and variables types.

`request()` now takes any `GraphQLDocument`: a generated document, a document from `parse()`, or query text as a plain string.

If you passed the generated documents to another GraphQL client or read them as an AST, use `document.toString()` for the query text, or `parse(document.toString())` for an AST.
