"use client";

import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {

  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section className="py-16" id="products">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Featured Products
        </h2>

        <p className="text-gray-600 mt-3">
          Popular puja essentials available at Shree Puja Pasal.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}