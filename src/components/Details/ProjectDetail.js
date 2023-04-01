import React, { useState } from "react";
import { useNavigate } from "react-router";
import ProjectImage from "../../assets/kp-app.png";
import { FaHome, FaFileAlt, FaPhotoVideo, FaYoutube } from "react-icons/fa";

const projects = [
  {
    id: "project1",
    title: "Project 1",
    description: "Deskripsi singkat mengenai project 1",
    imageUrl: "https://via.placeholder.com/640x480",
    detailDescription: "Deskripsi detail mengenai project 1",
  },
  {
    id: "project2",
    title: "Project 2",
    description: "Deskripsi singkat mengenai project 2",
    imageUrl: "https://via.placeholder.com/640x480",
    detailDescription: "Deskripsi detail mengenai project 2",
  },
  {
    id: "project3",
    title: "Project 3",
    description: "Deskripsi singkat mengenai project 3",
    imageUrl: "https://via.placeholder.com/640x480",
    detailDescription: "Deskripsi detail mengenai project 3",
  },
  {
    id: "project4",
    title: "Project 4",
    description: "Deskripsi singkat mengenai project 4",
    imageUrl: "https://via.placeholder.com/640x480",
    detailDescription: "Deskripsi detail mengenai project 4",
  },
];

const ProjectDetail = () => {
  const title = "MY PROJECTS";

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
    <div className="container px-4 py-8 bg-gradient-to-b from-blue-500 to-red-400">
      <div className="border-blue-700 rounded-xl shadow-md overflow-hidden bg-white px-4 border-2 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-2">
          <h1 className="text-2xl font-bold text-center md:text-left ml-2">
            {title}
          </h1>
          <div className="flex">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 mr-2"
            >
              <FaPhotoVideo />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 mr-2"
            >
              <FaYoutube />
            </a>
            <a
              href=""
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
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 p-4">
            <div className="pt-4 pr-4">
              <label htmlFor="project-select">Choose Project:</label>
              <select
                id="project-select"
                name="project-select"
                value={selectedProject || ""}
                onChange={handleProjectSelect}
                className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={project.imageUrl}
                    alt="Screenshot"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {project.title}
                    </h3>
                    <p class="text-sm text-gray-500">{project.description}</p>
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

export default ProjectDetail;
