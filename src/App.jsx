import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Home from "./pages/Home";
import HireMe from "./pages/HireMe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <HeroSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hireme" element={<HireMe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
