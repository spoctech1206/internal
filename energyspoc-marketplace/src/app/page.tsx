import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandMarquee from "@/components/BrandMarquee";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <CategoryGrid />
      <FeaturedProducts />
      <Benefits />
      <Testimonials />
      <CTASection />
    </>
  );
}
