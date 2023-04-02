import React, { useState } from "react";
import { useNavigate } from "react-router";
import taApp from "../assets/ta-app.png";
import kpApp from "../assets/kp-app.png";
import darsalApp from "../assets/darsal-app.png";

const projects = [
  {
    name: "E-Voting Blockchain",
    screenshot: taApp,
    description: "using react js and ethereum blockchain",
  },
  {
    name: "Presence App",
    screenshot: kpApp,
    description: "using codeigniter 3 and mysql",
  },
  {
    name: "Darsalafy App",
    screenshot: darsalApp,
    description: "using laravel 8 and mysql",
  },
];

const ProjectCard = ({ name, screenshot, description }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 m-2 max-w-sm">
      <img src={screenshot} alt={`Screenshot dari ${name}`} className="mb-4" />
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const navigate = useNavigate();

  const handleToMoreProjects = () => {
    navigate("/project-detail");
  };

  return (
    <div id="projects" className="min-h-screen p-8">
      <h1 className="text-3xl text-center font-bold mb-10">Projects</h1>
      <div className="flex flex-wrap justify-center">
        {projects
          .slice(0, showMore ? projects.length : 3)
          .map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleToMoreProjects}
        >
          Project Details
        </button>
      </div>
    </div>
  );
};

export default Projects;
