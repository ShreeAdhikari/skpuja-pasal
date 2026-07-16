"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="aspect-square bg-[var(--color-background)] flex items-center justify-center">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-6xl">🪔</span>
          )}
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-primary)]">
          {product.category}
        </p>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--color-text)]">{product.name}</h3>
          <p className="text-2xl font-bold text-[var(--color-text)]">Rs. {product.price}</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${product.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
          <Link href={`/product/${product.slug}`} className="text-sm font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-hover)]">
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
