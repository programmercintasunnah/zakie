import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Reveal from "./Reveal";

describe("Reveal", () => {
  it("becomes visible when observed", () => {
    render(
      <Reveal>
        <p>Konten</p>
      </Reveal>
    );

    const element = screen.getByText("Konten").parentElement;
    expect(element).toHaveClass("reveal", "is-visible");
  });

  it("applies a transition delay", () => {
    render(
      <Reveal delay={120}>
        <p>Konten</p>
      </Reveal>
    );

    expect(screen.getByText("Konten").parentElement).toHaveStyle({
      transitionDelay: "120ms",
    });
  });
});
