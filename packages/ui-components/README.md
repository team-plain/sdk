# @team-plain/ui-components

Helper functions for building Plain [UI components](https://plain.com/docs). Provides a typed, concise API for constructing `ComponentInput` objects.

## Installation

```bash
npm install @team-plain/ui-components @team-plain/graphql
```

Requires `@team-plain/graphql` as a peer dependency.

## Usage

```ts
import { uiComponent } from "@team-plain/ui-components";
```

### Available Components

| Builder | Description |
|---------|-------------|
| `uiComponent.text({ text, size?, color? })` | Rich text with optional size and color |
| `uiComponent.plainText({ text })` | Plain unformatted text |
| `uiComponent.badge({ label, color? })` | Colored badge |
| `uiComponent.dateTime({ dateTimeIso8601 })` | Formatted date and time with a full-timestamp tooltip |
| `uiComponent.user({ userIdentifier })` | User avatar and name, resolved from a `userId` or `emailAddress` |
| `uiComponent.divider()` | Horizontal divider |
| `uiComponent.spacer({ size })` | Vertical spacing |
| `uiComponent.linkButton({ label, url })` | Button that opens a URL |
| `uiComponent.copyButton({ value, tooltip? })` | Button that copies a value to clipboard |
| `uiComponent.workflowButton({ label, workflowId })` | Button that triggers a workflow |
| `uiComponent.container({ content })` | Groups components together |
| `uiComponent.row({ mainContent, asideContent })` | Two-column layout |

### Example

```ts
import { uiComponent } from "@team-plain/ui-components";

const components = [
  uiComponent.row({
    mainContent: [uiComponent.text({ text: "Customer Plan", size: "L" })],
    asideContent: [uiComponent.badge({ label: "Pro", color: "GREEN" })],
  }),
  uiComponent.divider(),
  uiComponent.text({ text: "Signed up 3 days ago", color: "MUTED" }),
  uiComponent.spacer({ size: "M" }),
  uiComponent.container({
    content: [
      uiComponent.linkButton({ label: "View in Stripe", url: "https://dashboard.stripe.com/..." }),
      uiComponent.copyButton({ value: "cus_abc123", tooltip: "Copy Stripe ID" }),
    ],
  }),
];
```

### Inline interpolation inside text

`uiComponent.text` accepts markdown, and you can embed `dateTime` and `user` components inline inside that markdown using `uiComponent.inline(...)`. Wrap the call with literal `{…}` in a template literal so the result is a `{{ … }}` marker, matching the templating convention used elsewhere in the Plain app.

```ts
const components = [
  uiComponent.text({
    text:
      `Last seen by {${uiComponent.inline(
        uiComponent.user({ userIdentifier: { userId: "u_01H9G5ERYY4Y3HTHAQ2G2N5XG9" } }),
      )}} on {${uiComponent.inline(
        uiComponent.dateTime({ dateTimeIso8601: "2026-05-11T12:00:00Z" }),
      )}}.`,
  }),
];
```

The text renders inline as: *"Last seen by [avatar] David Leyland on 11 May 2026 at 12:00."* — with the avatar, name, and date interleaved in the same paragraph.

Notes:

- Inline interpolation is supported in `text`, not `plainText`.
- Only `dateTime` and `user` are accepted by `inline(...)`. Other component types (text, badge, container, row, …) are rejected at the type level.
- For `user`, both `userIdentifier.userId` and `userIdentifier.emailAddress` resolve to an avatar and name. Email lookup is case-insensitive.

## License

[MIT](../../LICENSE)
