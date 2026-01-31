import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaTools,
  FaLaptopCode,
  FaTimes,
  FaCode,
  FaJs,
  FaReact,
  FaDatabase,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaPhp,
  FaLaravel
} from "react-icons/fa";
import { SiSvelte } from "react-icons/si";
import { useProfile } from "../context/ProfileContext";

const PortfolioExperiences = () => {
  const { experiences, skills, personalProjects, loading } = useProfile();
  const [activeTab, setActiveTab] = useState("work");
  const [selectedCompanyModal, setSelectedCompanyModal] = useState(null);

  const openCompanyModal = (company) => {
    setSelectedCompanyModal(company);
  };

  const closeCompanyModal = () => {
    setSelectedCompanyModal(null);
  };

  const handlePortfolioClick = () => {
    window.location.href = "/portofolio";
  };

  const handleCompanyDetailClick = (company) => {
    openCompanyModal(company);
  };

  if (loading) {
    return (
      <div id="portfolio" className="bg-slate-200 min-h-screen py-8 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div id="portfolio" className="bg-slate-200 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <h1
          className="text-3xl font-bold text-center mb-10"
        >
          Portfolio & Skills
        </h1>

        {/* Tab Navigation - Responsive */}
        <div className="flex justify-center mb-8 px-4">
          <div className="bg-white rounded-lg p-1 shadow-md flex flex-col sm:flex-row gap-1 w-full sm:w-auto">
            <button
              className={`px-4 sm:px-6 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm sm:text-base ${activeTab === "work"
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:text-gray-800"
                }`}
              onClick={() => setActiveTab("work")}
            >
              <FaBriefcase className="flex-shrink-0" />
              <span className="whitespace-nowrap">Work Experiences</span>
            </button>
            <button
              className={`px-4 sm:px-6 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm sm:text-base ${activeTab === "skills"
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:text-gray-800"
                }`}
              onClick={() => setActiveTab("skills")}
            >
              <FaTools className="flex-shrink-0" />
              <span className="whitespace-nowrap">Skills</span>
            </button>
            <button
              className={`px-4 sm:px-6 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm sm:text-base ${activeTab === "personal"
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:text-gray-800"
                }`}
              onClick={() => setActiveTab("personal")}
            >
              <FaLaptopCode className="flex-shrink-0" />
              <span className="whitespace-nowrap">Personal Projects</span>
            </button>
          </div>
        </div>

        {/* Work Experiences Tab */}
        {activeTab === "work" && (
          <div id="work-experiences" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences?.map((experience) => (
              <div
                key={experience.id}
                className="bg-white shadow-md rounded-lg p-6"
              >
                {/* Company Logo */}
                <div className="flex justify-center mb-6">
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className="w-20 h-20 rounded-full object-contain bg-gray-50 p-2"
                  />
                </div>

                {/* Company Info */}
                <div className="text-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{experience.company}</h2>
                  <p className="text-gray-600 font-medium">{experience.position}</p>
                  <p className="text-sm text-gray-500 mb-1">{experience.type}</p>
                  <p className="text-sm text-gray-500 mb-1">{experience.location}</p>
                  <p className="text-sm text-blue-600 font-semibold">{experience.period}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {getTechStackForCompany(experience.company).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePortfolioClick}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded  text-sm"
                  >
                    Portfolio
                  </button>
                  <button
                    onClick={() => handleCompanyDetailClick(experience)}
                    className="flex-1 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded  text-sm"
                  >
                    Detail Company
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <div id="skills-section" className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-10"
            >
              Skills
            </h2>
            <div className="flex flex-wrap gap-10 justify-center items-center mx-8">
              {skills?.map((skill) => {
                const IconComponent = getIconComponent(skill.icon);
                return (
                  <div
                    key={skill.id}
                    className="flex flex-col items-center justify-center"
                  >
                    {IconComponent && <IconComponent className={`text-6xl mb-2 ${skill.color}`} />}
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Personal Projects Tab */}
        {activeTab === "personal" && (
          <div id="personal-projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <div
                data-aos-delay={`${index * 100}`}
                key={project.id}
                className="bg-white shadow-md rounded-lg p-6"
              >
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={project.name}
                    className="mb-4 w-full h-48 object-cover rounded"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="mb-4 w-full h-48 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                <p className="text-gray-700 mb-3">{project.description}</p>
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-2 mb-3">
                  {project.photoLink && (
                    <a
                      href={project.photoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                    >
                      📷 Photos
                    </a>
                  )}
                  {project.youtubeLink && (
                    <a
                      href={project.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                    >
                      📹 Video
                    </a>
                  )}
                  {project.fileLink && (
                    <a
                      href={project.fileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
                    >
                      📄 Files
                    </a>
                  )}
                </div>
                <div className="bg-green-50 p-2 rounded text-sm text-green-700">
                  🚀 Personal Project
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State for Personal Projects */}
        {activeTab === "personal" && personalProjects.length === 0 && (
          <div className="text-center py-12 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-gray-600 mb-2">No personal projects available.</p>
            <div className="text-xs text-left bg-white p-2 rounded border">
              <strong>Debug Info:</strong><br />
              Length: {personalProjects?.length}<br />
              Loading: {loading ? 'Yes' : 'No'}<br />
              Type: {typeof personalProjects}<br />
              Keys: {Object.keys(personalProjects || {}).join(', ')}
            </div>
          </div>
        )}

        {/* Company Detail Modal */}
        {selectedCompanyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeCompanyModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img
                      src={selectedCompanyModal.logo}
                      alt={selectedCompanyModal.company}
                      className="w-16 h-16 rounded-full object-contain bg-white p-2"
                    />
                    <div>
                      <h2 className="text-2xl font-bold">{selectedCompanyModal.company}</h2>
                      <p className="text-blue-100 mt-1">{selectedCompanyModal.position}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeCompanyModal}
                    className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg "
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Company Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Position:</span>
                        <span className="font-medium">{selectedCompanyModal.position}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium">{selectedCompanyModal.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{selectedCompanyModal.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Period:</span>
                        <span className="font-medium text-blue-600">{selectedCompanyModal.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Company Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">About Company</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600">
                        {getCompanyDescription(selectedCompanyModal.company)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Projects at Company */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Projects at {selectedCompanyModal.company}</h3>
                  <div className="space-y-3">
                    {getProjectsForCompany(selectedCompanyModal.company).map((project, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800">{project.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies?.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 mt-6">
                  <button
                    onClick={handlePortfolioClick}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 "
                  >
                    View Portfolio
                  </button>
                  <button
                    onClick={closeCompanyModal}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 "
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Helper functions

// Icon mapping untuk convert string ke component
const iconMap = {
  FaCode: FaCode,
  FaJs: FaJs,
  FaReact: FaReact,
  FaDatabase: FaDatabase,
  FaLinux: FaLinux,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaNodeJs: FaNodeJs,
  FaPython: FaPython,
  FaGitAlt: FaGitAlt,
  FaDocker: FaDocker,
  FaAws: FaAws,
  // Icon yang tidak ada di react-icons/fa akan menggunakan FaCode sebagai fallback
  FaChrome: FaCode,
  FaFirefoxBrowser: FaCode,
  FaSass: FaCode,
  FaBootstrap: FaCode,
  FaGit: FaCode,
  FaGithub: FaCode,
  FaFigma: FaCode,
  FaWordpress: FaCode,
  FaNpm: FaCode,
  FaVuejs: FaCode,
  FaAngular: FaCode,
  FaSvelte: SiSvelte, // Dari react-icons/si
  FaRedux: FaCode,
  FaPhp: FaPhp,
  FaLaravel: FaLaravel,
  FaMysql: FaDatabase, // Database untuk MySQL
  FaPostgresql: FaDatabase, // Database untuk PostgreSQL
  FaUbuntu: FaLinux, // Linux untuk Ubuntu
  FaWindows: FaCode,
  FaApple: FaCode
};

const getIconComponent = (iconName) => {
  // Return FaCode untuk semua icon yang tidak ada atau undefined
  if (!iconName) return FaCode;
  const icon = iconMap[iconName];
  return icon || FaCode;
};

const getTechStackForCompany = (company) => {
  const techStacks = {
    "Hunayn Teknologi": ["Golang", "React.js", "PostgreSQL", "Docker", "Azure", "TypeScript", "Svelte"],
    "Pragma Informatika": ["Laravel", "PHP", "MySQL", "JavaScript", "CSS3"],
    "Rakitek": ["Laravel", "Vue.js", "JavaScript", "MySQL", "REST API", "CSS3"],
    "PPS Ibnu Mas'ud": ["PHP", "MySQL", "JavaScript", "CodeIgniter", "Bootstrap"]
  };
  return techStacks[company] || ["JavaScript", "HTML", "CSS", "MySQL", "PHP"];
};

const getCompanyDescription = (company) => {
  const descriptions = {
    "Hunayn Teknologi": "Hunayn Teknologi is a technology company focused on developing innovative software solutions for Islamic finance and digital services. The company specializes in building Sharia-compliant financial applications, educational platforms, and business management systems.",
    "Pragma Informatika": "Pragma Informatika is a software development company that provides custom web and application solutions for various industries. With expertise in PHP, Laravel, and modern web technologies, they deliver robust and scalable applications.",
    "Rakitek": "Rakitek (Ruang Kreasi Inovasi Teknologi) is a technology company focused on developing business management solutions, particularly for serviced offices, coworking spaces, and event management systems.",
    "PPS Ibnu Mas'ud": "PPS Ibnu Mas'ud is an educational institution providing Islamic education and services. The internship experience provided foundational knowledge in software development and real-world project implementation."
  };
  return descriptions[company] || "A dynamic company focused on innovation and excellence in technology solutions.";
};

const getProjectsForCompany = (company) => {
  const projects = {
    "Hunayn Teknologi": [
      {
        name: "Syirkah Web Application",
        description: "Core multi-tenant Sharia cooperative system with backend and frontend",
        technologies: ["Golang", "React.js", "PostgreSQL", "Docker"]
      },
      {
        name: "iBank Syirkah Mobile App",
        description: "Mobile banking application for Syirkah cooperatives",
        technologies: ["React Native", "Expo", "TypeScript"]
      }
    ],
    "Pragma Informatika": [
      {
        name: "HSSE Kalimantan Multi-Tenant",
        description: "Health, Safety, Security, and Environment management system for PLN units",
        technologies: ["Laravel 8", "MySQL", "JavaScript"]
      }
    ],
    "Rakitek": [
      {
        name: "Portal Rakomsis",
        description: "Customer-facing portal for Rakomsis users",
        technologies: ["Vue.js", "JavaScript", "REST API"]
      }
    ],
    "PPS Ibnu Mas'ud": [
      {
        name: "Educational Management System",
        description: "Internship project for educational institution management",
        technologies: ["PHP", "MySQL", "CodeIgniter"]
      }
    ]
  };
  return projects[company] || [];
};

export default PortfolioExperiences;