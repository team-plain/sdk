---
"@team-plain/graphql": patch
---

Fix connection pagination when changing direction. Both root queries and model connection methods now replace the previous cursor and move the requested page size between `first` and `last`, preserving filters and sort order.
