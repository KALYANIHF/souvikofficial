import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}

export default App;
