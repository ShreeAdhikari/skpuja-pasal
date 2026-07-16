"use client"
import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(255,248,240,0.96)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl">🪔</span>
          <span className="text-2xl font-semibold text-[var(--color-text)]">ShreePuja</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[var(--color-text)] transition hover:text-[var(--color-primary)]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[16px] bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
          >
            Order on WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 text-xl text-[var(--color-text)] transition hover:bg-[var(--color-background)] md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div className={`${menuOpen ? "block" : "hidden"} border-t border-[var(--color-border)] bg-[var(--color-surface)] md:hidden`}> 
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-[16px] px-4 py-3 text-[var(--color-text)] transition hover:bg-[var(--color-background)]"
            >
              {item.name}
            </Link>
          ))}
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[16px] bg-[var(--color-primary)] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
