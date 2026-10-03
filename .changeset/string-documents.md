---
"@team-plain/graphql": major
---

Generated documents are now compact query text instead of GraphQL ASTs, and the package is marked side-effect free. It is 9.8 MB unpacked, down from 68 MB, and bundles to 113 kB gzipped, down from 229 kB. Bundlers drop documents an app never uses. Requests no longer print a document back to text, and send less of it.

Each exported `…Document` and `…FragmentDoc` is now a `TypedDocumentString`: a `String` that carries the result and variables types. `client.query.*`, `client.mutation.*` and `PlainGraphQLClient.request()` work as before.

`request()` now takes any `GraphQLDocument`: a generated document, a document from `parse()`, or query text as a plain string.

If you passed the generated documents to another GraphQL client or read them as an AST, use `document.toString()` for the query text, or `parse(document.toString())` for an AST.
