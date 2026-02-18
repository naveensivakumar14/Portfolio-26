import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import LogoLoop from "./components/Logoloop";
import Skills from "./components/Skills";
import Projects from "./components/Project";






// Import AOS library and CSS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <LogoLoop /> */}
      <Skills />
      <Projects />




     
    </>
  );
}

export default App;
