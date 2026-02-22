import React from "react";
import { ProfileProvider } from "./context/ProfileContext";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <ProfileProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </ProfileProvider>
  );
};

export default App;
