import { useSyncExternalStore } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useProfile } from "../context/ProfileContext";
import { useLanguage } from "../context/LanguageContext";

const subscribeClock = (callback) => {
  const intervalId = setInterval(callback, 1000);
  return () => clearInterval(intervalId);
};

const getClockSnapshot = () => Math.floor(Date.now() / 1000);
const getServerClockSnapshot = () => null;

const Footer = () => {
  const { name } = useProfile();
  const { lang, t } = useLanguage();
  const seconds = useSyncExternalStore(
    subscribeClock,
    getClockSnapshot,
    getServerClockSnapshot
  );
  const now = seconds ? new Date(seconds * 1000) : null;
  const locale = lang === "en" ? "en-US" : "id-ID";

  const date = now
    ? new Intl.DateTimeFormat(locale, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(now)
    : "—";

  const time = now
    ? new Intl.DateTimeFormat(locale, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now)
    : "--:--:--";

  return (
    <footer className="border-t border-white/5 bg-slate-900 py-6 dark:bg-slate-950">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-white">{name || "Muhammad Zakie"}</p>
          <p className="mt-1 text-sm text-slate-400">
            &copy; {now ? now.getFullYear() : ""} {name || "Muhammad Zakie"}.{" "}
            {t.footer.rights}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <p className="text-sm text-slate-400">
            {date} · {time} {t.footer.timezone}
          </p>
          <a
            href="#home"
            aria-label={t.footer.backToTopLabel}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-white/40 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            <FaArrowUp aria-hidden="true" />
            {t.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
