import AboutUs from "@/components/HomePage/AboutUs";
import Faq from "@/components/HomePage/Faq";
import Footer from "@/components/HomePage/Footer";
import HeroSection from "@/components/HomePage/HeroSection";
import NavBar from "@/components/HomePage/NavBar";
import ProcessSection from "@/components/HomePage/ProcessSection";
import ProcessText from "@/components/HomePage/ProcessText";
import ServicesSection from "@/components/HomePage/ServicesSection";
import Testimonial from "@/components/HomePage/Testimonial";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <AboutUs />
      <ProcessSection />
      <ProcessText />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}
