import { render } from "@testing-library/react";
import { LanguageProvider } from "../context/LanguageContext";
import { ProfileProvider } from "../context/ProfileContext";

const Providers = ({ children }) => (
  <LanguageProvider>
    <ProfileProvider>{children}</ProfileProvider>
  </LanguageProvider>
);

export const renderWithProviders = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });
