import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const navItems = ["about", "projects", "experience", "contact"];

export default function Header({ active, dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="font-bold text-lg">MyPortfolio</div>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize hover:text-sky-600 transition ${
                active === item ? "text-sky-600 font-medium" : ""
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded bg-slate-100 dark:bg-slate-800"
          >
            ☰
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-700 px-6 py-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={`block py-2 capitalize hover:text-sky-600 ${
                active === item ? "text-sky-600 font-medium" : ""
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
