// Example usage — not part of the SDK, just for verification
import { PlainClient } from "./packages/sdk/src/index.js";

const client = new PlainClient({
  apiKey: process.env.PLAIN_API_KEY ?? "plainApiKey_your_key_here",
});

// Query — returns typed model with lazy-loading relations
async function queryExample() {
  const customer = await client.customer({ customerId: "c_01KAKJEKNAYY879ZYBMZ614DYT" });
  // customer is a CustomerModel with typed scalar properties
  console.log(customer.fullName, customer.shortName);

  // Lazy-load a relation — makes a separate API call
  const company = await customer.company;
  if (company) {
    console.log(company.name);
  }

  // Pagination with PlainConnection
  const customers = await client.customers({ first: 10 });
  console.log(customers.nodes.map((c) => c.fullName));

  // Paginate forward
  const nextPage = await customers.fetchNext();
  if (nextPage) {
    console.log(nextPage.nodes.map((c) => c.fullName));
  }
}

queryExample();

// Mutation — returns Output type directly, error is typed data
async function _mutationExample() {
  const result = await client.upsertCustomer({
    input: {
      identifier: { emailAddress: "alice@example.com" },
      onCreate: {
        fullName: "Alice",
        email: {
          email: "alice@example.com",
          isVerified: false,
        },
      },
      onUpdate: {},
    },
  });

  if (result.error) {
    // Fully typed: result.error.type, result.error.message, result.error.code
    console.log(result.error.message);
    if (result.error.fields) {
      for (const field of result.error.fields) {
        console.log(`${field.field}: ${field.message}`);
      }
    }
  } else {
    // result.customer is the raw fragment type from the mutation output
    console.log(result.customer?.id);
  }
}

// mutationExample();
