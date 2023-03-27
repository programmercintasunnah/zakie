import React from "react";
import Navbar from "../components/Navbar";
import { useProfile } from "../context/ProfileContext";

const Main = () => {
  const { name } = useProfile();

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline">
        Hello world, i'am {name}!
      </h1>
    </>
  );
};

export default Main;
