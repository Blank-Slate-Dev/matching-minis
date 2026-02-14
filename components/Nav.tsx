"use client";

import { useState, useEffect } from "react";
import { HeartIcon, CartIcon, MenuIcon, CloseIcon } from "./Icons";

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
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-400 md:px-8 ${
          scrolled
            ? "border-b border-rose-soft/20 bg-blush-50/92 shadow-sm backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 no-underline">
          <span className="font-display text-2xl font-bold text-rose-deep">
            matching
          </span>
          <span className="font-display text-2xl font-semibold text-brand-text">
            minis
          </span>
          <HeartIcon size={14} />
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
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-blush-50">
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
