import type { ComponentDividerSpacingSize, ComponentInput } from "@team-plain/graphql";

export function dividerComponent(args: {
  spacingSize?: ComponentDividerSpacingSize;
}): ComponentInput {
  return {
    componentDivider: {
      dividerSpacingSize: args.spacingSize ?? null,
    },
  };
}
