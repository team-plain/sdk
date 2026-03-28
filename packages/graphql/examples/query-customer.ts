// Example usage — not part of the SDK, just for verification
import { PlainClient } from "../src/index.js";

const client = new PlainClient({
  apiKey: process.env.PLAIN_API_KEY ?? "plainApiKey_your_key_here",
});

// Query — returns typed model with lazy-loading relations
async function main() {
  const customer = await client.query.customer({ customerId: "c_01GW1Z47G0MPXWRDJ0SR9P2JHQ" });
  // customer is a CustomerModel with typed scalar properties
  console.log(customer.fullName, customer.shortName);

  // Lazy-load a relation — makes a separate API call
  const company = await customer.company;
  if (company) {
    console.log(company.name);
  }

  // Pagination with PlainConnection
  const customers = await client.query.customers({ first: 10 });
  console.log(customers.nodes.map((c) => c.fullName));

  // Paginate forward
  const nextPage = await customers.fetchNext();
  if (nextPage) {
    console.log(nextPage.nodes.map((c) => c.fullName));
  }
}

main();
