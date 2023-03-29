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
    <div id="about" className="bg-white py-12 px-4 sm:px-6 lg:py-24 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative mb-8 lg:mb-0 lg:flex-shrink-0">
            <img
              className="w-full rounded-lg lg:absolute lg:h-full lg:w-auto lg:rounded-none"
              src={profilePic}
              alt="Zakie's profile picture"
            />
          </div>
          <div className="lg:self-center">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {bioAbout}
            </p>
            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-gray-600 mr-2" />
                <a href={`mailto:${email}`} className="text-lg text-gray-900">
                  {email}
                </a>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="text-gray-600 mr-2" />
                <a
                  href={`https://wa.me/${wa}`}
                  className="text-lg text-gray-900"
                >
                  {wa}
                </a>
              </div>
              <div className="flex items-center">
                <FaMapMarker className="text-gray-600 mr-2" />
                <p className="text-lg text-gray-900">{address}</p>
              </div>
              <div className="flex items-center">
                <FaGithub className="text-gray-600 mr-2" />
                <a
                  href={`https://github.com/${github}`}
                  className="text-lg text-gray-900"
                >
                  {github}
                </a>
              </div>
              <div className="flex items-center">
                <FaGitlab className="text-gray-600 mr-2" />
                <a
                  href={`https://gitlab.com/${gitlab}`}
                  className="text-lg text-gray-900"
                >
                  {gitlab}
                </a>
              </div>
              <div className="flex justify-center mt-12">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                  Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
