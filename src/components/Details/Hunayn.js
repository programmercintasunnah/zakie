import React from "react";
import CompanyDetail from "./CompanyDetail";

const Hunayn = () => {
  return (
    <CompanyDetail
      dataPath="/data/details/hunayn.json"
      gradientFrom="green-400"
      gradientTo="blue-900"
      borderColor="green-700"
      buttonColor="green-500"
      buttonHoverColor="green-700"
    />
  );
};

export default Hunayn;