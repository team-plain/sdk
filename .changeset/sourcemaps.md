---
"@team-plain/graphql": patch
"@team-plain/ui-components": patch
"@team-plain/webhooks": patch
---

Sourcemaps now embed their sources, so stack traces and debuggers resolve to the original TypeScript without it being published. Sourcemaps for the generated GraphQL code are not published.
