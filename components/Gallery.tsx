import Image from "next/image";
import { gallery } from "@/lib/data";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-36">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Packaging Showcase</h2>
        <p className="max-w-sm text-stone-600">A selection of boxes across formats, structures and finishes.</p>
      </Reveal>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {gallery.map((g, i) => (
          <Reveal key={g.image} delay={(i % 3) * 80} className="break-inside-avoid">
            <figure className={`group relative ${g.aspect} overflow-hidden rounded-3xl bg-stone-200`}>
              <Image src={g.image} alt={g.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-5 bottom-5 translate-y-2 text-lg font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">{g.label}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
