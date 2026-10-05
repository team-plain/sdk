---
"@team-plain/graphql": minor
---

`RateLimitError` now also carries `remaining`, the requests left, and `resetAt`, when the current one-minute counting window ends. The limit slides, so use `retryAfterSeconds`, not `resetAt`, to decide when to retry. They come from the `X-RateLimit-Remaining` and `X-RateLimit-Reset` response headers, when present.
