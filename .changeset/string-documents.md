---
"@team-plain/graphql": minor
---

Generated documents now hold compact query text instead of an inlined AST, and the package is marked side-effect free.

Each exported `…Document` and `…FragmentDoc` is still a plain `DocumentNode` object typed as a `TypedDocumentNode`. Its `definitions` are parsed from the query text on first access, so Apollo Client, urql, `print()` and copies made by spreading, `JSON.stringify` or `structuredClone` keep working. `request()` sends the query text as is instead of printing the document, and `document.toString()` returns it.

`request()` now takes any `GraphQLDocument`: a generated document, a document from `parse()`, or query text as a plain string.
