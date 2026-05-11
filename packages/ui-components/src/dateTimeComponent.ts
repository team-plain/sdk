import type { ComponentInput } from "@team-plain/graphql";

export function dateTimeComponent(args: { dateTimeIso8601: string }): ComponentInput {
  return {
    componentDateTime: {
      dateTimeIso8601: args.dateTimeIso8601,
    },
  };
}
