---
"@team-plain/webhooks": minor
---

Update webhook schema to version `2026-04-21`. The `thread.slack_message_updated` payload now includes an optional `reactionChange` field (`{ changeType: 'ADDED' | 'REMOVED' | 'UNKNOWN_SLACK_REACTION_CHANGE_TYPE'; reaction }`) describing which reaction was added or removed. Webhook targets must be on version `2026-04-21` to parse with this SDK.
