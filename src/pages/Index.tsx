import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyHomeCareSection from "@/components/WhyHomeCareSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CampaignPopup from "@/components/CampaignPopup";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <WhyHomeCareSection />
        <ServicesSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
        <Footer />
        <FloatingWhatsApp />
        <CampaignPopup />
      </div>
    </LanguageProvider>
  );
};

export default Index;
