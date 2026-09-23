import { products } from "@/lib/data";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function Products() {
  return (
    <section id="products" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
        <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Packaging Designed Around Your Brand</h2>
        <p className="max-w-md text-lg leading-relaxed text-stone-600 lg:justify-self-end">Create packaging solutions that combine protection, functionality, and beautiful brand presentation.</p>
      </Reveal>
      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 90}><ProductCard product={p} /></Reveal>
        ))}
      </div>
    </section>
  );
}
