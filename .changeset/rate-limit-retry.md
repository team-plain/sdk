---
"@team-plain/graphql": minor
---

Add opt-in automatic retries for rate limited requests and expose `Retry-After`.

- `RateLimitError` now carries `retryAfterSeconds`, parsed from the `Retry-After` response header (delay-seconds or HTTP-date) when present.
- New `retry` option on `PlainClient` / `PlainGraphQLClient` (`maxRetries`, `initialDelayMs`, `maxDelayMs`, `retryOnNetworkError`). Rate limited (429) requests are retried honouring `Retry-After`, otherwise with exponential backoff and full jitter. `NetworkError`s are only retried when `retryOnNetworkError` is set. Disabled by default, so existing behaviour is unchanged.
