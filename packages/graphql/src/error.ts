export class PlainError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PlainError";
  }
}

export class AuthenticationError extends PlainError {
  constructor(message: string) {
    super(message);
    this.name = "AuthenticationError";
  }
}

export class ForbiddenError extends PlainError {
  constructor(message: string) {
    super(message);
    this.name = "ForbiddenError";
  }
}

export class NetworkError extends PlainError {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message);
    this.name = "NetworkError";
    if (options?.cause !== undefined) {
      this.cause = options.cause;
    }
  }
}

export class RateLimitError extends PlainError {
  /**
   * How long the API asked us to wait before retrying, in seconds, taken from
   * the `Retry-After` response header when present.
   */
  public readonly retryAfterSeconds: number | undefined;

  constructor(message: string, retryAfterSeconds?: number) {
    super(message);
    this.name = "RateLimitError";
    this.retryAfterSeconds = retryAfterSeconds;
  }
}

export class InternalError extends PlainError {
  constructor(message: string) {
    super(message);
    this.name = "InternalError";
  }
}

export interface GraphQLErrorEntry {
  message: string;
  extensions?: {
    code?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export class PlainGraphQLError extends PlainError {
  public readonly errors: GraphQLErrorEntry[];

  constructor(errors: GraphQLErrorEntry[]) {
    const message = errors.map((e) => e.message).join("; ");
    super(message);
    this.name = "PlainGraphQLError";
    this.errors = errors;
  }
}
