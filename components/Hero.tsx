// components/Hero.tsx
"use client";

import { useReveal } from "./useReveal";
import { HeartIcon } from "./Icons";
import { PlaidPattern } from "./PlaidPattern";

export function Hero() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-28"
      style={{
        background:
          "linear-gradient(170deg, #FFF7F8 0%, #FFF0F3 40%, rgba(249,205,215,0.27) 100%)",
      }}
    >
      <PlaidPattern opacity={0.04} />

      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -right-[10%] -top-[15%] h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(249,205,215,0.33) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-[10%] -left-[5%] h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(250,218,221,0.27) 0%, transparent 70%)",
        }}
      />

      <div
        className={`relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center transition-all duration-1000 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Pill badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-rose-soft bg-white px-5 py-2 shadow-soft">
          <HeartIcon size={14} />
          <span className="font-body text-xs font-semibold tracking-[0.06em] text-rose-deep">
            MATCHING SLEEPWEAR FOR MUM & MINI
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-5 font-display text-5xl font-extrabold leading-none tracking-tight text-brand-text md:text-7xl lg:text-8xl">
          Match Their{" "}
          <span className="relative inline-block text-rose-deep">
            Magic
            <svg
              viewBox="0 0 200 12"
              className="absolute -bottom-1 left-[-2%] w-[104%]"
            >
              <path
                d="M2 8 Q50 2, 100 6 T198 4"
                stroke="#F9CDD7"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subheading */}
        <p className="mb-10 max-w-lg font-body text-xl font-light leading-relaxed text-brand-text-light md:text-2xl">
          Cozy moments. Matching memories.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#product" className="btn-primary">
            Shop The Sets ✨
          </a>
          <a href="#why" className="btn-secondary">
            Our Story
          </a>
        </div>

        {/* Hero image area */}
        <div
          className="relative mt-14 w-full max-w-3xl overflow-hidden rounded-4xl border-[3px] border-white shadow-soft-xl"
          style={{
            aspectRatio: "16/9",
            background:
              "linear-gradient(135deg, #FADADD 0%, #F9CDD7 50%, #F0DCC8 100%)",
          }}
        >
          <PlaidPattern opacity={0.12} />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="text-6xl">👩‍👧</span>
            <span className="rounded-full bg-white/80 px-6 py-2 font-display text-lg text-brand-text">
              Mum + Mini — Better Together
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
