import React from "react";

const variants = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] active:bg-[#8d4205] focus-visible:ring-[4px] focus-visible:ring-orange-200",
  secondary:
    "bg-white text-[var(--color-text)] border border-[var(--color-border)] hover:bg-[var(--color-background)] active:bg-slate-100 focus-visible:ring-[4px] focus-visible:ring-orange-200",
};

export default function Button({ variant = "primary", className = "", children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-[16px] px-6 py-3 text-base font-semibold transition duration-200 focus:outline-none ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
