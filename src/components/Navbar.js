import React, { useEffect } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaYoutube,
} from "react-icons/fa";
import zakieimage from "../assets/zakie-circle.ico";
import { useProfile } from "../context/ProfileContext";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experiences", label: "Experiences" },
  { id: "projects", label: "Projects" },
];

const socialLinks = [
  {
    url: "https://instagram.com/muhammadzakie22",
    icon: <FaInstagram className="text-white mr-4 hover:text-gray-400" />,
  },
  {
    url: "https://www.linkedin.com/in/muhammadzakie/",
    icon: <FaLinkedin className="text-white mr-4 hover:text-gray-400" />,
  },
  {
    url: "https://github.com/programmercintasunnah",
    icon: <FaGithub className="text-white mr-4 hover:text-gray-400" />,
  },
  {
    url: "https://gitlab.com/zakiepragma",
    icon: <FaGitlab className="text-white mr-4 hover:text-gray-400" />,
  },
  {
    url: "https://www.youtube.com/channel/UCfLBG0ean6WnQ1ftTsyMt0w",
    icon: <FaYoutube className="text-white hover:text-gray-400" />,
  },
];

const Navbar = () => {
  const { nickName } = useProfile();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "smooth";
  }, []);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 px-6 py-4">
      <div className="flex items-center">
        <img
          src={zakieimage}
          alt="profile"
          className="rounded-full border-red-400 border-2 mr-4"
        />
        <div className="text-white font-bold text-xl sm:block hidden">
          {nickName}
        </div>
      </div>
      <div className="md:block hidden">
        <ul className="flex items-center">
          {menuItems.map((item) => (
            <li className="mx-2" key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-white hover:text-gray-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center ml-4">
        {socialLinks.map((socialLink, index) => (
          <a
            key={index}
            href={socialLink.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {socialLink.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
