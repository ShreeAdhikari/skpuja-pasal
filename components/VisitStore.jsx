"use client";
import React from "react";

const REVIEW_URL = "https://www.google.com/maps/place/?q=place_id:ChIJn_QYeF69lTkRfOmUjfiD1hU";

export default function VisitStore() {
  const handleLeaveReview = () => {
    window.open(REVIEW_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20">
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-3">
          <span className="text-orange-600 font-semibold uppercase tracking-wider">
            Visit Our Store
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Come visit us or leave us a review on Google.</h2>
          <p className="max-w-3xl text-gray-600 leading-7">
            Drop by our Pokhara store for authentic puja samagri, or share your experience on Google Reviews.
          </p>
        </div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[1.8fr_1fr]">
          <div className="rounded-3xl overflow-hidden border border-gray-200 bg-slate-100 h-[420px]">
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
                <p className="text-sm uppercase tracking-wider text-gray-500">Address</p>
                <p className="mt-2 text-lg font-medium text-gray-900">Pokhara, Nepal</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">Phone</p>
                <p className="mt-2 text-lg font-medium text-gray-900">
                  <a href="tel:+9779860040106" className="text-orange-600 hover:underline">
                    +977 98600 40106
                  </a>
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500">Email</p>
                <p className="mt-2 text-lg font-medium text-gray-900">
                  <a href="mailto:info@shreepuja.com" className="text-orange-600 hover:underline">
                    info@shreepuja.com
                  </a>
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <a
                href="https://maps.app.goo.gl/aZBdWA9EGdDSpLiR8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 py-3 text-center font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                View on Google Maps
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Pokhara%2C+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 py-3 text-center font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Get Directions
              </a>
              <button
                type="button"
                onClick={handleLeaveReview}
                className="inline-flex items-center justify-center rounded-2xl bg-orange-600 px-4 py-3 text-center font-medium text-white transition hover:bg-orange-700 active:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                ⭐ Leave Us a Google Review
              </button>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-orange-50 p-6">
              <p className="text-sm uppercase tracking-wider text-gray-500">Google Rating</p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-3xl font-semibold">⭐ 4.9</p>
                  <p className="text-sm text-gray-500">Based on Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
