
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const TerminalHomeSection = () => {
  const [text, setText] = useState('');
  const fullText = `
  █▀█ █▀█ █░█ █ ▀█▀   █▄▄ █▀▀ █░░ █▀▀
  █▀▄ █▄█ █▀█ █ ░█░   █▄█ ██▄ █▄▄ ██▄
  
  > AI Engineer & Data Scientist
  > Merging AI expertise with product innovation
  
  $ Type 'help' or use the navigation buttons below to explore`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono whitespace-pre-line">
      {text}
      <span className={cn("animate-pulse ml-1", text.length >= fullText.length ? "opacity-0" : "opacity-100")}>▌</span>
    </div>
  );
};

export default TerminalHomeSection;
