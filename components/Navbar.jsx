"use client"
import React from "react";
import { assets} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DCC8] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🪔</span>
          <span className="text-2xl font-bold text-[#2B2B2B]">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 transition hover:text-[#C56A16]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex rounded-full bg-[#C56A16] px-5 py-2.5 text-white transition hover:bg-[#A9540E]"
        >
          Order on WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl md:hidden"
          aria-label="Open Menu"
        >
          ☰
        </button>

      </div>
    </header>
  );
}
