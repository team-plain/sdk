---
"@team-plain/graphql": minor
---

Generated documents now hold compact query text instead of an inlined AST, and the package is marked side-effect free.

`request()` now takes any `GraphQLDocument`: a generated document, a document from `parse()`, or query text as a plain string.
