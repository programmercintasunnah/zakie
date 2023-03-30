import React from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../../assets/zakie-dev.jpg";

const personalData = [
  { label: "Nama", value: "Muhammad Zakie" },
  { label: "Tanggal Lahir", value: "22 September 1998" },
  { label: "Alamat", value: "Jl. Nangka" },
];

const educationData = [
  { label: "SMA", value: "SMA Negeri 1 Kampar Timur" },
  { label: "S1", value: "UIN Suska Riau" },
];

const familyData = [
  { label: "Ayah", value: "-" },
  { label: "Ibu", value: "-" },
];

const bio = "lorem dklskjdja dadnajkanda dadaudnajkdnjak";

const AboutDetail = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

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
            <p className="mt-2 text-gray-500">{bio}</p>
            <button
              onClick={handleBack}
              className="bg-gradient-to-r from-red-500 to-blue-400 text-white hover:text-white rounded-lg p-2 mt-4"
            >
              Back to Home
            </button>
          </div>
        </div>

        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Data Pribadi
            </div>
            <table className="table-auto mt-2">
              <tbody>
                {personalData.map((data) => (
                  <tr key={data.label}>
                    <td className="border px-4 py-2 font-semibold">
                      {data.label}
                    </td>
                    <td className="border px-4 py-2">{data.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Pendidikan
            </div>
            <table className="table-auto mt-2">
              <tbody>
                {educationData.map((data) => (
                  <tr key={data.label}>
                    <td className="border px-4 py-2 font-semibold">
                      {data.label}
                    </td>
                    <td className="border px-4 py-2">{data.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
