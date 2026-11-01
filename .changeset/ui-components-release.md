---
"@team-plain/ui-components": minor
---

The peer dependency on `@team-plain/graphql` moves from exactly `3.2.0` to `^3.3.0`, so later minor releases of `@team-plain/graphql` install without a peer warning. Upgrade `@team-plain/graphql` to 3.3.0 with this release. The component builders are unchanged.

- `require()` users get CommonJS type declarations (`dist/cjs/*.d.ts`). With `moduleResolution: node16` or `nodenext`, TypeScript used to resolve the ESM declarations for the CommonJS build.
- The package is marked `"sideEffects": false`, so bundlers can drop what you don't use.
- Sourcemaps embed their sources. Declaration maps are no longer published.
