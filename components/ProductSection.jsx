import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const ProductSection = () => {
  return (
    <section className="py-16">

      <div className="text-center mb-10">

        <h2 className="text-3xl md:text-4xl font-bold">
          Our Products
        </h2>

        <p className="text-gray-500 mt-3">
          Browse our collection of quality puja samagri.
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
};

export default ProductSection;