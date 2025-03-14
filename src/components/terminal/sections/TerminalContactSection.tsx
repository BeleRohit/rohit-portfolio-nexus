
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const contactData = {
  email: 'rohitnbele@gmail.com',
  github: 'https://github.com/belerohit',
  linkedin: 'https://linkedin.com/in/belerohit',
};

const TerminalContactSection = () => {
  const [step, setStep] = useState(0);
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => prev < 4 ? prev + 1 : prev);
    }, 600);
    
    return () => clearInterval(timer);
  }, []);
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="font-mono">
      <div className="mb-6">
        {step >= 0 && (
          <div className="text-yellow-400 mb-2">
            $ Initializing contact protocols...
          </div>
        )}
        
        {step >= 1 && (
          <div className="mb-4">
            <div className="text-cyan-400 mb-2">{'>'}  Contact Information:</div>
            <div className="pl-4 space-y-2">
              <div className="text-green-500">
                Email: {contactData.email}
                <button
                  onClick={handleCopyEmail}
                  className="ml-2 text-xs px-2 py-1 rounded bg-green-500/10 hover:bg-green-500/20"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        )}
        
        {step >= 2 && (
          <div className="mb-4">
            <div className="text-cyan-400 mb-2">{'>'}  Social Links:</div>
            <div className="pl-4 space-y-2">
              <div className="text-green-500">
                GitHub: <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="hover:underline">{contactData.github}</a>
              </div>
              <div className="text-green-500">
                LinkedIn: <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">{contactData.linkedin}</a>
              </div>
            </div>
          </div>
        )}
        
        {step >= 3 && (
          <div className="text-yellow-400 mb-2">
            $ All communication channels initialized successfully
          </div>
        )}
        
        {step >= 4 && (
          <div className="mt-6 p-4 border border-green-500/30 rounded bg-black/50">
            <div className="text-cyan-400 mb-2">{'>'}  Ready to Connect:</div>
            <p className="text-green-500">
              Feel free to reach out through any of the channels above. I'm always interested in discussing new projects,
              creative ideas, or opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalContactSection;
