import { PlainSdk } from "./_generated_sdk.js";
import { PlainGraphQLClient } from "./graphql-client.js";
import type { PlainClientOptions } from "./types.js";

export class PlainClient extends PlainSdk {
  constructor(options: PlainClientOptions) {
    const graphqlClient = new PlainGraphQLClient({
      apiKey: options.apiKey,
      apiUrl: options.apiUrl,
    });
    super(graphqlClient);
  }
}
