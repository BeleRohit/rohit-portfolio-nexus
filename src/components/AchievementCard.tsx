
import { cn } from '@/lib/utils';
import { Trophy, ExternalLink } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  year: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
}

const AchievementCard = ({
  title,
  year,
  description,
  icon = <Trophy className="h-5 w-5" />,
  link,
}: AchievementCardProps) => {
  return (
    <div className="flex gap-4 items-start p-4 rounded-lg hover:bg-card/50 transition-colors">
      <div className="flex-shrink-0 p-2 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-base font-medium text-foreground">{title}</h3>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
            {year}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            <span>View Newsletter</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
};

export default AchievementCard;
