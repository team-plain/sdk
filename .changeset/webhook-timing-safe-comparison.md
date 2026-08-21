---
"@team-plain/webhooks": patch
---

Compare webhook signatures with `timingSafeEqual` instead of `!==`, so verification no longer leaks how many leading bytes of a guess were correct.
