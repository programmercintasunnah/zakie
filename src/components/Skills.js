import React from "react";
import {
  FaPhp,
  FaLaravel,
  FaJs,
  FaReact,
  FaDatabase,
  FaLinux,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills</h2>
      <div className="flex flex-wrap gap-10 justify-center items-center mx-8">
        <div className="flex flex-col items-center justify-center">
          <FaPhp className="text-6xl mb-2 text-blue-600" />
          <span className="text-lg font-medium">PHP</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaLaravel className="text-6xl mb-2 text-red-500" />
          <span className="text-lg font-medium">Laravel</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaJs className="text-6xl mb-2 text-yellow-500" />
          <span className="text-lg font-medium">JavaScript</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaReact className="text-6xl mb-2 text-blue-400" />
          <span className="text-lg font-medium">React</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaDatabase className="text-6xl mb-2 text-gray-500" />
          <span className="text-lg font-medium">MySQL</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaLinux className="text-6xl mb-2 text-red-400" />
          <span className="text-lg font-medium">Linux</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
