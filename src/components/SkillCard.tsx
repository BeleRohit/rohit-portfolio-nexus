
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level?: string;
  joke?: string;
  className?: string;
}

const SkillCard = ({ icon, name, level, joke, className }: SkillCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    
    // Auto flip back after 5 seconds
    if (!isFlipped) {
      setTimeout(() => {
        setIsFlipped(false);
      }, 5000);
    }
  };

  return (
    <div
      onClick={handleFlip}
      className={cn(
        'group relative cursor-pointer',
        'perspective-1000 h-[180px]',
        className
      )}
    >
      <div
        className={cn(
          'absolute w-full h-full transition-all duration-500',
          'preserve-3d',
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        )}
      >
        {/* Front of card */}
        <div
          className={cn(
            'absolute w-full h-full backface-hidden',
            'flex flex-col items-center justify-center p-6 rounded-xl',
            'transition-all duration-300 hover:shadow-md',
            'border border-border hover:border-primary/30',
            'bg-card/50 hover:bg-card',
          )}
        >
          <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          
          <h3 className="text-base font-medium text-foreground mb-1">{name}</h3>
          
          {level && (
            <p className="text-xs text-muted-foreground">{level}</p>
          )}
        </div>

        {/* Back of card with joke */}
        <div
          className={cn(
            'absolute w-full h-full backface-hidden [transform:rotateY(180deg)]',
            'flex flex-col items-center justify-center p-4 rounded-xl',
            'border border-primary/30 bg-primary/5',
            'text-center shadow-md'
          )}
        >
          <p className="text-sm text-foreground italic">{joke || "Why did the developer quit his job? Because he didn't get arrays!"}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
