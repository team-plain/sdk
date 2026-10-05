---
"@team-plain/graphql": minor
---

`RateLimitError` now also carries `remaining`, the requests left in the current window, and `resetAt`, when that window ends. They come from the `X-RateLimit-Remaining` and `X-RateLimit-Reset` response headers, when present.
