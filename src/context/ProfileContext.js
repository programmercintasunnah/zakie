import { createContext, useContext, useEffect, useState } from "react";
import moment from "moment";

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [name, setName] = useState("Muhammad Zakie");
  const [nickName, setNickName] = useState("Zakie");
  const [tanggalMulaiKerja, setTanggalMulaiKerja] = useState("15-10-2021");
  const [totalPengalaman, setTotalPengalaman] = useState({
    tahun: 0,
    bulan: 0,
  });

  const hitungPengalaman = () => {
    const mulaiKerja = moment(tanggalMulaiKerja, "DD-MM-YYYY");
    const sekarang = moment();

    const selisihTahun = sekarang.diff(mulaiKerja, "years");
    mulaiKerja.add(selisihTahun, "years"); // tambahkan selisih tahun ke tanggal mulai kerja
    const selisihBulan = sekarang.diff(mulaiKerja, "months");

    setTotalPengalaman({
      tahun: selisihTahun,
      bulan: selisihBulan,
    });
  };

  useEffect(() => {
    hitungPengalaman();
  }, []);

  const [bioHome, setBioHome] = useState("");

  useEffect(() => {
    setBioHome(
      "I am a full-stack developer with a passion for building web " +
        "applications. I specialize in technologies such as React, Node, " +
        "JavaScript, JQuery, Ajax, MySQL, and Linux. With " +
        totalPengalaman.tahun +
        " year and " +
        totalPengalaman.bulan +
        " months " +
        "experience, I have developed a strong foundation in software " +
        "development principles and enjoy working on both front-end and " +
        "back-end development. I am a quick learner, problem-solver, and always " +
        "looking for ways to improve my skills. Let's work together to build " +
        "something great!"
    );
  });
  const [bioAbout, setBioAbout] = useState(
    "My name is " +
      name +
      ", and I graduated from State Islamic " +
      "University Sultan Syarif Kasim Riau (UIN Suska Riau) with a " +
      "Bachelor's degree in Information Technology. I studied from 2017 to " +
      "2021 and graduated with a GPA of 3.51 out of 4.00. I am a passionate " +
      "learner and always looking for opportunities to improve my skills " +
      "and knowledge in the field of technology."
  );
  const [email, setEmail] = useState("muhammadzakie22g@gmail.com");
  const [wa, setWa] = useState("+62 822-8625-xxxx");
  const [github, setGithub] = useState("programmercintasunnah");
  const [gitlab, setGitlab] = useState("zakiepragma");
  const [address, setAddress] = useState(
    "Jl. Gulama, Tengkerang Barat, Kec. Marpoyan Damai, Kota " +
      "Pekanbaru, Riau 28124, Indonesia"
  );
  const [jobTitles, setJobTitles] = useState("Full Stack Developer");

  //animasi with framer motion
  const textVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  };

  const imageVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
  };

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
        textVariants,
        buttonVariants,
        imageVariants,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
