import { buildSchema } from "graphql";
import { describe, expect, it } from "vitest";
import { plugin } from "../index.js";
import { compileTypeScript, createDocuments, formatDiagnostics } from "./helpers.js";

// NOTE: The plugin only generates model classes for types that have at least one
// non-scalar/non-enum field (i.e., NOT "value objects"). Types whose fields are
// ALL scalars/enums are treated as value objects and inlined. So test schemas for
// model generation must include at least one object-typed field.

describe("model generation", () => {
  it("generates a model class with scalar properties", () => {
    const schema = buildSchema(`
      type Query {
        customer(customerId: ID!): Customer
      }
      type DateTime {
        iso8601: String!
        unixTimestamp: Int!
      }
      type Customer {
        id: ID!
        fullName: String!
        email: String
        isVerified: Boolean!
        createdAt: DateTime!
      }
    `);
    const docs = createDocuments(`
      fragment CustomerFields on Customer {
        id
        fullName
        email
        isVerified
        createdAt { iso8601 unixTimestamp }
      }
      query Customer($customerId: ID!) {
        customer(customerId: $customerId) {
          ...CustomerFields
        }
      }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    const stubs = `
      type CustomerFieldsFragment = { id: string; fullName: string; email: string | null; isVerified: boolean; createdAt: { iso8601: string; unixTimestamp: number } };
      declare const CustomerDocument: any;
      type CustomerQuery = { customer: CustomerFieldsFragment | null };
      type CustomerQueryVariables = { customerId: string };
    `;

    const diagnostics = compileTypeScript(code, stubs);
    expect(diagnostics, formatDiagnostics(diagnostics)).toHaveLength(0);

    expect(code).toContain("export class CustomerModel");
    expect(code).toContain("public readonly fullName: CustomerFieldsFragment");
    expect(code).toContain("public readonly email: CustomerFieldsFragment");
    expect(code).toContain("public readonly isVerified: CustomerFieldsFragment");
    // Value object field is also exposed as a scalar-like property
    expect(code).toContain("public readonly createdAt: CustomerFieldsFragment");
  });

  it("treats enum fields as scalar-like properties", () => {
    const schema = buildSchema(`
      type Query {
        ticket(ticketId: ID!): Ticket
      }
      enum TicketStatus { OPEN CLOSED }
      type DateTime {
        iso8601: String!
      }
      type Ticket {
        id: ID!
        title: String!
        status: TicketStatus!
        createdAt: DateTime!
      }
    `);
    const docs = createDocuments(`
      fragment TicketFields on Ticket {
        id
        title
        status
        createdAt { iso8601 }
      }
      query Ticket($ticketId: ID!) {
        ticket(ticketId: $ticketId) {
          ...TicketFields
        }
      }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    const stubs = `
      type TicketFieldsFragment = { id: string; title: string; status: "OPEN" | "CLOSED"; createdAt: { iso8601: string } };
      declare const TicketDocument: any;
      type TicketQuery = { ticket: TicketFieldsFragment | null };
      type TicketQueryVariables = { ticketId: string };
    `;

    const diagnostics = compileTypeScript(code, stubs);
    expect(diagnostics, formatDiagnostics(diagnostics)).toHaveLength(0);

    expect(code).toContain("export class TicketModel");
    expect(code).toContain("public readonly status: TicketFieldsFragment");
  });

  it("treats value object types as scalar-like properties on models that reference them", () => {
    // When a value object (all-scalar type like DateTime) is referenced by a model,
    // it's exposed as a direct property. The fragment generator (generate-documents.ts)
    // does not generate fragments for standalone value objects, so they won't get
    // model classes in practice. This test only includes EventFields (not DateTimeFields).
    const schema = buildSchema(`
      type Query {
        event(eventId: ID!): Event
      }
      type DateTime {
        iso8601: String!
        unixTimestamp: Int!
      }
      type Event {
        id: ID!
        name: String!
        createdAt: DateTime!
      }
    `);
    const docs = createDocuments(`
      fragment EventFields on Event {
        id
        name
        createdAt { iso8601 unixTimestamp }
      }
      query Event($eventId: ID!) {
        event(eventId: $eventId) {
          ...EventFields
        }
      }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    expect(code).not.toContain("class DateTimeModel");
    expect(code).toContain("export class EventModel");
    // createdAt is a value object → exposed as a scalar-like property
    expect(code).toContain("public readonly createdAt: EventFieldsFragment");
  });

  it("generates lazy-loading getter for object relation with root query", () => {
    const schema = buildSchema(`
      type Query {
        order(orderId: ID!): Order
        customer(customerId: ID!): Customer
      }
      type DateTime {
        iso8601: String!
      }
      type Customer {
        id: ID!
        name: String!
        createdAt: DateTime!
      }
      type Order {
        id: ID!
        total: Float!
        customer: Customer
      }
    `);
    const docs = createDocuments(`
      fragment CustomerFields on Customer {
        id
        name
        createdAt { iso8601 }
      }
      fragment OrderFields on Order {
        id
        total
        customer { id }
      }
      query Order($orderId: ID!) {
        order(orderId: $orderId) {
          ...OrderFields
        }
      }
      query Customer($customerId: ID!) {
        customer(customerId: $customerId) {
          ...CustomerFields
        }
      }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    const stubs = `
      type CustomerFieldsFragment = { id: string; name: string; createdAt: { iso8601: string } };
      type OrderFieldsFragment = { id: string; total: number; customer: { id: string } | null };
      declare const OrderDocument: any;
      declare const CustomerDocument: any;
      type OrderQuery = { order: OrderFieldsFragment | null };
      type OrderQueryVariables = { orderId: string };
      type CustomerQuery = { customer: CustomerFieldsFragment | null };
      type CustomerQueryVariables = { customerId: string };
    `;

    const diagnostics = compileTypeScript(code, stubs);
    expect(diagnostics, formatDiagnostics(diagnostics)).toHaveLength(0);

    expect(code).toContain("public get customer(): Promise<CustomerModel | undefined>");
    expect(code).toContain("this._data.customer?.id");
    expect(code).toContain("new CustomerModel(this._client");
  });

  it("skips object relation field when there is no root query for the related type", () => {
    const schema = buildSchema(`
      type Query {
        order(orderId: ID!): Order
      }
      type InternalNote {
        id: ID!
        text: String!
      }
      type Order {
        id: ID!
        total: Float!
        note: InternalNote
      }
    `);
    const docs = createDocuments(`
      fragment InternalNoteFields on InternalNote {
        id
        text
      }
      fragment OrderFields on Order {
        id
        total
        note { id }
      }
      query Order($orderId: ID!) {
        order(orderId: $orderId) {
          ...OrderFields
        }
      }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    expect(code).toContain("export class OrderModel");
    // No lazy getter for `note` since InternalNote has no root query
    expect(code).not.toContain("get note()");
  });

  it("does not generate model classes for Output types or MutationError types", () => {
    const schema = buildSchema(`
      type Query {
        dummy: String
      }
      type Mutation {
        createUser(name: String!): CreateUserOutput
      }
      type MutationError {
        message: String!
        type: String!
        code: String!
        fields: [MutationFieldError!]!
      }
      type MutationFieldError {
        field: String!
        message: String!
        type: String!
      }
      type CreateUserOutput {
        user: User
        error: MutationError
      }
      type User {
        id: ID!
        name: String!
      }
    `);
    const docs = createDocuments(`
      fragment MutationErrorFields on MutationError {
        message
        type
        code
        fields { field message type }
      }
      fragment MutationFieldErrorFields on MutationFieldError {
        field
        message
        type
      }
      fragment CreateUserOutputFields on CreateUserOutput {
        error { ...MutationErrorFields }
      }
      fragment UserFields on User {
        id
        name
      }
      mutation CreateUser($name: String!) {
        createUser(name: $name) {
          ...CreateUserOutputFields
        }
      }
    `);

    const output = plugin(schema, docs, {});
    const code = typeof output === "string" ? output : output.content;

    expect(code).not.toContain("class CreateUserOutputModel");
    expect(code).not.toContain("class MutationErrorModel");
    expect(code).not.toContain("class MutationFieldErrorModel");
  });
});
