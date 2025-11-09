import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🧠 Simple validation
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully! 🎉");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email error:", error);
          setLoading(false);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-semibold mb-6">Contact</h2>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-screen">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-800"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-800"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-800 h-32"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-sky-600 text-white px-6 py-3 rounded-lg shadow hover:bg-sky-700 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
