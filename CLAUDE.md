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

Two packages in a pnpm monorepo:

1. **`packages/codegen-plugin`** — A `@graphql-codegen` plugin (single file: `src/index.ts`). Takes the GraphQL schema + generated documents and outputs `_generated_sdk.ts` with model classes and a `PlainSdk` class.

2. **`packages/sdk`** — The publishable SDK. Hand-written files: `client.ts`, `graphql-client.ts`, `connection.ts`, `error.ts`, `types.ts`, `index.ts`. Generated files: `_generated_documents.graphql`, `_generated_documents.ts`, `_generated_sdk.ts`.

## Key Design Decisions

- **Mutation errors are data, not exceptions.** Plain's API returns `*Output` types with an `error: MutationError` field. The SDK preserves this — mutation methods return the full output type. Only network/auth errors throw.
- **Lazy-loading relations.** Model classes expose object relations as `Promise<T>` getters that make separate API calls using the entity's `id`. Fragments only select `{ id }` for relations.
- **ESM-only, Node 25+.** No CommonJS, no polyfills.
- **Generated files are committed.** The `_generated_*` files are checked in so consumers don't need to run codegen. Re-run `pnpm codegen` after schema changes.

## File Conventions

- Files prefixed with `_generated_` are auto-generated — don't edit them manually.
- `generate-documents.ts` is a build-time script excluded from the SDK's `tsconfig.json` compilation.
- The codegen plugin uses `toCgPascalCase()` to match `@graphql-codegen`'s naming (acronyms get split: `MSTeams` → `MsTeams`).

## Common Tasks

**Update the GraphQL schema:**
```bash
curl -o packages/sdk/src/schema.graphql https://core-api.uk.plain.com/graphql/v1/schema.graphql
pnpm codegen
pnpm typecheck
```

**Modify how SDK classes are generated:**
Edit `packages/codegen-plugin/src/index.ts`, then:
```bash
pnpm --filter @team-plain/codegen-plugin build
pnpm codegen
pnpm typecheck
```

**Add a new hand-written SDK feature:**
Edit files in `packages/sdk/src/`, export from `index.ts`, then `pnpm build`.
