import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { PlainWebhookPayloadError, PlainWebhookSignatureVerificationError } from "../errors.js";
import { verifyPlainWebhook } from "../verify.js";
import threadCreatedPayload from "./webhook-payloads/thread-created.js";

describe("verifyPlainWebhook", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns an error when the payload is empty", () => {
    const result = verifyPlainWebhook("", "signature", "secret");

    expect(result.error).instanceOf(PlainWebhookSignatureVerificationError);
    expect(result.error?.message).toBe("No webhook payload was provided.");
  });

  it("returns an error when the signature is empty", () => {
    const result = verifyPlainWebhook("payload", "", "secret");

    expect(result.error).instanceOf(PlainWebhookSignatureVerificationError);
    expect(result.error?.message).toBe(
      'No signature header value was provided. Please pass the value of the "Plain-Request-Signature" header.',
    );
  });

  it("returns an error when the secret is empty", () => {
    const result = verifyPlainWebhook("payload", "signature", "");

    expect(result.error).instanceOf(PlainWebhookSignatureVerificationError);
    expect(result.error?.message).toBe(
      "No webhook secret was provided. You can find your webhook secret in your workspace settings.",
    );
  });

  it("returns an error when the signature does not match", () => {
    const result = verifyPlainWebhook("payload", "signature", "secret");

    expect(result.error).instanceOf(PlainWebhookSignatureVerificationError);
    expect(result.error?.message).toBe("The signature provided is invalid.");
  });

  // A caller-supplied signature can hold multi-byte characters, which makes its string length and
  // its encoded byte length disagree. Comparing string lengths would let that past the guard and
  // then make timingSafeEqual throw, turning a rejected webhook into an unhandled exception.
  it.each([
    ["a multi-byte character", `${"0".repeat(63)}\u00e9`],
    ["a surrogate pair", `${"0".repeat(62)}\u{1f600}`],
  ])("rejects rather than throws when the signature contains %s", (_name, signature) => {
    expect(signature.length).toBe(64);
    expect(Buffer.byteLength(signature, "utf8")).not.toBe(64);

    const result = verifyPlainWebhook(JSON.stringify(threadCreatedPayload), signature, "secret");

    expect(result.error).instanceOf(PlainWebhookSignatureVerificationError);
    expect(result.error?.message).toBe("The signature provided is invalid.");
  });

  it("returns an error when the signature matches but the timestamp is too far in the past", () => {
    const result = verifyPlainWebhook(
      JSON.stringify(threadCreatedPayload),
      "2a0c2aae30579978ed51958e311c8a915e5ddf0634f2d3ee581073dce4f15a09",
      "secret",
    );

    expect(result.error).instanceOf(PlainWebhookSignatureVerificationError);
    expect(result.error?.message).toBe(
      "The timestamp provided in the webhook payload is too far in the past. The maximum allowed difference is 300 seconds.",
    );
  });

  it("doesn't return an error when the signature matches and the timestamp is within the tolerance", () => {
    // +5 minutes - 1 second
    vi.setSystemTime(new Date(Date.UTC(2023, 9, 19, 14, 17, 26)));

    const result = verifyPlainWebhook(
      JSON.stringify(threadCreatedPayload),
      "2a0c2aae30579978ed51958e311c8a915e5ddf0634f2d3ee581073dce4f15a09",
      "secret",
    );

    expect(result.error).toBeUndefined();
    expect(result.data?.type).toBe("thread.thread_created");
  });

  it("returns an error when the payload is not a valid JSON object", () => {
    const result = verifyPlainWebhook(
      "hello-world",
      "1bff4699de4fb5202a4b1e6cefd7b5fdfb02d19a67a1eb371dd417a45b0a47df",
      "secret",
    );

    expect(result.error).instanceOf(PlainWebhookPayloadError);
    expect(result.error?.message).toBe("The webhook payload is not a valid JSON object.");
  });

  it("returns an error when the payload is not a valid webhook payload", () => {
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

    const result = verifyPlainWebhook(
      JSON.stringify(invalidPayload),
      "6fb5d243fc8eb19d98b8806e6707d3d2001b447774c0f988737651ff51ec0ab4",
      "secret",
    );

    expect(result.error).instanceOf(PlainWebhookPayloadError);
    expect(result.error?.message).toBe("data/payload/thread must have required property 'title'");
  });
});
