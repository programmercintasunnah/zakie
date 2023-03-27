import React from "react";
import { useProfile } from "../context/ProfileContext";

const Main = () => {
  const { name } = useProfile();

  return (
    <h1 className="text-3xl font-bold underline">Hello world, i'am {name}!</h1>
  );
};

export default Main;
