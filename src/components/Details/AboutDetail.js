import React from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../../assets/zakie-dev.jpg";
import { useProfile } from "../../context/ProfileContext";

const personalData = [
  { label: "Nama", value: "Muhammad Zakie" },
  { label: "Tanggal Lahir", value: "22 September 1998" },
  { label: "Gender", value: "Male" },
  {
    label: "Alamat",
    value:
      "Jl. Gulama, Tengkerang Barat, Kec. Marpoyan Damai, Kota" +
      "Pekanbaru, Riau 28124, Indonesia",
  },
];

const educationData = [
  { label: "SMA", value: "SMA Negeri 1 Kampar Timur" },
  { label: "S1", value: "UIN Suska Riau" },
];

const familyData = [
  { label: "Ayah", value: "-" },
  { label: "Ibu", value: "-" },
];

const AboutDetail = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const { bioAbout, email, github, wa, gitlab, address } = useProfile();

  return (
    <div className="container px-4 py-8 bg-gradient-to-b from-red-500 to-blue-400">
      <div className="border-2 border-red-700 rounded-xl shadow-md overflow-hidden bg-white">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={profilePic}
              alt="Profile"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Bio
            </div>
            <p className="mt-2 text-gray-500">{bioAbout}</p>
            <div className="text-center md:text-start">
              <button
                onClick={handleBack}
                className="bg-gradient-to-r from-red-500 to-blue-400 text-white hover:text-white rounded-lg p-2 mt-4"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>

        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Data Pribadi
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              {personalData.map((data) => (
                <div
                  key={data.label}
                  className="border border-gray-300 rounded-md shadow-sm w-auto"
                >
                  <div className="px-4 py-2 bg-gray-100 rounded-t-md">
                    <h3 className="text-lg font-semibold">{data.label}</h3>
                  </div>
                  <div className="px-4 py-2">
                    <p className="text-gray-700">{data.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Pendidikan
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              {educationData.map((data) => (
                <div
                  key={data.label}
                  className="border border-gray-300 rounded-md shadow-sm"
                >
                  <div className="px-4 py-2 bg-gray-100 rounded-t-md">
                    <h3 className="text-lg font-semibold">{data.label}</h3>
                  </div>
                  <div className="px-4 py-2">
                    <p className="text-gray-700">{data.value}</p>
                  </div>
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
