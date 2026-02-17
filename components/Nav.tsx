// components/Nav.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CartIcon, MenuIcon, CloseIcon } from "./Icons";

const NAV_LINKS = [
  { label: "Shop", href: "#product" },
  { label: "Our Story", href: "#why" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 transition-all duration-300 md:px-12 ${
          scrolled
            ? "border-b border-blush-200/60 bg-cream/95 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <a href="#" className={`flex-shrink-0 ${mobileOpen ? "invisible md:visible" : ""}`}>
          <Image
            src="/MatchingMinisLogo.png"
            alt="Matching Minis"
            width={1097}
            height={504}
            className="w-28 md:w-36"
            priority
          />
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-[13px] font-medium tracking-wide text-brand-text-light transition-colors hover:text-brand-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#product"
            className="flex items-center gap-2 rounded-full bg-brand-text px-6 py-2.5 font-body text-[13px] font-medium tracking-wide text-white transition-all hover:opacity-90"
          >
            <CartIcon />
            Shop
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-cream">
          <Image
            src="/MatchingMinisLogo.png"
            alt="Matching Minis"
            width={1097}
            height={504}
            className="mb-6 w-44"
          />
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-2xl font-light tracking-wide text-brand-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#product"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-4"
          >
            Shop Now
          </a>
        </div>
      )}
    </>
  );
}
