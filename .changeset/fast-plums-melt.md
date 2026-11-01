---
"@team-plain/graphql": patch
---

Fix `fetchNext()` and `fetchPrevious()` when switching pagination direction. Calling `fetchPrevious()` after a forward page, or `fetchNext()` after a backward page, sent mixed `first`/`before` or `last`/`after` variables, which the Plain API rejects with a validation error. The SDK now sends only the new direction's cursor and carries the page size over, keeping filters and sort order.
