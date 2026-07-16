import React from "react";
import Link from "next/link";
import { products } from "@/data/products";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductPage = async ({ params }) => {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold">Product Not Found</h1>
          <Link href="/product" className="inline-block mt-6 text-orange-600 hover:underline">
            ← Back to Products
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.slug !== slug
  );

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10">
        <Link href="/product" className="text-orange-600 hover:underline font-medium">
          ← Back to Products
        </Link>

        <section className="mt-8 grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-100 rounded-2xl h-[450px] flex items-center justify-center">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full object-contain"
              />
            ) : (
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🪔</div>
                <p>Product Image</p>
              </div>
            )}
          </div>

          <div>
            <p className="text-sm uppercase tracking-wide text-gray-500">{product.category}</p>
            <h1 className="text-4xl font-bold mt-2">{product.name}</h1>
            <p className="text-3xl font-semibold text-orange-600 mt-6">Rs. {product.price}</p>
            <div className="mt-4">
              {product.inStock ? (
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  ✓ In Stock
                </span>
              ) : (
                <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                  Out of Stock
                </span>
              )}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-gray-600 leading-7">{product.description}</p>
            </div>

            <button className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition">
              Order via WhatsApp
            </button>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center justify-between border-t border-gray-200 pt-10">
              <div>
                <p className="text-2xl font-semibold">You may also like</p>
                <p className="text-sm text-gray-500 mt-1">Related products from the same category.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {relatedProducts.slice(0, 4).map((relatedProduct) => (
                <ProductCard key={relatedProduct.slug} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;
