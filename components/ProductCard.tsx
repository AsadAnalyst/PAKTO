import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { products } from "@/lib/data";

type Product = (typeof products)[number];

export default function ProductCard({ product }: { product: Product }) {
  return (
    <a href="#contact" className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-stone-200 shadow-sm transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-ink/15">
        <Image src={product.image} alt={product.alt} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-medium backdrop-blur">{product.id}</span>
        <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-paper text-ink transition-all duration-300 group-hover:rotate-12 group-hover:bg-accent group-hover:text-white">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="px-1 pt-5">
        <p className="text-sm text-accent">{product.category}</p>
        <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">{product.name}</h3>
        <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-stone-600">{product.description}</p>
      </div>
    </a>
  );
}
