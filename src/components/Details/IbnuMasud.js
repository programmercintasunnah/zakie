import React from "react";
import CompanyLogo from "../../assets/ibnumasud.png";

const IbnuMasud = () => {
  return (
    <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <img src={CompanyLogo} alt="Company Logo" className="h-16 w-auto" />
        <h1 className="text-2xl font-bold ml-2">IbnuMasud</h1>
      </div>
      <p className="text-center my-4">
        We are a technology consulting firm that provides end-to-end solutions
        for businesses of all sizes.
      </p>
      <div className="flex justify-between items-center my-4">
        <div>
          <p className="text-lg font-bold">Job Type: Full-time</p>
          <p className="text-lg font-bold">Position: Front-end Developer</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply Now
        </button>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-bold mb-2">Resume Projects</h2>
        <ul className="list-disc pl-4">
          <li>
            Project A - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li>
            Project B - Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </li>
          <li>
            Project C - Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IbnuMasud;
