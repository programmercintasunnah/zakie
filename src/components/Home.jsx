import {
  FaFilePdf,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";
import { useProfile } from "../context/ProfileContext";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { name, bioHome, jobTitle, cvLink, images, address, totalPengalaman } =
    useProfile();
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-slate-900 dark:bg-slate-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.28),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="container-page relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-16 text-center">
        <img
          src={images?.circle || "/assets/zakie-circle.webp"}
          alt={t.home.photoAlt.replace("{name}", name || "Muhammad Zakie")}
          width="192"
          height="192"
          fetchPriority="high"
          decoding="async"
          className="h-40 w-40 rounded-full border-4 border-brand-500/60 object-cover shadow-2xl sm:h-48 sm:w-48"
        />

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">
          {t.home.greeting}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {name || "Muhammad Zakie"}
        </h1>
        <p className="mt-3 text-xl font-medium text-slate-300 sm:text-2xl">
          {jobTitle || "Software Engineer"}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200">
            <FaCode className="text-brand-400" aria-hidden="true" />
            {t.home.experience.replace("{years}", totalPengalaman.tahun)}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200">
            <FaMapMarkerAlt className="text-brand-400" aria-hidden="true" />
            {address || "Pekanbaru, Indonesia"}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200">
            <FaCheckCircle className="text-emerald-400" aria-hidden="true" />
            {t.home.openToWork}
          </span>
        </div>

        <p className="mt-7 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          {bioHome}
        </p>

        <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <a
            href={cvLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaFilePdf aria-hidden="true" />
            {t.home.downloadCv}
          </a>
          <a href="#portfolio" className="btn-outline">
            <FaBriefcase aria-hidden="true" />
            {t.home.viewPortfolio}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
