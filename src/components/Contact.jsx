import React from "react";
import ContactFrom from "./ContactFrom";

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-16 border-t border-black/10 dark:border-white/10"
    >
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold">Let’s Work Together</h2>
        <p className="mt-2 text-sm text-white/60">
          Ready to bring your next project to life? Reach out below.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4" data-aos="fade-up">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-4">
            <div className="text-[11px] text-white/60">Email</div>
            <div className="text-sm">
              souvikofficial21@gmail.com / marvel.sm.24@gmail.com
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-4">
            <div className="text-[11px] text-white/60">Phone</div>
            <div className="text-sm">+91 9073525749</div>
          </div>
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-4">
            <div className="text-[11px] text-white/60">Location</div>
            <div className="text-sm">
              Halisahar Station Road Jetia Malancha pin: 743135
            </div>
          </div>
        </div>

        <ContactFrom />
      </div>
    </section>
  );
}

export default Contact;
