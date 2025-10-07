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
              {job.org} • {job.date}
            </div>
             <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
              {job.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
