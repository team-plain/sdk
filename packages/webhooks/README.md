# @team-plain/webhooks

Webhook parsing and signature verification for [Plain](https://plain.com) webhooks. Standalone package — no dependency on `@team-plain/sdk`.

## Installation

```bash
npm install @team-plain/webhooks
```

## Usage

### Verify and parse (recommended)

`verifyPlainWebhook` validates the HMAC-SHA256 signature, checks the timestamp to prevent replay attacks, and parses the payload against the webhook JSON schema.

```ts
import { verifyPlainWebhook } from "@team-plain/webhooks";

const result = verifyPlainWebhook(
  rawBody,                    // raw request body string
  req.headers["plain-request-signature"], // signature header
  process.env.PLAIN_WEBHOOK_SECRET,       // your webhook signing secret
);

if (result.error) {
  console.error(result.error.message);
} else {
  const event = result.data;
  console.log(event.eventType, event.payload);
}
```

The optional fourth argument `tolerance` (default: `300` seconds) controls the maximum allowed age of the webhook timestamp.

### Parse only (no signature verification)

`parsePlainWebhook` validates the payload against the webhook JSON schema without checking the signature. Useful for development or when verification is handled elsewhere.

```ts
import { parsePlainWebhook } from "@team-plain/webhooks";

const result = parsePlainWebhook(rawBody);

if (result.error) {
  console.error(result.error.message);
} else {
  const event = result.data;
  console.log(event.eventType, event.payload);
}
```

### Error types

All functions return a `Result<T, Error>` — either `{ data: T }` or `{ error: Error }`.

| Error class | When |
|------------|------|
| `PlainWebhookSignatureVerificationError` | Invalid signature, missing headers, or expired timestamp |
| `PlainWebhookPayloadError` | Payload fails JSON schema validation |
| `PlainWebhookVersionMismatchError` | Payload version doesn't match the schema version bundled in this package |

### Typed event payloads

All webhook payload types are exported for use in your handlers:

```ts
import type {
  ThreadCreatedPublicEventPayload,
  CustomerCreatedPublicEventPayload,
  // ...
} from "@team-plain/webhooks";
```

## License

[MIT](../../LICENSE)
