import type { ComponentInput } from "@team-plain/graphql";

export function copyButtonComponent(args: { value: string; tooltip?: string }): ComponentInput {
  return {
    componentCopyButton: {
      copyButtonValue: args.value,
      copyButtonTooltipLabel: args.tooltip,
    },
  };
}
