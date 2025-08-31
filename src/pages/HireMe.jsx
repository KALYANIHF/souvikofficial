import ContactFromHireMe from "../components/contactFromHireMe";
function HireMe() {
  return (
    <>
      <div className="min-h-screen text-black dark:text-white transition-colors duration-500">
        {/* WHY HIRE ME */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-6"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold mb-2">
                ⚡ Skilled & Versatile
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Expertise across frontend, backend, and cloud—delivering
                complete solutions.
              </p>
            </div>
            <div
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-xl font-semibold mb-2">🚀 Fast & Reliable</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Proven ability to deliver scalable projects on time with top
                quality.
              </p>
            </div>
            <div
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold mb-2">🤝 Collaborative</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Strong communicator and team player—ensuring smooth workflows.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="max-w-3xl mx-auto px-6 py-16 border-t border-black/10 dark:border-white/10">
          <h2
            className="text-2xl font-bold text-center mb-8"
            data-aos="fade-up"
          >
            Get in Touch
          </h2>
          <ContactFromHireMe />
        </section>
      </div>
    </>
  );
}

export default HireMe;
