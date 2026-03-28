import { vi } from "vitest";

export function mockFetch() {
  const fetchMock = vi.fn<typeof globalThis.fetch>();
  globalThis.fetch = fetchMock;
  return fetchMock;
}

export function graphqlResponse<T>(data: T): Response {
  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export function graphqlErrorResponse(errors: Array<{ message: string }>): Response {
  return new Response(JSON.stringify({ errors }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export function errorResponse(status: number, body?: unknown): Response {
  return new Response(body ? JSON.stringify(body) : null, {
    status,
    statusText: "Error",
    headers: { "Content-Type": "application/json" },
  });
}

export function getRequestBody(fetchMock: ReturnType<typeof mockFetch>, callIndex = 0) {
  const call = fetchMock.mock.calls[callIndex];
  return JSON.parse(call[1]!.body as string);
}

export function getRequestHeaders(fetchMock: ReturnType<typeof mockFetch>, callIndex = 0) {
  const call = fetchMock.mock.calls[callIndex];
  return call[1]!.headers as Record<string, string>;
}

export function getRequestUrl(fetchMock: ReturnType<typeof mockFetch>, callIndex = 0) {
  return fetchMock.mock.calls[callIndex][0];
}
