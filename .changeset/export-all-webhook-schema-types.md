---
"@team-plain/webhooks": minor
---

Export every type generated from the webhook schema. The barrel export named them by hand and had fallen 83 types behind `webhook-schema.ts`, so `Actor`, `Thread`, `Customer`, and 11 payload types shipped in the build but could not be imported.
