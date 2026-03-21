import type { ComponentBadgeColor, ComponentInput } from "@team-plain/sdk";

export function badgeComponent(args: {
  label: string;
  color?: ComponentBadgeColor;
}): ComponentInput {
  return {
    componentBadge: {
      badgeLabel: args.label,
      badgeColor: args.color ?? null,
    },
  };
}
