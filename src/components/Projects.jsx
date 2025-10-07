import { projects } from "../data/projects";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                {p.desc}
              </p>
              <button onClick={p.url} className="mr-3">Visit</button>
              <button onClick={p.url}>Code</button>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
