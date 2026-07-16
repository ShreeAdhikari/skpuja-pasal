import React from "react";

const QRPayment = () => {
  return (
    <section className="py-20">
      <div className="rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm md:p-12">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-[16px] border-2 border-dashed border-[var(--color-border)] bg-[var(--color-background)] flex items-center justify-center shadow-sm">
              <p className="text-center text-[var(--color-muted)]">
                QR Code
                <br />
                (Coming Soon)
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-primary)]">
              Easy Payment
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-[var(--color-text)]">
              Scan & pay with your preferred wallet
            </h2>
            <p className="text-[var(--color-muted)] mt-5 leading-8">
              Complete your order in moments with eSewa, Khalti, or bank QR. Secure, fast, and supported by local payment systems.
            </p>

            <div className="mt-8 space-y-3 text-[var(--color-text)]">
              {[
                "eSewa",
                "Khalti",
                "Mobile Banking",
                "Bank QR",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-[var(--color-primary)]">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <button className="mt-8 rounded-[16px] bg-[var(--color-primary)] px-8 py-3 text-white font-semibold transition hover:bg-[var(--color-primary-hover)]">
              Contact for Payment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRPayment;
