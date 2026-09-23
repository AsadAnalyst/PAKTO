import { steps } from "@/lib/data";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <Reveal><h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">From Idea to Box</h2></Reveal>
        <ol className="relative mt-16 grid gap-12 lg:mt-24 lg:grid-cols-4 lg:gap-8">
          <div aria-hidden className="absolute left-[1.35rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-ink/10 max-lg:block lg:left-0 lg:top-[1.35rem] lg:h-px lg:w-full" />
          {steps.map((s, i) => (
            <li key={s.n} className="relative pl-14 lg:pl-0 lg:pt-16">
              <Reveal delay={i * 120}>
                <span className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full bg-ink font-display text-sm font-bold text-white ring-8 ring-white lg:top-0">{s.n}</span>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight">{s.title}</h3>
                <p className="mt-3 max-w-xs leading-relaxed text-stone-600">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
