"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import Button from "@/components/ui/Button";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]">
            Collection
          </p>
          <h1 className="text-4xl font-semibold text-[var(--color-text)]">All Products</h1>
          <p className="text-[var(--color-muted)] mt-3 max-w-2xl mx-auto">
            Explore our complete product range and use categories to refine your search.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className={`rounded-[16px] border px-5 py-2 text-sm font-semibold transition ${activeCategory === "All" ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white" : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-background)]"}`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.name)}
              className={`rounded-[16px] border px-5 py-2 text-sm font-semibold transition ${activeCategory === category.name ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white" : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-background)]"}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
