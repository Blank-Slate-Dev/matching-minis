import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matching Minis — Matching Sleepwear for Mum & Mini",
  description:
    "Soft, cozy matching flannelette pyjama sets for mums and their children. Made with love in Australia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream">{children}</body>
    </html>
  );
}
