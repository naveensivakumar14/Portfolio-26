import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Particles from "./components/Particles";

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
    </>
  );
}

export default App;
