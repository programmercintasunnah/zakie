import React, { useState } from "react";
import { useNavigate } from "react-router";
import CompanyLogo from "../../assets/pragma.png";
import { FaHome, FaFileAlt, FaPhotoVideo, FaYoutube } from "react-icons/fa";
import Project1 from "../../assets/hsse-kalbar.png";
import Project2 from "../../assets/hsse-kalimantan.png";
import Project3 from "../../assets/waskita-app.png";
import { useProfile } from "../../context/ProfileContext";
import { motion } from "framer-motion";

const links = [
  {
    id: 1,
    url: "https://drive.google.com/drive/folders/1sx-9HrZ7BGOPNftD9G21hOCsUnc0TQYg?usp=share_link",
    icon: <FaPhotoVideo />,
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=-N7urlAJ5Zc&list=PLGwA21JLpwoMtXpnQHnhv0kasbL2tXWlt&index=21",
    icon: <FaYoutube />,
  },
  {
    id: 3,
    url: "https://drive.google.com/file/d/1KBzWCtZ1-MU5jo6BgouwUOAczMEQXOsX/view?usp=share_link",
    icon: <FaFileAlt />,
  },
];

const projects = [
  {
    id: "project1",
    title: "HSSE KALBAR",
    description: "using laravel 8 and mysql",
    imageUrl: Project1,
  },
  {
    id: "project2",
    title: "HSSE KALIMANTAN",
    description: "using laravel 8 and mysql",
    imageUrl: Project2,
  },
  {
    id: "project3",
    title: "WASKITA",
    description: "using laravel 8 + spatie and mysql",
    imageUrl: Project3,
  },
];

const Pragma = () => {
  const { bioAbout, textVariants, buttonVariants, imageVariants } =
    useProfile();

  const company = "PRAGMA INFORMATIKA";

  const jobType = "Full-time WFO";

  const position = "Web Developer";

  const period = "October, 15th 2021 to March, 31th 2022";

  const about =
    "Pragma Informatics is now located in Bandung, Indonesia which was founded in January 2010, Pragma works on Software Development both web and mobile based with PHP and Java programming languages as well as MySQL, Oracle and PostgreSQL databases. Pragma works on projects in the government, BUMN, and the private sector. several clients that have worked on include: PT PLN (Persero) APDP West Kalimantan, PT PLN (Persero) Maluku & North Maluku Region, PT PLN (Persero) AP2B Sulselrabar, PT PLN (Persero) Maumere Branch, PT PLN (Persero) AP Cempaka Putih, Cirebon City DPRD Secretariat, Cirebon City BPMPP, Cirebon Regency Bappeda, Cirebon Regency Transportation Service, Drug & Food Supervisory Agency, Disdukcapil DKI Jakarta Province, Gresik Police, Uzma Bernhard, Ministry of Environment, Ministry of National Education, PT Indonesia Comnets Plus , and several others.";

  const aboutProject =
    "this is a project for employee attendance, and this project is a college assignment, namely an internship assignment. This web-based application uses the codeigniter framework with a database in the form of mysql. To see more details, you can click the download button";

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (event) => {
    setSelectedProject(event.target.value);
  };

  const handleClearSelect = () => {
    setSelectedProject(null);
  };

  const filteredProjects = selectedProject
    ? projects.filter((project) => project.id === selectedProject)
    : projects;

  return (
    <div className="min-h-screen container px-4 py-8 bg-gradient-to-b from-blue-500 to-red-400">
      <div className="min-h-screen border-blue-700 rounded-xl shadow-md overflow-hidden bg-white px-4 border-2 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-2">
          <motion.img
            variants={imageVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            src={CompanyLogo}
            alt="Company Logo"
            className="h-16 md:h-20 w-auto mx-auto md:mx-0 mb-4 md:mb-0"
          />
          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-bold text-center md:text-left ml-2"
          >
            {company}
          </motion.h1>
          <div className="flex">
            {links.map((link) => (
              <motion.a
                variants={textVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.2 }}
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 mr-2"
              >
                {link.icon}
              </motion.a>
            ))}
            <button
              onClick={handleBack}
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 ml-auto"
            >
              <FaHome />
            </button>
          </div>
        </div>
        <motion.p
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-justify md:text-left mt-3"
        >
          {about}
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-between items-center my-4">
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-4 sm:mb-0"
          >
            <p className="text-lg font-bold">Job Type: {jobType}</p>
            <p className="text-lg font-bold">Position: {position}</p>
            <p className="text-md">Work Period: {period}</p>
          </motion.div>
          <div className="flex justify-center sm:justify-end items-center">
            <motion.a
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.5 }}
              href="https://drive.google.com/file/d/1pF32Rd0_fX_Q19uol-4lpMNTb3OVH7vH/view"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Show Project PDF
              </button>
            </motion.a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 p-4">
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-4 pr-4"
            >
              <label htmlFor="project-select">Choose Project:</label>
              <select
                id="project-select"
                name="project-select"
                value={selectedProject || ""}
                onChange={handleProjectSelect}
                className="block w-full mt-1 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">Choose</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.title}
                  </option>
                ))}
              </select>
              <button
                onClick={handleClearSelect}
                className="block w-full mt-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Clear
              </button>
            </motion.div>
          </div>
          <div className="w-full md:w-3/4 pt-4">
            <div
              className={`grid ${
                selectedProject ? "grid-cols-1" : "md:grid-cols-3"
              } gap-4`}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.5, delay: 0.6 }}
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={project.imageUrl}
                    alt="Screenshot"
                    className="w-full h-auto"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {project.title}
                    </h3>
                    {selectedProject && (
                      <p class="text-sm text-gray-500">{project.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pragma;
