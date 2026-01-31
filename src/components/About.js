import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaGraduationCap,
  FaCertificate,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarker,
  FaGithub,
  FaGitlab,
  FaFileContract,
} from "react-icons/fa";
// import profilePic from "../assets/zakie-fotor.png";
import { useProfile } from "../context/ProfileContext";

const About = () => {
  const {
    bioAbout,
    email,
    github,
    wa,
    gitlab,
    address,
    personalData,
    educationData,
    certificates,
    images
  } = useProfile();



  const [activeTab, setActiveTab] = useState("bio");
  const [selectedCertificateModal, setSelectedCertificateModal] = useState(null);

  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-gray-600 mr-2" />,
      link: `https://wa.me/${wa}`,
      label: wa,
    },
    {
      icon: <FaGithub className="text-gray-600 mr-2" />,
      link: `https://github.com/${github}`,
      label: github,
    },
    {
      icon: <FaGitlab className="text-gray-600 mr-2" />,
      link: `https://gitlab.com/${gitlab}`,
      label: gitlab,
    },
    {
      icon: <FaEnvelope className="text-gray-600 mr-2" />,
      link: `mailto:${email}`,
      label: email,
    },
    {
      icon: <FaMapMarker className="text-gray-600 mr-2" />,
      label: address,
    },
  ];

  const tabs = [
    {
      id: "bio",
      label: "Bio",
      icon: <FaUser />
    },
    {
      id: "personal",
      label: "Personal Data",
      icon: <FaFileContract />
    },
    {
      id: "education",
      label: "Education",
      icon: <FaGraduationCap />
    },
    {
      id: "certificates",
      label: "Certificates",
      icon: <FaCertificate />
    }
  ];

  return (
    <div
      id="about"
      className="bg-white py-12 px-4 sm:px-6 lg:py-24 lg:px-8 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`${activeTab === "certificates" ? "" : "lg:grid lg:grid-cols-2 lg:gap-12"}`}>
          {/* Profile Photo Card */}
          {activeTab !== "certificates" && (
            <div className="relative mb-8 lg:mb-0 lg:flex-shrink-0">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="w-full rounded-2xl lg:absolute lg:h-auto lg:w-auto lg:rounded-xl overflow-hidden bg-white p-1"
              >
                <img
                  className="w-full rounded-xl lg:rounded-lg"
                  src={images?.profile || "/assets/zakie-fotor.png"}
                  alt="Profile"
                />
              </div>
            </div>
          )}

          {/* Content with Tabs */}
          <div className={`${activeTab === "certificates" ? "w-full" : "lg:self-center"}`}>
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1 shadow-md flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={`${tabs.indexOf(tab) * 100}`}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${activeTab === tab.id
                        ? "bg-blue-500 text-white shadow-lg"
                        : "text-gray-600 hover:text-gray-800"
                      }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bio Tab */}
            {activeTab === "bio" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="text-4xl font-bold mb-4"
                >
                  About Me
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  className="text-gray-600 text-lg leading-relaxed mb-8"
                >
                  {bioAbout}
                </p>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  className="text-2xl font-bold mb-4"
                >
                  Contact Information
                </h2>
                <div className="flex flex-col space-y-4">
                  {contactMethods.map((method, index) => (
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={`${500 + index * 100}`}
                      key={index}
                      className="flex items-center p-3 bg-gray-50 rounded-lg"
                    >
                      {method.icon}
                      {method.link ? (
                        <a href={method.link} className="text-lg text-gray-900 hover:text-blue-600 transition-colors">
                          {method.label}
                        </a>
                      ) : (
                        <span className="text-lg text-gray-900">{method.label}</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Personal Data Tab */}
            {activeTab === "personal" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="text-4xl font-bold mb-6"
                >
                  Personal Data
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {personalData?.map((data, index) => (
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={`${300 + index * 50}`}
                      key={data.label}
                      className="border border-gray-300 rounded-lg shadow-sm"
                    >
                      <div className="px-4 py-3 bg-gray-100 rounded-t-lg">
                        <h3 className="text-lg font-semibold">{data.label}</h3>
                      </div>
                      <div className="px-4 py-3">
                        <p className="text-gray-700">{data.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Education Tab */}
            {activeTab === "education" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="text-4xl font-bold mb-6"
                >
                  Education
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {educationData?.map((data, index) => (
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={`${300 + index * 100}`}
                      key={data.label}
                      className="border border-gray-300 rounded-lg shadow-sm"
                    >
                      <div className="px-4 py-3 bg-blue-100 rounded-t-lg">
                        <h3 className="text-lg font-semibold">{data.label}</h3>
                      </div>
                      <div className="px-4 py-3">
                        <p className="text-gray-800 font-medium">{data.value}</p>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 rounded-b-lg">
                        <p className="text-sm text-gray-600">{data.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Certificates Tab */}
            {activeTab === "certificates" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="text-4xl font-bold mb-6"
                >
                  Certificates
                </h1>
                <div className={`grid ${activeTab === "certificates" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} gap-6`}>
                  {certificates?.map((certificate, index) => (
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay={`${300 + index * 100}`}
                      key={certificate.id}
                      className={`border border-gray-300 ${activeTab === "certificates" ? "rounded-lg shadow-xl" : "rounded-lg shadow-lg"} overflow-hidden hover:shadow-xl transition-shadow cursor-pointer bg-white ${activeTab === "certificates" ? "h-96" : "h-80"}`}
                      onClick={() => setSelectedCertificateModal(certificate)}
                    >
                      <div className={`relative ${activeTab === "certificates" ? "h-full" : "h-full"}`}>
                        <img
                          src={certificate.image}
                          alt={certificate.alt}
                          className={`w-full object-contain p-4 bg-gray-50 ${activeTab === "certificates" ? "h-[calc(100%-3rem)]" : "h-[calc(100%-6rem)]"}`}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<div class="${activeTab === "certificates" ? "h-[calc(100%-3rem)]" : "h-[calc(100%-6rem)]"} bg-gray-200 flex items-center justify-center"><span class="text-gray-500">Certificate Image</span></div>`;
                          }}
                        />
                        <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-6h3m-3 0h3" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <p className={`font-medium ${activeTab === "certificates" ? "text-lg text-gray-800" : "text-sm text-gray-800"} text-center`}>Certificate {certificate.id}</p>
                        <p className={`text-gray-600 ${activeTab === "certificates" ? "text-sm mt-2" : "text-xs text-gray-600 text-center mt-1"}`}>Click to view full size</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificateModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificateModal(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">{selectedCertificateModal.alt}</h2>
                  <p className="text-blue-100 mt-1">Certificate {selectedCertificateModal.id}</p>
                </div>
                <button
                  onClick={() => setSelectedCertificateModal(null)}
                  className="p-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content - Full Certificate Image */}
            <div className="p-6 overflow-y-auto max-h-[70vh] bg-gray-50">
              <div className="bg-white rounded-lg p-4 shadow-inner">
                <img
                  src={selectedCertificateModal.image}
                  alt={selectedCertificateModal.alt}
                  className="w-full h-auto max-w-full mx-auto object-contain"
                  style={{ maxHeight: '60vh' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="h-64 bg-gray-200 flex items-center justify-center"><span class="text-gray-500">Failed to load certificate image</span></div>';
                  }}
                />
              </div>

              {/* Modal Footer */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  Certificate {selectedCertificateModal.id} - {selectedCertificateModal.alt}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = selectedCertificateModal.image;
                      link.download = `certificate-${selectedCertificateModal.id}.png`;
                      link.click();
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => setSelectedCertificateModal(null)}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default About;