
import { cn } from '@/lib/utils';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level?: string;
  className?: string;
}

const SkillCard = ({ icon, name, level, className }: SkillCardProps) => {
  return (
    <div
      className={cn(
        'group flex flex-col items-center p-6 rounded-xl',
        'transition-all duration-300 hover:shadow-md',
        'border border-border hover:border-primary/30',
        'bg-card/50 hover:bg-card',
        className
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
  );
};

export default SkillCard;
