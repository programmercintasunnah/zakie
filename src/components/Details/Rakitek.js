import React from "react";
import CompanyDetail from "./CompanyDetail";

const Rakitek = () => {
  return (
    <CompanyDetail
      dataPath="/data/details/rakitek.json"
      gradientFrom="blue-400"
      gradientTo="blue-800"
      borderColor="blue-700"
      buttonColor="blue-500"
      buttonHoverColor="blue-700"
    />
  );
};

export default Rakitek;