import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-16 border-t border-black/10 dark:border-white/10"
    >
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="mt-2 text-sm text-white/60">
          A selection demonstrating full‑stack and DevOps work.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/5"
          data-aos="fade-up"
        >
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
            alt="Project"
            className="h-40 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-sm font-semibold">E‑Commerce Platform</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">
              Full‑stack solution with authentication, payments, and admin
              dashboard.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Next.js
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Node
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                PostgreSQL
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <a
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-1.5 text-[11px] hover:bg-white/10"
                href="#"
              >
                Code
              </a>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-1.5 text-[11px] hover:bg-white/10"
                href="#"
              >
                Demo
              </a>
            </div>
          </div>
        </article>

        <article
          className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/5"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          <img
            src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop"
            alt="Project"
            className="h-40 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-sm font-semibold">DevOps Automation Suite</h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">
              CI/CD pipelines using Docker & Kubernetes; deployment time cut by
              70%.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Docker
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Kubernetes
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                Terraform
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <a
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-1.5 text-[11px] hover:bg-white/10"
                href="#"
              >
                Code
              </a>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-1.5 text-[11px] hover:bg-white/10"
                href="#"
              >
                Demo
              </a>
            </div>
          </div>
        </article>

        <article
          className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/5"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <img
            src="https://t4.ftcdn.net/jpg/03/96/98/33/360_F_396983381_AcuGFHQbNn7D9eercXFpOecN7d7B5F66.jpg"
            alt="Project"
            className="h-40 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-sm font-semibold">
              Real‑time Analytics Dashboard
            </h3>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">
              Interactive visualisations and streaming data ingestion.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                React
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                WebSockets
              </span>
              <span className="rounded-md border border-black/10 dark:border-white/10 bg-white/5 px-2 py-0.5">
                D3
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <a
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-1.5 text-[11px] hover:bg-white/10"
                href="#"
              >
                Code
              </a>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-1.5 text-[11px] hover:bg-white/10"
                href="#"
              >
                Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
