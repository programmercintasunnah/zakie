import React, { useEffect } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaYoutube,
} from "react-icons/fa";
import { useProfile } from "../context/ProfileContext";

// Icon mapping
const iconMap = {
  FaInstagram: FaInstagram,
  FaLinkedin: FaLinkedin,
  FaGithub: FaGithub,
  FaGitlab: FaGitlab,
  FaYoutube: FaYoutube,
};

const Navbar = () => {
  const { nickName, images, menuItems, socialLinks, loading } = useProfile();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "smooth";
  }, []);

  if (loading) {
    return null;
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 px-6 py-4">
      <div className="flex items-center">
        <img
          src={images.icon}
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
        {socialLinks.map((socialLink) => {
          const IconComponent = iconMap[socialLink.icon];
          return (
            <a
              key={socialLink.id}
              href={socialLink.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {IconComponent && (
                <IconComponent className="text-white mr-4 hover:text-gray-400" />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;