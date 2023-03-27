import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [name, setName] = useState("zakie");
  return (
    <ProfileContext.Provider value={{ name }}>
      {children}
    </ProfileContext.Provider>
  );
};
