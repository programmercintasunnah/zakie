import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  // Handle case when projects is not available or empty
  if (!projects || projects.length === 0) {
    return (
      <div id="projects" className="min-h-screen p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Projects</h1>
          <p className="text-gray-600">No projects available at the moment.</p>
        </div>
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
          .map((project, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${index * 100}`}
              key={project.id || index}
              className="bg-white shadow-md rounded-md p-6 m-2 max-w-sm"
            >
              {project.screenshot ? (
                <img
                  src={project.screenshot}
                  alt={project.name || 'Project'}
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
              <h2 className="text-2xl font-bold mb-2">{project.name || 'Untitled Project'}</h2>
              <p className="text-gray-700">{project.description || 'No description available'}</p>
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