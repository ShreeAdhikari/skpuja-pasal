import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const ProductSection = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-[var(--color-text)]">Our Products</h2>
        <p className="text-[var(--color-muted)] mt-3 max-w-2xl mx-auto">
          Explore every category and discover items for puja, festivals, and daily worship.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
