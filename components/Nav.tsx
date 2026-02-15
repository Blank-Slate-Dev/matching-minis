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
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-2 transition-all duration-400 md:px-8 ${
          scrolled
            ? "border-b border-rose-soft/20 bg-[#FFF7F8] shadow-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#" className={`flex-shrink-0 ${mobileOpen ? "invisible md:visible" : ""}`}>
          <Image
            src="/MatchingMinisLogo.png"
            alt="Matching Minis"
            width={1097}
            height={504}
            className="w-36 md:w-48"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-body text-sm font-medium tracking-wide text-brand-text-light transition-colors hover:text-brand-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#product"
            className="btn-primary flex items-center gap-2 !px-5 !py-2.5 !text-sm"
          >
            <CartIcon />
            Shop Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-blush-50">
          <Image
            src="/MatchingMinisLogo.png"
            alt="Matching Minis"
            width={1097}
            height={504}
            className="-mb-2 w-64"
          />
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-body text-xl font-medium text-brand-text no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#product"
            onClick={() => setMobileOpen(false)}
            className="btn-primary"
          >
            Shop Now
          </a>
        </div>
      )}
    </>
  );
}