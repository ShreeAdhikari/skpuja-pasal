"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="py-14 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]">
            ShreePuja
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-[var(--color-text)] md:text-6xl">
            Discover authentic puja samagri for every ritual and festival.
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Find handcrafted idols, fragrant incense, elegant diyas, and festival essentials from our Pokhara shop—curated for devotion, celebration, and daily worship.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="rounded-[16px]" onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>
              Browse Products
            </Button>
            <Button variant="secondary" className="rounded-[16px]">
              WhatsApp Us
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_20px_60px_rgba(197,106,22,0.12)]">
          <Image
            src={assets.placeholder}
            alt="Shree Puja Pasal"
            width={900}
            height={700}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
