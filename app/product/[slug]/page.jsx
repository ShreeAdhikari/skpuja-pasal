import React from "react";
import Link from "next/link";
import { products } from "@/data/products";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getWhatsAppUrl } from "@/config/site";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

const ProductPage = async ({ params }) => {
  const { slug } = params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold">Product Not Found</h1>
          <Link href="/products" className="inline-block mt-6 text-[var(--color-primary)] hover:underline">
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
        <Link href="/products" className="text-[var(--color-primary)] hover:underline font-medium">
          ← Back to Products
        </Link>

        <section className="mt-8 grid gap-12 md:grid-cols-2 items-start">
          <div className="rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)] h-[450px] flex items-center justify-center">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full object-contain"
              />
            ) : (
              <div className="text-center text-[var(--color-muted)]">
                <div className="text-6xl mb-4">🪔</div>
                <p>Product Image</p>
              </div>
            )}
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-primary)]">{product.category}</p>
            <h1 className="text-4xl font-semibold mt-2 text-[var(--color-text)]">{product.name}</h1>
            <p className="text-3xl font-semibold text-[var(--color-primary)] mt-6">Rs. {product.price}</p>
            <div className="mt-4">
              {product.inStock ? (
                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  ✓ In Stock
                </span>
              ) : (
                <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                  Out of Stock
                </span>
              )}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3 text-[var(--color-text)]">Description</h2>
              <p className="text-[var(--color-muted)] leading-7">{product.description}</p>
            </div>

            <a
              href={getWhatsAppUrl(
                `Hello, I am interested in ordering ${product.name} from ShreePuja. Please share availability and pricing.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-[16px] bg-[var(--color-primary)] px-8 py-4 text-white font-semibold transition hover:bg-[var(--color-primary-hover)]"
            >
              Order via WhatsApp
            </a>
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
