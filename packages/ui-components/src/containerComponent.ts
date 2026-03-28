import type { ComponentInput } from "@team-plain/graphql";

export function containerComponent(args: { content: ComponentInput[] }): ComponentInput {
  return {
    componentContainer: {
      containerContent: args.content,
    },
  };
}
