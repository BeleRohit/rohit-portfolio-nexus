
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const scrollProgress = useScrollProgress();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="relative py-12 px-6 bg-background border-t border-border">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-foreground">Rohit Bele</h2>
            <p className="text-muted-foreground">AI Engineer & Researcher</p>
          </div>
          
          <div className="text-center mb-6 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Rohit Bele. All rights reserved.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className={cn(
              'flex items-center justify-center p-3 rounded-full',
              'bg-card hover:bg-card/80 text-foreground/80 hover:text-primary',
              'border border-border hover:border-primary/30',
              'transition-all duration-300 hover:scale-110'
            )}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <div className="fixed bottom-0 left-0 h-1 bg-primary transition-all duration-300 z-50" style={{ width: `${scrollProgress}%` }}></div>
    </footer>
  );
};

export default Footer;
