import Landing from "./components/Landing";
import About from "./components/About";
import Splash from "./components/Splash";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Landing />
      <About />
      <Splash />
      <Courses />
      <Footer />
    </div>
  );
};

export default Home;
