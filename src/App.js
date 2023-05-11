import React from "react";
import { ProfileProvider } from "./context/ProfileContext";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutDetail from "./components/Details/AboutDetail";
import IbnuMasud from "./components/Details/IbnuMasud";
import Pragma from "./components/Details/Pragma";
import Rakitek from "./components/Details/Rakitek";
import ProjectDetail from "./components/Details/ProjectDetail";
import Hunayn from "./components/Details/Hunayn";

const App = () => {
  return (
    <ProfileProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-detail" element={<AboutDetail />} />
          <Route path="/ibnumasud" element={<IbnuMasud />} />
          <Route path="/pragma" element={<Pragma />} />
          <Route path="/rakitek" element={<Rakitek />} />
          <Route path="/hunayn" element={<Hunayn />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </ProfileProvider>
  );
};

export default App;
