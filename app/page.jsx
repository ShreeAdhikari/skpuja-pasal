'use client'
import React from "react";
import Hero from "@/components/Hero";
import HomeProducts from "@/components/HomeProducts";
import FeaturedProducts from "@/components/FeaturedProducts";
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

        {/* Product Section */}
        <HomeProducts />
        <FeaturedProducts />
      </main>

      <Footer />
    </>
  );
}
