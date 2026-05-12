import { describe, expect, test } from "vitest";

import { uiComponent } from "../index.js";

describe("ui components builder", () => {
  test("basic example", () => {
    expect([
      uiComponent.text({ text: "hello world" }),
      uiComponent.text({ text: "hello world", color: "MUTED", size: "S" }),
    ]).toEqual([
      {
        componentText: {
          text: "hello world",
          textColor: null,
          textSize: null,
        },
      },
      {
        componentText: {
          text: "hello world",
          textColor: "MUTED",
          textSize: "S",
        },
      },
    ]);
  });

  test("container component", () => {
    expect([
      uiComponent.container({
        content: [
          uiComponent.text({ text: "hello world" }),
          uiComponent.badge({ label: "success", color: "GREEN" }),
        ],
      }),
    ]).toEqual([
      {
        componentContainer: {
          containerContent: [
            {
              componentText: {
                text: "hello world",
                textColor: null,
                textSize: null,
              },
            },
            {
              componentBadge: {
                badgeLabel: "success",
                badgeColor: "GREEN",
              },
            },
          ],
        },
      },
    ]);
  });

  test("date time component", () => {
    expect([uiComponent.dateTime({ dateTimeIso8601: "2026-05-11T12:00:00Z" })]).toEqual([
      {
        componentDateTime: {
          dateTimeIso8601: "2026-05-11T12:00:00Z",
        },
      },
    ]);
  });

  test("user component", () => {
    expect([
      uiComponent.user({ userIdentifier: { emailAddress: "david@plain.com" } }),
      uiComponent.user({ userIdentifier: { userId: "u_123" } }),
    ]).toEqual([
      {
        componentUser: {
          userIdentifier: {
            emailAddress: "david@plain.com",
          },
        },
      },
      {
        componentUser: {
          userIdentifier: {
            userId: "u_123",
          },
        },
      },
    ]);
  });

  test("inline marker for date time", () => {
    expect(
      uiComponent.inline(uiComponent.dateTime({ dateTimeIso8601: "2026-05-11T12:00:00Z" })),
    ).toBe('{componentDateTime:dateTimeIso8601="2026-05-11T12:00:00Z"}');
  });

  test("inline marker for user with userId flattens nested identifier", () => {
    expect(uiComponent.inline(uiComponent.user({ userIdentifier: { userId: "u_123" } }))).toBe(
      '{componentUser:userIdentifier.userId="u_123"}',
    );
  });

  test("inline marker for user with emailAddress flattens nested identifier", () => {
    expect(
      uiComponent.inline(
        uiComponent.user({ userIdentifier: { emailAddress: "david@plain.com" } }),
      ),
    ).toBe('{componentUser:userIdentifier.emailAddress="david@plain.com"}');
  });

  test("inline marker JSON-escapes quotes and backslashes in user fullName-style values", () => {
    expect(
      uiComponent.inline(uiComponent.user({ userIdentifier: { userId: 'a "quoted" \\ id' } })),
    ).toBe('{componentUser:userIdentifier.userId="a \\"quoted\\" \\\\ id"}');
  });

  test("inline marker escapes } in values so the outer marker stays parseable", () => {
    const marker = uiComponent.inline(
      uiComponent.user({ userIdentifier: { userId: "weird}}id" } }),
    );
    expect(marker).toBe('{componentUser:userIdentifier.userId="weird\\u007d\\u007did"}');
  });

  test("inline marker round-trips through JSON.parse", () => {
    const marker = uiComponent.inline(
      uiComponent.user({ userIdentifier: { userId: 'has }} and "quotes"' } }),
    );
    const match = marker.match(/^\{\w+:\w+(?:\.\w+)*=("(?:[^"\\]|\\.)*")\}$/);
    expect(match).not.toBeNull();
    expect(JSON.parse(match?.[1] ?? "")).toBe('has }} and "quotes"');
  });

  test("inline marker rejects non-inlinable components at the type level", () => {
    // Type-level only — never executed. The @ts-expect-error directives fail
    // the build if the call site type-checks, which is what we want.
    const _typeCheck = () => {
      // @ts-expect-error text is not inlinable
      uiComponent.inline(uiComponent.text({ text: "x" }));
      // @ts-expect-error badge is not inlinable
      uiComponent.inline(uiComponent.badge({ label: "x" }));
      // @ts-expect-error container is not inlinable
      uiComponent.inline(uiComponent.container({ content: [] }));
      // @ts-expect-error row is not inlinable
      uiComponent.inline(uiComponent.row({ mainContent: [], asideContent: [] }));
    };
    expect(_typeCheck).toBeTypeOf("function");
  });
});
