'use client'
import React from "react";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeatureBar from "@/components/FeatureBar";
import Categories from "@/components/Categories";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        <Hero />
        <Categories />
        <FeatureBar />

        {/* Product Section */}
        <FeaturedProducts />
      </main>

      <Footer />
    </>
  );
}
