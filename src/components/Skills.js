import React from "react";
import {
  FaNodeJs,
  FaJs,
  FaReact,
  FaDatabase,
  FaLinux,
  FaCode,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      id: 1,
      icon: <FaReact className="text-6xl mb-2 text-blue-400" />,
      text: "React",
    },
    {
      id: 2,
      icon: <FaNodeJs className="text-6xl mb-2 text-green-500" />,
      text: "Node JS",
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
      icon: <FaDatabase className="text-6xl mb-2 text-gray-500" />,
      text: "MySQL",
    },
    {
      id: 7,
      icon: <FaLinux className="text-6xl mb-2 text-red-400" />,
      text: "Linux",
    },
  ];

  return (
    <div
      id="skills"
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center"
    >
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        Skills
      </h2>
      <div className="flex flex-wrap gap-10 justify-center items-center mx-8">
        {skills.map((item) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              key={item.id}
              className="flex flex-col items-center justify-center"
            >
              {item.icon}
              <span className="text-lg font-medium">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
