import { projects } from "../data/projects";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{p.desc}</p>
            <button className="mr-3.5" onClick={p.url}>View</button>
            <button onClick={p.url}>Code</button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
