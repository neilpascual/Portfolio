import { motion } from "framer-motion";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import neil from "../assets/neil.jpg";

export default function Hero() {
  return (
    <motion.section
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
          — a Frontend Engineer.
        </h1>

        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
          I build scalable, accessible, and delightful web experiences using
          modern tools and thoughtful design.
        </p>

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
            href="#"
            className="hover:text-slate-800 dark:hover:text-slate-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            aria-label="twitter"
            href="#"
            className="hover:text-slate-800 dark:hover:text-slate-200"
          >
            <Twitter size={20} />
          </a>
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
            <img
              src={neil}
              alt="Neil Profile"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Contact Info */}
          <div className="p-6 grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-xs text-slate-500">Email</div>
              <div className="text-sm font-medium break-all">
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
