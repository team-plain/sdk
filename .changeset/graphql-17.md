---
"@team-plain/graphql": major
---

Support graphql 17. `graphql` is now `^16.14.2 || ^17.0.2`, so projects on either major share their own copy.

Types are generated with GraphQL Codegen 6. In fragment, query and mutation result types, nullable fields are no longer optional: `reason?: string | null` is now `reason: string | null`. That matches what the API returns, so code that reads results is unaffected, but objects built by hand against these types (for example test fixtures) must now set nullable fields explicitly.

The codegen helper types `MakeOptional`, `MakeMaybe`, `MakeEmpty` and `Exact` are no longer exported.
