"use client";

import { categories } from "@/data/categories";
import Link from "next/link";

export default function Categories() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]">
          Categories
        </p>
        <h2 className="text-3xl font-semibold text-[var(--color-text)]">Shop by category</h2>
        <p className="text-[var(--color-muted)] mt-3 max-w-2xl mx-auto">
          Browse puja essentials curated for rituals, devotion, and festival celebrations.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href="/products"
            className="rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-8 text-center transition hover:shadow-lg hover:-translate-y-1"
          >
            <div className="text-4xl">{category.icon}</div>
            <p className="mt-4 text-sm font-semibold text-[var(--color-text)]">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
