import React from "react";
import CompanyDetail from "./CompanyDetail";

const Pragma = () => {
  return (
    <CompanyDetail
      dataPath="/data/details/pragma.json"
      gradientFrom="blue-500"
      gradientTo="red-400"
      borderColor="blue-700"
      buttonColor="blue-500"
      buttonHoverColor="blue-700"
    />
  );
};

export default Pragma;