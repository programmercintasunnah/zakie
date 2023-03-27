import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaYoutube,
} from "react-icons/fa";
import zakieimage from "../assets/zakie-circle.ico";
import { useProfile } from "../context/ProfileContext";

const Navbar = () => {
  const { nickName } = useProfile();
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
          <li className="mx-2">
            <a href="#home" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li className="mx-2">
            <a href="#about" className="text-white hover:text-gray-400">
              About
            </a>
          </li>
          <li className="mx-2">
            <a href="#skills" className="text-white hover:text-gray-400">
              Skills
            </a>
          </li>
          <li className="mx-2">
            <a href="#experiences" className="text-white hover:text-gray-400">
              Experiences
            </a>
          </li>
          <li className="mx-2">
            <a href="#projects" className="text-white hover:text-gray-400">
              Projects
            </a>
          </li>
          <li className="mx-2">
            <a href="#resume" className="text-white hover:text-gray-400">
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center ml-4">
        <a href="https://instagram.com/muhammadzakie22" target="_blank">
          <FaInstagram className="text-white mr-4 hover:text-gray-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammadzakie220998/"
          target="_blank"
        >
          <FaLinkedin className="text-white mr-4 hover:text-gray-400" />
        </a>
        <a href="https://github.com/programmercintasunnah" target="_blank">
          <FaGithub className="text-white mr-4 hover:text-gray-400" />
        </a>
        <a href="https://gitlab.com/zakiepragma" target="_blank">
          <FaGitlab className="text-white mr-4 hover:text-gray-400" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCfLBG0ean6WnQ1ftTsyMt0w"
          target="_blank"
        >
          <FaYoutube className="text-white hover:text-gray-400" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
