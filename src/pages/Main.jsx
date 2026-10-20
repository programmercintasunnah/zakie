import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

const Main = () => {
  const { t } = useLanguage();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:focus:bg-slate-900 dark:focus:text-white"
      >
        {t.common.skipToContent}
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Home />
        <About />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Main;
