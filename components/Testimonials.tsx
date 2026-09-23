import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <Reveal><h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">What Our Clients Say</h2></Reveal>
      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <figure className="flex h-full flex-col justify-between rounded-3xl bg-white p-8 shadow-sm">
              <div>
                <div role="img" aria-label={`${t.rating} out of 5 stars`} className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={16} fill={s < t.rating ? "currentColor" : "none"} className={s < t.rating ? "" : "text-stone-300"} />)}
                </div>
                <blockquote className="mt-6 text-lg leading-relaxed">“{t.text}”</blockquote>
              </div>
              <figcaption className="mt-10 text-sm"><span className="font-semibold">{t.name}</span><span className="text-stone-500"> · {t.company}</span></figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-sm text-stone-500">Demo content: these clients and quotes are fictional.</p>
    </section>
  );
}
