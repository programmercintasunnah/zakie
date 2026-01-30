import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FaHome, FaGithub, FaPhotoVideo, FaYoutube, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useProfile } from "../../context/ProfileContext";
import { useJsonData } from "../../hooks/useJsonData";

// Icon mapping
const iconMap = {
    FaHome: FaHome,
    FaGithub: FaGithub,
    FaPhotoVideo: FaPhotoVideo,
    FaYoutube: FaYoutube,
    FaFileAlt: FaFileAlt,
};

/**
 * Generic component untuk company detail pages
 * @param {string} dataPath - Path ke JSON file untuk company data
 * @param {string} gradientFrom - Tailwind gradient from color
 * @param {string} gradientTo - Tailwind gradient to color
 * @param {string} borderColor - Tailwind border color
 * @param {string} buttonColor - Tailwind button color
 * @param {string} buttonHoverColor - Tailwind button hover color
 */
const CompanyDetail = ({
    dataPath,
    gradientFrom = "green-400",
    gradientTo = "blue-900",
    borderColor = "green-700",
    buttonColor = "green-500",
    buttonHoverColor = "green-700"
}) => {
    const { data: companyData, loading, error } = useJsonData(dataPath);
    const { textVariants, buttonVariants, imageVariants } = useProfile();
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState(null);

    const handleBack = () => {
        navigate("/");
    };

    const handleProjectSelect = (event) => {
        setSelectedProject(event.target.value);
    };

    const handleClearSelect = () => {
        setSelectedProject(null);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Error: {error}</p>
            </div>
        );
    }

    if (!companyData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>No data available</p>
            </div>
        );
    }

    const filteredProjects = selectedProject && companyData.projects
        ? companyData.projects.filter((project) => project.id === selectedProject)
        : companyData.projects || [];

    return (
        <div className={`min-h-screen container px-4 py-8 bg-gradient-to-b from-${gradientFrom} to-${gradientTo}`}>
            <div className={`min-h-screen border-${borderColor} rounded-xl shadow-md overflow-hidden bg-white px-4 border-2 sm:px-6 lg:px-8 py-8`}>
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center px-12 py-2">
                    <motion.img
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.5 }}
                        src={companyData.logo}
                        alt="Company Logo"
                        className="h-16 md:h-20 w-auto mx-auto md:mx-0 mb-4 md:mb-0"
                    />
                    <motion.h1
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl font-bold text-center md:text-left ml-2"
                    >
                        {companyData.company}
                    </motion.h1>
                    <div className="flex">
                        {companyData.links?.map((link) => {
                            const IconComponent = iconMap[link.icon];
                            return (
                                <motion.a
                                    variants={textVariants}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    key={link.id}
                                    href={link.url || link.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`p-2 rounded-full bg-${buttonColor} text-white hover:bg-${buttonHoverColor} mr-2`}
                                >
                                    {IconComponent && <IconComponent />}
                                </motion.a>
                            );
                        })}
                        <button
                            onClick={handleBack}
                            className={`p-2 rounded-full bg-${buttonColor} text-white hover:bg-${buttonHoverColor} ml-auto`}
                        >
                            <FaHome />
                        </button>
                    </div>
                </div>

                {/* About */}
                <motion.p
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-justify md:text-left mt-3"
                >
                    {companyData.about}
                </motion.p>

                {/* Job Info */}
                <div className="flex flex-col sm:flex-row justify-between items-center my-4">
                    <motion.div
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mb-4 sm:mb-0"
                    >
                        <p className="text-lg font-bold">Job Type: {companyData.jobType}</p>
                        <p className="text-lg font-bold">Position: {companyData.position}</p>
                        <p className="text-md">Work Period: {companyData.period}</p>
                    </motion.div>
                    {companyData.pdfLink && (
                        <div className="flex justify-center sm:justify-end items-center">
                            <motion.a
                                variants={buttonVariants}
                                initial="initial"
                                animate="animate"
                                transition={{ duration: 0.5, delay: 0.5 }}
                                href={companyData.pdfLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Show Project PDF
                                </button>
                            </motion.a>
                        </div>
                    )}
                </div>

                {/* Projects Section */}
                {companyData.projects && companyData.projects.length > 0 && (
                    <div className="flex flex-col md:flex-row">
                        {/* Project Selector */}
                        <div className="w-full md:w-1/4 p-4">
                            <motion.div
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="pt-4 pr-4"
                            >
                                <label htmlFor="project-select">Choose Project:</label>
                                <select
                                    id="project-select"
                                    name="project-select"
                                    value={selectedProject || ""}
                                    onChange={handleProjectSelect}
                                    className="block w-full mt-1 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                >
                                    <option value="">Choose</option>
                                    {companyData.projects.map((project) => (
                                        <option key={project.id} value={project.id}>
                                            {project.title}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    onClick={handleClearSelect}
                                    className="block w-full mt-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Clear
                                </button>
                            </motion.div>
                        </div>

                        {/* Project Display */}
                        <div className="w-full md:w-3/4 pt-4">
                            <div
                                className={`grid ${selectedProject ? "grid-cols-1" : "md:grid-cols-3"
                                    } gap-4`}
                            >
                                {filteredProjects.map((project) => (
                                    <motion.div
                                        variants={imageVariants}
                                        initial="initial"
                                        animate="animate"
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                        key={project.id}
                                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                                    >
                                        <img
                                            src={project.imageUrl}
                                            alt="Screenshot"
                                            className="w-full h-auto"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-medium text-gray-900">
                                                {project.title}
                                            </h3>
                                            {selectedProject && (
                                                <p className="text-sm text-gray-500">{project.description}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Single Project Image (for companies like IbnuMasud) */}
                {companyData.projectImage && !companyData.projects && (
                    <div className="my-4">
                        <motion.h2
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-xl font-bold mb-2"
                        >
                            Resume Projects
                        </motion.h2>
                        <div className="flex justify-center items-center">
                            <div className="mr-4">
                                <motion.img
                                    variants={imageVariants}
                                    initial="initial"
                                    animate="animate"
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    src={companyData.projectImage}
                                    alt="Project"
                                    className="w-full h-auto rounded-md mb-4"
                                />
                                {companyData.aboutProject && (
                                    <>
                                        <motion.h3
                                            variants={textVariants}
                                            initial="initial"
                                            animate="animate"
                                            transition={{ duration: 0.5, delay: 0.7 }}
                                            className="text-lg font-bold mb-2"
                                        >
                                            Description
                                        </motion.h3>
                                        <motion.p
                                            variants={textVariants}
                                            initial="initial"
                                            animate="animate"
                                            transition={{ duration: 0.5, delay: 0.7 }}
                                            className="text-base"
                                        >
                                            {companyData.aboutProject}
                                        </motion.p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompanyDetail;