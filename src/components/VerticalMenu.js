import React from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaFileAlt,
} from "react-icons/fa";

const VerticalMenu = () => {
  return (
    <div className="fixed right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50">
      <a
        href="#home"
        className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700"
      >
        <FaHome size={24} />
      </a>
      <a
        href="#about"
        className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700"
      >
        <FaUser size={24} />
      </a>
      <a
        href="#skills"
        className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700"
      >
        <FaCode size={24} />
      </a>
      <a
        href="#experiences"
        className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700"
      >
        <FaBriefcase size={24} />
      </a>
      <a
        href="#projects"
        className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700"
      >
        <FaProjectDiagram size={24} />
      </a>
      <a
        href="https://drive.google.com/drive/folders/15O8n-smVbigJYJV2BbfdRZ2feBKaprLc?usp=share_link"
        target="_blank"
        rel="noreferrer"
        className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700"
      >
        <FaFileAlt size={24} />
      </a>
    </div>
  );
};

export default VerticalMenu;
