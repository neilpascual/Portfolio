import { useState } from "react";
import { projects } from "../data/projects";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("web");

  const filteredProjects = projects.filter(
    (p) => p.category === activeTab
  );

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Projects
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {["web", "mobile", "design"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition
                ${
                  activeTab === tab
                    ? "bg-sky-600 text-white"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                }`}
            >
              {tab === "web"
                ? "Web Projects"
                : tab === "mobile"
                ? "Mobile Projects"
                : "Design & Graphics"}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.title}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              {p.img && (
                <div className="mb-4 overflow-hidden rounded-md">
                  <img
                    src={p.img}
                    alt={`${p.title} screenshot`}
                    loading="lazy"
                    className={`w-full ${
                      p.category === "design" ? "h-56" : "h-40"
                    } object-cover rounded-md hover:scale-105 transition`}
                  />
                </div>
              )}

              {/* Title */}
              <h3 className="text-lg font-semibold">{p.title}</h3>

              {/* Description */}
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm flex-grow">
                {p.desc}
              </p>

              {/* Tags */}
              {p.tags && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="mt-4 flex gap-3 flex-wrap">
                {/* Live (hide for design) */}
                {p.live && p.category !== "design" && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm text-white bg-sky-600 rounded-md hover:bg-sky-700 transition"
                  >
                    Live
                  </a>
                )}

                {/* Code (hide for design) */}
                {p.code && p.category !== "design" && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm border border-sky-600 text-sky-600 rounded-md hover:bg-sky-600 hover:text-white transition"
                  >
                    Code
                  </a>
                )}

                {/* View Full for Design */}
                {p.category === "design" && (
                  <a
                    href={p.img}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm text-white bg-sky-600 rounded-md hover:bg-sky-700 transition"
                  >View
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}