import About from "../components/About";
import Portfolio from "../components/Portfolio";
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
      <Portfolio />
      <Footer />
    </>
  );
};

export default Main;
