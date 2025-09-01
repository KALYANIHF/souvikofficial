import React from "react";
import ProfileImage from "../assets/souvik.png";
import PersonalCv from "../assets/myresume/SouvikUpdated.pdf";
function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-grid"></div>
      <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* <!-- Left --> */}
          <div data-aos="fade-up">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Hello, I'm <span className="text-dark">Souvik</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/70 dark:text-white/70">
              Senior Software Engineer crafting digital experiences with 5+
              years of expertise. Specialising in full‑stack development, DevOps
              practices, and scalable solutions.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={PersonalCv}
                download={"SouvikUpdated.pdf"}
                className="inline-flex items-center justify-center rounded-lg bg-gray-200 dark:bg-white px-4 py-2 text-xs font-medium text-black hover:bg-gray-200"
              >
                Download Resume
              </a>
              <a
                href={PersonalCv}
                target="_blank"
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-4 py-2 text-xs font-medium hover:bg-white/10"
              >
                View My Resume
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 py-4">
                <div className="text-2xl font-bold">40+</div>
                <div className="mt-1 text-[11px] text-dark/60">Projects</div>
              </div>
              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 py-4">
                <div className="text-2xl font-bold">5+</div>
                <div className="mt-1 text-[11px] text-dark/60">Years Exp</div>
              </div>
              <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 py-4">
                <div className="text-2xl font-bold">100%</div>
                <div className="mt-1 text-[11px] text-dark/60">
                  Focused & Provide Solution to the table
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Right --> */}
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-white/5 blur-2xl"></div>
              <img
                className="relative h-80 w-auto rounded-full border border-black/10 dark:border-white/10 object-cover shadow-[0_8px_40px_rgba(0,0,0,.5)]"
                src={ProfileImage}
                alt="Profile"
              />
            </div>
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-[11px] font-medium text-emerald-300">
                Available for Work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
