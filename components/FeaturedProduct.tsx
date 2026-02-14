"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";
import { StarIcon, CartIcon } from "./Icons";
import { PlaidPattern } from "./PlaidPattern";

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
    <section id="product" ref={ref} className="relative bg-cream px-6 py-24">
      <div
        className={`mx-auto max-w-5xl transition-all duration-800 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="section-label">✦ BESTSELLER ✦</span>
          <h2 className="section-title mt-2">The Set Everyone&apos;s Talking About</h2>
        </div>

        {/* Product grid */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Product image */}
          <div
            className="relative overflow-hidden rounded-3xl border-2 border-white shadow-soft-lg"
            style={{
              aspectRatio: "4/5",
              background:
                "linear-gradient(160deg, #FFF0F3 0%, rgba(249,205,215,0.4) 100%)",
            }}
          >
            <PlaidPattern opacity={0.15} />
            <div className="absolute left-4 top-4 rounded-full bg-rose-deep px-4 py-1.5 font-body text-xs font-bold text-white">
              MATCHING SET
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="text-7xl">👚</span>
              <span className="rounded-full bg-white/85 px-5 py-2 font-body text-sm text-brand-text-light">
                Pink Plaid Flannelette
              </span>
            </div>
          </div>

          {/* Product info */}
          <div>
            <p className="section-label mb-2">Matching Minis</p>
            <h3 className="mb-2 font-display text-3xl text-brand-text">
              Classic Pink Flannel Set
            </h3>

            {/* Rating */}
            <div className="mb-4 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="font-body text-sm text-brand-text-muted">
                4.9 (128 reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mb-1 font-display text-3xl text-brand-text">
              $89.95{" "}
              <span className="font-body text-base font-normal text-brand-text-muted">
                AUD
              </span>
            </p>

            {/* Description */}
            <p className="mb-8 font-body text-sm leading-relaxed text-brand-text-light">
              Our signature matching set in the softest brushed cotton
              flannelette. Cozy enough for bedtime stories, cute enough for
              Saturday morning pancakes. Includes one women&apos;s set and one
              child&apos;s set.
            </p>

            {/* Women's Size */}
            <div className="mb-5">
              <p className="mb-2.5 font-body text-xs font-bold uppercase tracking-wider text-brand-text">
                Women&apos;s Size
              </p>
              <div className="flex flex-wrap gap-2">
                {WOMEN_SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setWomenSize(s)}
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl font-body text-sm font-semibold transition-all duration-200 ${
                      womenSize === s
                        ? "border-2 border-rose-deep bg-blush-100 text-rose-deep"
                        : "border border-rose-soft/60 bg-white text-brand-text-light hover:border-rose-deep/40"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Child's Size */}
            <div className="mb-8">
              <p className="mb-2.5 font-body text-xs font-bold uppercase tracking-wider text-brand-text">
                Child&apos;s Size
              </p>
              <div className="flex flex-wrap gap-2">
                {CHILD_SIZES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setChildSize(s)}
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl font-body text-sm font-semibold transition-all duration-200 ${
                      childSize === s
                        ? "border-2 border-rose-deep bg-blush-100 text-rose-deep"
                        : "border border-rose-soft/60 bg-white text-brand-text-light hover:border-rose-deep/40"
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
              className={`flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-body text-base font-bold text-white transition-all duration-300 ${
                added
                  ? "bg-emerald-500 shadow-[0_6px_24px_rgba(92,177,118,0.25)]"
                  : "bg-rose-deep shadow-glow hover:-translate-y-0.5"
              }`}
            >
              {added ? "✓ Added to Bag!" : <><CartIcon /> Add to Bag</>}
            </button>

            {/* Trust badges */}
            <div className="mt-5 flex justify-center gap-6">
              {["Free Shipping", "Easy Returns", "Gift Wrap"].map((t) => (
                <span
                  key={t}
                  className="font-body text-xs font-medium text-brand-text-muted"
                >
                  ✦ {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
