import webhookSchema from "../webhook-schema.json" with { type: "json" };

export const schemaVersion =
  webhookSchema.definitions.webhookMetadata.properties.webhookTargetVersion.const;
