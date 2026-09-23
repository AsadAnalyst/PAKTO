import { benefits } from "@/lib/data";
import Reveal from "./Reveal";

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <Reveal><h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:sticky lg:top-28 lg:text-6xl">Why Brands Choose PAKTO</h2></Reveal>
        <dl className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="border-t border-ink/15 pt-6">
                <Icon size={26} strokeWidth={1.5} className="text-accent" aria-hidden />
                <dt className="mt-6 font-display text-2xl font-bold tracking-tight">{title}</dt>
                <dd className="mt-2 leading-relaxed text-stone-600">{text}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
