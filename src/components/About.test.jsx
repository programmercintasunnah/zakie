import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import About from "./About";
import { renderWithProviders } from "../test/renderWithProviders";

describe("About", () => {
  it("shows the bio tab by default", () => {
    renderWithProviders(<About />);

    expect(
      screen.getByRole("tab", { name: "Bio", selected: true })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "About Me" })
    ).toBeInTheDocument();
    expect(screen.getByText(/Chat via WhatsApp/)).toBeInTheDocument();
  });

  it("switches to the personal data tab", async () => {
    const user = userEvent.setup();
    renderWithProviders(<About />);

    await user.click(screen.getByRole("tab", { name: "Data Pribadi" }));

    expect(
      screen.getByRole("heading", { name: "Data Pribadi" })
    ).toBeInTheDocument();
    expect(screen.getByText("Tempat, Tanggal Lahir")).toBeInTheDocument();
    expect(
      screen.getByText("Pd. Merbau, 22 September 1998")
    ).toBeInTheDocument();
  });

  it("supports keyboard navigation between tabs", async () => {
    const user = userEvent.setup();
    renderWithProviders(<About />);

    const bioTab = screen.getByRole("tab", { name: "Bio" });
    bioTab.focus();
    await user.keyboard("{ArrowRight}");

    expect(
      screen.getByRole("tab", { name: "Data Pribadi", selected: true })
    ).toBeInTheDocument();
  });

  it("opens a certificate in the modal", async () => {
    const user = userEvent.setup();
    renderWithProviders(<About />);

    await user.click(screen.getByRole("tab", { name: "Sertifikat" }));

    const certificate = await screen.findByRole("button", {
      name: /Belajar Dasar Pemrograman Web/,
    });
    await user.click(certificate);

    const dialog = screen.getByRole("dialog");
    expect(
      within(dialog).getByRole("heading", {
        name: "Belajar Dasar Pemrograman Web",
      })
    ).toBeInTheDocument();
    expect(
      within(dialog).getByRole("link", { name: /Download/ })
    ).toHaveAttribute("download", "certificate-1.webp");
  });
});
