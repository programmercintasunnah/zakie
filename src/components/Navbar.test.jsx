import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Navbar from "./Navbar";
import { renderWithProviders } from "../test/renderWithProviders";

describe("Navbar", () => {
  it("renders localized navigation items", () => {
    renderWithProviders(<Navbar />);

    expect(
      screen.getByRole("navigation", { name: "Navigasi utama" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Beranda" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Tentang" })).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "Download CV" }).length
    ).toBeGreaterThan(0);
  });

  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Navbar />);

    const toggle = screen.getByRole("button", { name: "Buka menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);

    expect(
      screen.getByRole("navigation", { name: "Navigasi mobile" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Tutup menu" })).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    await user.click(screen.getByRole("button", { name: "Tutup menu" }));

    expect(
      screen.queryByRole("navigation", { name: "Navigasi mobile" })
    ).not.toBeInTheDocument();
  });

  it("toggles the language", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Navbar />);

    await user.click(screen.getByRole("button", { name: "Ganti bahasa" }));

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByText("EN")).toBeInTheDocument();
    expect(window.localStorage.getItem("lang")).toBe("en");
  });

  it("toggles dark mode and persists the theme", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Navbar />);

    await user.click(screen.getByRole("button", { name: "Ganti tema" }));

    expect(document.documentElement).toHaveClass("dark");
    expect(window.localStorage.getItem("theme")).toBe("dark");

    await user.click(screen.getByRole("button", { name: "Ganti tema" }));

    expect(document.documentElement).not.toHaveClass("dark");
    expect(window.localStorage.getItem("theme")).toBe("light");
  });
});
