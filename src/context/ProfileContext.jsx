import { createContext, useContext, useMemo } from "react";
import profile from "../data/profile.json";
import contacts from "../data/contacts.json";
import skillsData from "../data/skills.json";
import experiencesData from "../data/experiences.json";
import navigation from "../data/navigation.json";
import { calculateExperience, replacePlaceholders } from "../utils/helpers";
import { useLanguage } from "./LanguageContext";

const ProfileContext = createContext(null);

export const useProfile = () => useContext(ProfileContext);

const localizeDescription = (item, lang) =>
  lang === "en" ? item.description : item.descriptionId || item.description;

const localizeProject = (project, lang) => ({
  ...project,
  description: localizeDescription(project, lang),
  features:
    lang === "en"
      ? project.featuresEn || project.features
      : project.features || project.featuresEn,
});

export const ProfileProvider = ({ children }) => {
  const { lang, t } = useLanguage();

  const value = useMemo(() => {
    const experience = calculateExperience(profile.startWorkDate);

    const localizedExperience =
      lang === "en" ? experience.formatted : experience.formattedId;

    return {
      name: profile.name || "",
      nickName: profile.nickName || "",
      jobTitle:
        lang === "en"
          ? profile.jobTitle || ""
          : profile.jobTitleId || profile.jobTitle || "",
      bioHome: replacePlaceholders(
        (lang === "en"
          ? profile.bioHome
          : profile.bioHomeId || profile.bioHome) || "",
        { experience: localizedExperience }
      ),
      bioAbout: replacePlaceholders(
        (lang === "en"
          ? profile.bioAbout
          : profile.bioAboutId || profile.bioAbout) || "",
        { name: profile.name || "" }
      ),
      email: contacts.email || "",
      wa: contacts.whatsapp || "",
      github: contacts.github || "",
      gitlab: contacts.gitlab || "",
      address: contacts.address || "",
      cvLink: profile.cvLink || "",
      images: profile.images || {},
      totalPengalaman: experience,

      skills: skillsData.skills || [],
      experiences: (experiencesData.experiences || []).map((item) => ({
        ...item,
        description: localizeDescription(item, lang),
        projects: (item.projects || []).map((project) =>
          localizeProject(project, lang)
        ),
      })),
      personalProjects: (experiencesData.personalProjects || []).map(
        (project) => localizeProject(project, lang)
      ),
      personalData: (profile.personalData || []).map((item) => ({
        ...item,
        label: lang === "en" ? item.label : item.labelId || item.label,
        value: lang === "en" ? item.value : item.valueId || item.value,
      })),
      educationData: (profile.educationData || []).map((item) => ({
        ...item,
        label: lang === "en" ? item.label : item.labelId || item.label,
      })),
      certificates: profile.certificates || [],
      socialLinks: contacts.socialLinks || [],
      menuItems: (navigation.menuItems || []).map((item) => ({
        ...item,
        label: lang === "en" ? item.label : item.labelId || item.label,
      })),
      t,
    };
  }, [lang, t]);

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
