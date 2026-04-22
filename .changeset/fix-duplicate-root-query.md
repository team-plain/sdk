---
"@team-plain/graphql": minor
---

Fix codegen plugin selecting the wrong root query when the GraphQL schema declares more than one root query returning the same type (e.g. `threadDiscussion(threadDiscussionId: ID!): ThreadDiscussion` and `discussion(discussionId: ID!): ThreadDiscussion`). The plugin now prefers the field whose name is the canonical camelCase of the return type, which is stable regardless of field iteration order. Regenerate `_generated_sdk.ts` and `_generated_documents.ts` against the latest schema.
