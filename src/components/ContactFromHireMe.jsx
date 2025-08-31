import React from "react";

function ContactFromHireMe() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Thanks for submiting the form");
  };
  return (
    <form
      className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 p-6"
      data-aos="fade-up"
      data-aos-delay="80"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-black/40
           dark:placeholder:text-white/40"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
          placeholder="Your Email"
        />
      </div>
      <input
        className="mt-4 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
        placeholder="Subject"
      />
      <textarea
        rows="4"
        className="mt-4 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
        placeholder="Your Message"
      ></textarea>
      <button
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-gray-200 dark:bg-white px-4 py-2 text-xs font-medium text-black hover:bg-gray-200"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactFromHireMe;
