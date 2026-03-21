# Plain TypeScript SDK (Beta)

A typed TypeScript SDK for [Plain's](https://plain.com) GraphQL API, auto-generated from the schema using a custom codegen pipeline.

Inspired by [Linear's SDK](https://github.com/linear/linear/tree/master/packages/codegen-sdk) and their approach to lazy-loading GraphQL connections and relation fields.

## Installation

```bash
npm install @team-plain/sdk
```

Requires **Node 25+**.

## Usage

```ts
import { PlainClient } from "@team-plain/sdk";

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

## Error Handling

- **Queries**: network, auth (401), forbidden (403), and rate limit (429) errors throw typed exceptions (`AuthenticationError`, `ForbiddenError`, `RateLimitError`, `NetworkError`, `PlainGraphQLError`).
- **Mutations**: return the full `*Output` type. Check `result.error` for a typed `MutationError` with `message`, `type`, `code`, and `fields[]`. This is intentional — Plain's API treats mutation errors as data.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup, project structure, and how the codegen pipeline works.

## License

[MIT](./LICENSE)
