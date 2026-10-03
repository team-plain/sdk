---
"@team-plain/graphql": patch
"@team-plain/ui-components": patch
"@team-plain/webhooks": patch
---

Sourcemaps now embed their sources, so stack traces and debuggers resolve to the original TypeScript without it being published. Declaration maps, which pointed at those unpublished files, are no longer shipped, and neither are sourcemaps for the generated GraphQL code.
