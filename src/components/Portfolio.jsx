import { useMemo, useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaYoutube,
  FaImages,
  FaFileAlt,
  FaBuilding,
  FaTools,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaClock,
  FaTimes,
  FaCode,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaServer,
  FaReact,
  FaVuejs,
  FaJs,
  FaMobileAlt,
  FaDatabase,
  FaDocker,
  FaAws,
  FaCloud,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import { useProfile } from "../context/ProfileContext";
import { useLanguage } from "../context/LanguageContext";
import Modal from "./Modal";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const skillIcons = {
  FaCode,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaServer,
  FaReact,
  FaVuejs,
  FaJs,
  FaMobileAlt,
  FaDatabase,
  FaDocker,
  FaAws,
  FaCloud,
  FaGitAlt,
  FaLinux,
};

const categoryIcons = {
  Backend: FaServer,
  Frontend: FaLaptopCode,
  Mobile: FaMobileAlt,
  Database: FaDatabase,
  "DevOps & Tools": FaCloud,
};

const ProjectImage = ({ project }) => {
  if (!project.screenshot) {
    return (
      <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-brand-50 to-slate-100 dark:from-brand-950 dark:to-slate-800">
        <FaLaptopCode
          size={44}
          className="text-brand-300 dark:text-brand-500"
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-[16/10] items-center justify-center bg-slate-50 p-4 dark:bg-slate-800">
      <img
        src={project.screenshot}
        alt={`Screenshot ${project.name}`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-contain"
      />
    </div>
  );
};

const ProjectLinks = ({ project }) => {
  const links = [
    {
      key: "photoLink",
      label: "Photos",
      icon: FaImages,
      href: project.photoLink,
    },
    {
      key: "youtubeLink",
      label: "Video",
      icon: FaYoutube,
      href: project.youtubeLink,
    },
    {
      key: "fileLink",
      label: "Files",
      icon: FaFileAlt,
      href: project.fileLink,
    },
    { key: "github", label: "GitHub", icon: FaGithub, href: project.github },
    {
      key: "demo",
      label: "Demo",
      icon: FaExternalLinkAlt,
      href: project.demo,
    },
  ].filter((link) => Boolean(link.href));

  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {links.map(({ key, label, icon: Icon, href }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-200 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-brand-600 dark:hover:text-brand-300"
        >
          <Icon aria-hidden="true" />
          {label}
        </a>
      ))}
    </div>
  );
};

const Portfolio = () => {
  const { experiences, personalProjects, skills } = useProfile();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("work");
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectCompany, setSelectedProjectCompany] = useState(null);

  const tabs = [
    {
      key: "work",
      label: t.portfolio.tabWork,
      icon: <FaBuilding aria-hidden="true" />,
    },
    {
      key: "skills",
      label: t.portfolio.tabSkills,
      icon: <FaTools aria-hidden="true" />,
    },
    {
      key: "personal",
      label: t.portfolio.tabPersonal,
      icon: <FaLaptopCode aria-hidden="true" />,
    },
  ];

  const activeCompany =
    experiences.find((item) => item.id === selectedCompanyId) ||
    experiences[0] ||
    null;

  const skillGroups = useMemo(() => {
    return skills.reduce((groups, skill) => {
      const category = skill.category || "Lainnya";
      if (!groups[category]) groups[category] = [];
      groups[category].push(skill);
      return groups;
    }, {});
  }, [skills]);

  const openProject = (project, company = null) => {
    setSelectedProject(project);
    setSelectedProjectCompany(company);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setSelectedProjectCompany(null);
  };

  const projectFeatures = selectedProject?.features;

  return (
    <section
      id="portfolio"
      className="section bg-slate-100 dark:bg-slate-900/50"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          description={t.portfolio.description}
        />

        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label={t.portfolio.tablistLabel}
            className="flex w-full max-w-full flex-col gap-1 overflow-x-auto rounded-xl border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:w-auto sm:flex-row"
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 sm:flex-none sm:px-6 ${
                  activeTab === tab.key
                    ? "bg-brand-600 text-white shadow"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <Reveal key={activeTab}>
          {activeTab === "work" && (
            <div className="mt-10">
              {experiences.length === 0 ? (
                <p className="py-12 text-center text-slate-500 dark:text-slate-400">
                  {t.portfolio.emptyWork}
                </p>
              ) : (
                <>
                  <div className="mb-8 flex justify-center">
                    <div className="flex w-full flex-col gap-1 rounded-xl border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:w-auto sm:flex-row">
                      {experiences.map((experience) => {
                        const isSelected = activeCompany?.id === experience.id;

                        return (
                          <button
                            key={experience.id}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => setSelectedCompanyId(experience.id)}
                            className={`flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 sm:flex-none ${
                              isSelected
                                ? "bg-brand-600 text-white shadow"
                                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                            }`}
                          >
                            <img
                              src={experience.logo}
                              alt=""
                              width="24"
                              height="24"
                              loading="lazy"
                              className="h-6 w-6 flex-none rounded-full bg-white object-contain"
                            />
                            {experience.company}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {activeCompany && (
                    <>
                      <div className="card p-6 sm:p-8">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                          <img
                            src={activeCompany.logo}
                            alt={`Logo ${activeCompany.company}`}
                            width="80"
                            height="80"
                            loading="lazy"
                            className="h-20 w-20 flex-none rounded-2xl border border-slate-100 bg-slate-50 object-contain p-2 dark:border-slate-700 dark:bg-slate-800"
                          />
                          <div className="flex-1">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                  {activeCompany.company}
                                </h3>
                                <p className="mt-1 font-medium text-brand-700 dark:text-brand-400">
                                  {activeCompany.position}
                                </p>
                              </div>
                              {activeCompany.website && (
                                <a
                                  href={activeCompany.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-200 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-600 dark:hover:text-brand-300"
                                >
                                  <FaExternalLinkAlt aria-hidden="true" />
                                  {t.portfolio.website}
                                </a>
                              )}
                            </div>

                            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                              <span className="inline-flex items-center gap-1.5">
                                <FaMapMarkerAlt aria-hidden="true" />
                                {activeCompany.location}
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <FaClock aria-hidden="true" />
                                {activeCompany.period}
                              </span>
                              <span>{activeCompany.type}</span>
                            </div>
                          </div>
                        </div>

                        {activeCompany.description && (
                          <p className="mt-5 border-t border-slate-100 pt-5 text-sm leading-relaxed text-slate-600 dark:border-slate-800 dark:text-slate-400 sm:text-base">
                            {activeCompany.description}
                          </p>
                        )}

                        {activeCompany.links?.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {activeCompany.links.map((link) => (
                              <a
                                key={`${link.label}-${link.url}`}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-brand-300"
                              >
                                <FaExternalLinkAlt aria-hidden="true" />
                                {link.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="cv-auto mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {activeCompany.projects?.map((project) => (
                          <article
                            key={project.id}
                            className="card flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lg"
                          >
                            <ProjectImage project={project} />
                            <div className="flex flex-1 flex-col p-6">
                              {project.role && (
                                <span className="chip mb-3 self-start">
                                  {project.role}
                                </span>
                              )}
                              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                {project.name}
                              </h4>
                              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                {project.description}
                              </p>

                              {project.technologies?.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                  {project.technologies
                                    .slice(0, 4)
                                    .map((tech) => (
                                      <span
                                        key={tech}
                                        className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  {project.technologies.length > 4 && (
                                    <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                      +{project.technologies.length - 4}
                                    </span>
                                  )}
                                </div>
                              )}

                              <button
                                type="button"
                                onClick={() =>
                                  openProject(project, activeCompany)
                                }
                                className="mt-5 w-full rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                              >
                                {t.portfolio.viewDetails}
                              </button>
                            </div>
                          </article>
                        ))}
                      </div>

                      {(!activeCompany.projects ||
                        activeCompany.projects.length === 0) && (
                        <p className="py-10 text-center text-slate-500 dark:text-slate-400">
                          {t.portfolio.emptyProjects}
                        </p>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="mt-10">
              {skills.length === 0 ? (
                <p className="py-12 text-center text-slate-500 dark:text-slate-400">
                  {t.portfolio.emptySkills}
                </p>
              ) : (
                <div className="cv-auto grid gap-6 md:grid-cols-2">
                  {Object.entries(skillGroups).map(([category, items]) => {
                    const CategoryIcon = categoryIcons[category] || FaTools;

                    return (
                      <div key={category} className="card p-6">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-300">
                            <CategoryIcon aria-hidden="true" />
                          </span>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            {category}
                          </h3>
                        </div>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {items.map((skill) => {
                            const Icon = skillIcons[skill.icon] || FaCode;
                            return (
                              <li
                                key={skill.id}
                                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                              >
                                <Icon
                                  className="text-brand-600 dark:text-brand-400"
                                  aria-hidden="true"
                                />
                                {skill.name}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {activeTab === "personal" && (
            <div className="mt-10">
              {personalProjects.length === 0 ? (
                <p className="py-12 text-center text-slate-500 dark:text-slate-400">
                  {t.portfolio.emptyPersonal}
                </p>
              ) : (
                <div className="cv-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {personalProjects.map((project) => (
                    <article
                      key={project.id}
                      className="card flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <ProjectImage project={project} />
                      <div className="flex flex-1 flex-col p-6">
                        {project.role && (
                          <span className="chip mb-3 self-start">
                            {project.role}
                          </span>
                        )}
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          {project.name}
                        </h4>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {project.description}
                        </p>
                        {project.technologies?.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={() => openProject(project)}
                          className="mt-5 w-full rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                        >
                          {t.portfolio.viewDetails}
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}
        </Reveal>
      </div>

      <Modal
        open={Boolean(selectedProject)}
        onClose={closeProject}
        labelledBy="project-modal-title"
        panelClassName="max-w-3xl"
      >
        {selectedProject && (
          <>
            <div className="flex items-start justify-between gap-4 bg-gradient-to-r from-brand-700 to-brand-500 px-5 py-5 text-white sm:px-6">
              <div>
                <h3
                  id="project-modal-title"
                  className="text-xl font-bold sm:text-2xl"
                >
                  {selectedProject.name}
                </h3>
                <p className="mt-1 text-sm text-brand-100">
                  {selectedProject.role}
                  {selectedProjectCompany
                    ? ` · ${selectedProjectCompany.company}`
                    : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={closeProject}
                aria-label={t.common.close}
                className="rounded-lg p-2 transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <FaTimes aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-5 sm:p-6">
              {selectedProject.screenshot && (
                <div className="mb-6 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
                  <img
                    src={selectedProject.screenshot}
                    alt={`Screenshot ${selectedProject.name}`}
                    className="mx-auto max-h-[300px] w-auto max-w-full rounded-lg object-contain"
                  />
                </div>
              )}

              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t.portfolio.descriptionLabel}
                </h4>
                <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-400">
                  {selectedProject.description}
                </p>
              </div>

              {(selectedProject.technologies || selectedProject.techStack)
                ?.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t.portfolio.tech}
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(
                      selectedProject.technologies || selectedProject.techStack
                    ).map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {projectFeatures?.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {t.portfolio.features}
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {projectFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1 text-brand-500"
                        >
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6">
                <ProjectLinks project={selectedProject} />
              </div>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;
