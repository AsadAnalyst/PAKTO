import Image from "next/image";
import { featuredSpecs } from "@/lib/data";
import Reveal from "./Reveal";

export default function FeaturedProduct() {
  return (
    <section id="about" className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:px-12 lg:py-36">
        <Reveal>
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] lg:rounded-tl-[8rem]">
            <Image src="/images/gallery-1.jpg" alt="Premium custom rigid packaging box with a soft-touch finish" fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Built Around Your Brand</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">Every PAKTO box starts with your product and your identity. Tune each detail until the packaging feels unmistakably yours.</p>
          <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {featuredSpecs.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-4 py-5 text-lg transition-colors hover:text-white">
                <Icon size={22} className="text-white/60" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
          <a href="#customization" className="btn-primary mt-10">Explore Customization →</a>
        </Reveal>
      </div>
    </section>
  );
}
