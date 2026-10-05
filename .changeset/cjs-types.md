---
"@team-plain/graphql": patch
"@team-plain/ui-components": patch
"@team-plain/webhooks": patch
---

`require()` users now get CommonJS type declarations. With `moduleResolution: node16` or `nodenext`, TypeScript used to resolve ESM declarations for the CommonJS build. `@team-plain/ui-components` and `@team-plain/webhooks` are now marked side-effect free, so bundlers can drop what you don't use.
