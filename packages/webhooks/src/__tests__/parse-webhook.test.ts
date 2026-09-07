import { describe, expect, it, test } from "vitest";

import { PlainWebhookPayloadError, PlainWebhookVersionMismatchError } from "../errors.js";
import { parsePlainWebhook } from "../parse.js";
import customerCreatedPayload from "./webhook-payloads/customer-created.js";
import discussionCreatedPayload from "./webhook-payloads/discussion-created.js";
import discussionMessageCreatedPayload from "./webhook-payloads/discussion-message-created.js";
import discussionToolCallApprovalRequestedPayload from "./webhook-payloads/discussion-tool-call-approval-requested.js";
import discussionToolCallApprovalResolvedPayload from "./webhook-payloads/discussion-tool-call-approval-resolved.js";
import emailReceivedPayload from "./webhook-payloads/email-received.js";
import invalidWebhook from "./webhook-payloads/invalid.js";
import threadAssignmentTransitionedPayload from "./webhook-payloads/thread-assignment-transitioned.js";
import threadCreatedPayload from "./webhook-payloads/thread-created.js";
import threadStatusTransitionedPayload from "./webhook-payloads/thread-status-transitioned.js";

describe("Parse webhook", () => {
  [
    customerCreatedPayload,
    discussionCreatedPayload,
    discussionMessageCreatedPayload,
    discussionToolCallApprovalRequestedPayload,
    discussionToolCallApprovalResolvedPayload,
    emailReceivedPayload,
    threadAssignmentTransitionedPayload,
    threadCreatedPayload,
    threadStatusTransitionedPayload,
  ].forEach((payload: { type: string }) => {
    test(`should validate the ${payload?.type} payload successfully`, () => {
      expect(parsePlainWebhook(payload).data).toBeTruthy();
    });
  });

  test("should fail to validate an invalid payload", () => {
    expect(parsePlainWebhook(invalidWebhook).error).toBeTruthy();
  });

  // The discussion and the message both allow additional properties, so a fixture that merely
  // carries agentStatus or workspaceFiles would pass against the previous schema too. Reject a bad
  // value instead: that only holds if the field is really in the schema and enforced.
  it("rejects an agentStatus outside the enum", () => {
    const payload = {
      ...discussionMessageCreatedPayload,
      payload: {
        ...discussionMessageCreatedPayload.payload,
        discussion: {
          ...discussionMessageCreatedPayload.payload.discussion,
          agentStatus: "NOT_A_STATUS",
        },
      },
    };

    expect(parsePlainWebhook(payload).error).instanceOf(PlainWebhookPayloadError);
  });

  it("rejects a workspace file that is missing a required field", () => {
    const payload = {
      ...discussionMessageCreatedPayload,
      payload: {
        ...discussionMessageCreatedPayload.payload,
        message: {
          ...discussionMessageCreatedPayload.payload.message,
          workspaceFiles: [{ id: "wf_01HD44FHDPG82VQ4QNHDR4N2T6" }],
        },
      },
    };

    expect(parsePlainWebhook(payload).error).instanceOf(PlainWebhookPayloadError);
  });

  it("accepts a stringified payload", () => {
    const result = parsePlainWebhook(JSON.stringify(threadCreatedPayload));
    expect(result.data).toBeTruthy();
  });

  it("returns a human-readable error message when the payload is not a valid webhook payload", () => {
    const invalidPayload = {
      ...threadCreatedPayload,
      payload: {
        ...threadCreatedPayload.payload,
        thread: {
          ...threadCreatedPayload.payload.thread,
          title: undefined,
        },
      },
    };

    const result = parsePlainWebhook(invalidPayload);

    expect(result.error).instanceOf(PlainWebhookPayloadError);
    expect(result.error?.message).toBe("data/payload/thread must have required property 'title'");
  });

  it("returns a version mismatch error", () => {
    const invalidWebhook = {
      ...threadCreatedPayload,

      webhookMetadata: {
        ...threadCreatedPayload.webhookMetadata,
        webhookTargetVersion: "NEW_VERSION",
      },
    };

    const result = parsePlainWebhook(invalidWebhook);

    expect(result.error).instanceOf(PlainWebhookVersionMismatchError);
    expect(result.error?.message).toBe(
      "The webhook payload (version=NEW_VERSION) is incompatible with the current version of the SDK. Please upgrade both the SDK and the webhook target to the latest version. Refer to https://www.plain.com/docs/api-reference/webhooks/versions for more information. Original error: data/webhookMetadata/webhookTargetVersion must be equal to constant",
    );
  });

  it("returns a version mismatch error when the webhook target version is missing", () => {
    const invalidWebhook = {
      ...threadCreatedPayload,

      webhookMetadata: {
        ...threadCreatedPayload.webhookMetadata,
        webhookTargetVersion: undefined,
      },
    };

    const result = parsePlainWebhook(invalidWebhook);

    expect(result.error).instanceOf(PlainWebhookVersionMismatchError);
    expect(result.error?.message).toBe(
      "The webhook payload (version=unknown) is incompatible with the current version of the SDK. Please upgrade both the SDK and the webhook target to the latest version. Refer to https://www.plain.com/docs/api-reference/webhooks/versions for more information. Original error: data/webhookMetadata must have required property 'webhookTargetVersion'",
    );
  });
});
