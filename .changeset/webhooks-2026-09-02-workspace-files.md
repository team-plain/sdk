---
"@team-plain/webhooks": minor
---

Update the webhook schema to `2026-09-02`. Adds `workspaceFiles` to the message on `discussion.message_created`, so a handler can see the files a custom agent attached to the message it just sent.

Each entry carries `id`, `fileName`, `fileExtension`, `fileMimeType` and `fileSizeBytes`, all required on an entry. **The array itself is optional and the parser does not fill it in.** The schema declares `default: []`, but `parsePlainWebhook` builds Ajv without `useDefaults`, so an absent array stays absent and the generated type is `workspaceFiles?`. Read it as `message.workspaceFiles ?? []`.

The package bundles one schema version at a time, so this release only parses payloads whose `webhookMetadata.webhookTargetVersion` is the version below. Move your webhook target forward when you upgrade, or `parsePlainWebhook` returns `PlainWebhookVersionMismatchError`.
