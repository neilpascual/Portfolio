import { testimonials } from "../data/testimonials";
import SectionWrapper from "./SectionWrapper";

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm italic">
            “{t.text}”
            <div className="mt-2 font-medium not-italic">— {t.name}</div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
