import React from "react";
import { FaFilePdf } from "react-icons/fa";
import profilePic from "../assets/zakie-circle.png";
import { useProfile } from "../context/ProfileContext";

const Home = () => {
  const { name, bioHome, jobTitles } = useProfile();

  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-800"
    >
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-red-600 border-2 overflow-hidden">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4 md:mt-8 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white">{name}</h1>
        <p className="text-2xl md:text-xl text-gray-300 mt-2 md:mt-4">
          {jobTitles}
        </p>
        <p className="text-gray-400 text-sm mb-6 px-6 md:px-10 text-justify sm:text-center">
          {bioHome}
        </p>
        <div className="mt-6 md:mt-8">
          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/15O8n-smVbigJYJV2BbfdRZ2feBKaprLc?usp=share_link"
            className="inline-flex hover:bg-red-500 bg-red-600 hover:border-2 hover:border-white text-white font-bold py-3 px-6 rounded-lg items-center"
          >
            <FaFilePdf className="mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
