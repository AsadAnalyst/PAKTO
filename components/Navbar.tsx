"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const light = !scrolled && !open; // white text while over the hero
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-paper/85 shadow-[0_1px_0_rgba(20,22,26,.08)] backdrop-blur-xl" : "bg-transparent"}`}>
      <nav aria-label="Primary" className={`mx-auto flex items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12 ${scrolled ? "h-16" : "h-20"} ${light ? "text-white" : "text-ink"}`}>
        <a href="#home" className="font-display text-xl font-extrabold tracking-tight">PAKTO</a>
        <ul className="hidden items-center gap-9 text-sm md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden !py-2.5 sm:inline-flex">Get a Quote</a>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="grid h-11 w-11 place-items-center rounded-full md:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <div className={`fixed inset-x-0 bottom-0 top-16 bg-paper px-5 pt-8 transition-all duration-500 md:hidden ${open ? "visible opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
        <ul className="flex flex-col">
          {navLinks.map((l) => (
            <li key={l.href} className="border-b border-ink/10">
              <a href={l.href} onClick={() => setOpen(false)} className="block py-5 font-display text-3xl font-semibold tracking-tight">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-8 w-full">Get a Quote</a>
      </div>
    </header>
  );
}
