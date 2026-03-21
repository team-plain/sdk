import type { ComponentInput } from "@team-plain/sdk";

export function linkButtonComponent(args: { label: string; url: string }): ComponentInput {
  return {
    componentLinkButton: {
      linkButtonLabel: args.label,
      linkButtonUrl: args.url,
    },
  };
}
