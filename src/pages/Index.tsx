import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useTracking } from '@/hooks/useTracking';

const Index = () => {
  const track = useTracking();

  useEffect(() => {
    // Registrar visita UNA vez por mount (sem deps)
    track.addVisit();
  }, []); // Array vazio: executa só no mount!

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

