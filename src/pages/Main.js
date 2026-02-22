import About from "../components/About";
import Portofolio from "../components/Details/Portofolio";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VerticalMenu from "../components/VerticalMenu";

const Main = () => {
  return (
    <>
      <Navbar />
      <VerticalMenu />
      <Home />
      <About />
      <Portofolio />
      <Footer />
    </>
  );
};

export default Main;
