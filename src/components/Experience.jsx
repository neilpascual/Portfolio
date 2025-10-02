import { experience } from "../data/experience";
import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="space-y-6">
        {experience.map((job) => (
          <div key={job.role} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
            <div className="font-semibold">{job.role}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              {job.company} • {job.duration}
            </div>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{job.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
