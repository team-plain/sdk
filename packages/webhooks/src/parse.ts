import { Ajv } from "ajv";
import _addFormats from "ajv-formats";

// ajv-formats is CJS — under nodenext the default import resolves to the module namespace
const addFormats = _addFormats as unknown as typeof _addFormats.default;

import {
  type PlainWebhookError,
  PlainWebhookPayloadError,
  PlainWebhookVersionMismatchError,
} from "./errors.js";
import { isErr, type Result } from "./result.js";
import type { WebhooksSchemaDefinition } from "./webhook-schema.js";
import webhookSchema from "./webhook-schema.json" with { type: "json" };

export function parsePlainWebhook(
  unknownPayload: unknown,
): Result<WebhooksSchemaDefinition, PlainWebhookPayloadError> {
  const payloadResult = (() => {
    if (typeof unknownPayload === "string") {
      try {
        return { data: JSON.parse(unknownPayload) };
      } catch (_e) {
        return {
          error: new PlainWebhookPayloadError("The webhook payload is not a valid JSON object."),
        };
      }
    }

    return { data: unknownPayload };
  })();

  if (isErr(payloadResult)) {
    return payloadResult;
  }

  const payload = payloadResult.data;

  const ajv = new Ajv({
    unicodeRegExp: false,
  });
  addFormats(ajv);

  if (ajv.validate<WebhooksSchemaDefinition>(webhookSchema, payload)) {
    return { data: payload };
  }

  try {
    return { error: getParseError(payload, ajv.errorsText()) };
  } catch (_e) {
    return {
      error: new PlainWebhookPayloadError(
        `Failed to parse the webhook payload: ${ajv.errorsText()}`,
      ),
    };
  }
}

function getParseError(
  payload: Record<string, unknown>,
  originalAjvError: string,
): PlainWebhookError {
  const errorMessage = getErrorMessageForHumans(payload, originalAjvError);

  if (isVersionMismatch(payload)) {
    return new PlainWebhookVersionMismatchError(
      errorMessage,
      getPayloadVersion(payload) ?? "unknown",
    );
  }

  return new PlainWebhookPayloadError(errorMessage);
}

function isVersionMismatch(payload: Record<string, unknown>): boolean {
  const schemaVersion = getSchemaVersion();
  return typeof schemaVersion === "string" && schemaVersion !== getPayloadVersion(payload);
}

function getErrorMessageForHumans(
  payload: Record<string, unknown>,
  originalAjvError: string,
): string {
  try {
    const eventType = payload.type;
    if (typeof eventType !== "string") {
      return originalAjvError;
    }

    const payloadDefinitionKey = (() => {
      for (const [key, definition] of Object.entries(
        (webhookSchema as Record<string, any>).definitions,
      )) {
        if ((definition as any)?.properties?.eventType?.const === eventType) {
          return key;
        }
      }
      return null;
    })();

    if (payloadDefinitionKey === null) {
      return originalAjvError;
    }

    const updatedSchema = {
      ...webhookSchema,
      properties: {
        ...(webhookSchema as Record<string, any>).properties,
        payload: {
          $ref: `#/definitions/${payloadDefinitionKey}`,
        },
      },
    };

    const ajv = new Ajv({
      unicodeRegExp: false,
    });
    addFormats(ajv);

    if (ajv.validate(updatedSchema, payload)) {
      return originalAjvError;
    }

    return ajv.errorsText();
  } catch (_e) {
    return originalAjvError;
  }
}

function getPayloadVersion(payload: Record<string, unknown>): string | null {
  const metadata = (payload as any)?.webhookMetadata;
  const ret = metadata?.webhookTargetVersion;
  return typeof ret === "string" ? ret : null;
}

function getSchemaVersion(): string | null {
  const ret = (webhookSchema as any)?.definitions?.webhookMetadata?.properties?.webhookTargetVersion
    ?.const;
  return typeof ret === "string" ? ret : null;
}
