import React from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarker,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";
import profilePic from "../assets/zakie-fotor.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center min-h-screen justify-center md:justify-between px-6 md:px-10 py-10"
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
        <div className="rounded-lg bg-gray-100 border-2 border-blue-200 shadow-lg p-6 grid gap-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">About Me</h2>
          <p className="text-sm md:text-base text-gray-800">
            My name is muhammad zakie, and I graduated from State Islamic
            University Sultan Syarif Kasim Riau (UIN Suska Riau) with a
            Bachelor's degree in Information Technology. I studied from 2017 to
            2021 and graduated with a GPA of 3.51 out of 4.00. I am a passionate
            learner and always looking for opportunities to improve my skills
            and knowledge in the field of technology.
          </p>
          <div className="mt-4 md:mt-6 flex flex-col md:flex-col items-center md:items-start gap-3">
            <div className="flex items-center rounded-lg text-gray-600 bg-white shadow-md p-2">
              <FaEnvelope className="mr-2" />
              <span className="text-sm md:text-base">
                muhammadzakie22g@gmail.com
              </span>
            </div>
            <div className="flex items-center rounded-lg text-gray-600 bg-white shadow-md p-2">
              <FaWhatsapp className="mr-2" />
              <span className="text-sm md:text-base">+62 822-8625-xxxx</span>
            </div>
            <div className="flex items-center rounded-lg text-gray-600 bg-white shadow-md p-2">
              <FaGithub className="mr-2" />
              <span className="text-sm md:text-base">
                programmercintasunnah
              </span>
            </div>
            <div className="flex items-center rounded-lg text-gray-600 bg-white shadow-md p-2">
              <FaGitlab className="mr-2" />
              <span className="text-sm md:text-base">zakiepragma</span>
            </div>
            <div className="flex items-center rounded-lg text-gray-600 bg-white shadow-md p-2">
              <FaMapMarker className="mr-2" />
              <span className="text-sm md:text-base">
                Jl. Gulama, Tengkerang Barat, Kec. Marpoyan Damai, Kota
                Pekanbaru, Riau 28124, Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
