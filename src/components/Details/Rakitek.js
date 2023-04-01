import React, { useState } from "react";
import { useNavigate } from "react-router";
import CompanyLogo from "../../assets/rakitek.jpg";
import { FaHome, FaFileAlt, FaPhotoVideo, FaYoutube } from "react-icons/fa";
import Project1 from "../../assets/rakomsis-app.png";
import Project2 from "../../assets/portal-rakomsis.png";

const projects = [
  {
    id: "project1",
    title: "Rakomsis",
    description: "using laravel, mysql, api",
    imageUrl: Project1,
  },
  {
    id: "project2",
    title: "Portal Rakomsis",
    description: "using vue js",
    imageUrl: Project2,
  },
];

const Rakitek = () => {
  const company = "Ruang Kreasi Inovasi Teknologi";

  const jobType = "Full-time WFH";

  const position = "Web Programmer";

  const period = "April, 1st 2022 to Februari, 28th 2023";

  const about =
    "Ruang Kreasi Inovasi Teknologi or known as the Rakitek is an IT consulting company founded in 2017 which is now located in South Jakarta, Indonesia.";

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
    <div className="container px-4 py-8 bg-gradient-to-b from-blue-400 to-blue-800">
      <div className="border-blue-700 rounded-xl shadow-md overflow-hidden bg-white px-4 border-2 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-2">
          <img
            src={CompanyLogo}
            alt="Company Logo"
            className="h-16 md:h-20 w-auto mx-auto md:mx-0 mb-4 md:mb-0"
          />
          <h1 className="text-2xl font-bold text-center md:text-left ml-2">
            {company}
          </h1>
          <div className="flex">
            <a
              href="https://drive.google.com/file/d/14JePYsb-7cy9qWyX7vCxIr8CHy0t7jp5/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 mr-2"
            >
              <FaPhotoVideo />
            </a>
            <a
              href="https://www.youtube.com/watch?v=6ctdEJ5wctA&list=PLGwA21JLpwoMtXpnQHnhv0kasbL2tXWlt&index=24"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 mr-2"
            >
              <FaYoutube />
            </a>
            <a
              href="https://drive.google.com/file/d/1hSvLMee5s4q_e4BjKAPmXtS4B7Mmc-bJ/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 mr-2"
            >
              <FaFileAlt />
            </a>
            <button
              onClick={handleBack}
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 ml-auto"
            >
              <FaHome />
            </button>
          </div>
        </div>
        <p className="text-justify md:text-left mt-3">{about}</p>
        <div className="flex flex-col sm:flex-row justify-between items-center my-4">
          <div className="mb-4 sm:mb-0">
            <p className="text-lg font-bold">Job Type: {jobType}</p>
            <p className="text-lg font-bold">Position: {position}</p>
            <p className="text-md">Work Period: {period}</p>
          </div>
          <div className="flex justify-center sm:justify-end items-center">
            <a href="" target="_blank" rel="noreferrer">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Show Project PDF
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 p-4">
            <div className="pt-4 pr-4">
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
            </div>
          </div>
          <div className="w-full md:w-3/4 pt-4">
            <div
              className={`grid ${
                selectedProject ? "grid-cols-1" : "md:grid-cols-3"
              } gap-4`}
            >
              {filteredProjects.map((project) => (
                <div
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rakitek;
