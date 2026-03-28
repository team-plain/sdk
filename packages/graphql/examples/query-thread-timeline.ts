// Example: query a thread and its timeline entries by ID
import { PlainClient } from "../src/index.js";

const client = new PlainClient({
  apiKey: process.env.PLAIN_API_KEY ?? "plainApiKey_your_key_here",
});

async function main() {
  const threadId = process.argv[2] ?? "th_01EXAMPLE";

  console.log(threadId);

  const thread = await client.query.thread({ threadId });
  console.log("Thread:", thread.title, thread.status);

  // Fetch timeline entries directly from the thread model — no need for the
  // top-level timelineEntries query or to pass a customerId.
  const entries = await thread.timelineEntries({ first: 25 });

  for (const entry of entries.nodes) {
    console.log(`[${entry.timestamp}]`, entry.entry.__typename);

    // The actor is a discriminated union — narrow by __typename to access
    // lazy-loading relations that fetch the full actor details.
    const { actor } = entry;
    switch (actor.__typename) {
      case "UserActor": {
        const user = await actor.user;
        console.log("  By user:", user?.fullName, user?.email);
        break;
      }
      case "CustomerActor": {
        const customer = await actor.customer;
        console.log("  By customer:", customer?.fullName, customer?.email?.email);
        break;
      }
      case "MachineUserActor": {
        const machineUser = await actor.machineUser;
        console.log("  By machine user:", machineUser?.fullName);
        break;
      }
      case "SystemActor":
        console.log("  By system:", actor.systemId);
        break;
      case "DeletedCustomerActor":
        console.log("  By deleted customer:", actor.customerId);
        break;
    }
  }
}

main();
