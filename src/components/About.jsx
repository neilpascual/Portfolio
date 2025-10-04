import { skills } from "../data/skills";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-screen mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">About me</h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
          I’m a frontend engineer with a focus on building accessible and performant web apps.
        </p>

        {/* Skills Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((s) => (
            <div
              key={s.name}
              className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm"
            >
              <div className="flex justify-between text-sm font-medium">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="mt-2 bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                <div
                  style={{ width: `${s.level}%` }}
                  className="h-full rounded-full bg-sky-600 transition-all duration-500 ease-in-out"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
