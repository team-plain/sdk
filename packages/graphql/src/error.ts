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
  constructor(message: string) {
    super(message);
    this.name = "RateLimitError";
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
