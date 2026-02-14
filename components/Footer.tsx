// components/Footer.tsx
import Image from "next/image";

const FOOTER_COLUMNS = [
  {
    title: "Shop",
    links: ["All Sets", "Women's", "Children's", "Gift Cards"],
  },
  {
    title: "Help",
    links: ["Size Guide", "Shipping", "Returns", "Contact Us"],
  },
  {
    title: "Follow",
    links: ["Instagram", "Facebook", "Pinterest", "TikTok"],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-text px-6 pb-8 pt-12">
      <div className="mx-auto max-w-5xl">
        {/* Footer grid */}
        <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/MatchingMinisLogo.png"
              alt="Matching Minis"
              width={1097}
              height={504}
              className="h-16 w-auto brightness-110"
            />
            <p className="mt-3 max-w-[280px] font-body text-sm leading-relaxed text-rose-soft/60">
              Soft matching sleepwear for mums and their little ones. Made with
              love in Australia.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-4 font-body text-xs font-bold uppercase tracking-widest text-rose-soft">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-rose-soft/55 transition-colors hover:text-rose-soft"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-rose-soft/15 pt-6 md:flex-row">
          <p className="font-body text-xs text-rose-soft/40">
            © 2026 Matching Minis. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs text-rose-soft/40 transition-colors hover:text-rose-soft/70"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
