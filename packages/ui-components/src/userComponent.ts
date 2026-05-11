import type { ComponentInput } from "@team-plain/graphql";

export function userComponent(args: {
  userIdentifier: { emailAddress: string } | { userId: string };
}): ComponentInput {
  return {
    componentUser: {
      userIdentifier: {
        ...args.userIdentifier,
      },
    },
  };
}
