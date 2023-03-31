import React from "react";
import { useNavigate } from "react-router";
import CompanyLogo from "../../assets/ibnumasud.png";
import ProjectImage from "../../assets/kp-app.png";
import { FaHome, FaGithub, FaPhotoVideo, FaYoutube } from "react-icons/fa";
const IbnuMasud = () => {
  const company = "PPS IBNU MAS'UD KAMPAR";

  const jobType = "Internship";

  const position = "Software Developer";

  const period = "Februari, 1st 2020 to March, 1st 2020";

  const about =
    "Pondok Pesantren Tahfidz Al-Qur'an Ibnu Mas'ud Kampar or better known " +
    "as PPS Ibnu Mas'ud is one of the tahfidz Islamic boarding schools " +
    "al-Qur'an which has salafus-sholeh manhaj in Kampar district under the foundation " +
    "nida' as-sunnah. This school was founded in 2011 M/1432 H, so this school is still there " +
    "relatively new and requires application, one of which is for attendance " +
    "employee attendance and employee exit activities which are known there as " +
    "journal designation. In general, the attendance and contents of the journal are still in attendance " +
    "using paper. At this school the number of absences and the number of minutes out " +
    "from the school yard there will be salary cuts for employees and there will be a plan " +
    "The number of minutes late will also result in a pay cut. To solve the problem " +
    "Based on this, an Information System for Employee Exit Activities and Absences was built " +
    "Attendance of Employees with QR-Code who will use the waterfall method " +
    "and PHP programming language with MySQL DBMS.";

  const aboutProject =
    "this is a project for employee attendance, and this project is a college assignment, namely an internship assignment. This web-based application uses the codeigniter framework with a database in the form of mysql. To see more details, you can click the download button";

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container px-4 py-8 bg-gradient-to-b from-green-500 to-blue-400">
      <div className="border-red-700 rounded-xl shadow-md overflow-hidden bg-white px-4 border-2 sm:px-6 lg:px-8 py-8">
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
              href="https://github.com/programmercintasunnah/kp-ibnu_masud_kampar-ci"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 mr-2"
            >
              <FaGithub />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1i2_93PzA_nvZKagSAYdxwfaMu4s5L6ql?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 mr-2"
            >
              <FaPhotoVideo />
            </a>
            <a
              href="https://www.youtube.com/watch?v=OCB_eXbcEJc&list=PLGwA21JLpwoMtXpnQHnhv0kasbL2tXWlt&index=12"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 mr-2"
            >
              <FaYoutube />
            </a>
            <button
              onClick={handleBack}
              className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 ml-auto"
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
            <a
              href="https://drive.google.com/file/d/1qmRCHve8qW3IZ11KZreBczAQFuaUd55z/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Show Project PDF
              </button>
            </a>
          </div>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-bold mb-2">Resume Projects</h2>
          <div className="flex justify-center items-center">
            <div className="mr-4">
              <img
                src={ProjectImage}
                alt="Project A"
                className="w-full h-auto rounded-md mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Description</h3>
              <p className="text-base">{aboutProject}</p>
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <img
                  src={ProjectImage}
                  alt="Project A screenshot 1"
                  className="w-full h-auto rounded-md"
                />
                <img
                  src={ProjectImage}
                  alt="Project A screenshot 2"
                  className="w-full h-auto rounded-md"
                />
                <img
                  src={ProjectImage}
                  alt="Project A screenshot 3"
                  className="w-full h-auto rounded-md"
                />
                <img
                  src={ProjectImage}
                  alt="Project A screenshot 4"
                  className="w-full h-auto rounded-md"
                />
                <img
                  src={ProjectImage}
                  alt="Project A screenshot 5"
                  className="w-full h-auto rounded-md"
                />
                <img
                  src={ProjectImage}
                  alt="Project A screenshot 6"
                  className="w-full h-auto rounded-md"
                />
                <img
                  src={ProjectImage}
                  alt="Project A screenshot 7"
                  className="w-full h-auto rounded-md"
                />
                <img
                  src={ProjectImage}
                  alt="Project A screenshot 8"
                  className="w-full h-auto rounded-md"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IbnuMasud;
