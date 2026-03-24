import type { ComponentInput } from "@team-plain/sdk";

export function containerComponent(args: { content: ComponentInput[] }): ComponentInput {
  return {
    componentContainer: {
      containerContent: args.content,
    },
  };
}
