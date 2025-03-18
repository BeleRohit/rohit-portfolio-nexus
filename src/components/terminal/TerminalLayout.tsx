import { useEffect, useState, useRef } from 'react';
import { useTerminalMode } from '@/context/TerminalModeContext';
import { Terminal, MinimizeIcon, MaximizeIcon, X, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import TerminalNavigation from './TerminalNavigation';
import TerminalContent from './TerminalContent';

const TerminalLayout = () => {
  const { toggleTerminalMode } = useTerminalMode();
  const [currentSection, setCurrentSection] = useState('home');
  const [isTyping, setIsTyping] = useState(true);
  const [bootSequence, setBootSequence] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simulate boot sequence
    const timer = setTimeout(() => {
      setBootSequence(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.focus();
    }
  }, [bootSequence]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Navigation via keyboard
    if (e.key === 'h') setCurrentSection('home');
    if (e.key === 'a') setCurrentSection('about');
    if (e.key === 's') setCurrentSection('skills');
    if (e.key === 'p') setCurrentSection('projects');
    if (e.key === 'b') setCurrentSection('books');
    if (e.key === 'r') setCurrentSection('publications');
    if (e.key === 'v') setCurrentSection('achievements');
    if (e.key === 'c') setCurrentSection('contact');
    if (e.key === 'q') toggleTerminalMode();
  };

  return (
    <div 
      className="fixed inset-0 bg-black text-green-500 font-mono overflow-hidden z-50 p-4"
      tabIndex={0}
      ref={terminalRef}
      onKeyDown={handleKeyDown}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-green-500/30 pb-2 mb-4">
        <div className="flex items-center">
          <Cpu className="w-5 h-5 mr-2" />
          <span className="text-sm">rbele@terminal: ~/portfolio</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-green-500/20 rounded" aria-label="Minimize">
            <MinimizeIcon className="w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-green-500/20 rounded" aria-label="Maximize">
            <MaximizeIcon className="w-4 h-4" />
          </button>
          <button 
            className="p-1 hover:bg-red-500/20 hover:text-red-500 rounded"
            onClick={toggleTerminalMode}
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {bootSequence ? (
        <BootSequence />
      ) : (
        <div className="h-full overflow-hidden flex flex-col">
          {/* Terminal Main Content */}
          <div className="flex-1 overflow-auto scrollbar-hide mb-2 terminal-output">
            <TerminalContent section={currentSection} />
          </div>
          
          {/* Terminal Navigation */}
          <TerminalNavigation 
            currentSection={currentSection} 
            setCurrentSection={setCurrentSection}
          />
        </div>
      )}
    </div>
  );
};

const BootSequence = () => {
  const [text, setText] = useState('');
  const fullText = `
> Starting system...
> Initializing memory...............OK
> Loading kernel modules............OK
> Starting network services.........OK
> Checking file system..............OK
> Mounting portfolio data...........OK
> Loading UI components.............OK
> System ready
> Launching terminal interface.....
`;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-green-500 font-mono whitespace-pre-line">
      {text}
      <span className="animate-pulse">_</span>
    </div>
  );
};

export default TerminalLayout;
