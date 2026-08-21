---
"@team-plain/webhooks": minor
---

Name the Slack reaction type `SlackReaction` instead of `Items`. The shape is an inline anonymous object in the schema, so codegen had been naming it after the JSON Schema `items` keyword.
