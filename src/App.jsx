import { LanguageProvider } from "./context/LanguageContext";
import { ProfileProvider } from "./context/ProfileContext";
import Main from "./pages/Main";

const App = () => {
  return (
    <LanguageProvider>
      <ProfileProvider>
        <Main />
      </ProfileProvider>
    </LanguageProvider>
  );
};

export default App;
