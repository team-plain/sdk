import type { ComponentInput } from "@team-plain/sdk";

export function rowComponent(args: {
  mainContent: ComponentInput[];
  asideContent: ComponentInput[];
}): ComponentInput {
  return {
    componentRow: {
      rowMainContent: args.mainContent,
      rowAsideContent: args.asideContent,
    },
  };
}
