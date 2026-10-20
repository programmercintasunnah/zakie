import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import { ProfileProvider, useProfile } from "./ProfileContext";

const Probe = () => {
  const { name, bioHome, menuItems, experiences } = useProfile();
  const { setLang } = useLanguage();

  return (
    <div>
      <p data-testid="name">{name}</p>
      <p data-testid="bio">{bioHome}</p>
      <p data-testid="menu">{menuItems[0].label}</p>
      <p data-testid="experience">{experiences[0].description}</p>
      <button type="button" onClick={() => setLang("en")}>
        english
      </button>
    </div>
  );
};

const renderProbe = () =>
  render(
    <LanguageProvider>
      <ProfileProvider>
        <Probe />
      </ProfileProvider>
    </LanguageProvider>
  );

describe("ProfileContext", () => {
  it("exposes profile data and fills the experience placeholder", () => {
    renderProbe();

    expect(screen.getByTestId("name")).toHaveTextContent("Muhammad Zakie");
    expect(screen.getByTestId("bio")).toHaveTextContent("tahun");
    expect(screen.getByTestId("bio")).not.toHaveTextContent("{experience}");
    expect(screen.getByTestId("menu")).toHaveTextContent("Beranda");
  });

  it("switches localized content when the language changes", async () => {
    const user = userEvent.setup();
    renderProbe();

    expect(screen.getByTestId("experience")).toHaveTextContent(
      "perusahaan konsultan IT"
    );

    await user.click(screen.getByRole("button", { name: "english" }));

    expect(screen.getByTestId("menu")).toHaveTextContent("Home");
    expect(screen.getByTestId("experience")).toHaveTextContent(
      "IT consulting company"
    );
  });
});
