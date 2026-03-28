import type { ComponentInput } from "@team-plain/graphql";

export function linkButtonComponent(args: { label: string; url: string }): ComponentInput {
  return {
    componentLinkButton: {
      linkButtonLabel: args.label,
      linkButtonUrl: args.url,
    },
  };
}
