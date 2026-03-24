import type { ComponentInput } from "@team-plain/sdk";

export function copyButtonComponent(args: { value: string; tooltip?: string }): ComponentInput {
  return {
    componentCopyButton: {
      copyButtonValue: args.value,
      copyButtonTooltipLabel: args.tooltip,
    },
  };
}
