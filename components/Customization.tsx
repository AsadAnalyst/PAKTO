import { customOptions } from "@/lib/data";
import Reveal from "./Reveal";

export default function Customization() {
  return (
    <section id="customization" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <Reveal><h2 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl">Make It Yours.</h2></Reveal>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {customOptions.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 90}>
            <article className="group h-full rounded-3xl border border-ink/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-2xl hover:shadow-accent/15">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-paper text-ink transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                <Icon size={24} strokeWidth={1.6} aria-hidden />
              </span>
              <h3 className="mt-16 font-display text-2xl font-bold tracking-tight">{title}</h3>
              <p className="mt-3 leading-relaxed text-stone-600">{text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
