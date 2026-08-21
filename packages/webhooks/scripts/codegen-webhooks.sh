
#!/bin/bash
set -euo pipefail

# Download the JSON schema
curl https://core-api.uk.plain.com/webhooks/schema/latest.json -o ./src/webhook-schema.json

# The Slack reaction shape is an inline anonymous object rather than its own definition, so json2ts
# falls back to naming its type after the `items` keyword. Title it, so the exported type is
# SlackReaction and not Items. `title` is an annotation keyword, so validation is unchanged. Drop
# this once the API gives that shape a definition of its own.
node <<'JS'
const fs = require("node:fs");

const path = "./src/webhook-schema.json";
const schema = JSON.parse(fs.readFileSync(path, "utf8"));
const reaction = schema.definitions?.slackMessage?.properties?.slackReactions?.items;

// Fail loudly rather than silently regenerate `Items` if the schema moves this shape.
if (!reaction) {
  throw new Error("slackMessage.properties.slackReactions.items is gone: re-check this rename");
}

reaction.title = "SlackReaction";
fs.writeFileSync(path, `${JSON.stringify(schema, null, 2)}\n`);
JS

./node_modules/.bin/json2ts --input ./src/webhook-schema.json --output ./src/webhook-schema.ts
