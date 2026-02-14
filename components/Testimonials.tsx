"use client";

import { useReveal } from "./useReveal";
import { StarIcon } from "./Icons";
import { PlaidPattern } from "./PlaidPattern";

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Melbourne, VIC",
    avatar: "👩",
    text: "My daughter squeals every time we put our matching pyjamas on. The fabric is impossibly soft — like being wrapped in a cloud. These are our bedtime uniform now.",
  },
  {
    name: "Jessica T.",
    location: "Sydney, NSW",
    avatar: "👩‍🦰",
    text: "I bought these for Christmas morning photos and honestly, I wasn't prepared for how emotional it would make me. My little one kept saying 'we match, Mummy!' Pure magic.",
  },
  {
    name: "Emily R.",
    location: "Brisbane, QLD",
    avatar: "👱‍♀️",
    text: "The quality is outstanding. We've washed ours a dozen times and they're softer than the day they arrived. Already bought a second set for my sister and her daughter.",
  },
];

export function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="reviews"
      ref={ref}
      className="relative bg-blush-50 px-6 py-24"
    >
      <PlaidPattern opacity={0.03} />

      <div
        className={`relative z-10 mx-auto max-w-5xl text-center transition-all duration-800 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <span className="section-label">LOVE LETTERS</span>
        <h2 className="section-title mb-12 mt-2">What Mums Are Saying</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="card-hover rounded-3xl border border-rose-soft/20 bg-white p-7 text-left shadow-soft"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 font-body text-sm italic leading-relaxed text-brand-text-light">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-rose-soft bg-blush-100 text-xl">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-body text-sm font-bold text-brand-text">
                    {review.name}
                  </p>
                  <p className="font-body text-xs text-brand-text-muted">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
