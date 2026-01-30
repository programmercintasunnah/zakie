import React from "react";
import {
  FaCode,
  FaJs,
  FaReact,
  FaDatabase,
  FaLinux,
} from "react-icons/fa";
import { useProfile } from "../context/ProfileContext";

// Icon mapping untuk convert string ke component
const iconMap = {
  FaCode: FaCode,
  FaJs: FaJs,
  FaReact: FaReact,
  FaDatabase: FaDatabase,
  FaLinux: FaLinux,
};

const Skills = () => {
  const { skills, loading } = useProfile();

  if (loading) {
    return (
      <div id="skills" className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

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
        {skills.map((skill) => {
          const IconComponent = iconMap[skill.icon];
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              key={skill.id}
              className="flex flex-col items-center justify-center"
            >
              {IconComponent && <IconComponent className={`text-6xl mb-2 ${skill.color}`} />}
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;