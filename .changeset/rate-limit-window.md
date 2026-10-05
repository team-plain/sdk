---
"@team-plain/graphql": minor
---

`RateLimitError` now also carries `remaining`, the requests left, and `resetAt`, when the current one-minute counter rolls over. The limit is a sliding window counter, so use `retryAfterSeconds`, not `resetAt`, to decide when to retry. They come from the `X-RateLimit-Remaining` and `X-RateLimit-Reset` response headers, when present.
