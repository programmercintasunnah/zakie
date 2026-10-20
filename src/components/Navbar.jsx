import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaYoutube,
  FaSun,
  FaMoon,
  FaGlobe,
} from "react-icons/fa";
import { useProfile } from "../context/ProfileContext";
import { useLanguage } from "../context/LanguageContext";
import { useActiveSection } from "../hooks/useActiveSection";

const socialIcons = {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaYoutube,
};

const toggleTheme = () => {
  const root = document.documentElement;
  const isDark = root.classList.toggle("dark");
  root.style.colorScheme = isDark ? "dark" : "light";

  try {
    window.localStorage.setItem("theme", isDark ? "dark" : "light");
  } catch {
    // ignore storage errors
  }
};

const Navbar = () => {
  const { nickName, images, menuItems, socialLinks } = useProfile();
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const sectionItems = menuItems.filter((item) => item.href?.startsWith("#"));
  const activeSection = useActiveSection(sectionItems.map((item) => item.id));
  const closeMenu = () => setIsOpen(false);

  const renderLink = (item, mobile = false) => {
    const isExternal = item.target === "_blank";
    const isActive = !isExternal && item.href === `#${activeSection}`;

    return (
      <a
        key={item.id}
        href={item.href}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-current={isActive ? "true" : undefined}
        onClick={closeMenu}
        className={
          mobile
            ? `block rounded-lg px-3 py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                isActive
                  ? "bg-brand-600 text-white"
                  : "text-slate-200 hover:bg-white/10 hover:text-white"
              }`
            : `rounded-lg px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                isActive ? "text-brand-300" : "text-slate-300 hover:text-white"
              }`
        }
      >
        {item.label}
      </a>
    );
  };

  const renderControls = (mobile = false) => (
    <div
      className={
        mobile ? "flex items-center gap-2" : "hidden items-center gap-1 md:flex"
      }
    >
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={t.nav.toggleTheme}
        className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
      >
        <FaSun className="hidden dark:block" aria-hidden="true" />
        <FaMoon className="dark:hidden" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => setLang(lang === "id" ? "en" : "id")}
        aria-label={t.nav.toggleLanguage}
        className="inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
      >
        <FaGlobe aria-hidden="true" />
        {lang.toUpperCase()}
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/95 backdrop-blur dark:bg-slate-950/95">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          onClick={closeMenu}
        >
          <img
            src={images?.icon || "/assets/zakie-circle.webp"}
            alt=""
            width="36"
            height="36"
            className="h-9 w-9 rounded-full border border-brand-400 object-cover"
          />
          <span className="text-base font-bold text-white">
            {nickName || "Zakie"}
            <span className="text-brand-400">.</span>
          </span>
        </a>

        <nav
          aria-label={t.nav.main}
          className="hidden items-center gap-1 md:flex"
        >
          {menuItems.map((item) =>
            item.target === "_blank" ? (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                {item.label}
              </a>
            ) : (
              renderLink(item)
            )
          )}
        </nav>

        <div className="flex items-center gap-1">
          {renderControls()}

          <div className="hidden items-center gap-1 lg:flex">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon];
              if (!Icon) return null;

              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.id}
                  className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-200 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 md:hidden"
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/10 bg-slate-900 px-4 pb-6 pt-3 dark:bg-slate-950 md:hidden"
        >
          <nav aria-label={t.nav.mobile} className="flex flex-col gap-1">
            {menuItems.map((item) =>
              item.target === "_blank" ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mt-2 rounded-lg bg-brand-600 px-3 py-2 text-center text-base font-semibold text-white"
                >
                  {item.label}
                </a>
              ) : (
                renderLink(item, true)
              )
            )}
          </nav>

          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
            {renderControls(true)}

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                if (!Icon) return null;

                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.id}
                    className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
