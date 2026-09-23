import Image from "next/image";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink text-white sm:rounded-[3rem]">
        <Image src="/images/gallery-5.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
        <Reveal className="mx-auto max-w-[1400px] px-6 py-28 sm:px-12 lg:py-44">
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">Your Product Deserves Better Packaging.</h2>
          <p className="mt-6 max-w-md text-lg text-white/75">Let&apos;s create packaging that looks as good as what&apos;s inside.</p>
          <a href="mailto:hello@PAKTO.example" className="btn-primary mt-10">Start Your Project</a>
        </Reveal>
      </div>
    </section>
  );
}
