import React from "react";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import VerticalMenu from "../components/VerticalMenu";

const Main = () => {
  return (
    <>
      <Navbar />
      <VerticalMenu />
      <Home />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Footer />
    </>
  );
};

export default Main;
