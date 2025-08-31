import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
function Header() {
  const [darkMode, setDarkMode] = useState(
    () =>
      localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const themeToggle = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <a href="/" className="text-sm font-semibold tracking-tight">
            Souvik Mondal
          </a>
          <nav className="hidden md:flex items-center gap-6 text-xs text-black/70 dark:text-white/70">
            <a className="hover:text-dark" href="#skills">
              Skills
            </a>
            <a className="hover:text-dark" href="#experience">
              Experience
            </a>
            <a className="hover:text-dark" href="#projects">
              Projects
            </a>
            <a className="hover:text-dark" href="#hireme">
              Hire Me
            </a>
            <a className="hover:text-dark" href="#certificate">
              My Certification
            </a>
            <a className="hover:text-dark" href="#contact">
              Contact
            </a>
          </nav>
          <button
            id="themeToggle"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 hover:bg-white/10"
            type="button"
            aria-label="Toggle theme"
            onClick={themeToggle}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
