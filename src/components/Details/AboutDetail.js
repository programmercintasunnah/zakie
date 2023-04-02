import React from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../../assets/zakie-dev.jpg";
import { useProfile } from "../../context/ProfileContext";
import Certificate1 from "../../assets/certificate1.png";
import Certificate2 from "../../assets/certificate2.png";
import Certificate3 from "../../assets/certificate3.png";
import Certificate4 from "../../assets/certificate4.png";
import Certificate5 from "../../assets/certificate5.png";
import Certificate6 from "../../assets/certificate6.png";
import { motion } from "framer-motion";

const personalData = [
  { label: "Name", value: "Muhammad Zakie" },
  { label: "Place, Date of Birth", value: "Pd. Merbau, September, 22th 1998" },
  { label: "Nationality", value: "Indonesia" },
  { label: "Gender", value: "Male" },
  { label: "Religion", value: "Islam" },
  { label: "Hobby", value: "Coding, Football, Badminton" },
  { label: "Status", value: "Married" },
  {
    label: "Address",
    value:
      "Jl. Gulama, Tengkerang Barat, Kec. Marpoyan Damai, Kota " +
      "Pekanbaru, Riau 28124, Indonesia",
  },
];

const educationData = [
  {
    label: "Elementary School",
    value: "SD Negeri 015 Koto Perambahan",
    period: "2005-2011",
  },
  {
    label: "Junior High School",
    value: "MTs Negeri Kampar",
    period: "2011-2014",
  },
  {
    label: "Senior High School",
    value: "SMA Negeri 1 Kampar Timur",
    period: "2014-2017",
  },
  { label: "University", value: "UIN Suska Riau", period: "2017-2021" },
];

const certificates = [
  {
    id: 1,
    image: Certificate1,
    alt: "Certificate 1",
  },
  {
    id: 2,
    image: Certificate2,
    alt: "Certificate 2",
  },
  {
    id: 3,
    image: Certificate3,
    alt: "Certificate 3",
  },
  {
    id: 4,
    image: Certificate4,
    alt: "Certificate 4",
  },
  {
    id: 5,
    image: Certificate5,
    alt: "Certificate 5",
  },
  {
    id: 6,
    image: Certificate6,
    alt: "Certificate 6",
  },
];

const AboutDetail = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const { bioAbout, textVariants, buttonVariants, imageVariants } =
    useProfile();

  return (
    <div className="container px-4 py-8 bg-gradient-to-b from-red-500 to-blue-400">
      <div className="border-2 border-red-700 rounded-xl shadow-md overflow-hidden bg-white">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <motion.img
              variants={imageVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
              className="h-48 w-full object-cover md:w-48"
              src={profilePic}
              alt="Profile"
            />
          </div>
          <div className="p-8">
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
            >
              Bio
            </motion.div>
            <motion.p
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-2 text-gray-500"
            >
              {bioAbout}
            </motion.p>
            <div className="text-center md:text-start">
              <motion.button
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={handleBack}
                className="bg-gradient-to-r from-red-500 to-blue-400 text-white hover:text-white rounded-lg p-2 mt-4"
              >
                Back to Home
              </motion.button>
            </div>
          </div>
        </div>

        <div className="md:flex">
          <div className="p-8">
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.4 }}
              className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
            >
              Personal Data
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              {personalData.map((data) => (
                <motion.div
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  key={data.label}
                  className="border border-gray-300 rounded-md shadow-sm w-auto"
                >
                  <div className="px-4 py-2 bg-gray-100 rounded-t-md">
                    <h3 className="text-lg font-semibold">{data.label}</h3>
                  </div>
                  <div className="px-4 py-2">
                    <p className="text-gray-700">{data.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:flex">
          <div className="p-8 w-full">
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.6 }}
              className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
            >
              Education
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              {educationData.map((data) => (
                <motion.div
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.5, delay: 0.6 }}
                  key={data.label}
                  className="border border-gray-300 rounded-md shadow-sm"
                >
                  <div className="px-4 py-2 bg-gray-100 rounded-t-md">
                    <h3 className="text-lg font-semibold">{data.label}</h3>
                  </div>
                  <div className="px-4 py-2">
                    <p className="text-gray-700">{data.value}</p>
                  </div>
                  <div className="px-4 py-2">
                    <p className="text-gray-700">{data.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:flex">
          <div className="p-8 w-full">
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.7 }}
              className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
            >
              Certificates
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {certificates.map((certificate) => (
                <div key={certificate.id} className="col-span-1">
                  <motion.img
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.5, delay: 0.7 }}
                    src={certificate.image}
                    alt={certificate.alt}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
