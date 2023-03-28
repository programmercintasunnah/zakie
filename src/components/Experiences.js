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
    <div id="experiences" className="min-h-screen px-6 md:px-10 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Experiences</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {experiencesData.map((experience) => (
          <div
            key={experience.id}
            className="border border-gray-300 p-6 rounded-md flex flex-col justify-between bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="flex items-center mb-6">
              <img
                src={experience.logo}
                alt={experience.company}
                className="mr-4 w-10 h-10"
              />
              <h2 className="text-lg font-semibold">{experience.company}</h2>
            </div>
            <p className="mb-4 text-gray-600">{experience.position}</p>
            <p className="mb-4 text-gray-600">{experience.type}</p>
            <p className="mb-4 text-gray-600">{experience.location}</p>
            <div className="flex justify-end">
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
