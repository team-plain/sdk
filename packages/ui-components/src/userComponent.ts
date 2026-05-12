import type { ComponentInput, ComponentUserInput } from "@team-plain/graphql";

export type UserComponentInput = ComponentInput & {
  componentUser: ComponentUserInput;
};

export function userComponent(args: {
  userIdentifier: { emailAddress: string } | { userId: string };
}): UserComponentInput {
  return {
    componentUser: {
      userIdentifier: {
        ...args.userIdentifier,
      },
    },
  };
}
