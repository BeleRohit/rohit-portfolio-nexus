
import React, { createContext, useContext, useState, useEffect } from 'react';

type TerminalModeContextType = {
  isTerminalMode: boolean;
  toggleTerminalMode: () => void;
  handleTerminalButtonClick: () => void; // New function for UI toggling
};

const TerminalModeContext = createContext<TerminalModeContextType | undefined>(undefined);

export function TerminalModeProvider({ children }: { children: React.ReactNode }) {
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  // Handle keyboard shortcut (Alt+T) to toggle terminal mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 't') {
        toggleTerminalMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTerminalMode = () => {
    setIsTerminalMode(prev => !prev);
    // When entering terminal mode, we want to scroll to top
    if (!isTerminalMode) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Function specifically for UI button toggling
  const handleTerminalButtonClick = () => {
    toggleTerminalMode();
  };

  return (
    <TerminalModeContext.Provider value={{ 
      isTerminalMode, 
      toggleTerminalMode,
      handleTerminalButtonClick
    }}>
      {children}
    </TerminalModeContext.Provider>
  );
}

export const useTerminalMode = () => {
  const context = useContext(TerminalModeContext);
  if (context === undefined) {
    throw new Error('useTerminalMode must be used within a TerminalModeProvider');
  }
  return context;
};
