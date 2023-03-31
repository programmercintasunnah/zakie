import React from "react";
import { useNavigate } from "react-router";
import CompanyLogo from "../../assets/rakitek.jpg";
import ProjectImage from "../../assets/kp-app.png";
import { FaHome, FaFileAlt, FaPhotoVideo, FaYoutube } from "react-icons/fa";

const Rakitek = () => {
  const company = "Ruang Kreasi Inovasi Teknologi";

  const jobType = "Full-time WFH";

  const position = "Web Programmer";

  const period = "April, 1st 2022 to Februari, 28th 2023";

  const about =
    "Ruang Kreasi Inovasi Teknologi or known as the Rakitek is an IT consulting company founded in 2017 which is now located in South Jakarta, Indonesia.";

  const aboutProject = "";

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="container px-4 py-8 bg-gradient-to-b from-blue-400 to-blue-800">
      <div className="border-blue-700 rounded-xl shadow-md overflow-hidden bg-white px-4 border-2 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-2">
          <img
            src={CompanyLogo}
            alt="Company Logo"
            className="h-16 md:h-20 w-auto mx-auto md:mx-0 mb-4 md:mb-0"
          />
          <h1 className="text-2xl font-bold text-center md:text-left ml-2">
            {company}
          </h1>
          <div className="flex">
            <a
              href="https://drive.google.com/file/d/14JePYsb-7cy9qWyX7vCxIr8CHy0t7jp5/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 mr-2"
            >
              <FaPhotoVideo />
            </a>
            <a
              href="https://www.youtube.com/watch?v=6ctdEJ5wctA&list=PLGwA21JLpwoMtXpnQHnhv0kasbL2tXWlt&index=24"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 mr-2"
            >
              <FaYoutube />
            </a>
            <a
              href="https://drive.google.com/file/d/1hSvLMee5s4q_e4BjKAPmXtS4B7Mmc-bJ/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 mr-2"
            >
              <FaFileAlt />
            </a>
            <button
              onClick={handleBack}
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 ml-auto"
            >
              <FaHome />
            </button>
          </div>
        </div>
        <p className="text-justify md:text-left mt-3">{about}</p>
        <div className="flex flex-col sm:flex-row justify-between items-center my-4">
          <div className="mb-4 sm:mb-0">
            <p className="text-lg font-bold">Job Type: {jobType}</p>
            <p className="text-lg font-bold">Position: {position}</p>
            <p className="text-md">Work Period: {period}</p>
          </div>
          <div className="flex justify-center sm:justify-end items-center">
            <a href="" target="_blank" rel="noreferrer">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Show Project PDF
              </button>
            </a>
          </div>
        </div>
        <div className="my-4"></div>
      </div>
    </div>
  );
};

export default Rakitek;
