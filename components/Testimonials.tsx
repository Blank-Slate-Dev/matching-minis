// components/Testimonials.tsx
"use client";

import { useReveal } from "./useReveal";
import { StarIcon } from "./Icons";

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Melbourne, VIC",
    text: "My daughter squeals every time we put our matching pyjamas on. The fabric is impossibly soft — like being wrapped in a cloud. These are our bedtime uniform now.",
  },
  {
    name: "Jessica T.",
    location: "Sydney, NSW",
    text: "I bought these for Christmas morning photos and honestly, I wasn't prepared for how emotional it would make me. My little one kept saying 'we match, Mummy!' Pure magic.",
  },
  {
    name: "Emily R.",
    location: "Brisbane, QLD",
    text: "The quality is outstanding. We've washed ours a dozen times and they're softer than the day they arrived. Already bought a second set for my sister and her daughter.",
  },
];

export function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section id="reviews" ref={ref} className="bg-blush-50 px-6 py-28 md:px-12">
      <div
        className={`mx-auto max-w-5xl text-center transition-all duration-800 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <span className="section-label">Reviews</span>
        <h2 className="section-title mb-16 mt-4">What Mums Are Saying</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="rounded-2xl border border-blush-200/40 bg-white p-8 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md"
            >
              <div className="mb-5 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>

              <p className="mb-8 font-body text-sm leading-[1.8] text-brand-text-light">
                &ldquo;{review.text}&rdquo;
              </p>

              <div>
                <p className="font-body text-sm font-semibold text-brand-text">
                  {review.name}
                </p>
                <p className="font-body text-xs text-brand-text-muted">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
