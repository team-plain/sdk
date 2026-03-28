import type { ComponentInput, ComponentTextColor, ComponentTextSize } from "@team-plain/graphql";

export function textComponent(args: {
  text: string;
  size?: ComponentTextSize;
  color?: ComponentTextColor;
}): ComponentInput {
  return {
    componentText: {
      text: args.text,
      textColor: args.color ?? null,
      textSize: args.size ?? null,
    },
  };
}
