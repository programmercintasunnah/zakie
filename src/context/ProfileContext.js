import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [name, setName] = useState("Muhammad Zakie");
  const [nickName, setNickName] = useState("Zakie");
  const [bioHome, setBioHome] = useState(
    "I am a full-stack developer with a passion for building web" +
      "applications. I specialize in technologies such as React, PHP," +
      "Laravel, JavaScript, JQuery, Ajax, MySQL, and Linux. With 2 years of" +
      "experience, I have developed a strong foundation in software" +
      "development principles and enjoy working on both front-end and" +
      "back-end development. I am a quick learner, problem-solver, and always" +
      "looking for ways to improve my skills. Let's work together to build" +
      "something great!"
  );
  const [bioAbout, setBioAbout] = useState(
    "My name is " +
      name +
      ", and I graduated from State Islamic" +
      "University Sultan Syarif Kasim Riau (UIN Suska Riau) with a" +
      "Bachelor's degree in Information Technology. I studied from 2017 to" +
      "2021 and graduated with a GPA of 3.51 out of 4.00. I am a passionate" +
      "learner and always looking for opportunities to improve my skills" +
      "and knowledge in the field of technology."
  );
  const [email, setEmail] = useState("muhammadzakie22g@gmail.com");
  const [wa, setWa] = useState("+62 822-8625-xxxx");
  const [github, setGithub] = useState("programmercintasunnah");
  const [gitlab, setGitlab] = useState("zakiepragma");
  const [address, setAddress] = useState(
    "Jl. Gulama, Tengkerang Barat, Kec. Marpoyan Damai, Kota" +
      "Pekanbaru, Riau 28124, Indonesia"
  );
  const [jobTitles, setJobTitles] = useState("Full Stack Developer");

  return (
    <ProfileContext.Provider
      value={{
        name,
        nickName,
        bioHome,
        bioAbout,
        email,
        wa,
        github,
        gitlab,
        address,
        jobTitles,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
