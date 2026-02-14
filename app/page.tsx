// app/page.tsx
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { WhySection } from "@/components/WhySection";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { EmailCapture } from "@/components/EmailCapture";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Nav />
      <Hero />
      <FeaturedProduct />
      <WhySection />
      <Gallery />
      <Testimonials />
      <EmailCapture />
      <Footer />
    </main>
  );
}
