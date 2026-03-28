import type { ComponentInput, ComponentSpacerSize } from "@team-plain/graphql";

export function spacerComponent(args: { size?: ComponentSpacerSize }): ComponentInput {
  return {
    componentSpacer: {
      spacerSize: args.size ?? null,
    },
  };
}
