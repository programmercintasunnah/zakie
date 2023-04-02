import React, { useState } from "react";
import { useNavigate } from "react-router";
import taApp from "../assets/ta-app.png";
import kpApp from "../assets/kp-app.png";
import darsalApp from "../assets/darsal-app.png";
import { useProfile } from "../context/ProfileContext";
import { motion } from "framer-motion";

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

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const navigate = useNavigate();

  const handleToMoreProjects = () => {
    navigate("/project-detail");
  };

  const { textVariants, imageVariants, buttonVariants } = useProfile();

  return (
    <div id="projects" className="min-h-screen p-8">
      <motion.h1
        variants={textVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
        className="text-3xl text-center font-bold mb-10"
      >
        Projects
      </motion.h1>
      <div className="flex flex-wrap justify-center">
        {projects
          .slice(0, showMore ? projects.length : 3)
          .map((project, index) => (
            <motion.div
              variants={imageVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow-md rounded-md p-6 m-2 max-w-sm"
            >
              <img
                src={project.screenshot}
                alt={project.name}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-700">{project.description}</p>
            </motion.div>
          ))}
      </div>
      <div className="flex justify-center mt-4">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleToMoreProjects}
        >
          Project Details
        </motion.button>
      </div>
    </div>
  );
};

export default Projects;
