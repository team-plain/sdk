# @team-plain/graphql

A typed TypeScript SDK for [Plain's](https://plain.com) GraphQL API, auto-generated from the schema using a custom codegen pipeline.

## Installation

```bash
npm install @team-plain/graphql
```

Requires **Node 25+**. ESM-only.

## Usage

```ts
import { PlainClient } from "@team-plain/graphql";

const client = new PlainClient({ apiKey: "plainApiKey_xxx" });
```

### Query

```ts
const customer = await client.customer({ customerId: "c_123" });
console.log(customer.fullName);

// Relations are lazy-loaded — accessing them makes a separate API call
const company = await customer.company;
console.log(company.name);
```

### Mutation

Mutation errors are returned as typed data, not thrown as exceptions. This matches Plain's API where all mutations return `*Output` types with an optional `error` field.

```ts
const result = await client.upsertCustomer({
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
const customers = await client.customers({ first: 10 });

for (const customer of customers.nodes) {
  console.log(customer.fullName);
}

// Fetch the next page
const nextPage = await customers.fetchNext();
```

### Union Types

GraphQL union and interface fields are exposed as discriminated unions of model classes. Each union member has a `__typename` property for narrowing and supports the same lazy-loading as any other model.

```ts
const thread = await client.thread({ threadId: "t_123" });

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

## Migrating from `@team-plain/typescript-sdk`

If you're migrating from the old `@team-plain/typescript-sdk` package, see the [Migration Guide](./MIGRATION.md) for a full breakdown of breaking changes including error handling, method renames, enum changes, and before/after examples.

## Resources

- [Plain API docs](https://plain.com/docs) — guides, authentication, and API reference
- [GraphQL schema](https://core-api.uk.plain.com/graphql/v1/schema.graphql) — the full schema this SDK is generated from (also vendored at [`src/schema.graphql`](./src/schema.graphql))

## License

[MIT](../../LICENSE)
