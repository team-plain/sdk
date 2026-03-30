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

## License

[MIT](../../LICENSE)
