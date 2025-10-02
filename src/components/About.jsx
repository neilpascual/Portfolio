import { skills } from "../data/skills";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold">About me</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          I’m a frontend engineer with a focus on building accessible and performant web apps.
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 w-245">
          {skills.map((s) => (
            <div key={s.name} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <div className="flex justify-between text-sm font-medium">
                <div>{s.name}</div>
                <div>{s.level}%</div>
              </div>
              <div className="mt-2 bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                <div style={{ width: `${s.level}%` }} className="h-2 rounded-full bg-sky-600"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
