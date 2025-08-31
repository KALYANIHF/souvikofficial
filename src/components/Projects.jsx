import React from "react";
import generalinfoAppImg from "../assets/projectThumbnail/generalinfoApp.png";
import vanillafeedbackApp from "../assets/projectThumbnail/vanillajsFeedbackApp.png";
import reactFeedbackApp from "../assets/projectThumbnail/reactFeedbackApp.png";

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-16 border-t border-black/10 dark:border-white/10"
    >
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="mt-2 text-sm text-dark/60">
          A selection demonstrating full‑stack and DevOps work.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/5"
          data-aos="fade-up"
        >
          <img
            src={generalinfoAppImg}
            alt="Project"
            className="h-40 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-sm font-semibold">
              Portfolio Website for Personal Info
            </h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">
              This is my portfolio website (it is still under development and
              improvement)
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Next.js
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Javascript
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                HTML
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <a
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-1.5 text-[11px] hover:bg-white/10"
                href="#"
              >
                CSS
              </a>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-1.5 text-[11px] hover:bg-white/10"
                href="#"
              >
                Json Mock Server
              </a>
            </div>
            <a
              href="https://my-resume-nine-topaz.vercel.app/"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border mt-5 px-3 py-1.5 text-[11px] hover:bg-white/10"
            >
              View Project →
            </a>
          </div>
        </article>

        <article
          className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/5"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          <img
            src={reactFeedbackApp}
            alt="Project"
            className="h-40 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-sm font-semibold">
              A Feedback App build using react Library
            </h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">
              Try our web-based feedback application that simplifies user
              engagement. Submit ratings, provide feedback, categorize
              responses, and analyze statistics—all in a modern design with
              light and dark mode options!
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                React JS
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Node.js
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                HTML
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <a
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-1.5 text-[11px] hover:bg-white/10"
                href="#"
              >
                CSS
              </a>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-1.5 text-[11px] hover:bg-white/10"
                href="#"
              >
                Javascript
              </a>
            </div>
            <a
              href="https://feedback-react-app-alpha.vercel.app/"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border mt-5 px-3 py-1.5 text-[11px] hover:bg-white/10"
            >
              View Project →
            </a>
          </div>
        </article>

        <article
          className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/5"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <img
            src={vanillafeedbackApp}
            alt="Project"
            className="h-40 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-sm font-semibold">
              Real‑time Feedback App with VanillaJS
            </h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">
              this is a ES6 vanilla project with custom code feedback app
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Core Javascript (ES6)
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                HTML
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                CSS
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <a
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-1.5 text-[11px] hover:bg-white/10"
                href="#"
              >
                Procedural
              </a>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-1.5 text-[11px] hover:bg-white/10"
                href="#"
              >
                Functional
              </a>
            </div>
            <a
              href="https://feedxinfo.netlify.app/"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border mt-5 px-3 py-1.5 text-[11px] hover:bg-white/10"
            >
              View Project →
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
