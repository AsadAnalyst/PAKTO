"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { assets } from "@/lib/data";

export default function Hero() {
  // The poster image always sits underneath. The video fades in only once it has
  // actually loaded, so a missing or broken video silently falls back to the image.
  const [videoReady, setVideoReady] = useState(false);
  return (
    <section id="home" className="relative flex min-h-[640px] h-[100svh] items-end overflow-hidden bg-ink text-white">
      <Image src={assets.heroImage} alt="Premium custom packaging boxes arranged in a studio" fill priority sizes="100vw" className="object-cover" />
      <video
        autoPlay muted loop playsInline preload="auto"
        src={assets.heroVideo}
        onLoadedData={() => setVideoReady(true)}
        onError={() => setVideoReady(false)}
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${videoReady ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <p className="rise mb-6 text-sm text-white/75" style={{ animationDelay: "150ms" }}>Custom • Premium • Brand-Focused</p>
        <h1 className="rise max-w-4xl font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl" style={{ animationDelay: "300ms" }}>
          Packaging That Makes Your Product Stand Out.
        </h1>
        <p className="rise mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg" style={{ animationDelay: "500ms" }}>
          Premium custom packaging designed to protect your products, strengthen your brand, and create memorable unboxing experiences.
        </p>
        <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "700ms" }}>
          <a href="#products" className="btn-primary">Explore Packaging <ArrowDown size={16} /></a>
          <a href="#contact" className="btn-light">Get a Quote</a>
        </div>
      </div>
    </section>
  );
}
