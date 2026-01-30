import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useProfile } from "../context/ProfileContext";

const Projects = () => {
  const { projects, loading } = useProfile();
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleToMoreProjects = () => {
    navigate("/project-detail");
  };

  if (loading) {
    return (
      <div id="projects" className="min-h-screen p-8 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div id="projects" className="min-h-screen p-8">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-3xl text-center font-bold mb-10"
      >
        Projects
      </h1>
      <div className="flex flex-wrap justify-center">
        {projects
          .slice(0, showMore ? projects.length : 3)
          .map((project) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              key={project.id}
              className="bg-white shadow-md rounded-md p-6 m-2 max-w-sm"
            >
              <img
                src={project.screenshot}
                alt={project.name}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
      </div>
      {/* <div className="flex justify-center mt-4">
        <button
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleToMoreProjects}
        >
          Project Details
        </button>
      </div> */}
    </div>
  );
};

export default Projects;