import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CredentialsStrip from "@/components/CredentialsStrip";
import WhyHomeCareSection from "@/components/WhyHomeCareSection";
import PelvicSection from "@/components/PelvicSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileWhatsAppBar from "@/components/MobileWhatsAppBar";
import CampaignPopup from "@/components/CampaignPopup";
import HashScroll from "@/components/HashScroll";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useFirebaseTracking, useAutoClickTracking } from "@/hooks/useFirebaseTracking";

const Index = () => {
  useFirebaseTracking();
  useAutoClickTracking();

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <HashScroll />
        <Header />
        <HeroSection />
        <CredentialsStrip />
        <ServicesSection />
        <WhyHomeCareSection />
        <PelvicSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
        <Footer />
        <FloatingWhatsApp />
        <MobileWhatsAppBar />
        <CampaignPopup />
      </div>
    </LanguageProvider>
  );
};

export default Index;
