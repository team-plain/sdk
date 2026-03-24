# CLAUDE.md

## What This Project Is

A TypeScript SDK generator for Plain's GraphQL API. It uses a custom `@graphql-codegen` plugin to auto-generate typed model classes and an SDK class from Plain's schema. Adapted from Linear's codegen approach.

## Quick Commands

```bash
pnpm install          # Install dependencies
pnpm build            # Build everything (codegen plugin → codegen → SDK)
pnpm typecheck        # Type-check all packages
pnpm format           # Format with biome
pnpm lint             # Lint with biome
pnpm check            # Format + lint with biome (auto-fix)
```

Per-package scripts (codegen, test, etc.) are run via `pnpm --filter <pkg> <script>`.

## Architecture

Four packages in a pnpm monorepo:

1. **`packages/sdk-codegen-plugin`** — A `@graphql-codegen` plugin (single file: `src/index.ts`). Takes the GraphQL schema + generated documents and outputs `_generated_sdk.ts` with model classes and a `PlainSdk` class.

2. **`packages/sdk`** — The publishable SDK (`@team-plain/sdk`). Hand-written files: `client.ts`, `graphql-client.ts`, `connection.ts`, `error.ts`, `types.ts`, `index.ts`. Generated files: `_generated_documents.graphql`, `_generated_documents.ts`, `_generated_sdk.ts`.

3. **`packages/ui-components`** — UI component builder helpers (`@team-plain/ui-components`). Pure functions that return `ComponentInput` types for building UI components (text, badge, spacer, divider, buttons, containers, rows). Peer-depends on `@team-plain/sdk` for types.

4. **`packages/webhooks`** — Webhook parsing and verification (`@team-plain/webhooks`). Provides `parsePlainWebhook()` for JSON schema validation and `verifyPlainWebhook()` for HMAC-SHA256 signature verification + replay attack prevention. Uses `ajv` for schema validation. Self-contained — no dependency on `@team-plain/sdk`.

## Key Design Decisions

- **Mutation errors are data, not exceptions.** Plain's API returns `*Output` types with an `error: MutationError` field. The SDK preserves this — mutation methods return the full output type. Only network/auth errors throw.
- **Lazy-loading relations.** Model classes expose object relations as `Promise<T>` getters that make separate API calls using the entity's `id`. Fragments only select `{ id }` for relations.
- **ESM-only, Node 25+.** No CommonJS, no polyfills.
- **Generated files are committed.** The `_generated_*` files are checked in so consumers don't need to run codegen. Re-run `pnpm codegen` after schema changes.

## File Conventions

- Files prefixed with `_generated_` are auto-generated — don't edit them manually.
- `generate-documents.ts` is a build-time script excluded from the SDK's `tsconfig.json` compilation.
- The codegen plugin uses `toCgPascalCase()` to match `@graphql-codegen`'s naming (acronyms get split: `MSTeams` → `MsTeams`).
- `webhook-schema.ts` in the webhooks package is auto-generated from `webhook-schema.json` — don't edit it manually.

## Gotchas

- **No root-level TypeScript.** The root `package.json` does not have `typescript` in devDependencies. Each package has its own. The `typecheck` script uses `pnpm --filter <pkg> exec tsc --noEmit` to ensure the correct TS version is used per package.
- **CJS interop under `nodenext`.** When importing CJS packages (like `ajv`, `ajv-formats`) in ESM packages with `module: "nodenext"`, default imports may resolve to the module namespace instead of the default export. Use named imports where available (e.g., `import { Ajv } from "ajv"`) or cast the default import. See `packages/webhooks/src/parse.ts` for the pattern.
- **GraphQL types are string literal unions, not enums.** The new SDK's generated types (e.g., `ComponentTextColor`) are string literal unions (`'ERROR' | 'MUTED' | ...`), not TypeScript enums like the old `@team-plain/typescript-sdk` used. No enum-to-string mapping is needed.
- **JSON import attributes.** ESM JSON imports require `with { type: "json" }` syntax (e.g., `import schema from "./schema.json" with { type: "json" }`). This requires TypeScript 5.3+ and `resolveJsonModule: true`.

## Common Tasks

**Update the GraphQL schema:**
```bash
curl -o packages/sdk/src/schema.graphql https://core-api.uk.plain.com/graphql/v1/schema.graphql
pnpm codegen
pnpm typecheck
```

**Modify how SDK classes are generated:**
Edit `packages/sdk-codegen-plugin/src/index.ts`, then:
```bash
pnpm --filter @team-plain/sdk-codegen-plugin build
pnpm codegen
pnpm typecheck
```

**Add a new hand-written SDK feature:**
Edit files in `packages/sdk/src/`, export from `index.ts`, then `pnpm build`.

**Update the webhook schema:**
```bash
curl -o packages/webhooks/src/webhook-schema.json https://core-api.uk.plain.com/webhooks/schema/latest.json
# Regenerate TypeScript types from the JSON schema (requires json-schema-to-typescript)
npx json-schema-to-typescript --input packages/webhooks/src/webhook-schema.json --output packages/webhooks/src/webhook-schema.ts
pnpm --filter @team-plain/webhooks build
pnpm --filter @team-plain/webhooks test
```
