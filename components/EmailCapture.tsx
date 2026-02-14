"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";
import { PlaidPattern } from "./PlaidPattern";

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
      className="relative overflow-hidden px-6 py-20"
      style={{
        background:
          "linear-gradient(160deg, rgba(249,205,215,0.33) 0%, rgba(250,218,221,0.53) 50%, rgba(240,220,200,0.27) 100%)",
      }}
    >
      <PlaidPattern opacity={0.06} />

      <div
        className={`relative z-10 mx-auto max-w-xl text-center transition-all duration-800 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="rounded-4xl border border-white bg-white/90 p-10 shadow-soft-lg backdrop-blur-sm md:p-12">
          <span className="mb-4 block text-4xl">💌</span>

          <h2 className="mb-2 font-display text-3xl text-brand-text md:text-4xl">
            Join The Mini Club
          </h2>
          <p className="mb-8 font-body text-base leading-relaxed text-brand-text-light">
            Get 10% off your first matching set, plus early access to new
            prints, exclusive drops, and a whole lot of cozy inspo.
          </p>

          {submitted ? (
            <div className="rounded-2xl bg-blush-100 p-6">
              <p className="font-display text-xl text-rose-deep">
                You&apos;re in! 🎉
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
                className="flex-1 rounded-xl border border-rose-soft bg-white px-5 py-3.5 font-body text-sm text-brand-text outline-none transition-all focus:border-rose-deep focus:ring-2 focus:ring-rose-soft/40"
              />
              <button
                onClick={handleSubmit}
                className="btn-primary whitespace-nowrap !rounded-xl !px-7"
              >
                Join 💕
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
