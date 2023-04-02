import React from "react";
import logoPragma from "../assets/pragma.png";
import logoRakitek from "../assets/rakitek.jpg";
import logoIbnuMasud from "../assets/ibnumasud.png";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../context/ProfileContext";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    logo: logoIbnuMasud,
    company: "PPS Ibnu Mas'ud",
    position: "Software Developer",
    type: "Internship",
    location: "Kampar, Indonesia",
    path: "/ibnumasud",
  },
  {
    id: 2,
    logo: logoPragma,
    company: "Pragma Informatika",
    position: "Web Developer",
    type: "Full-time WFO",
    location: "Bandung, Indonesia",
    path: "/pragma",
  },
  {
    id: 3,
    logo: logoRakitek,
    company: "Rakitek",
    position: "Web Programmer",
    type: "Full-time WFH",
    location: "Jakarta, Indonesia",
    path: "/rakitek",
  },
];

const Experiences = () => {
  const navigate = useNavigate();

  const handleToResume = (path) => {
    navigate(path);
  };
  const { textVariants, imageVariants } = useProfile();

  return (
    <div id="experiences" className="bg-slate-200 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Experiences
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <motion.div
              variants={imageVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
              key={experience.id}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">{experience.company}</h2>
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="mb-4">
                <p className="text-gray-600">{experience.position}</p>
                <p className="text-gray-600">{experience.type}</p>
                <p className="text-gray-600">{experience.location}</p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => handleToResume(experience.path)}
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg font-bold uppercase cursor-pointer hover:bg-gray-800"
                >
                  Resume
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
