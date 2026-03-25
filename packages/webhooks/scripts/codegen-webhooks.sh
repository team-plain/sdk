
#!/bin/bash
# Download the JSON schema
curl https://core-api.uk.plain.com/webhooks/schema/latest.json -o ./src/webhook-schema.json

./node_modules/.bin/json2ts --input ./src/webhook-schema.json --output ./src/webhook-schema.ts
