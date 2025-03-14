
import { cn } from '@/lib/utils';
import { useTerminalMode } from '@/context/TerminalModeContext';

interface TerminalNavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const TerminalNavigation = ({ currentSection, setCurrentSection }: TerminalNavigationProps) => {
  const { toggleTerminalMode } = useTerminalMode();
  
  const commands = [
    { id: 'home', label: 'home', key: 'h' },
    { id: 'about', label: 'about', key: 'a' },
    { id: 'skills', label: 'skills', key: 's' },
    { id: 'projects', label: 'projects', key: 'p' },
    { id: 'publications', label: 'publications', key: 'r' },
    { id: 'achievements', label: 'achievements', key: 'v' },
    { id: 'contact', label: 'contact', key: 'c' },
    { id: 'exit', label: 'exit', key: 'q' },
  ];

  return (
    <div className="border-t border-green-500/30 pt-2">
      <div className="flex items-center">
        <span className="text-green-500 mr-2">rbele@terminal:~$ </span>
        <span className="animate-pulse">▌</span>
      </div>
      
      <div className="mt-2 flex flex-wrap gap-2 text-sm">
        {commands.map((command) => (
          <button
            key={command.id}
            onClick={() => command.id === 'exit' ? toggleTerminalMode() : setCurrentSection(command.id)}
            className={cn(
              "px-2 py-1 border border-green-500/30 rounded",
              "hover:bg-green-500/20 transition-colors",
              currentSection === command.id && "bg-green-500/20"
            )}
          >
            {command.label} <span className="opacity-50">[{command.key}]</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TerminalNavigation;
