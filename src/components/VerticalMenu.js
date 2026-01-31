
import { useProfile } from "../context/ProfileContext";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaLaptopCode,
  FaFileAlt,
  FaBookReader,
} from "react-icons/fa";

// Icon mapping
const iconMap = {
  FaHome: FaHome,
  FaUser: FaUser,
  FaCode: FaCode,
  FaBriefcase: FaBriefcase,
  FaLaptopCode: FaLaptopCode,
  FaFileAlt: FaFileAlt,
  FaBookReader: FaBookReader,
};

const VerticalMenu = () => {
  const { verticalMenuLinks, loading } = useProfile();



  if (loading) {
    return null;
  }

  const getIconComponent = (iconName) => {
    return iconMap[iconName] || FaCode;
  };

  return (
    <div className="fixed right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50">
      {verticalMenuLinks?.map((link, index) => {
        const IconComponent = getIconComponent(link.icon);
        const isExternalLink = link.href.startsWith('http');

        return (
          <a
            key={index}
            href={link.href}
            target={isExternalLink ? "_blank" : "_self"}
            rel={isExternalLink ? "noopener noreferrer" : undefined}
            className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700"
            title={link.icon.replace('Fa', '')}
          >
            <IconComponent size={24} />
          </a>
        );
      })}
    </div>
  );
};

export default VerticalMenu;