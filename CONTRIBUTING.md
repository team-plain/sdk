# Contributing

Thanks for your interest in contributing! This is a monorepo containing Plain's TypeScript packages. This guide covers setup, project structure, available scripts, and how the codegen pipeline works.

## Prerequisites

- **Node 25+**
- **pnpm**

```bash
pnpm install
pnpm build
```

## Packages

| Package | Path | Description |
|---------|------|-------------|
| `@team-plain/sdk` | `packages/sdk` | Typed GraphQL client with auto-generated model classes |
| `@team-plain/ui-components` | `packages/ui-components` | UI component builder helpers (peer-depends on `@team-plain/sdk`) |
| `@team-plain/webhooks` | `packages/webhooks` | Webhook parsing and signature verification (standalone) |
| `@team-plain/sdk-codegen-plugin` | `packages/sdk-codegen-plugin` | Internal codegen plugin (not published to npm) |

## Design Decisions

These are important to understand before contributing:

- **ESM-only, Node 25+.** No CommonJS, no polyfills. Applies to all packages.
- **Generated files are committed.** The `_generated_*` files are checked in so consumers don't need to run codegen. Re-run `pnpm codegen` after schema changes.

### SDK-specific

- **Mutation errors are data, not exceptions.** Plain's API returns `*Output` types with an `error: MutationError` field. The SDK preserves this — mutation methods return the full output type. Only network/auth errors throw.
- **Lazy-loading relations.** Model classes expose object relations as `Promise<T>` getters that make separate API calls using the entity's `id`. Fragments only select `{ id }` for relations.

### Webhooks-specific

- **Standalone.** The webhooks package has no dependency on `@team-plain/sdk`. Keep it that way.
- **Result type, not exceptions.** `parsePlainWebhook` and `verifyPlainWebhook` return `Result<T, Error>` instead of throwing.

### UI components-specific

- **Peer dependency on `@team-plain/sdk`.** Types like `ComponentInput` come from the SDK. The package itself is pure functions with no runtime dependencies beyond that.

## Project Structure

```
packages/
  sdk-codegen-plugin/       # Custom @graphql-codegen plugin that generates model classes + SDK
    src/index.ts        # Single-file plugin: schema analysis → model classes → SDK class
  sdk/                  # The publishable SDK package (@team-plain/sdk)
    src/
      schema.graphql              # Plain's GraphQL schema (fetched from API)
      generate-documents.ts       # Script: schema → fragments + query/mutation operations
      _generated_documents.graphql  # Auto-generated GraphQL operations
      _generated_documents.ts       # Auto-generated typed document nodes
      _generated_sdk.ts             # Auto-generated model classes + PlainSdk class
      client.ts                   # PlainClient — the main entry point
      graphql-client.ts           # HTTP transport (fetch-based)
      connection.ts               # PlainConnection — Relay cursor pagination
      error.ts                    # Error class hierarchy
      types.ts                    # PlainClientOptions
      index.ts                    # Barrel exports
  ui-components/        # UI component builders (@team-plain/ui-components)
    src/
      index.ts                    # Barrel export: uiComponent object with 10 builder functions
      textComponent.ts            # text, plainText, badge, spacer, divider,
      ...                         # linkButton, copyButton, workflowButton, container, row
  webhooks/             # Webhook parsing & verification (@team-plain/webhooks)
    src/
      parse.ts                    # parsePlainWebhook() — JSON schema validation via AJV
      verify.ts                   # verifyPlainWebhook() — HMAC-SHA256 + schema + replay protection
      errors.ts                   # Webhook-specific error classes
      result.ts                   # Result<T, U> type for error handling
      webhook-schema.json         # JSON Schema (source of truth, fetched from API)
      webhook-schema.ts           # Auto-generated TypeScript types from JSON schema
```

Files prefixed with `_generated_` are auto-generated — don't edit them manually.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm build` | Build everything (codegen plugin → SDK → ui-components → webhooks) |
| `pnpm codegen` | Regenerate documents + SDK from schema |
| `pnpm typecheck` | Type-check all packages |
| `pnpm test` | Run tests across all packages |
| `pnpm --filter @team-plain/sdk-codegen-plugin build` | Build just the codegen plugin |
| `pnpm --filter @team-plain/sdk build` | Build just the SDK |
| `pnpm --filter @team-plain/ui-components build` | Build just ui-components |
| `pnpm --filter @team-plain/ui-components test` | Test ui-components |
| `pnpm --filter @team-plain/webhooks codegen` | Fetch + regenerate webhook schema types |
| `pnpm --filter @team-plain/webhooks build` | Build just webhooks |
| `pnpm --filter @team-plain/webhooks test` | Test webhooks |
| `pnpm format` | Format with biome |
| `pnpm lint` | Lint with biome |
| `pnpm check` | Format + lint with biome (auto-fix) |

## How Codegen Works

The pipeline has two stages:

1. **Document generation** (`generate-documents.ts`): reads `schema.graphql` and produces `_generated_documents.graphql` with fragments for every object type (scalars + 1 level of relations via `{ id }`) and query/mutation operations.

2. **Code generation** (`graphql-codegen` with `codegen.yml`): runs standard plugins (`typescript`, `typescript-operations`, `typed-document-node`) to produce typed document nodes, then runs our custom `@team-plain/sdk-codegen-plugin` to produce model classes and the `PlainSdk` class.

## Common Tasks

### Update the GraphQL schema

```bash
curl -o packages/sdk/src/schema.graphql https://core-api.uk.plain.com/graphql/v1/schema.graphql
pnpm codegen
pnpm typecheck
```

### Modify how SDK classes are generated

Edit `packages/sdk-codegen-plugin/src/index.ts`, then:

```bash
pnpm --filter @team-plain/sdk-codegen-plugin build
pnpm codegen
pnpm typecheck
```

### Add a new hand-written SDK feature

Edit files in `packages/sdk/src/`, export from `index.ts`, then `pnpm build`.

### Update the webhook schema

```bash
pnpm --filter @team-plain/webhooks codegen
pnpm --filter @team-plain/webhooks build
pnpm --filter @team-plain/webhooks test
```

## Changesets

This repo uses [Changesets](https://github.com/changesets/changesets) to manage versioning and releases.

When your change should ship to npm, run:

```bash
pnpm changeset
```

Pick the relevant package(s) when prompted and write a short summary of the change. The codegen plugin (`@team-plain/sdk-codegen-plugin`) is internal and won't appear in the wizard.

Each package is versioned and released independently.

After merging to `main`, the release workflow automatically opens a "Version Packages" PR that bumps versions and updates changelogs.
