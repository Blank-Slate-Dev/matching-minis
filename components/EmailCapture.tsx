// components/EmailCapture.tsx
"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";

export function EmailCapture() {
  const { ref, visible } = useReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      ref={ref}
      className="bg-cream px-6 py-28 md:px-12"
    >
      <div
        className={`mx-auto max-w-2xl text-center transition-all duration-800 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-blush-200/50 bg-white p-12 shadow-soft md:p-16">
          <span className="section-label">Stay in the Loop</span>
          <h2 className="mb-4 mt-4 font-display text-3xl font-light tracking-tight text-brand-text md:text-4xl">
            Join The Mini Club
          </h2>
          <p className="mb-10 font-body text-sm leading-relaxed text-brand-text-light">
            Get 10% off your first matching set, plus early access to new
            prints and exclusive drops.
          </p>

          {submitted ? (
            <div className="rounded-xl bg-blush-50 p-6">
              <p className="font-display text-xl text-brand-text">
                You&apos;re in ✓
              </p>
              <p className="mt-1 font-body text-sm text-brand-text-light">
                Check your inbox for your 10% off code.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-blush-200 bg-blush-50/50 px-6 py-3.5 font-body text-sm text-brand-text outline-none transition-all placeholder:text-brand-text-muted focus:border-brand-text/30 focus:ring-1 focus:ring-brand-text/10"
              />
              <button
                onClick={handleSubmit}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
