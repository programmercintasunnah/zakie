import { useState } from "react";
import {
  FaUser,
  FaGraduationCap,
  FaCertificate,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGithub,
  FaGitlab,
  FaFileContract,
  FaDownload,
  FaTimes,
} from "react-icons/fa";
import { useProfile } from "../context/ProfileContext";
import { useLanguage } from "../context/LanguageContext";
import Modal from "./Modal";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const tabs = [
  { id: "bio", labelKey: "tabBio", icon: <FaUser aria-hidden="true" /> },
  {
    id: "personal",
    labelKey: "tabPersonal",
    icon: <FaFileContract aria-hidden="true" />,
  },
  {
    id: "education",
    labelKey: "tabEducation",
    icon: <FaGraduationCap aria-hidden="true" />,
  },
  {
    id: "certificates",
    labelKey: "tabCertificates",
    icon: <FaCertificate aria-hidden="true" />,
  },
];

const About = () => {
  const {
    bioAbout,
    email,
    github,
    wa,
    gitlab,
    address,
    personalData,
    educationData,
    certificates,
    images,
    name,
  } = useProfile();
  const { t } = useLanguage();

  const [activeTab, setActiveTab] = useState("bio");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const contactMethods = [
    {
      icon: <FaWhatsapp aria-hidden="true" />,
      link: wa ? `https://wa.me/${wa.replace(/\D/g, "")}` : null,
      label: t.about.chatWhatsapp,
    },
    {
      icon: <FaGithub aria-hidden="true" />,
      link: github ? `https://github.com/${github}` : null,
      label: github || "GitHub",
    },
    {
      icon: <FaGitlab aria-hidden="true" />,
      link: gitlab ? `https://gitlab.com/${gitlab}` : null,
      label: gitlab || "GitLab",
    },
    {
      icon: <FaEnvelope aria-hidden="true" />,
      link: email ? `mailto:${email}` : null,
      label: email || "Email",
    },
    {
      icon: <FaMapMarkerAlt aria-hidden="true" />,
      link: null,
      label: address,
    },
  ];

  const handleTabKeyDown = (event, index) => {
    let nextIndex;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft")
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = tabs.length - 1;
    else return;

    event.preventDefault();
    setActiveTab(tabs[nextIndex].id);
    document.getElementById(`about-tab-${tabs[nextIndex].id}`)?.focus();
  };

  return (
    <section id="about" className="section bg-white dark:bg-slate-950">
      <div className="container-page">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />

        <div
          className={`mt-12 ${
            activeTab === "certificates"
              ? ""
              : "lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start lg:gap-12"
          }`}
        >
          {activeTab !== "certificates" && (
            <Reveal className="mx-auto mb-10 w-full max-w-sm lg:sticky lg:top-24 lg:mb-0 lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-soft dark:border-slate-800 dark:bg-slate-900">
                <img
                  src={images?.profile || "/assets/zakie-fotor.webp"}
                  alt={t.home.photoAlt.replace(
                    "{name}",
                    name || "Muhammad Zakie"
                  )}
                  width="600"
                  height="750"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          )}

          <div>
            <div className="mb-8 flex justify-center">
              <div
                role="tablist"
                aria-label={t.about.tablistLabel}
                className="flex w-full max-w-full gap-1 overflow-x-auto rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-slate-800 dark:bg-slate-900 sm:w-auto"
              >
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    id={`about-tab-${tab.id}`}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`about-panel-${tab.id}`}
                    tabIndex={activeTab === tab.id ? 0 : -1}
                    onClick={() => setActiveTab(tab.id)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                    className={`flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 sm:flex-none ${
                      activeTab === tab.id
                        ? "bg-brand-600 text-white shadow"
                        : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    }`}
                  >
                    {tab.icon}
                    <span>{t.about[tab.labelKey]}</span>
                  </button>
                ))}
              </div>
            </div>

            <Reveal key={activeTab}>
              {activeTab === "bio" && (
                <div
                  id="about-panel-bio"
                  role="tabpanel"
                  aria-labelledby="about-tab-bio"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t.about.aboutMe}
                  </h3>
                  <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                    {bioAbout}
                  </p>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900 dark:text-white">
                    {t.about.contact}
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {contactMethods.map((method) => {
                      const content = (
                        <>
                          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-300">
                            {method.icon}
                          </span>
                          <span className="break-all text-sm font-medium text-slate-700 dark:text-slate-300">
                            {method.label}
                          </span>
                        </>
                      );

                      return method.link ? (
                        <a
                          key={method.label}
                          href={method.link}
                          target={
                            method.link.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            method.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-brand-200 hover:bg-brand-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700 dark:hover:bg-slate-800"
                        >
                          {content}
                        </a>
                      ) : (
                        <div
                          key={method.label}
                          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900"
                        >
                          {content}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === "personal" && (
                <div
                  id="about-panel-personal"
                  role="tabpanel"
                  aria-labelledby="about-tab-personal"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t.about.personalTitle}
                  </h3>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {personalData.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                      >
                        <p className="rounded-t-xl bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
                          {item.label}
                        </p>
                        <p className="px-4 py-3 text-slate-800 dark:text-slate-200">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "education" && (
                <div
                  id="about-panel-education"
                  role="tabpanel"
                  aria-labelledby="about-tab-education"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t.about.educationTitle}
                  </h3>
                  <ol className="mt-6 space-y-4 border-l-2 border-brand-100 pl-5 dark:border-brand-900">
                    {educationData.map((item) => (
                      <li key={item.label} className="relative">
                        <span
                          aria-hidden="true"
                          className="absolute -left-[27px] top-2 h-3 w-3 rounded-full border-2 border-white bg-brand-500 dark:border-slate-950"
                        />
                        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                            {item.period}
                          </p>
                          <h4 className="mt-1 font-bold text-slate-900 dark:text-white">
                            {item.label}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {item.value}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {activeTab === "certificates" && (
                <div
                  id="about-panel-certificates"
                  role="tabpanel"
                  aria-labelledby="about-tab-certificates"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t.about.certificatesTitle}
                  </h3>
                  <div className="cv-auto mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {certificates.map((certificate) => (
                      <button
                        key={certificate.id}
                        type="button"
                        onClick={() => setSelectedCertificate(certificate)}
                        className="group overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700"
                      >
                        <div className="flex aspect-[4/3] items-center justify-center bg-slate-50 p-3 dark:bg-slate-800">
                          <img
                            src={certificate.image}
                            alt={
                              certificate.title ||
                              `${t.about.certificatesTitle} ${certificate.id}`
                            }
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="p-4">
                          <p className="font-medium leading-snug text-slate-800 dark:text-slate-200">
                            {certificate.title ||
                              `${t.about.certificatesTitle} ${certificate.id}`}
                          </p>
                          {(certificate.issuer || certificate.date) && (
                            <p className="mt-1 text-xs font-medium text-brand-600 dark:text-brand-400">
                              {[certificate.issuer, certificate.date]
                                .filter(Boolean)
                                .join(" · ")}
                            </p>
                          )}
                          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                            {t.about.clickToView}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>

      <Modal
        open={Boolean(selectedCertificate)}
        onClose={() => setSelectedCertificate(null)}
        labelledBy="certificate-modal-title"
        panelClassName="max-w-5xl"
      >
        {selectedCertificate && (
          <>
            <div className="flex items-start justify-between gap-4 bg-gradient-to-r from-brand-700 to-brand-500 p-5 text-white sm:p-6">
              <div>
                <h3
                  id="certificate-modal-title"
                  className="text-xl font-bold sm:text-2xl"
                >
                  {selectedCertificate.title ||
                    `${t.about.certificatesTitle} ${selectedCertificate.id}`}
                </h3>
                <p className="mt-1 text-sm text-brand-100">
                  {[selectedCertificate.issuer, selectedCertificate.date]
                    .filter(Boolean)
                    .join(" · ") ||
                    `${t.about.certificatesTitle} ${selectedCertificate.id}`}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label={t.common.close}
                className="rounded-lg p-2 transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FaTimes aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto bg-slate-50 p-4 dark:bg-slate-950 sm:p-6">
              <div className="rounded-xl bg-white p-3 shadow-inner dark:bg-slate-900 sm:p-4">
                <img
                  src={selectedCertificate.image}
                  alt={
                    selectedCertificate.title ||
                    `${t.about.certificatesTitle} ${selectedCertificate.id}`
                  }
                  className="mx-auto max-h-[55vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {[
                    selectedCertificate.title ||
                      `${t.about.certificatesTitle} ${selectedCertificate.id}`,
                    selectedCertificate.issuer,
                    selectedCertificate.date,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                </p>
                <a
                  href={selectedCertificate.image}
                  download={`certificate-${selectedCertificate.id}.webp`}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  <FaDownload aria-hidden="true" />
                  {t.common.download}
                </a>
              </div>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};

export default About;
