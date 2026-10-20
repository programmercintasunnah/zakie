import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { LanguageProvider, useLanguage } from "./LanguageContext";

const Probe = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div>
      <p data-testid="lang">{lang}</p>
      <p>{t.about.title}</p>
      <button
        type="button"
        onClick={() => setLang(lang === "id" ? "en" : "id")}
      >
        switch
      </button>
    </div>
  );
};

describe("LanguageContext", () => {
  it("defaults to Indonesian", () => {
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    );

    expect(screen.getByTestId("lang")).toHaveTextContent("id");
    expect(screen.getByText("Tentang Saya")).toBeInTheDocument();
  });

  it("switches language, persists it, and updates the html lang", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    );

    await user.click(screen.getByRole("button", { name: "switch" }));

    expect(screen.getByTestId("lang")).toHaveTextContent("en");
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(window.localStorage.getItem("lang")).toBe("en");
    expect(document.documentElement.lang).toBe("en");
  });

  it("restores the stored language on mount", async () => {
    window.localStorage.setItem("lang", "en");

    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    );

    await waitFor(() =>
      expect(screen.getByTestId("lang")).toHaveTextContent("en")
    );
  });
});
