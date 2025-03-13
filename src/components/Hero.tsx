
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div
        className={cn(
          'absolute -top-[30%] -left-[30%] w-[80%] h-[80%] rounded-full',
          'bg-primary/5 blur-[100px] opacity-70'
        )}
      ></div>
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Removed the AI & Data Science portfolio button that was here */}
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in animation-delay-100">
          <span className="block">Hi, I'm</span>
          <span className="text-primary">Rohit Bele</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-200">
          Merging AI expertise with product innovation to build intelligent solutions
          that transform industries and enhance human experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
          <a
            href="#projects"
            className={cn(
              'px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium',
              'transform hover:translate-y-[-2px] transition-all button-hover'
            )}
          >
            View My Work
          </a>
          
          <a
            href="#contact"
            className={cn(
              'px-6 py-3 rounded-lg border border-primary/50 text-primary font-medium',
              'transform hover:translate-y-[-2px] transition-all button-hover'
            )}
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      {/* Moved the scroll down button outside the main content div and adjusted positioning */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a
          href="#about"
          className={cn(
            'flex flex-col items-center justify-center text-sm text-muted-foreground',
            'opacity-70 hover:opacity-100 transition-opacity'
          )}
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5 animate-float" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
