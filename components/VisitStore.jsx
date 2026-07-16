"use client";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const REVIEW_URL = "https://www.google.com/maps/place/?q=place_id:ChIJn_QYeF69lTkRfOmUjfiD1hU";

export default function VisitStore() {
  const handleLeaveReview = () => {
    window.open(REVIEW_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20">
      <div className="rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]">
            Visit Our Store
          </p>
          <h2 className="text-3xl font-semibold text-[var(--color-text)]">
            Come visit us or leave us a review on Google.
          </h2>
          <p className="max-w-3xl text-[var(--color-muted)] leading-7">
            Our Pokhara shop is the home of devotional offerings, idols, incense, and festival essentials. Stop by or share your feedback on Google.
          </p>
        </div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[1.8fr_1fr]">
          <div className="rounded-[16px] border border-[var(--color-border)] bg-[var(--color-background)] overflow-hidden h-[420px]">
            <iframe
              title="ShreePuja Store Location"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1515.4476049099824!2d84.08265332000514!3d28.147364435739593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995bd5e7818f49f%3A0x15d683f88d94e97c!2z4KS24KWN4KSw4KWAIOCkquClguCknOCkviDgpLjgpL7gpK7gpJfgpY3gpLDgpYA!5e0!3m2!1sen!2snp!4v1784207848917!5m2!1sen!2snp"
            />
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Address</p>
                <p className="mt-2 text-lg font-medium text-[var(--color-text)]">{siteConfig.address}</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Phone</p>
                <p className="mt-2 text-lg font-medium text-[var(--color-text)]">
                  <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]">
                    {siteConfig.phone}
                  </a>
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Email</p>
                <p className="mt-2 text-lg font-medium text-[var(--color-text)]">
                  <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]">
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href="https://maps.app.goo.gl/aZBdWA9EGdDSpLiR8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-center text-sm font-medium text-[var(--color-text)] transition hover:bg-[var(--color-background)]"
              >
                View on Google Maps
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Pokhara%2C+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-center text-sm font-medium text-[var(--color-text)] transition hover:bg-[var(--color-background)]"
              >
                Get Directions
              </a>
              <Button variant="primary" onClick={handleLeaveReview} className="w-full text-sm">
                ⭐ Leave Us a Google Review
              </Button>
            </div>

            <div className="rounded-[16px] border border-[var(--color-border)] bg-[var(--color-background)] p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">Google Rating</p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-3xl font-semibold text-[var(--color-text)]">⭐ 4.9</p>
                  <p className="text-sm text-[var(--color-muted)]">Based on Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
