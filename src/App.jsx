import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'JavaScript', level: 92 },
  { name: 'Node.js', level: 80 },
  { name: 'SQL', level: 75 },
];

const projects = [
  {
    title: 'Project Aurora',
    desc: 'A modern dashboard built with React, Tailwind and Recharts. Includes auth and role-based UI.',
    tags: ['React', 'Tailwind', 'Charts'],
    url: '#',
    img: null,
  },
  {
    title: 'Portfolio CMS',
    desc: 'Headless CMS for portfolio projects with markdown support and image uploads.',
    tags: ['Next.js', 'Strapi', 'Cloudinary'],
    url: '#',
    img: null,
  },
  {
    title: 'E‑commerce Mini',
    desc: 'Small e-commerce demo with product pages, cart and checkout flow.',
    tags: ['React', 'Express', 'MySQL'],
    url: '#',
    img: null,
  },
];

const experience = [
  {
    role: 'Frontend Developer',
    org: 'Acme Creative',
    date: '2023 — Present',
    bullets: ['Built responsive UIs', 'Improved performance by 30%'],
  },
  {
    role: 'Web Developer Intern',
    org: 'Startup Labs',
    date: '2022 — 2023',
    bullets: ['Implemented reusable components', 'Automated testing pipelines'],
  },
];

const testimonials = [
  {
    quote: 'Reliable, fast and produced beautiful UI — a pleasure to work with.',
    author: 'Jane Doe, Product Manager',
  },
  {
    quote: 'Delivered above expectations and shipped earlier than planned.',
    author: 'John Smith, CTO',
  },
];

const sections = ["about", "projects", "experience", "contact"];

export default function App() {
  const [active, setActive] = useState("about");
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${dark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 antialiased scroll-smooth">
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-semibold">Neil</div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 items-center text-sm">
              {sections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`hover:underline ${active === id ? 'text-sky-600 font-medium' : ''}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
              <a href="#" className="px-3 py-1 rounded-md border">Resume</a>
              <button
                onClick={() => setDark(!dark)}
                className="ml-4 px-3 py-1 rounded-md border"
              >
                {dark ? '☀️' : '🌙'}
              </button>
            </nav>

            {/* Mobile Nav Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <nav className="md:hidden bg-white dark:bg-slate-900 px-6 py-4 border-t">
              <div className="flex flex-col gap-3">
                {sections.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`hover:underline ${active === id ? 'text-sky-600 font-medium' : ''}`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                ))}
                <a href="#" className="px-3 py-1 rounded-md border">Resume</a>
                <button
                  onClick={() => setDark(!dark)}
                  className="px-3 py-1 rounded-md border"
                >
                  {dark ? '☀️' : '🌙'}
                </button>
              </div>
            </nav>
          )}
        </header>

        <main className="max-w-5xl mx-auto px-6 scroll-smooth">
          {/* HERO */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Hi, I’m <span className="text-sky-600">Neil</span> — a Frontend Engineer.
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                I build scalable, accessible, and delightful web experiences using modern tools and thoughtful design.
              </p>

              <div className="mt-6 flex gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-md shadow">View Projects</a>
                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 border rounded-md">Get in touch</a>
              </div>

              <div className="mt-6 flex gap-4 items-center text-slate-600 dark:text-slate-400">
                <a aria-label="github" href="#" className="hover:text-slate-800 dark:hover:text-slate-200"><Github size={18} /></a>
                <a aria-label="linkedin" href="#" className="hover:text-slate-800 dark:hover:text-slate-200"><Linkedin size={18} /></a>
                <a aria-label="twitter" href="#" className="hover:text-slate-800 dark:hover:text-slate-200"><Twitter size={18} /></a>
              </div>
            </div>

            {/* Image */}
            <div className="bg-white rounded-2xl shadow p-6 dark:bg-slate-800">
            <div className="h-56 md:h-72 flex items-center justify-center rounded-lg bg-white dark:bg-slate-500">
              <div className="text-center">
                <div className="text-sm text-white">Available for</div>
                <div className="mt-2 font-semibold text-lg">Freelance & Full-time</div>
                <div className="mt-6 text-slate-400 text-sm">Open to remote or hybrid roles. Based in Manila (UTC+8).</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 bg-white dark:bg-slate-800">
              <div className="space-y-1">
                <div className="text-xs text-slate-500">Email</div>
                <div className="text-sm font-medium">youremail@example.com</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-slate-500">Location</div>
                <div className="text-sm font-medium">Manila, Philippines</div>
              </div>
            </div>
          </div>

          </motion.section>

          {/* ABOUT */}
          <motion.section id="about" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-16">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold">About me</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                I’m a frontend engineer with a focus on building accessible and performant web applications. I enjoy collaborating with designers and backend engineers to ship features that users love.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((s) => (
                  <div key={s.name} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between text-sm font-medium"><div>{s.name}</div><div>{s.level}%</div></div>
                    <div className="mt-2 bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div style={{ width: `${s.level}%` }} className="h-2 rounded-full bg-sky-600"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* PROJECTS */}
          <motion.section id="projects" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-16">
            <h2 className="text-2xl font-semibold">Selected Projects</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Featured works that highlight design, code quality, and impact.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((p) => (
                <article key={p.title} className="bg-white dark:bg-slate-800 rounded-2xl shadow p-5 flex flex-col">
                  <div className="h-32 rounded-md bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-slate-400">Image</div>
                  <h3 className="mt-4 font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm flex-1">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-md">{t}</span>)}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <a href={p.url} className="text-sm underline">View</a>
                    <div className="text-xs text-slate-400">⭐ 120</div>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          {/* EXPERIENCE */}
          <motion.section id="experience" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-16">
            <h2 className="text-2xl font-semibold">Experience</h2>
            <div className="mt-6 space-y-4">
              {experience.map((e) => (
                <div key={e.role} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">{e.role}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{e.org}</div>
                    </div>
                    <div className="text-xs text-slate-400">{e.date}</div>
                  </div>
                  <ul className="mt-3 ml-4 list-disc text-slate-600 dark:text-slate-300">
                    {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* TESTIMONIALS */}
          <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-16">
            <h2 className="text-2xl font-semibold">Testimonials</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <blockquote key={i} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                  <p className="text-slate-700 dark:text-slate-200">“{t.quote}”</p>
                  <cite className="block mt-4 text-sm text-slate-500 dark:text-slate-400">— {t.author}</cite>
                </blockquote>
              ))}
            </div>
          </motion.section>

          {/* CONTACT */}
          <motion.section id="contact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="py-16">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="font-medium">Get in touch</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">Feel free to reach out about new opportunities, freelance projects, or just to say hi.</p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3"><Mail size={16} /><div className="text-sm">youremail@example.com</div></div>
                  <div className="flex items-center gap-3"><Github size={16} /><div className="text-sm">github.com/yourname</div></div>
                  <div className="flex items-center gap-3"><Linkedin size={16} /><div className="text-sm">linkedin.com/in/yourname</div></div>
                </div>
              </div>

              <form className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent (demo)'); }}>
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-300">Name</label>
                  <input required className="mt-1 w-full rounded-md border px-3 py-2 dark:bg-slate-900 dark:border-slate-700" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-300">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-md border px-3 py-2 dark:bg-slate-900 dark:border-slate-700" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600 dark:text-slate-300">Message</label>
                  <textarea required className="mt-1 w-full rounded-md border px-3 py-2 dark:bg-slate-900 dark:border-slate-700" rows={4} />
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded-md">Send message</button>
                </div>
              </form>
            </div>
          </motion.section>
        </main>

        <footer className="mt-12 border-t py-6 bg-white/50 dark:bg-slate-900/50">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
            <div className="flex gap-4 items-center text-slate-500 dark:text-slate-400">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
