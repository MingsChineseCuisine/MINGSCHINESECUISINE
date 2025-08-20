import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import NewAboutSection from "@/components/new-about-section";
import MenuSection from "@/components/menu-section";
import GallerySection from "@/components/gallery-section";
import TestimonialSection from "@/components/testimonial-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <NewAboutSection />
        <MenuSection />
        <GallerySection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
