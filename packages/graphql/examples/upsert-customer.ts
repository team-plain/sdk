// Example usage — not part of the SDK, just for verification
import { PlainClient } from "../src/index.js";

const client = new PlainClient({
  apiKey: process.env.PLAIN_API_KEY ?? "plainApiKey_your_key_here",
});

// Mutation — returns Output type directly, error is typed data
async function main() {
  const result = await client.mutation.upsertCustomer({
    input: {
      identifier: { emailAddress: "alice12345@example.com" },
      onCreate: {
        fullName: "Alice",
        email: {
          email: "alice12345@example.com",
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

main();
