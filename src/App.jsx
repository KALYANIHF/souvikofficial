import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skill from "./components/Skill";
import Exprience from "./components/Exprience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection />
      <Skill />
      <Exprience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
