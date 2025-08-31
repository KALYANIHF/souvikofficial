import React from "react";

function HireMe() {
  return (
    <section
      id="hireme"
      className="mx-auto max-w-6xl px-4 py-16 border-t border-black/10 dark:border-white/10"
    >
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold">Why Hire Me?</h2>
        <p className="mt-2 text-sm text-white/60">
          Combining full-stack expertise with DevOps mastery to deliver
          scalable, high-quality solutions.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div
          className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-6"
          data-aos="fade-up"
        >
          <div className="text-xl font-bold mb-2">🚀 Expertise</div>
          <p className="text-sm text-black/70 dark:text-white/70">
            5+ years of experience across frontend, backend, cloud, and DevOps —
            ensuring end-to-end ownership.
          </p>
        </div>

        <div
          className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-6"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          <div className="text-xl font-bold mb-2">⚡ Efficiency</div>
          <p className="text-sm text-black/70 dark:text-white/70">
            Proven track record of boosting release cadence and reducing
            deployment time with automation and CI/CD.
          </p>
        </div>

        <div
          className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-6"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <div className="text-xl font-bold mb-2">🤝 Collaboration</div>
          <p className="text-sm text-black/70 dark:text-white/70">
            Excellent communicator and team player, ensuring smooth
            collaboration across cross-functional teams.
          </p>
        </div>
      </div>

      <div
        className="mt-10 flex justify-center"
        data-aos="fade-up"
        data-aos-delay="180"
      >
        <a
          href="/hireme"
          className="inline-flex items-center justify-center rounded-lg bg-gray-200 dark:bg-white px-5 py-2 text-sm font-medium text-black hover:bg-gray-200"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}

export default HireMe;
