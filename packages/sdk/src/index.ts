export { PlainClient } from "./client.js";
export { PlainGraphQLClient } from "./graphql-client.js";
export type { PlainClientOptions } from "./types.js";
export type { GraphQLResponse, PlainGraphQLClientOptions } from "./graphql-client.js";
export {
  PlainError,
  AuthenticationError,
  ForbiddenError,
  NetworkError,
  RateLimitError,
  InternalError,
  PlainGraphQLError,
} from "./error.js";
export type { GraphQLErrorEntry } from "./error.js";

export { PlainConnection } from "./connection.js";
export type { PageInfoData, PlainConnectionConfig } from "./connection.js";

// Re-export generated SDK and types
export { PlainSdk } from "./_generated_sdk.js";
export * from "./_generated_sdk.js";
export * from "./_generated_documents.js";
