import React from "react";
import CompanyDetail from "./CompanyDetail";

const IbnuMasud = () => {
  return (
    <CompanyDetail
      dataPath="/data/details/ibnumasud.json"
      gradientFrom="green-500"
      gradientTo="blue-400"
      borderColor="red-700"
      buttonColor="green-600"
      buttonHoverColor="green-700"
    />
  );
};

export default IbnuMasud;