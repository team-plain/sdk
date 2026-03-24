import type { ComponentInput } from "@team-plain/sdk";

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
