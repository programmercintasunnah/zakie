import React from "react";
import { FaFilePdf } from "react-icons/fa";
import profilePic from "../assets/zakie-circle.png";
import { useProfile } from "../context/ProfileContext";
import { motion } from "framer-motion";

const Home = () => {
  const {
    name,
    bioHome,
    jobTitles,
    textVariants,
    buttonVariants,
    imageVariants,
  } = useProfile();

  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-800"
    >
      <motion.div
        variants={imageVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5 }}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full border-red-600 border-2 overflow-hidden"
      >
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 md:mt-8 text-center"
      >
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-white"
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="text-2xl md:text-xl text-gray-300 mt-2 md:mt-4"
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {jobTitles}
        </motion.p>
        <motion.p
          className="text-gray-400 text-sm mb-6 px-6 md:px-10 text-justify sm:text-center"
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {bioHome}
        </motion.p>
      </motion.div>
      <motion.div
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-6 md:mt-8 mb-4"
      >
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/15O8n-smVbigJYJV2BbfdRZ2feBKaprLc?usp=share_link"
          className="inline-flex hover:bg-red-500 bg-red-600 hover:border-2 hover:border-white text-white font-bold py-3 px-6 rounded-lg items-center"
        >
          <FaFilePdf className="mr-2" />
          Download CV
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
