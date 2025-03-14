
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Section from './Section';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    icon: <Mail className="h-5 w-5" />,
    url: 'mailto:rohitnbele@gmail.com',
  },
  {
    name: 'GitHub',
    icon: <Github className="h-5 w-5" />,
    url: 'https://github.com/belerohit',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5" />,
    url: 'https://linkedin.com/in/belerohit',
  },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [copied, setCopied] = useState(false);
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rohit.bele@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Interested in working together? Let's connect!"
      className="bg-secondary/30"
    >
      <div
        ref={ref}
        className={cn(
          'max-w-3xl mx-auto text-center',
          'transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}
      >
        <p className="text-lg text-foreground/80 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me through any of the platforms below.
        </p>
        
        <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-primary/30 bg-primary/5 text-foreground mb-8">
          <Mail className="h-5 w-5 text-primary" />
          <span>rohitnbele@gmail.com</span>
          <button
            onClick={handleCopyEmail}
            className="ml-2 text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center justify-center p-3 rounded-full',
                'bg-card hover:bg-card/80 text-foreground/80 hover:text-primary',
                'border border-border hover:border-primary/30',
                'transition-all duration-300 hover:scale-110'
              )}
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <div className="glassmorphism rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-muted-foreground mb-6">
            Whether you have a question, a project idea, or just want to say hello, I'll try my best to get back to you as soon as possible.
          </p>
          <a
            href="mailto:rohitnbele@gmail.com"
            className={cn(
              'inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium',
              'transform hover:translate-y-[-2px] transition-all duration-300'
            )}
          >
            Send a Message
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
