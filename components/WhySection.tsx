// components/WhySection.tsx
"use client";

import { useReveal } from "./useReveal";

const FEATURES = [
  {
    emoji: "☁️",
    title: "Ultra-Soft Brushed Cotton",
    description:
      "Premium flannelette that gets softer with every wash. Gentle on little skin, dreamy for mums.",
  },
  {
    emoji: "🌙",
    title: "Made For Cozy Moments",
    description:
      "Designed for bedtime routines, lazy mornings, and everything in between. Comfort is everything.",
  },
  {
    emoji: "📷",
    title: "Designed For Memories",
    description:
      "The matching photos. The giggles getting dressed. These pyjamas turn everyday moments into keepsakes.",
  },
];

export function WhySection() {
  const { ref, visible } = useReveal();

  return (
    <section id="why" ref={ref} className="bg-blush-50 px-6 py-28 md:px-12">
      <div
        className={`mx-auto max-w-5xl text-center transition-all duration-800 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <span className="section-label">Why Matching Minis</span>
        <h2 className="section-title mb-16 mt-4">More Than Just Pyjamas</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="rounded-2xl border border-blush-200/50 bg-white p-10 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md"
            >
              <span className="mb-6 block text-3xl">{feature.emoji}</span>
              <h3 className="mb-3 font-display text-xl font-normal text-brand-text">
                {feature.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-brand-text-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
