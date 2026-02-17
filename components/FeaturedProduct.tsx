// components/FeaturedProduct.tsx
"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";
import { StarIcon, CartIcon } from "./Icons";

const WOMEN_SIZES = ["XS", "S", "M", "L", "XL"] as const;
const CHILD_SIZES = ["2", "3", "4", "5", "6", "8", "10"] as const;

export function FeaturedProduct() {
  const { ref, visible } = useReveal();
  const [womenSize, setWomenSize] = useState<string>("M");
  const [childSize, setChildSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="product" ref={ref} className="bg-cream px-6 py-28 md:px-12">
      <div
        className={`mx-auto max-w-6xl transition-all duration-800 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-16 text-center">
          <span className="section-label">Bestseller</span>
          <h2 className="section-title mt-4">The Set Everyone&apos;s Talking About</h2>
        </div>

        <div className="grid items-start gap-16 md:grid-cols-2">
          {/* Product image */}
          <div
            className="overflow-hidden rounded-2xl border border-blush-200/40 shadow-soft"
            style={{
              aspectRatio: "3/4",
              background: "linear-gradient(160deg, #FAF0F2 0%, #F5E1E5 100%)",
            }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-4">
              <span className="text-6xl">👚</span>
              <span className="font-body text-xs font-medium tracking-widest text-brand-text-muted">
                PINK PLAID FLANNELETTE
              </span>
            </div>
          </div>

          {/* Product info */}
          <div className="py-4">
            <p className="section-label mb-3">Matching Minis</p>
            <h3 className="mb-4 font-display text-3xl font-light tracking-tight text-brand-text md:text-4xl">
              Classic Pink Flannel Set
            </h3>

            <div className="mb-5 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="font-body text-xs text-brand-text-muted">
                4.9 (128 reviews)
              </span>
            </div>

            <p className="mb-2 font-display text-2xl font-normal text-brand-text">
              $89.95{" "}
              <span className="font-body text-sm font-normal text-brand-text-muted">AUD</span>
            </p>

            <p className="mb-10 max-w-md font-body text-sm leading-relaxed text-brand-text-light">
              Our signature matching set in the softest brushed cotton flannelette.
              Cozy enough for bedtime stories, cute enough for Saturday morning pancakes.
              Includes one women&apos;s set and one child&apos;s set.
            </p>

            {/* Women's Size */}
            <div className="mb-6">
              <p className="mb-3 font-body text-[11px] font-medium uppercase tracking-[0.15em] text-brand-text">
                Women&apos;s Size
              </p>
              <div className="flex flex-wrap gap-2">
                {WOMEN_SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setWomenSize(s)}
                    className={`flex h-11 w-11 items-center justify-center rounded-lg font-body text-xs font-medium transition-all duration-200 ${
                      womenSize === s
                        ? "border-2 border-brand-text bg-brand-text/[0.04] text-brand-text"
                        : "border border-blush-200 bg-white text-brand-text-light hover:border-brand-text/30"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Child's Size */}
            <div className="mb-10">
              <p className="mb-3 font-body text-[11px] font-medium uppercase tracking-[0.15em] text-brand-text">
                Child&apos;s Size
              </p>
              <div className="flex flex-wrap gap-2">
                {CHILD_SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setChildSize(s)}
                    className={`flex h-11 w-11 items-center justify-center rounded-lg font-body text-xs font-medium transition-all duration-200 ${
                      childSize === s
                        ? "border-2 border-brand-text bg-brand-text/[0.04] text-brand-text"
                        : "border border-blush-200 bg-white text-brand-text-light hover:border-brand-text/30"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className={`flex w-full items-center justify-center gap-2 rounded-full py-4 font-body text-sm font-medium tracking-wide text-white transition-all duration-300 ${
                added
                  ? "bg-emerald-600"
                  : "bg-brand-text hover:-translate-y-px hover:opacity-90"
              }`}
            >
              {added ? "✓ Added to Bag" : <><CartIcon /> Add to Bag — $89.95</>}
            </button>

            <div className="mt-6 flex justify-center gap-8">
              {["Free Shipping", "Easy Returns", "Gift Wrap"].map((t) => (
                <span key={t} className="font-body text-[11px] tracking-wide text-brand-text-muted">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
