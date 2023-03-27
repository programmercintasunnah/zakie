import React from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarker,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";
import profilePic from "../assets/zakie-fotor.png";
import { useProfile } from "../context/ProfileContext";

const About = () => {
  const { bioAbout, email, github, wa, gitlab, address } = useProfile();

  return (
    <div
      id="about"
      className="bg-slate-200 flex flex-col md:flex-row items-center min-h-screen justify-center md:justify-between px-6 md:px-10 py-10"
    >
      <div className="flex items-center justify-center w-full md:w-1/3">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 shadow-xl border-gray-800 overflow-hidden">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="mt-6 md:mt-0 w-full md:w-2/3">
        <div className="rounded-lg bg-gray-100 border-2 border-blue-200 shadow-sm p-6 grid gap-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 rounded-2xl bg-white p-2 text-center">
            About Me
          </h2>
          <p className="text-sm md:text-base text-gray-800 bg-white rounded-xl p-2 text-justify">
            {bioAbout}
          </p>
          <div className="mt-4 md:mt-6 flex flex-col md:flex-col items-start gap-3">
            <div className="flex items-center rounded-lg text-gray-600 bg-white p-2">
              <FaEnvelope className="mr-2" />
              <span className="text-sm md:text-base">{email}</span>
            </div>
            <div className="flex items-center rounded-lg text-gray-600 bg-white p-2">
              <FaWhatsapp className="mr-2" />
              <span className="text-sm md:text-base">{wa}</span>
            </div>
            <div className="flex items-center rounded-lg text-gray-600 bg-white p-2">
              <FaGithub className="mr-2" />
              <span className="text-sm md:text-base">{github}</span>
            </div>
            <div className="flex items-center rounded-lg text-gray-600 bg-white p-2">
              <FaGitlab className="mr-2" />
              <span className="text-sm md:text-base">{gitlab}</span>
            </div>
            <div className="flex items-center rounded-lg text-gray-600 bg-white p-2">
              <FaMapMarker className="mr-2" />
              <span className="text-sm md:text-base">{address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
