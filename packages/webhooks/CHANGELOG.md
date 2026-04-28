# @team-plain/webhooks

## 1.2.0

### Minor Changes

- ea8afe4: Update graphql schema

### Patch Changes

- ea8afe4: Correct documentation and node version requirements to allow for node 24

## 1.1.0

### Minor Changes

- 9ae69c6: Update webhook schema to version `2026-04-21`. The `thread.slack_message_updated` payload now includes an optional `reactionChange` field (`{ changeType: 'ADDED' | 'REMOVED' | 'UNKNOWN_SLACK_REACTION_CHANGE_TYPE'; reaction }`) describing which reaction was added or removed. Webhook targets must be on version `2026-04-21` to parse with this SDK.

## 1.0.1

### Patch Changes

- 7335db4: Add CommonJS support alongside existing ESM output.

## 1.0.0

### Major Changes

- 5a6cf0b: Initial release

## 0.2.0

### Minor Changes

- af22f5f: Update webhooks parsing to latest webhook version.

## 0.1.1

### Patch Changes

- 823bc91: Test automated release flow.
