import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>
      <form className="space-y-4 max-w-screen">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-800"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-800"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded-lg border dark:border-slate-700 bg-white dark:bg-slate-800 h-32"
        ></textarea>
        <button className="bg-sky-600 text-white px-6 py-3 rounded-lg shadow hover:bg-sky-700 transition">
          Send Message
        </button>
      </form>
      </div>
    </SectionWrapper>
  );
}
