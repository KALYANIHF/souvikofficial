import React from "react";

function Certifications() {
  return (
    <section
      id="certificate"
      className="mx-auto max-w-6xl px-4 py-16 border-t border-black/10 dark:border-white/10"
    >
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold">My Certification's</h2>
        <p className="mt-2 text-sm text-white/60">
          A selection of certifications and achievements. want to see what
          skills i have look into this
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </article>
      </div>
    </section>
  );
}

export default Certifications;
