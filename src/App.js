import Navbar from "./pages/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import MySkills from "./pages/MySkills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import LineGradient from "./components/LineGradient";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');

  return (
    <div className="app  bg-deep-blue">
      <Navbar  selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="w-5/6 mx-auto md:h-full">
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <About />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
