import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { footerLinks } from "@/lib/data";

const socials = [{ icon: Instagram, label: "Instagram" }, { icon: Linkedin, label: "LinkedIn" }, { icon: Twitter, label: "X" }, { icon: Youtube, label: "YouTube" }];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_auto]">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight">PAKTO</p>
          <p className="mt-3 max-w-xs text-stone-600">Premium custom packaging solutions for modern brands.</p>
        </div>
        <nav aria-label="Footer"><ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-stone-700">
          {footerLinks.map((l) => <li key={l}><a href={`#${l === "Contact" ? "contact" : l.toLowerCase()}`} className="transition-colors hover:text-accent">{l}</a></li>)}
        </ul></nav>
        <ul className="flex gap-2">
          {socials.map(({ icon: Icon, label }) => (
            <li key={label}><a href="#" aria-label={label} className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"><Icon size={18} /></a></li>
          ))}
        </ul>
      </div>
      <p className="mt-14 border-t border-ink/10 pt-6 text-sm text-stone-500">© 2026 PAKTO. All rights reserved.</p>
    </footer>
  );
}
