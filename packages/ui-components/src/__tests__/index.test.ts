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
});
