import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FaHome, FaFileAlt, FaPhotoVideo, FaYoutube } from "react-icons/fa";
import Project1 from "../../assets/ta-app.png";
import Project2 from "../../assets/kp-app.png";
import Project3 from "../../assets/darsal-app.png";
import { useProfile } from "../../context/ProfileContext";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { textVariants, buttonVariants, imageVariants } = useProfile();

  const title = "MY PROJECTS";

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const projects = [
    {
      id: "project1",
      title: "E-Voting Blockchain",
      description: "using react js and ethereum blockchain",
      imageUrl: Project1,
      photoLink:
        "https://drive.google.com/drive/folders/1Ldwc4z4sRoZ02m_47MnZ1av-j8vme_Hp?usp=share_link",
      youtubeLink:
        "https://drive.google.com/file/d/1YnWmXpUCLXGvckNcPK6kS79mYmT_gnWw/view?usp=share_link",
      fileLink:
        "https://drive.google.com/file/d/13sBtMJYVvlvJBxXhCkTvrWKestOpHS9V/view?usp=sharing",
    },
    {
      id: "project2",
      title: "Presence App",
      description:
        "this is a project for employee attendance, and this project is a college assignment, namely an internship assignment. This web-based application uses the codeigniter framework with a database in the form of mysql. To see more details, you can click the icon file button",
      imageUrl: Project2,
      photoLink:
        "https://drive.google.com/drive/folders/1i2_93PzA_nvZKagSAYdxwfaMu4s5L6ql?usp=sharing",
      youtubeLink:
        "https://www.youtube.com/watch?v=OCB_eXbcEJc&list=PLGwA21JLpwoMtXpnQHnhv0kasbL2tXWlt&index=12",
      fileLink:
        "https://drive.google.com/file/d/1qmRCHve8qW3IZ11KZreBczAQFuaUd55z/view?usp=sharing",
    },
    {
      id: "project3",
      title: "Darsalafy App",
      description: "using laravel 8 and mysql",
      imageUrl: Project3,
      photoLink:
        "https://www.youtube.com/watch?v=6Mz97_9o9Ww&list=PLGwA21JLpwoMtXpnQHnhv0kasbL2tXWlt&index=27",
      youtubeLink:
        "https://www.youtube.com/watch?v=Y0H0mE7x_TQ&list=PLGwA21JLpwoMtXpnQHnhv0kasbL2tXWlt&index=21",
      fileLink:
        "https://drive.google.com/drive/folders/1K-BJsYkDLeG1ovnBlyJDp7piKHCHFyKA?usp=share_link",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [links, setLinks] = useState([]);

  const handleProjectSelect = (event) => {
    const selectedProjectId = event.target.value;
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );

    if (selectedProject) {
      const projectLinks = [
        {
          href: selectedProject.photoLink,
          icon: <FaPhotoVideo />,
        },
        {
          href: selectedProject.youtubeLink,
          icon: <FaYoutube />,
        },
        {
          href: selectedProject.fileLink,
          icon: <FaFileAlt />,
        },
      ];

      setLinks(projectLinks);
    } else {
      setLinks([]);
    }

    setSelectedProject(selectedProjectId);
  };

  const handleClearSelect = () => {
    setSelectedProject(null);
    setLinks([]);
  };

  const filteredProjects = selectedProject
    ? projects.filter((project) => project.id === selectedProject)
    : projects;

  return (
    <div className="min-h-screen container px-4 py-8 bg-gradient-to-b from-blue-500 to-red-400">
      <div className="min-h-screen border-blue-700 rounded-xl shadow-md overflow-hidden bg-white px-4 border-2 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-2">
          <motion.h1
            variants={textVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center md:text-left ml-2"
          >
            {title}
          </motion.h1>
          <div className="flex">
            {links.map((link) => (
              <motion.a
                variants={textVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.1 }}
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 mr-2"
              >
                {link.icon}
              </motion.a>
            ))}
            <motion.button
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={handleBack}
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 ml-auto"
            >
              <FaHome />
            </motion.button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 p-4">
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.3 }}
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
                  transition={{ duration: 0.5, delay: 0.4 }}
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

export default ProjectDetail;
