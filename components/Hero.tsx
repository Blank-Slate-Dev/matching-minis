// components/Hero.tsx
"use client";

import { useReveal } from "./useReveal";
import { ArrowRight } from "./Icons";

export function Hero() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-32"
      style={{
        background: "linear-gradient(180deg, #FDF8F9 0%, #FAF0F2 50%, #FDFBFA 100%)",
      }}
    >
      <div
        className={`relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center transition-all duration-1000 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Label */}
        <span className="section-label mb-8">Matching Sleepwear for Mum & Mini</span>

        {/* Headline */}
        <h1 className="mb-6 max-w-3xl font-display text-6xl font-light leading-[1.1] tracking-tight text-brand-text md:text-7xl lg:text-8xl">
          Match Their{" "}
          <em className="text-rose-deep">Magic</em>
        </h1>

        {/* Subheading */}
        <p className="mb-12 max-w-md font-body text-base font-light leading-relaxed text-brand-text-light md:text-lg">
          Cozy moments. Matching memories.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#product" className="btn-primary">
            Shop The Sets
            <ArrowRight size={15} />
          </a>
          <a href="#why" className="btn-secondary">
            Our Story
          </a>
        </div>

        {/* Hero image area */}
        <div
          className="mt-20 w-full max-w-4xl overflow-hidden rounded-3xl border border-blush-200/50 shadow-soft-lg"
          style={{
            aspectRatio: "16/8",
            background: "linear-gradient(135deg, #FAF0F2 0%, #F5E1E5 40%, #EDE3D5 100%)",
          }}
        >
          <div className="flex h-full flex-col items-center justify-center gap-3">
            <span className="text-5xl">👩‍👧</span>
            <span className="font-body text-sm font-medium tracking-wide text-brand-text-light">
              Mum + Mini — Better Together
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
