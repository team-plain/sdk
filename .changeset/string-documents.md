---
"@team-plain/graphql": major
---

Generated documents are now query text instead of GraphQL ASTs. The package is about a third of its previous size unpacked (24 MB, down from 68 MB), and requests no longer print a document back to text.

Each exported `…Document` and `…FragmentDoc` is now a `TypedDocumentString`: a `String` that carries the result and variables types. `client.query.*`, `client.mutation.*` and `PlainGraphQLClient.request()` work as before.

`request()` now takes any `GraphQLDocument`: a generated document, a document from `parse()`, or query text as a plain string.

If you passed the generated documents to another GraphQL client or read them as an AST, use `document.toString()` for the query text, or `parse(document.toString())` for an AST.
