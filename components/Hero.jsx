"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";

export default function Hero() {
  return (
    <section className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 items-center gap-12">

        {/* Left */}
        <div>
          <p className="text-orange-600 font-semibold uppercase tracking-wider">
            Welcome to
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-3 leading-tight">
            Shree Puja Pasal
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Your trusted destination in Pokhara for quality puja samagri,
            idols, incense, diyas, flowers, festival essentials, and all
            religious items at affordable prices.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full transition">
              Browse Products
            </button>

            <button className="border border-gray-300 hover:bg-gray-100 px-8 py-3 rounded-full transition">
              WhatsApp Us
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <Image
            src={assets.placeholder}
            alt="Shree Puja Pasal"
            className="rounded-2xl shadow-lg"
            priority
          />
        </div>

      </div>
    </section>
  );
}