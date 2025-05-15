// Update this page (the content is just a fallback if you fail to update the page)

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
