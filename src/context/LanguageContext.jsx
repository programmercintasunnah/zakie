import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import { translations } from "../i18n";

const LanguageContext = createContext(null);
const LANGUAGE_EVENT = "zakie:languagechange";

export const useLanguage = () => useContext(LanguageContext);

const isSupported = (value) => value === "id" || value === "en";

const getSnapshot = () => {
  try {
    const stored = window.localStorage.getItem("lang");
    return isSupported(stored) ? stored : "id";
  } catch {
    return "id";
  }
};

const getServerSnapshot = () => "id";

const subscribe = (callback) => {
  const handleStorage = (event) => {
    if (event.key === "lang" || event.key === null) callback();
  };
  const handleChange = () => callback();

  window.addEventListener("storage", handleStorage);
  window.addEventListener(LANGUAGE_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(LANGUAGE_EVENT, handleChange);
  };
};

export const LanguageProvider = ({ children }) => {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    if (!isSupported(next)) return;

    try {
      window.localStorage.setItem("lang", next);
    } catch {
      // ignore storage errors
    }

    window.dispatchEvent(new Event(LANGUAGE_EVENT));
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
