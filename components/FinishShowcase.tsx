"use client";

import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const finishes = [
  { name: "Gold Foil", description: "Metallic gold pressed onto the board with heat. It catches the light on logos, text and borders.", color: "#d6a52f", accent: "#d6a52f", tags: ["Jewelry", "Candles", "Luxury gifts"] },
  { name: "Silver Foil", description: "A cool metallic finish that gives clean logos and premium details a polished, reflective edge.", color: "#b8c1c3", accent: "#d5dde0", tags: ["Tech", "Beauty", "Accessories"] },
  { name: "Embossing", description: "Raised details that add depth and a tactile moment to your brand mark or packaging pattern.", color: "#bd9765", accent: "#c39b68", tags: ["Stationery", "Luxury", "Apparel"] },
  { name: "Debossing", description: "Pressed-in details create a quiet, refined finish that looks especially beautiful on soft-touch stock.", color: "#b6925d", accent: "#b6925d", tags: ["Leather goods", "Coffee", "Gifting"] },
  { name: "Spot UV", description: "A focused gloss layer that highlights selected details against a matte printed surface.", color: "#1c2524", accent: "#96b5ad", tags: ["Cosmetics", "Food", "Wellness"] },
  { name: "Holographic", description: "A prismatic finish that shifts through color as the light moves across your packaging.", color: "#e8a7d5", accent: "#ec9acb", tags: ["Beauty", "Youth brands", "Limited editions"] },
  { name: "Soft-Touch", description: "A smooth, velvety coating that makes every unboxing feel considered from the first touch.", color: "#71857f", accent: "#9ab0aa", tags: ["Skincare", "Fashion", "Premium"] },
  { name: "Gloss Lamination", description: "A bright protective layer that gives colors extra clarity while helping your box stay durable.", color: "#15856d", accent: "#40b69b", tags: ["Retail", "Food", "E-commerce"] },
];

export default function FinishShowcase() {
  const [selected, setSelected] = useState(0);
  const finish = finishes[selected];

  return (
    <section className="bg-paper px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Details make the difference</p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Finishes you can see and feel</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">Tap a finish to preview it on a box lid. Our team will confirm which finishes suit your box material when you request a quote.</p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <Reveal>
            <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-10 lg:p-14">
              <div className="relative mx-auto aspect-[1.35/1] max-w-[570px]">
                <div className="absolute bottom-[13%] left-[14%] right-[12%] h-[13%] rounded-[0.5rem] bg-ink shadow-[0_20px_20px_rgba(20,22,26,.24)]" />
                <div className="absolute left-[10%] right-[8%] top-[17%] h-[58%] -skew-x-2 rounded-[0.6rem] bg-[#252b38] shadow-[0_18px_12px_rgba(20,22,26,.2)]" style={{ border: `2px solid ${finish.accent}` }}>
                  <div className="absolute inset-[6%] grid place-items-center rounded-[0.3rem] border" style={{ borderColor: `${finish.accent}99` }}>
                    <div className="text-center font-display text-[clamp(1.5rem,5vw,3rem)] font-extrabold tracking-tight" style={{ color: finish.color }}>
                      Your Brand
                      <span className="mt-2 block font-sans text-[0.55rem] font-semibold uppercase tracking-[0.35em]" style={{ color: finish.color }}>Est. 2026</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-2">
                <div className="flex items-center gap-2">
                  <Sparkles size={18} style={{ color: finish.accent }} aria-hidden />
                  <h3 className="font-display text-2xl font-bold">{finish.name}</h3>
                </div>
                <p className="mt-2 max-w-xl leading-relaxed text-stone-600">{finish.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
                  <span className="mr-1 font-semibold text-accent">Best for</span>
                  {finish.tags.map((tag) => <span key={tag} className="rounded-full bg-white px-3 py-1.5 text-stone-700">{tag}</span>)}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col">
            <fieldset>
              <legend className="mb-4 text-sm font-bold">Pick a finish</legend>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {finishes.map((item, index) => (
                  <button key={item.name} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} className={`flex min-h-16 items-center gap-3 rounded-2xl border bg-white px-4 text-left text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${selected === index ? "border-accent bg-white shadow-lg shadow-accent/10" : "border-ink/10"}`}>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full shadow-inner" style={{ background: item.color }}>
                      {selected === index && <Check size={16} className="text-white drop-shadow" aria-hidden />}
                    </span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </fieldset>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-accent p-6 text-white sm:flex-row sm:items-center">
              <p className="max-w-sm text-sm leading-relaxed"><strong>Mix and match.</strong> Combine finishes to create a packaging experience that feels unmistakably yours.</p>
              <a href="#contact" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-accent transition-transform hover:-translate-y-0.5">Add to my quote <ArrowRight size={17} /></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}