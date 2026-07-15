"use client";

import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Shop by Category
        </h2>

        <p className="text-gray-600 mt-3">
          Everything you need for your religious ceremonies.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
    {categories.map((category) => (
  <div
    key={category.id}
    className="border rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition"
  >
    <div className="text-5xl mb-4">{category.icon}</div>

    <h3 className="font-semibold">
      {category.name}
    </h3>
  </div>
))}
      </div>
    </section>
  );
}