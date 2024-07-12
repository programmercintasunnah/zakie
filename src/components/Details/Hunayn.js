import React, { useState } from "react";
import { useNavigate } from "react-router";
import CompanyLogo from "../../assets/hunayn-logo.png";
import { FaHome, FaFileAlt, FaPhotoVideo, FaYoutube } from "react-icons/fa";
import Project1 from "../../assets/dashboard-syirkah.png";
import Project2 from "../../assets/landing-company.png";
import Project3 from "../../assets/jakarta-halal-expo.png";
import { motion } from "framer-motion";
import { useProfile } from "../../context/ProfileContext";

const links = [
  {
    id: 1,
    title: "Photo/Video",
    link: "https://drive.google.com/drive/folders/11KB8Fg_E6xItulb63BPsbPNLzT_6hGQa?usp=sharing",
    icon: <FaPhotoVideo />,
  },
  {
    id: 2,
    title: "YouTube",
    link: "",
    icon: <FaYoutube />,
  },
  {
    id: 3,
    title: "File",
    link: "https://drive.google.com/drive/folders/11KB8Fg_E6xItulb63BPsbPNLzT_6hGQa?usp=sharing",
    icon: <FaFileAlt />,
  },
];

const projects = [
  {
    id: "project1",
    title: "Syirkah",
    description: "using golang, react js, postgress",
    imageUrl: Project1,
  },
  {
    id: "project2",
    title: "Landing Company",
    description: "using svelte js",
    imageUrl: Project2,
  },
  {
    id: "project3",
    title: "Jakarta Halal Expo",
    description: "using svelte js",
    imageUrl: Project3,
  },
];

const Hunayn = () => {
  const { textVariants, buttonVariants, imageVariants } = useProfile();

  const company = "Hunayn Teknologi";

  const jobType = "Full-time WFH";

  const position = "Software Engineer";

  const period = "May, 15th 2023 to now";

  const about =
    "Hunayn Teknologi or known as the Hunayn is an IT consulting company founded in 2023 which is now located in BSD Tangerang, Indonesia.";

  const aboutProject = "";

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
    <div className="min-h-screen container px-4 py-8 bg-gradient-to-b from-green-400 to-blue-900">
      <div className="min-h-screen border-green-700 rounded-xl shadow-md overflow-hidden bg-white px-4 border-2 sm:px-6 lg:px-8 py-8">
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
            {links.map((item) => (
              <a
                variants={textVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.2 }}
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-green-500 text-white hover:bg-green-700 mr-2"
              >
                {item.icon}
              </a>
            ))}
            <button
              onClick={handleBack}
              className="p-2 rounded-full bg-green-500 text-white hover:bg-green-700 ml-auto"
            >
              <FaHome />
            </button>
          </div>
        </div>
        <p className="text-justify md:text-left mt-3">{about}</p>
        <div className="flex flex-col sm:flex-row justify-between items-center my-4">
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4 sm:mb-0"
          >
            <p className="text-lg font-bold">Job Type: {jobType}</p>
            <p className="text-lg font-bold">Position: {position}</p>
            <p className="text-md">Work Period: {period}</p>
          </motion.div>
          <div className="flex justify-center sm:justify-end items-center">
            <a href="" target="_blank" rel="noreferrer">
              <motion.button
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Show Project PDF
              </motion.button>
            </a>
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

export default Hunayn;
