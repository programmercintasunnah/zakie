import React from "react";
import logoPragma from "../assets/pragma.png";
import logoRakitek from "../assets/rakitek.jpg";

const experiencesData = [
  {
    id: 1,
    logo: logoPragma,
    company: "Pragma Informatika",
    position: "Web Developer",
    type: "Full-time WFO",
    location: "Bandung, Indonesia",
  },
  {
    id: 2,
    logo: logoRakitek,
    company: "Rakitek",
    position: "Web Programmer",
    type: "Full-time WFH",
    location: "Jakarta, Indonesia",
  },
];

const Experiences = () => {
  return (
    <div
      id="experiences"
      className="bg-slate-200 min-h-screen py-10 px-6 md:px-10 flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl font-bold text-center mb-10">Experiences</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiencesData.map((experience) => (
          <div
            key={experience.id}
            className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden p-2"
          >
            <div className="flex justify-start items-center flex-wrap px-4 py-3 max-w-full lg:max-w-xs">
              <img
                src={experience.logo}
                alt={experience.company}
                className="w-10 h-10 mr-3"
              />
              <h2 className="text-lg font-semibold">{experience.company}</h2>
            </div>

            <div className="px-4 py-3">
              <p className="text-gray-600 mb-2">{experience.position}</p>
              <p className="text-gray-600 mb-2">{experience.type}</p>
              <p className="text-gray-600">{experience.location}</p>
            </div>
            <div className="px-4 py-3 flex justify-end">
              <button className="bg-gray-700 text-white px-4 py-2 rounded-lg font-bold uppercase cursor-pointer hover:bg-gray-800">
                Resume
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
