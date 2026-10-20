import { afterEach, describe, expect, it, vi } from "vitest";
import { calculateExperience, replacePlaceholders, slugify } from "./helpers";

describe("replacePlaceholders", () => {
  it("replaces every occurrence of a placeholder", () => {
    expect(replacePlaceholders("Halo {name}, {name}!", { name: "Zakie" })).toBe(
      "Halo Zakie, Zakie!"
    );
  });

  it("leaves unknown placeholders untouched", () => {
    expect(replacePlaceholders("{known} {unknown}", { known: "A" })).toBe(
      "A {unknown}"
    );
  });

  it("returns the original value for invalid input", () => {
    expect(replacePlaceholders("", { a: "b" })).toBe("");
    expect(replacePlaceholders("text")).toBe("text");
  });
});

describe("slugify", () => {
  it("creates a lowercase hyphenated slug", () => {
    expect(slugify("Pragma Informatika!")).toBe("pragma-informatika");
  });

  it("trims leading and trailing separators", () => {
    expect(slugify("  --Hello World--  ")).toBe("hello-world");
  });

  it("returns an empty string by default", () => {
    expect(slugify()).toBe("");
  });
});

describe("calculateExperience", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("calculates years and months from the start date", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 9, 20));

    expect(calculateExperience("20-10-2020")).toMatchObject({
      tahun: 6,
      bulan: 0,
      formatted: "6 years and 0 months",
      formattedId: "6 tahun 0 bulan",
    });
  });

  it("handles singular units", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 10, 20));

    expect(calculateExperience("20-10-2025").formatted).toBe(
      "1 year and 1 month"
    );
  });

  it("returns zero for missing or invalid dates", () => {
    expect(calculateExperience("")).toEqual({
      tahun: 0,
      bulan: 0,
      formatted: "0 years",
      formattedId: "0 tahun",
    });
    expect(calculateExperience("not-a-date").tahun).toBe(0);
  });
});
