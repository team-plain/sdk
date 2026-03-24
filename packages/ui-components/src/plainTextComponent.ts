import type {
  ComponentInput,
  ComponentPlainTextColor,
  ComponentPlainTextSize,
} from "@team-plain/sdk";

export function plainTextComponent(args: {
  text: string;
  size?: ComponentPlainTextSize;
  color?: ComponentPlainTextColor;
}): ComponentInput {
  return {
    componentPlainText: {
      plainText: args.text,
      plainTextColor: args.color ?? null,
      plainTextSize: args.size ?? null,
    },
  };
}
