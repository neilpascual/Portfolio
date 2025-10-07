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
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                {p.desc}
              </p>

              <div className="mt-4 flex gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-md hover:bg-sky-700 transition"
                  >
                    Visit
                  </a>
                )}

                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm font-medium border border-sky-600 text-sky-600 rounded-md hover:bg-sky-600 hover:text-white transition"
                  >
                    Code
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
