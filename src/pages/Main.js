import React from "react";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Skills from "../components/Skills";

const Main = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Resume />
    </>
  );
};

export default Main;
