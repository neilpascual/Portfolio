import { motion } from "framer-motion";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import neil from "../assets/neil.jpg";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16"
    >
      {/* Left Side */}
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hi, I’m <span className="text-sky-600">Neil</span> — a Frontend Engineer.
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          I build scalable, accessible, and delightful web experiences using modern tools and thoughtful design.
        </p>

        <div className="mt-6 flex gap-3">
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

        <div className="mt-6 flex gap-4 items-center text-slate-600 dark:text-slate-400">
          <a
            aria-label="github"
            href="https://github.com/neilpascual"
            className="hover:text-slate-800 dark:hover:text-slate-200"
          >
            <Github size={18} />
          </a>
          <a
            aria-label="linkedin"
            href="#"
            className="hover:text-slate-800 dark:hover:text-slate-200"
          >
            <Linkedin size={18} />
          </a>
          <a
            aria-label="twitter"
            href="#"
            className="hover:text-slate-800 dark:hover:text-slate-200"
          >
            <Twitter size={18} />
          </a>
          <a
            aria-label="twitter"
            href="https://www.facebook.com/neilaron.pascual"
            className="hover:text-slate-800 dark:hover:text-slate-200"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white rounded-2xl shadow p-6 dark:bg-slate-800">
        <div className="h-56 md:h-72 flex items-center justify-center rounded-lg bg-white dark:bg-slate-500">
          <div className="text-center">
            {/* <div className="bg-white rounded-2xl shadow p-6 dark:bg-slate-800"> */}
            <div className="h-56 md:h-72 w-106 aspect-square flex items-center justify-center rounded-lg overflow-hidden bg-white dark:bg-slate-500">
                <img
                src={neil}
                alt="Profile"
                className="h-full w-full object-cover"
                />
            </div>
            {/* </div> */}

            {/* <div className="text-sm text-white">Available for</div>
            <div className="mt-2 font-semibold text-lg">
              Freelance & Full-time
            </div>
            <div className="mt-6 text-slate-400 text-sm">
              Open to remote or hybrid roles. Based in Manila (UTC+8).
            </div> */}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 bg-white dark:bg-slate-800">
          <div className="space-y-1">
            <div className="text-xs text-slate-500">Email</div>
            <div className="text-sm font-medium">neilaronpascual.dev@gmail.com</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-slate-500">Location</div>
            <div className="text-sm font-medium">Philippines</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
