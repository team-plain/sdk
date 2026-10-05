---
"@team-plain/graphql": minor
---

Support graphql 17. `graphql` is now `^16.14.2 || ^17.0.2`, so projects on either major share their own copy.

Queries now carry `@include(if: true)` on nullable fields. The API returns the same data, but code that matches exact query text, such as request mocks or snapshots, needs updating.
