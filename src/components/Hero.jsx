import { motion } from "framer-motion";
import { Facebook, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-24 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="text-sky-600 inline-block hover:scale-105 transition-transform">
            Neil Aron Pascual
          </span>{" "}
          — a Software Engineer.
        </h1>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
          I am a Software Engineer from the Philippines specializing in React,
          Node.js, Express, MongoDB, and modern web development. I build fast,
          scalable, and user-friendly applications.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-5 py-3 bg-sky-600 text-white rounded-lg shadow hover:bg-sky-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-5 py-3 border rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition"
          >
            Get in Touch
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-slate-200 dark:bg-slate-700 rounded-lg shadow hover:bg-slate-300 dark:hover:bg-slate-600 transition"
          >
            View Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex gap-5 text-slate-600 dark:text-slate-400">
          <a
            href="https://github.com/neilpascual"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-slate-900 dark:hover:text-white transition"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/neil-aron-pascual/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-slate-900 dark:hover:text-white transition"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://www.facebook.com/neilaron.pascual"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-slate-900 dark:hover:text-white transition"
          >
            <Facebook size={22} />
          </a>
        </div>

        {/* Contact Card */}
        <div className="mt-10 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Email
              </p>
              <p className="mt-1 font-medium break-all">
                neilaronpascual.dev@gmail.com
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Location
              </p>
              <p className="mt-1 font-medium">
                Philippines
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}