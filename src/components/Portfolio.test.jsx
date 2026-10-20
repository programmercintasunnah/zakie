import { screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Portfolio from "./Portfolio";
import { renderWithProviders } from "../test/renderWithProviders";

describe("Portfolio", () => {
  it("shows the companies and the first company projects", () => {
    renderWithProviders(<Portfolio />);

    expect(
      screen.getByRole("tab", { name: "Pengalaman Kerja", selected: true })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Hunayn Teknologi" })
    ).toBeInTheDocument();
    expect(screen.getAllByRole("article").length).toBeGreaterThan(0);
    expect(screen.getByText(/perusahaan konsultan IT/)).toBeInTheDocument();
  });

  it("switches the active company", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Portfolio />);

    await user.click(screen.getByRole("button", { name: /Rakitek/ }));

    expect(
      screen.getByRole("heading", { level: 3, name: "Rakitek" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/coworking space, serviced office/)
    ).toBeInTheDocument();
  });

  it("opens and closes a project modal", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Portfolio />);

    const firstProject = screen.getAllByRole("article")[0];
    await user.click(
      within(firstProject).getByRole("button", { name: "Lihat Detail" })
    );

    const dialog = screen.getByRole("dialog");
    expect(
      within(dialog).getByRole("heading", { name: "Deskripsi" })
    ).toBeInTheDocument();

    await user.keyboard("{Escape}");

    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    );
  });

  it("shows skills and personal projects tabs", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Portfolio />);

    await user.click(screen.getByRole("tab", { name: "Skills" }));
    expect(
      screen.getByRole("heading", { name: "Backend" })
    ).toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "Proyek Pribadi" }));
    expect(screen.getAllByRole("article").length).toBeGreaterThan(0);
  });
});
