# Plain TypeScript SDK (Beta)

A typed TypeScript SDK for [Plain's](https://plain.com) GraphQL API, auto-generated from the schema using a custom codegen pipeline adapted from Linear's approach.

**Key design choice**: mutation errors are returned as typed data, not thrown as exceptions. This matches Plain's API where all mutations return `*Output` types with an optional `error` field.

## Setup

Requires **Node 25+** and **pnpm**.

```bash
pnpm install
pnpm build
```

## Usage

```ts
import { PlainClient } from "@team-plain/typescript-sdk-beta";

const client = new PlainClient({ apiKey: "plainApiKey_xxx" });

// Queries — returns typed models, throws on network/auth errors
const customer = await client.customer({ customerId: "c_123" });
console.log(customer.fullName);

// Lazy-load relations (separate API call)
const company = await customer.company;

// Pagination
const customers = await client.customers({ first: 10 });
const nextPage = await customers.fetchNext();

// Mutations — errors are typed data, not exceptions
const result = await client.upsertCustomer({
  input: {
    identifier: { emailAddress: "alice@example.com" },
    onCreate: { fullName: "Alice", email: { email: "alice@example.com", isVerified: false } },
    onUpdate: {},
  },
});

if (result.error) {
  console.log(result.error.message); // typed MutationError
  result.error.fields?.forEach((f) => console.log(`${f.field}: ${f.message}`));
} else {
  console.log(result.customer?.id);
}
```

## Project Structure

```
packages/
  codegen-plugin/     # Custom @graphql-codegen plugin that generates model classes + SDK
    src/index.ts      # Single-file plugin: schema analysis → model classes → SDK class
  sdk/                # The publishable SDK package (@team-plain/typescript-sdk-beta)
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
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm build` | Build everything (codegen plugin first, then SDK) |
| `pnpm codegen` | Regenerate documents + SDK from schema |
| `pnpm typecheck` | Type-check the SDK without emitting |
| `pnpm build:codegen-plugin` | Build just the codegen plugin |
| `pnpm build:sdk` | Build just the SDK |

## How Codegen Works

The pipeline has two stages:

1. **Document generation** (`generate-documents.ts`): reads `schema.graphql` and produces `_generated_documents.graphql` with fragments for every object type (scalars + 1 level of relations via `{ id }`) and query/mutation operations.

2. **Code generation** (`graphql-codegen` with `codegen.yml`): runs standard plugins (`typescript`, `typescript-operations`, `typed-document-node`) to produce typed document nodes, then runs our custom `@team-plain/codegen-plugin` to produce model classes and the `PlainSdk` class.

To regenerate after schema changes:

```bash
# Update the schema
curl -o packages/sdk/src/schema.graphql https://core-api.uk.plain.com/graphql/v1/schema.graphql

# Rebuild the codegen plugin (if changed), then regenerate
pnpm build:codegen-plugin
pnpm codegen
pnpm typecheck
```

## Error Handling

- **Queries**: network, auth (401), forbidden (403), and rate limit (429) errors throw typed exceptions (`AuthenticationError`, `ForbiddenError`, `RateLimitError`, `NetworkError`, `PlainGraphQLError`).
- **Mutations**: return the full `*Output` type. Check `result.error` for a typed `MutationError` with `message`, `type`, `code`, and `fields[]`. This is intentional — Plain's API treats mutation errors as data.
