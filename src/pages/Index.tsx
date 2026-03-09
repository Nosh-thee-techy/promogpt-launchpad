import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import Countdown from "@/components/Countdown";
import Features from "@/components/Features";
import BuiltForAfrica from "@/components/BuiltForAfrica";
import DashboardPreview from "@/components/DashboardPreview";
import HowItWorks from "@/components/HowItWorks";
import WhyWeExist from "@/components/WhyWeExist";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <MarqueeTicker />
        <Countdown />
        <div id="features">
          <Features />
        </div>
        <BuiltForAfrica />
        <DashboardPreview />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <MarqueeTicker />
        <Testimonials />
        <WhyWeExist />
        <Waitlist />
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
