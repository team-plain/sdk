import type { ComponentDateTimeInput, ComponentInput } from "@team-plain/graphql";

export type DateTimeComponentInput = ComponentInput & {
  componentDateTime: ComponentDateTimeInput;
};

export function dateTimeComponent(args: { dateTimeIso8601: string }): DateTimeComponentInput {
  return {
    componentDateTime: {
      dateTimeIso8601: args.dateTimeIso8601,
    },
  };
}
