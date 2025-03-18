
import { useEffect } from 'react';
import { useTerminalMode } from '@/context/TerminalModeContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Achievements from '@/components/Achievements';
import Books from '@/components/Books';
import Authors from '@/components/Authors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TerminalLayout from '@/components/terminal/TerminalLayout';
import { Toggle } from '@/components/ui/toggle';
import { Terminal } from 'lucide-react';

const Index = () => {
  const { isTerminalMode, handleTerminalButtonClick } = useTerminalMode();
  
  // Add a mechanism to ensure scroll animations trigger properly when navigating directly to sections
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  
  if (isTerminalMode) {
    return <TerminalLayout />;
  }
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="fixed z-50 bottom-8 right-8">
        <Toggle
          aria-label="Toggle Terminal Mode"
          className="bg-primary/10 hover:bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
          onPressedChange={handleTerminalButtonClick}
        >
          <Terminal className="h-5 w-5" />
        </Toggle>
      </div>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Books />
        <Authors />
        <Publications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
