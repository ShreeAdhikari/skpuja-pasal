import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] text-[var(--color-text)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img src={assets.logo} alt="ShreePuja" className="h-10 w-auto" />
            <span className="text-xl font-semibold">{siteConfig.name}</span>
          </div>
          <p className="max-w-md text-sm text-[var(--color-muted)]">
            {siteConfig.name} brings authentic puja samagri, idols, incense, and festival supplies from our Pokhara store to your home with care, quality, and devotion.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-base font-semibold text-[var(--color-text)]">Quick links</h2>
          <ul className="space-y-3 text-sm text-[var(--color-muted)]">
            <li>
              <Link href="/" className="transition hover:text-[var(--color-primary)]">Home</Link>
            </li>
            <li>
              <Link href="/products" className="transition hover:text-[var(--color-primary)]">Products</Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-[var(--color-primary)]">About</Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-[var(--color-primary)]">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-base font-semibold text-[var(--color-text)]">Contact</h2>
          <div className="space-y-2 text-sm text-[var(--color-muted)]">
            <p>{siteConfig.address}</p>
            <p>
              <a href={`tel:${siteConfig.phone}`} className="transition hover:text-[var(--color-primary)]">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[var(--color-primary)]">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] py-4 text-center text-xs text-[var(--color-muted)]">
        © {new Date().getFullYear()} {siteConfig.name}. Crafted with devotion.
      </div>
    </footer>
  );
};

export default Footer;
