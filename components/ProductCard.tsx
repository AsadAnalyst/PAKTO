import Image from "next/image";
import { ArrowUpRight, SlidersHorizontal } from "lucide-react";
import type { products } from "@/lib/data";

type Product = (typeof products)[number];

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-stone-200 shadow-sm transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-ink/15">
        <a href="#contact" aria-label={`Get a quote for ${product.name}`} className="absolute inset-0">
          <Image src={product.image} alt={product.alt} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-medium backdrop-blur">{product.id}</span>
          <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-paper text-ink transition-all duration-300 group-hover:rotate-12 group-hover:bg-accent group-hover:text-white">
            <ArrowUpRight size={18} />
          </span>
        </a>
        <a href="#customization" className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 rounded-full bg-paper px-4 py-3 text-sm font-semibold text-ink shadow-lg shadow-ink/15 transition-all duration-300 hover:bg-accent hover:text-white">
          <SlidersHorizontal size={16} aria-hidden />
          Customize
        </a>
      </div>
      <div className="px-1 pt-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-accent">{product.category}</p>
          <p className="text-sm font-semibold text-ink">From {product.price}</p>
        </div>
        <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">{product.name}</h3>
        <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-stone-600">{product.description}</p>
      </div>
    </article>
  );
}
