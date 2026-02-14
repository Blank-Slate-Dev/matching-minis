"use client";

import { useReveal } from "./useReveal";
import { PlaidPattern } from "./PlaidPattern";

const GALLERY_ITEMS = [
  { emoji: "🛏️", label: "Bedtime stories", gradient: "from-blush-100 to-rose-soft/50" },
  { emoji: "🥞", label: "Pancake mornings", gradient: "from-blush-200 to-blush-100" },
  { emoji: "📸", label: "Matching moments", gradient: "from-rose-soft/40 to-blush-100" },
  { emoji: "🧸", label: "Teddy bear picnics", gradient: "from-blush-100 to-rose-soft/30" },
  { emoji: "🌙", label: "Goodnight cuddles", gradient: "from-rose-soft/50 to-blush-200" },
  { emoji: "🎄", label: "Holiday matching", gradient: "from-blush-200 to-rose-soft/40" },
];

export function Gallery() {
  const { ref, visible } = useReveal();

  return (
    <section id="gallery" ref={ref} className="bg-cream px-6 py-24">
      <div
        className={`mx-auto max-w-5xl text-center transition-all duration-800 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <span className="section-label">#MATCHINGMINIS</span>
        <h2 className="section-title mb-12 mt-2">The Family Gallery</h2>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="group relative cursor-pointer overflow-hidden rounded-[20px] shadow-soft transition-all duration-400 hover:scale-[1.03] hover:shadow-soft-lg"
              style={{
                aspectRatio: i === 0 || i === 5 ? "1/1.1" : "1/1",
                background: `linear-gradient(${135 + i * 20}deg, #FFF0F3 0%, ${
                  ["#F9CDD755", "#FADADD", "#F0DCC844", "#F9CDD744", "#FADADD55", "#F9CDD7"][i]
                } 100%)`,
              }}
            >
              <PlaidPattern opacity={0.08} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                  {item.emoji}
                </span>
                <span className="rounded-full bg-white/80 px-4 py-1.5 font-body text-xs font-semibold text-brand-text">
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
