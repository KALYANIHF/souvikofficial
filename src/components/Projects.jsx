import React from "react";
import generalinfoAppImg from "../assets/projectThumbnail/generalinfoApp.png";
import vanillafeedbackApp from "../assets/projectThumbnail/vanillajsFeedbackApp.png";
import reactFeedbackApp from "../assets/projectThumbnail/reactFeedbackApp.png";
import mypersonalPortfolio from "../assets/projectThumbnail/souvikofficial.png";
import Mentorgrid from "../assets/projectThumbnail/mentorgrid.png";

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
        {/* Project 1 react feedback app */}
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
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Css
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Javascript (es6)
              </span>
            </div>
            <a
              href="https://feedback-react-app-alpha.vercel.app/"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border mt-5 px-3 py-1.5 text-[11px] hover:bg-white/10"
            >
              View Project →
            </a>
            <a
              href="https://github.com/KALYANIHF/feedbackApp-react"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border ml-5 mt-5 px-3 py-1.5 text-[11px] hover:bg-white/10"
            >
              View GitHub →
            </a>
          </div>
        </article>
        {/* Project 1 react feedback app end */}

        {/* Project 2 javascript feedback app */}

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
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Procedural
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Functional
              </span>
            </div>

            <a
              href="https://feedxinfo.netlify.app/"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border mt-5 px-3 py-1.5 text-[11px] hover:bg-white/10"
            >
              View Project →
            </a>
            <a
              href="https://github.com/KALYANIHF/feedbackApp-vanillaJs"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border ml-5 mt-5 px-3 py-1.5 text-[11px] hover:bg-white/10"
            >
              View GitHub →
            </a>
          </div>
        </article>
        {/* Project 2 javascript feedback app end */}

        {/* Project 3 Node js backend Mentorgrid API app */}

        <article
          className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/5"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <img
            src={Mentorgrid}
            alt="Project"
            className="h-40 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-sm font-semibold">
              Node Js Bootcamp management API
            </h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">
              MentorGrid.live is a backend API built with **Node.js** and
              **Express**, providing user authentication, course management, and
              enrollment functionality. This project is designed for
              bootcamp-style applications where admins or publisher can publish
              courses and users can register, login, and enroll in thouse coures
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Node Js
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                ExpressJs
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Mongoose
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                AWS-SDk
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                AWS-SES
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Render
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                aws-cli
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                mongodb
              </span>
            </div>

            <a
              href="https://mentorgrid.live"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border mt-5 px-3 py-1.5 text-[11px] hover:bg-white/10"
            >
              View Project →
            </a>
            <a
              href="https://github.com/KALYANIHF/mentorgrid.live"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border ml-5 mt-5 px-3 py-1.5 text-[11px] hover:bg-white/10"
            >
              View GitHub →
            </a>
          </div>
        </article>
        {/* Project 3 Node js backend Mentorgrid API app End */}

        {/* Project 4 React js portfolio website Personal */}

        <article
          className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/5"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <img
            src={mypersonalPortfolio}
            alt="Project"
            className="h-40 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-sm font-semibold">
              Portfolio website for Personal Info
            </h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">
              personal website where you can know more about me and details
              about my work and projects and how can you contact me.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Core Javascript (ES6)
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                JSX
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Tailwind Css
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                React.js
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                aws-cli
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Lamda-function-aws
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Node.js
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                aws-ses
              </span>
            </div>
            <a
              href="https://souvikofficial.live"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border mt-5 px-3 py-1.5 text-[11px] hover:bg-white/10"
            >
              View Project →
            </a>
            <a
              href="https://github.com/KALYANIHF/souvikofficial"
              target="_blank"
              className="inline-flex items-center justify-center rounded-lg border ml-5 mt-5 px-3 py-1.5 text-[11px] hover:bg-white/10"
            >
              View GitHub →
            </a>
          </div>
        </article>
        {/* Project 4 React js portfolio website Personal end */}
      </div>
    </section>
  );
}

export default Projects;
