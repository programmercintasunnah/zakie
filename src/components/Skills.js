import React from "react";
import {
  FaPhp,
  FaLaravel,
  FaJs,
  FaReact,
  FaDatabase,
  FaLinux,
  FaCode,
} from "react-icons/fa";
import { useProfile } from "../context/ProfileContext";
import { motion } from "framer-motion";

const Skills = () => {
  const { textVariants, imageVariants } = useProfile();

  const skills = [
    {
      id: 1,
      icon: <FaPhp className="text-6xl mb-2 text-blue-600" />,
      text: "PHP",
    },
    {
      id: 2,
      icon: <FaLaravel className="text-6xl mb-2 text-red-500" />,
      text: "Laravel",
    },
    {
      id: 3,
      icon: <FaJs className="text-6xl mb-2 text-yellow-500" />,
      text: "JavaScript",
    },
    {
      id: 4,
      icon: <FaCode className="text-6xl mb-2 text-blue-500" />,
      text: "JQuery",
    },
    {
      id: 5,
      icon: <FaCode className="text-6xl mb-2 text-purple-500" />,
      text: "Ajax",
    },
    {
      id: 6,
      icon: <FaReact className="text-6xl mb-2 text-blue-400" />,
      text: "React",
    },
    {
      id: 7,
      icon: <FaDatabase className="text-6xl mb-2 text-gray-500" />,
      text: "MySQL",
    },
    {
      id: 8,
      icon: <FaLinux className="text-6xl mb-2 text-red-400" />,
      text: "Linux",
    },
  ];

  return (
    <div
      id="skills"
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center"
    >
      <motion.h2
        variants={textVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap gap-10 justify-center items-center mx-8">
        {skills.map((item) => {
          return (
            <motion.div
              variants={imageVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
              key={item.id}
              className="flex flex-col items-center justify-center"
            >
              {item.icon}
              <span className="text-lg font-medium">{item.text}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
