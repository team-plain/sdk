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
  const timelineEntries = await thread.timelineEntries({ first: 25 });

  for (const timelineEntry of timelineEntries.nodes) {
    console.log(`[${timelineEntry.timestamp}]`, timelineEntry.entry.__typename);
    console.log(timelineEntry.llmText);

    const entry = timelineEntry.entry;

    // When handling unions you can use `__typename` to discriminate
    if (entry.__typename === "SlackReplyEntry") {
      // Handle Slack specific fields here:
      // console.log(entry.lastEditedOnSlackAt)
    }
  }
}

main();
