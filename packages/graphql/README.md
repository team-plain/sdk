# @team-plain/graphql

A typed TypeScript SDK for [Plain's](https://plain.com) GraphQL API, auto-generated from the schema using a custom codegen pipeline.

## Installation

```bash
npm install @team-plain/graphql
```

Requires **Node 24+**. Supports both ESM and CJS.

## Usage

```ts
import { PlainClient } from "@team-plain/graphql";

const client = new PlainClient({ apiKey: "plainApiKey_xxx" });
```

### Query

Queries are accessed via `client.query`:

```ts
const customer = await client.query.customer({ customerId: "c_123" });
console.log(customer.fullName);

// Relations are lazy-loaded — accessing them makes a separate API call
const company = await customer.company;
console.log(company.name);
```

### Mutation

Mutations are accessed via `client.mutation`. Mutation errors are returned as typed data, not thrown as exceptions. This matches Plain's API where all mutations return `*Output` types with an optional `error` field.

```ts
const result = await client.mutation.upsertCustomer({
  input: {
    identifier: { emailAddress: "alice@example.com" },
    onCreate: {
      fullName: "Alice",
      email: { email: "alice@example.com", isVerified: false },
    },
    onUpdate: {},
  },
});

if (result.error) {
  // Typed MutationError with message, type, code, and field-level errors
  console.error(result.error.message);
  result.error.fields?.forEach((f) => {
    console.error(`  ${f.field}: ${f.message}`);
  });
} else {
  console.log(result.customer?.id);
}
```

### Pagination

```ts
const customers = await client.query.customers({ first: 10 });

for (const customer of customers.nodes) {
  console.log(customer.fullName);
}

// Fetch the next page
const nextPage = await customers.fetchNext();
```

### Union Types

GraphQL union and interface fields are exposed as discriminated unions of model classes. Each union member has a `__typename` property for narrowing and supports the same lazy-loading as any other model.

```ts
const thread = await client.query.thread({ threadId: "t_123" });

// Narrow with __typename
if (thread.createdBy.__typename === "UserActor") {
  console.log(thread.createdBy.userId);

  // Lazy-load a relation on the union member
  const user = await thread.createdBy.user;
  console.log(user?.fullName);
}

// Or narrow with instanceof
import { UserActorModel } from "@team-plain/graphql";

if (thread.createdBy instanceof UserActorModel) {
  const user = await thread.createdBy.user;
}

// Value-like unions — scalars available immediately
if (thread.statusDetail?.__typename === "ThreadStatusDetailWaitingForDuration") {
  console.log(thread.statusDetail.waitingUntil);
}

// List of unions
for (const identity of customer.identities) {
  if (identity.__typename === "EmailCustomerIdentity") {
    console.log(identity.email);
  }
}
```

## Error Handling

- **Queries**: network, auth (401), forbidden (403), and rate limit (429) errors throw typed exceptions (`AuthenticationError`, `ForbiddenError`, `RateLimitError`, `NetworkError`, `PlainGraphQLError`).
- **Mutations**: return the full `*Output` type. Check `result.error` for a typed `MutationError` with `message`, `type`, `code`, and `fields[]`. This is intentional — Plain's API treats mutation errors as data.

### Rate limits and retries

Plain enforces a per-workspace request rate limit and responds with HTTP 429 above it. The SDK throws a `RateLimitError` whose `retryAfterSeconds` carries the API's `Retry-After` hint when one was sent. A rate limited request was never processed, so it is always safe to retry — you can have the client do that for you:

```ts
const client = new PlainClient({
  apiKey: process.env.PLAIN_API_KEY!,
  // Retry rate limited requests up to 5 times after the first attempt (default: 0, disabled)
  retry: { maxRetries: 5 },
});
```

The client waits for `Retry-After` plus up to a second of jitter, or backs off exponentially (capped at 30s) when the header is missing. Once retries are exhausted the last error is thrown as normal.

## Migrating from `@team-plain/typescript-sdk`

If you're migrating from the old `@team-plain/typescript-sdk` package, see the [Migration Guide](./MIGRATION.md) for a full breakdown of breaking changes including error handling, method renames, enum changes, and before/after examples.

## Resources

- [Plain API docs](https://plain.com/docs) — guides, authentication, and API reference
- [GraphQL schema](https://core-api.uk.plain.com/graphql/v1/schema.graphql) — the full schema this SDK is generated from (also vendored at [`src/schema.graphql`](./src/schema.graphql))

## License

[MIT](../../LICENSE)
