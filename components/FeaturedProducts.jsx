"use client";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section className="py-20" id="products">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]">
          Featured
        </p>
        <h2 className="text-3xl font-semibold text-[var(--color-text)]">Popular picks for devotion</h2>
        <p className="text-[var(--color-muted)] mt-3 max-w-2xl mx-auto">
          Hand-selected items that are perfect for your home temple, festival rituals, and gifting.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
