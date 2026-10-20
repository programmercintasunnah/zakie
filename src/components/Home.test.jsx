import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home";
import { renderWithProviders } from "../test/renderWithProviders";

describe("Home", () => {
  it("renders the hero content", () => {
    renderWithProviders(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Muhammad Zakie",
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(
      screen.getByAltText("Foto profil Muhammad Zakie")
    ).toBeInTheDocument();
    expect(screen.getByText(/tahun pengalaman/)).toBeInTheDocument();
  });

  it("links to the CV and portfolio sections", () => {
    renderWithProviders(<Home />);

    expect(screen.getByRole("link", { name: /Download CV/ })).toHaveAttribute(
      "href",
      expect.stringContaining("drive.google.com")
    );
    expect(
      screen.getByRole("link", { name: /Lihat Portofolio/ })
    ).toHaveAttribute("href", "#portfolio");
  });
});
