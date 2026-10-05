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
  constructor(message: string) {
    super(message);
    this.name = "NetworkError";
  }
}

export class RateLimitError extends PlainError {
  public readonly retryAfterSeconds: number | undefined;
  public readonly limit: number | undefined;
  public readonly remaining: number | undefined;
  /** When the current rate limit window ends. */
  public readonly resetAt: Date | undefined;

  constructor(
    message: string,
    retryAfterSeconds?: number,
    limit?: number,
    remaining?: number,
    resetAt?: Date,
  ) {
    super(message);
    this.name = "RateLimitError";
    this.retryAfterSeconds = retryAfterSeconds;
    this.limit = limit;
    this.remaining = remaining;
    this.resetAt = resetAt;
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
