import React from "react";

function Skill() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-4 py-16 border-t border-black/10 dark:border-white/10"
    >
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold">Technical Skills</h2>
        <p className="mt-2 text-sm text-white/60">
          Comprehensive expertise across modern development stacks.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-6"
          data-aos="fade-up"
        >
          <div className="mb-3 text-sm font-semibold">
            Programming Languages
          </div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              JavaScript
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              TypeScript
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              PHP
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              Python
            </span>
          </div>
        </div>

        <div
          className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-6"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          <div className="mb-3 text-sm font-semibold">DevOps & Tools</div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              Docker
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              Kubernetes
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              Terraform
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              GitHub Actions
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              Jenkins
            </span>
          </div>
        </div>

        <div
          className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-6"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <div className="mb-3 text-sm font-semibold">Frameworks</div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              React
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              Next.js
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              Node.js
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              Express
            </span>
          </div>
        </div>

        <div
          className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-6"
          data-aos="fade-up"
        >
          <div className="mb-3 text-sm font-semibold">Databases</div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              PostgreSQL
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              MySQL
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              MongoDB
            </span>
          </div>
        </div>

        <div
          className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-6"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          <div className="mb-3 text-sm font-semibold">Testing</div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              Jest
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              Playwright
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              Vitest
            </span>
          </div>
        </div>

        <div
          className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-6"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <div className="mb-3 text-sm font-semibold">Cloud</div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              AWS
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              GCP
            </span>
            <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2.5 py-1">
              Vercel
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
