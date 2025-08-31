import React from "react";
import Skill from "../components/Skill";
import Exprience from "../components/Exprience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import HireMe from "../components/HireMe";
function Home() {
  return (
    <>
      <Skill />
      <Exprience />
      <Projects />
      <Certifications />
      <HireMe />
      <Contact />
    </>
  );
}

export default Home;
