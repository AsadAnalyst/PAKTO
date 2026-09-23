"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Package } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [hover, setHover] = useState<string | null>(null);
  const [pill, setPill] = useState({ x: 0, w: 0, show: false });
  const listRef = useRef<HTMLUListElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  // scroll state + progress bar (progress is written straight to the DOM, no re-render)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the link of the section currently in the middle of the screen
  useEffect(() => {
    const els = navLinks.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // sliding pill follows hover, otherwise the active link
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-href="${hover ?? active}"]`);
    setPill(el ? { x: el.offsetLeft, w: el.offsetWidth, show: true } : { x: 0, w: 0, show: false });
  }, [hover, active]);

  // lock scroll, Escape to close, auto-close when resized to desktop
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); mq.removeEventListener("change", onMq); };
  }, [open]);

  const light = !scrolled && !open; // over the hero: glass + white text
  const shell = open
    ? "max-w-6xl border-transparent bg-transparent text-white"
    : scrolled
    ? "max-w-4xl border-ink/10 bg-paper/80 text-ink shadow-[0_10px_40px_-10px_rgba(20,22,26,.25)] backdrop-blur-xl"
    : "max-w-6xl border-white/20 bg-white/10 text-white backdrop-blur-md";

  return (
    <>
      <div ref={barRef} aria-hidden className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left scale-x-0 bg-accent" />
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4">
        <nav aria-label="Primary" className={`flex w-full items-center justify-between rounded-full border py-2 pl-3 pr-2 transition-all duration-500 ${shell}`}>
          <a href="#home" onClick={close} className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-white"><Package size={17} strokeWidth={2} /></span>
            PAKTO
          </a>

          <ul ref={listRef} onMouseLeave={() => setHover(null)} className="relative hidden items-center gap-1 text-sm md:flex">
            <span aria-hidden className={`absolute inset-y-0 left-0 rounded-full transition-[transform,width,opacity] duration-300 ease-out ${light ? "bg-white/15" : "bg-ink/[.07]"}`} style={{ transform: `translateX(${pill.x}px)`, width: pill.w, opacity: pill.show ? 1 : 0 }} />
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} data-href={l.href} onMouseEnter={() => setHover(l.href)} onFocus={() => setHover(l.href)} onBlur={() => setHover(null)}
                  aria-current={active === l.href ? "true" : undefined}
                  className={`relative block px-4 py-2 transition-opacity duration-300 ${(hover ?? active) === l.href ? "opacity-100" : "opacity-65"}`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <a href="#contact" className={`group hidden items-center gap-2 rounded-full bg-accent py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition duration-300 hover:bg-accent-dark sm:inline-flex ${open ? "sm:hidden" : ""}`}>
              Get a Quote
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><ArrowUpRight size={16} /></span>
            </a>
            <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} className="grid h-11 w-11 place-items-center rounded-full md:hidden">
              <span className="relative block h-4 w-5">
                <span className={`absolute left-0 top-1/2 -mt-px h-[1.5px] w-full bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
                <span className={`absolute left-0 top-1/2 -mt-px h-[1.5px] w-full bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* mobile: full-screen menu that opens as a circle from the button */}
      <div id="mobile-menu" inert={!open} className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink px-6 pb-8 pt-28 text-white transition-[clip-path,visibility] duration-700 ease-[cubic-bezier(.7,0,.2,1)] md:hidden ${open ? "visible [clip-path:circle(150%_at_calc(100%_-_2.5rem)_2.5rem)]" : "invisible [clip-path:circle(0%_at_calc(100%_-_2.5rem)_2.5rem)]"}`}>
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
        <ul className="relative border-t border-white/10">
          {navLinks.map((l, i) => (
            <li key={l.href} style={{ transitionDelay: open ? `${200 + i * 70}ms` : "0ms" }} className={`border-b border-white/10 transition-all duration-700 ease-out ${open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <a href={l.href} onClick={close} className="flex items-baseline justify-between py-4 font-display text-[clamp(2.25rem,11vw,3.5rem)] font-bold leading-none tracking-tight">
                <span className={`flex items-center gap-3 transition-colors ${active === l.href ? "text-white" : "text-white/55"}`}>
                  {active === l.href && <span className="h-2.5 w-2.5 rounded-full bg-accent" />}
                  {l.label}
                </span>
                <span className="font-sans text-xs font-medium text-white/35">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <div style={{ transitionDelay: open ? "560ms" : "0ms" }} className={`relative mt-auto pt-10 transition-all duration-700 ease-out ${open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <a href="#contact" onClick={close} className="btn-primary w-full !py-4 text-base">Get a Quote <ArrowUpRight size={18} /></a>
          <p className="mt-6 text-sm text-white/50">hello@pakto.example</p>
        </div>
      </div>
    </>
  );
}
