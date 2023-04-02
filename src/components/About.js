import React, { useEffect } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarker,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/zakie-fotor.png";
import { useProfile } from "../context/ProfileContext";

const About = () => {
  const { bioAbout, email, github, wa, gitlab, address } = useProfile();

  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-gray-600 mr-2" />,
      link: `https://wa.me/${wa}`,
      label: wa,
    },
    {
      icon: <FaGithub className="text-gray-600 mr-2" />,
      link: `https://github.com/${github}`,
      label: github,
    },
    {
      icon: <FaGitlab className="text-gray-600 mr-2" />,
      link: `https://gitlab.com/${gitlab}`,
      label: gitlab,
    },
    {
      icon: <FaEnvelope className="text-gray-600 mr-2" />,
      link: `mailto:${email}`,
      label: email,
    },
    {
      icon: <FaMapMarker className="text-gray-600 mr-2" />,
      label: address,
    },
  ];

  const navigate = useNavigate();

  const handleToDetail = () => {
    navigate("/about-detail");
  };

  return (
    <div
      id="about"
      className="bg-white py-12 px-4 sm:px-6 lg:py-24 lg:px-8 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative mb-8 lg:mb-0 lg:flex-shrink-0">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              className="w-full rounded-lg lg:absolute lg:h-full lg:w-auto lg:rounded-none"
              src={profilePic}
              alt="Zakie's profile picture"
            />
          </div>
          <div className="lg:self-center">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="text-4xl font-bold mb-4"
            >
              About Me
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              {bioAbout}
            </p>
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="text-2xl font-bold mb-2"
            >
              Contact Information
            </h2>
            <div className="flex flex-col space-y-4">
              {contactMethods.map((method, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  key={index}
                  className="flex items-center"
                >
                  {method.icon}
                  <a href={method.link} className="text-lg text-gray-900">
                    {method.label}
                  </a>
                </div>
              ))}
              <div className="flex justify-center mt-12">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                  onClick={handleToDetail}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                >
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
