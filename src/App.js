import React from "react";
import { ProfileProvider } from "./context/ProfileContext";
import Main from "./pages/Main";

const App = () => {
  return (
    <ProfileProvider>
      <Main />
    </ProfileProvider>
  );
};

export default App;
