
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const sections = ["hero", "about", "projects", "experience", "contact"];


export default function App() {
  const [active, setActive] = useState("Hero");
  const [dark, setDark] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    {
      threshold: 0.6,
      rootMargin: "-100px 0px -40% 0px",
    }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);
;


  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased scroll-smooth">
        <Header active={active} dark={dark} setDark={setDark} />
        <main className="max-w-5xl mx-auto px-6">
          <Hero />
          <About />
          <Projects />
          <Experience />
          {/* <Testimonials /> */}
          <Contact />
        </main>
        <Footer />
      </div>
       <Toaster position="top-right" /> {/* 👈 Add this here */}
    </div>
  );
}
