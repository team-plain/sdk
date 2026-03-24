import type { ComponentDividerSpacingSize, ComponentInput } from "@team-plain/sdk";

export function dividerComponent(args: {
  spacingSize?: ComponentDividerSpacingSize;
}): ComponentInput {
  return {
    componentDivider: {
      dividerSpacingSize: args.spacingSize ?? null,
    },
  };
}
