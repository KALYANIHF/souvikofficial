import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-10 text-center text-[11px] text-dark/50">
      <div>
        Souvik Mondal — Senior Software Engineer | Full‑Stack Developer | DevOps
        Enthusiast
      </div>
      <div className="mt-2">
        {currentYear} © <span id="year"></span> Souvik Mondal. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
