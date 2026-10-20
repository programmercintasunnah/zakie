import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach, vi } from "vitest";

class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(target) {
    this.callback(
      [{ isIntersecting: true, intersectionRatio: 1, target }],
      this
    );
  }

  unobserve() {}

  disconnect() {}

  takeRecords() {
    return [];
  }
}

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

window.IntersectionObserver = MockIntersectionObserver;

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.className = "";
  document.documentElement.lang = "id";
});

afterEach(() => {
  cleanup();
});
