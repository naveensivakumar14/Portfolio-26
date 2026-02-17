import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import LogoLoop from "./components/Logoloop";



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
      <LogoLoop />

     
    </>
  );
}

export default App;
