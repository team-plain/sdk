---
"@team-plain/graphql": minor
---

Add opt-in automatic retries for rate limited requests and expose `Retry-After`.

- `RateLimitError` now carries `retryAfterSeconds` and `limit`, parsed from the `Retry-After` and `X-RateLimit-Limit` response headers when present.
- New `retry: { maxRetries }` option on `PlainClient` / `PlainGraphQLClient`. Rate limited (429) requests are retried after `Retry-After` plus up to a second of jitter, or with exponential backoff and full jitter when the header is missing. Other errors are never retried.
- Disabled by default, so existing behaviour is unchanged.
