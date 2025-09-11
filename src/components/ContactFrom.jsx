import React, { useState } from "react";
import { toast } from "react-toastify";

function ContactFrom() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("All Fields required");
      return;
    }
    if (
      formData.name !== "" &&
      formData.email !== "" &&
      formData.subject !== "" &&
      formData.message !== ""
    ) {
      // check if the email is valid or not
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        toast.error("Invalid email format", {
          borderRadius: "8px",
          background: "#ef4444", // red-500
          color: "#fff",
          fontWeight: "bold",
        });
        return;
      } else {
        // call the backend service with all the data fields
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          redirect: "follow",
        });
        const data = await response.json();
        if (data.status === true) {
          toast.success("Email sent successfully");
          // clear all the fields after submit
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          toast.error("Failed to send email");
        }
      }
    }
    // validate form data before submit make sure all the fileds have the proper value in them
  };
  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
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
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <input
        className="mt-4 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
        placeholder="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <textarea
        rows="4"
        className="mt-4 w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
        placeholder="Your Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
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

export default ContactFrom;
