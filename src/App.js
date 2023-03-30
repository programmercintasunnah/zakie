import React from "react";
import { ProfileProvider } from "./context/ProfileContext";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutDetail from "./components/Details/AboutDetail";

const App = () => {
  return (
    <ProfileProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-detail" element={<AboutDetail />} />
        </Routes>
      </Router>
    </ProfileProvider>
  );
};

export default App;
