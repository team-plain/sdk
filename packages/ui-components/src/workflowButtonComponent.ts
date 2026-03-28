import type { ComponentInput } from "@team-plain/graphql";

export function workflowButtonComponent(args: {
  label: string;
  workflowId: string;
}): ComponentInput {
  return {
    componentWorkflowButton: {
      workflowButtonLabel: args.label,
      workflowButtonWorkflowIdentifier: {
        workflowId: args.workflowId,
      },
    },
  };
}
