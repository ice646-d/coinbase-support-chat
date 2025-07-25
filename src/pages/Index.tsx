import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import PopularTopics from "@/components/PopularTopics"
import AboutSection from "@/components/AboutSection"
import RequestForm from "@/components/RequestForm"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PopularTopics />
      <AboutSection />
      <RequestForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
