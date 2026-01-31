import { createContext, useContext, useEffect, useState } from "react";
import { useMultipleJsonData } from "../hooks/useJsonData";
import { calculateExperience, replacePlaceholders } from "../utils/helpers";

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  // Load semua data JSON yang diperlukan
  const { data: allData, loading, error } = useMultipleJsonData({
    profile: '/data/profile.json',
    contacts: '/data/contacts.json',
    skills: '/data/skills.json',
    experiences: '/data/experiences.json',
    projects: '/data/projects.json',
    navigation: '/data/navigation.json'
  });

  const [profileData, setProfileData] = useState({
    name: "",
    nickName: "",
    jobTitle: "",
    bioHome: "",
    bioAbout: "",
    email: "",
    wa: "",
    github: "",
    gitlab: "",
    address: "",
    cvLink: "",
    images: {},
    totalPengalaman: { tahun: 0, bulan: 0, formatted: "" }
  });

  useEffect(() => {
    if (!loading && allData.profile && allData.contacts) {
      try {
        const experience = calculateExperience(allData.profile.startWorkDate || '');

        // Replace placeholder di bio dengan fallback values
        const bioHomeWithExp = replacePlaceholders(
          allData.profile.bioHome || 'Experienced developer',
          { experience: experience.formatted }
        );

        const bioAboutWithName = replacePlaceholders(
          allData.profile.bioAbout || 'About me',
          { name: allData.profile.name || 'Developer' }
        );

        setProfileData({
          name: allData.profile.name || '',
          nickName: allData.profile.nickName || '',
          jobTitle: allData.profile.jobTitle || '',
          bioHome: bioHomeWithExp,
          bioAbout: bioAboutWithName,
          email: allData.contacts.email || '',
          wa: allData.contacts.whatsapp || '',
          github: allData.contacts.github || '',
          gitlab: allData.contacts.gitlab || '',
          address: allData.contacts.address || '',
          cvLink: allData.profile.cvLink || '',
          images: allData.profile.images || {},
          totalPengalaman: experience
        });
      } catch (err) {
        console.error('Error processing profile data:', err);
        // Set default values to prevent crashes
        setProfileData({
          name: '',
          nickName: '',
          jobTitle: '',
          bioHome: '',
          bioAbout: '',
          email: '',
          wa: '',
          github: '',
          gitlab: '',
          address: '',
          cvLink: '',
          images: {},
          totalPengalaman: { tahun: 0, bulan: 0, formatted: '0 years' }
        });
      }
    } else if (error) {
      // Set default values when there's an error
      setProfileData({
        name: '',
        nickName: '',
        jobTitle: '',
        bioHome: '',
        bioAbout: '',
        email: '',
        wa: '',
        github: '',
        gitlab: '',
        address: '',
        cvLink: '',
        images: {},
        totalPengalaman: { tahun: 0, bulan: 0, formatted: '0 years' }
      });
    }
  }, [loading, allData, error]);

  // Animasi variants untuk framer motion
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
        ...profileData,
        // Data dari JSON files
        skills: allData.skills?.skills || [],
        experiences: allData.experiences?.experiences || [],
        personalProjects: allData.experiences?.personalProjects || allData.profile?.personalProjects || [],
        personalData: allData.profile?.personalData || [],
        educationData: allData.profile?.educationData || [],
        certificates: allData.profile?.certificates || [],
        workProjects: allData.experiences?.experiences?.reduce((projects, exp) => {
          if (exp.projects && Array.isArray(exp.projects)) {
            const projectsWithCompany = exp.projects.map(project => ({
              ...project,
              company: exp.company,
              companyLogo: exp.logo,
              period: exp.period,
              position: exp.position
            }));
            return [...projects, ...projectsWithCompany];
          }
          return projects;
        }, []) || [],
        socialLinks: allData.contacts?.socialLinks || [],
        menuItems: allData.navigation?.menuItems || [],
        verticalMenuLinks: allData.navigation?.verticalMenuLinks || [],
        // Animation variants
        textVariants,
        buttonVariants,
        imageVariants,
        // Loading state
        loading
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};