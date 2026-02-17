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
    <footer className="border-t border-blush-200/50 bg-blush-50 px-6 pb-10 pt-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/MatchingMinisLogo.png"
              alt="Matching Minis"
              width={1097}
              height={504}
              className="mb-4 w-28"
            />
            <p className="max-w-[260px] font-body text-sm leading-relaxed text-brand-text-light">
              Soft matching sleepwear for mums and their little ones. Made with
              love in Australia.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-5 font-body text-[11px] font-medium uppercase tracking-[0.2em] text-brand-text">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-brand-text-light transition-colors hover:text-brand-text"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-blush-200/50 pt-8 md:flex-row">
          <p className="font-body text-xs text-brand-text-muted">
            © 2026 Matching Minis. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs text-brand-text-muted transition-colors hover:text-brand-text-light"
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
