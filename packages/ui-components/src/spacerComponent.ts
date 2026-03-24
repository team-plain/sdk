import type { ComponentInput, ComponentSpacerSize } from "@team-plain/sdk";

export function spacerComponent(args: { size?: ComponentSpacerSize }): ComponentInput {
  return {
    componentSpacer: {
      spacerSize: args.size ?? null,
    },
  };
}
