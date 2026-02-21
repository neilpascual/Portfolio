import { motion } from "framer-motion";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import neil from "../assets/neil.jpg";
import neilHover from "../assets/neilHover.jpg"


export default function Hero() {

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 px-4 md:px-12 max-w-7xl mx-auto"
    >
      {/* Left Side */}
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="text-sky-600 transition-all duration-300 hover:scale-110 inline-block">
            Neil
          </span>{" "}
          — a Software Engineer.
        </h1>

        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
          I build scalable, accessible, and delightful web experiences using
          modern tools and thoughtful design.
        </p>

        {/* CTA Buttons */}
        {/* CTA Buttons */}
<div className="mt-6 flex flex-wrap gap-3">
  <a
    href="#projects"
    className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-md shadow hover:bg-sky-700 transition"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="inline-flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition"
  >
    Get in touch
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-slate-200 rounded-md shadow hover:bg-gray-300 dark:hover:bg-slate-600 transition"
  >
    View Resume
  </a>
</div>

        {/* Social Icons */}
        <div className="mt-6 flex gap-4 items-center text-slate-600 dark:text-slate-400">
          <a
            aria-label="github"
            href="https://github.com/neilpascual"
            className="hover:text-slate-800 dark:hover:text-slate-200"
          >
            <Github size={20} />
          </a>
          <a
            aria-label="linkedin"
            href="https://www.linkedin.com/in/neil-aron-pascual/"
            className="hover:text-slate-800 dark:hover:text-slate-200"
          >
            <Linkedin size={20} />
          </a>
          {/* <a
            aria-label="twitter"
            href="#"
            className="hover:text-slate-800 dark:hover:text-slate-200"
          >
            <Twitter size={20} />
          </a> */}
          <a
            aria-label="facebook"
            href="https://www.facebook.com/neilaron.pascual"
            className="hover:text-slate-800 dark:hover:text-slate-200"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full max-w-sm mx-auto sm:max-w-md">
        <div className="overflow-hidden rounded-2xl shadow bg-white dark:bg-slate-800">
          <div className="aspect-square">
            {/* <img
              src={neil}
              alt="Neil Profile"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            /> */}
            <div className="relative w-full h-full overflow-hidden rounded-lg group">
                <img
                  src={neil}
                  alt="Neil Profile"
                  className="w-full h-full object-cover transition-opacity duration-20 group-hover:opacity-0"
                />

                <img
                  src={neilHover}
                  alt="Neil Hover Profile"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-20 group-hover:opacity-100"
                />
            </div>

          </div>

          {/* Contact Info */}
          <div className="p-6 grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="text-xs text-slate-500">Email</div>
              <div className="font-medium break-all">
                neilaronpascual.dev@gmail.com
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-slate-500">Location</div>
              <div className="text-sm font-medium">Philippines</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
