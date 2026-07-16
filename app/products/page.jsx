import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10">
        <div className="flex flex-col items-end pt-12">
          <p className="text-2xl font-medium">All Products</p>
          <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12 pb-14">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
