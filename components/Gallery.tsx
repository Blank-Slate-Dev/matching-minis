// components/Gallery.tsx
"use client";

import { useReveal } from "./useReveal";

const GALLERY_ITEMS = [
  { emoji: "🛏️", label: "Bedtime stories" },
  { emoji: "🥞", label: "Pancake mornings" },
  { emoji: "📸", label: "Matching moments" },
  { emoji: "🧸", label: "Teddy bear picnics" },
  { emoji: "🌙", label: "Goodnight cuddles" },
  { emoji: "🎄", label: "Holiday matching" },
];

export function Gallery() {
  const { ref, visible } = useReveal();

  return (
    <section id="gallery" ref={ref} className="bg-cream px-6 py-28 md:px-12">
      <div
        className={`mx-auto max-w-6xl text-center transition-all duration-800 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <span className="section-label">#MatchingMinis</span>
        <h2 className="section-title mb-16 mt-4">The Family Gallery</h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-blush-200/30 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md"
              style={{
                aspectRatio: i === 0 || i === 5 ? "1/1.15" : "1/1",
                background: `linear-gradient(${150 + i * 15}deg, #FAF0F2 0%, #F5E1E5 100%)`,
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
                  {item.emoji}
                </span>
                <span className="font-body text-xs font-medium tracking-wide text-brand-text-light">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
