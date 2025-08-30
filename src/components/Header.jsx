import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router";
function Header() {
  const [theme, setTheme] = useState("dark");
  const themeToggle = (e) => {
    e.preventDefault();
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <Router>
      <header className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-14 items-center justify-between">
            <a href="#" className="text-sm font-semibold tracking-tight">
              Souvik Mondal
            </a>
            <nav className="hidden md:flex items-center gap-6 text-xs text-black/70 dark:text-white/70">
              <Link className="hover:text-white" to="#skills">
                Skills {theme}
              </Link>
              <Link className="hover:text-white" to="#experience">
                Experience
              </Link>
              <Link className="hover:text-white" to="#projects">
                Projects
              </Link>
              <Link className="hover:text-white" to="#hireme">
                Hire Me
              </Link>
              <Link className="hover:text-white" to="#certificate">
                My Certification
              </Link>
              <Link className="hover:text-white" to="#contact">
                Contact
              </Link>
            </nav>
            <button
              id="themeToggle"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 hover:bg-white/10"
              type="button"
              aria-label="Toggle theme"
              onClick={themeToggle}
            >
              {theme == "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </header>
    </Router>
  );
}

export default Header;
