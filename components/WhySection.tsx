// components/WhySection.tsx
"use client";

import { useReveal } from "./useReveal";
import { CottonIcon, MoonIcon, CameraIcon } from "./Icons";
import { PlaidPattern } from "./PlaidPattern";

const FEATURES = [
  {
    icon: <CottonIcon />,
    title: "Ultra-Soft Brushed Cotton",
    description:
      "Premium flannelette that gets softer with every wash. Gentle on little skin, dreamy for mums.",
  },
  {
    icon: <MoonIcon />,
    title: "Made For Cozy Moments",
    description:
      "Designed for bedtime routines, lazy mornings, and everything in between. Comfort is everything.",
  },
  {
    icon: <CameraIcon />,
    title: "Designed For Memories",
    description:
      "The matching photos. The giggles getting dressed. These pyjamas turn everyday moments into keepsakes.",
  },
];

export function WhySection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="why"
      ref={ref}
      className="relative bg-blush-50 px-6 py-24"
    >
      <PlaidPattern opacity={0.03} />

      <div
        className={`relative z-10 mx-auto max-w-4xl text-center transition-all duration-800 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <span className="section-label">WHY MATCHING MINIS</span>
        <h2 className="section-title mb-12 mt-2">More Than Just Pyjamas</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="card-hover rounded-3xl border border-rose-soft/25 bg-white p-8 shadow-soft"
            >
              <div className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-blush-100">
                {feature.icon}
              </div>
              <h3 className="mb-2 font-display text-xl text-brand-text">
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
