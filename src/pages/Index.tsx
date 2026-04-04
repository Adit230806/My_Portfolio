import Navigation from "@/components/Navigation";
import ScrollHeroAnimation from "@/components/ScrollHeroAnimation";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Film grain noise overlay */}
      <div className="noise-overlay" />
      <Navigation />
      <ScrollHeroAnimation />
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
