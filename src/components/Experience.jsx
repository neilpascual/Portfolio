import { experience } from "../data/experience";
import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {experience.map((job) => (
          <div key={job.role} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
            <div className="font-semibold">{job.role}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              {job.org} • {job.date}
            </div>
            <ul className="mt-2 list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1">
              {job.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </SectionWrapper>
  );
}
