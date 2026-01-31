import React from "react";
import { ProfileProvider } from "./context/ProfileContext";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portofolio from "./components/Details/Portofolio";

const App = () => {
  return (
    <ProfileProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portofolio" element={<Portofolio />} />
        </Routes>
      </Router>
    </ProfileProvider>
  );
};

export default App;
