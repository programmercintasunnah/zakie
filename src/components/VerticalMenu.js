import React from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaFileAlt,
} from "react-icons/fa";

const menuLinks = [
  {
    href: "#home",
    icon: <FaHome size={24} />,
  },
  {
    href: "#about",
    icon: <FaUser size={24} />,
  },
  {
    href: "#skills",
    icon: <FaCode size={24} />,
  },
  {
    href: "#experiences",
    icon: <FaBriefcase size={24} />,
  },
  {
    href: "#projects",
    icon: <FaProjectDiagram size={24} />,
  },
  {
    href: "https://drive.google.com/drive/folders/15O8n-smVbigJYJV2BbfdRZ2feBKaprLc?usp=share_link",
    icon: <FaFileAlt size={24} />,
  },
];

const VerticalMenu = () => {
  return (
    <div className="fixed right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50">
      {menuLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default VerticalMenu;
