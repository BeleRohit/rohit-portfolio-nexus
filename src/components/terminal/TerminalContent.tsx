
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import TerminalHomeSection from './sections/TerminalHomeSection';
import TerminalAboutSection from './sections/TerminalAboutSection';
import TerminalSkillsSection from './sections/TerminalSkillsSection';
import TerminalProjectsSection from './sections/TerminalProjectsSection';
import TerminalPublicationsSection from './sections/TerminalPublicationsSection';
import TerminalAchievementsSection from './sections/TerminalAchievementsSection';
import TerminalContactSection from './sections/TerminalContactSection';

interface TerminalContentProps {
  section: string;
}

const TerminalContent = ({ section }: TerminalContentProps) => {
  const [visibleText, setVisibleText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    setIsTyping(true);
    setVisibleText('');
    
    // Reset typing effect when section changes
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [section]);
  
  return (
    <div className="p-2">
      <div className="mb-4 text-green-300 border-b border-green-500/30 pb-2">
        <span className="text-yellow-400">[INFO]</span> Viewing section: <span className="text-cyan-400">{section}</span>
        {isTyping && <span className="animate-pulse ml-1">▌</span>}
      </div>
      
      <div className={cn("transition-opacity", isTyping ? "opacity-0" : "opacity-100")}>
        {section === 'home' && <TerminalHomeSection />}
        {section === 'about' && <TerminalAboutSection />}
        {section === 'skills' && <TerminalSkillsSection />}
        {section === 'projects' && <TerminalProjectsSection />}
        {section === 'publications' && <TerminalPublicationsSection />}
        {section === 'achievements' && <TerminalAchievementsSection />}
        {section === 'contact' && <TerminalContactSection />}
      </div>
    </div>
  );
};

export default TerminalContent;
