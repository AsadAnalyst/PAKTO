import { stats } from "@/lib/data";
import Reveal from "./Reveal";

export default function Statistics() {
  return (
    <section aria-label="PAKTO in numbers" className="border-y border-ink/10 bg-white">
      <dl className="mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className={`px-5 py-12 sm:px-8 lg:px-12 lg:py-16 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""} border-ink/10`}>
            <dd className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">{s.value}</dd>
            <dt className="mt-2 text-stone-600">{s.label}</dt>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
