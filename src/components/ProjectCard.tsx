
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl transition-all duration-500',
        'h-[400px] w-full shadow-md will-change-transform',
        'border border-border hover:border-primary/50',
        isHovered ? 'scale-[1.02]' : 'scale-100'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
      
      <img
        src={image}
        alt={title}
        className={cn(
          'h-full w-full object-cover transition-transform duration-700',
          isHovered ? 'scale-110' : 'scale-100'
        )}
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        
        <p className={cn(
          'text-sm text-muted-foreground mb-4 opacity-0 transform translate-y-4',
          'transition-all duration-300',
          isHovered ? 'opacity-100 translate-y-0' : ''
        )}>
          {description}
        </p>
        
        <div className="flex gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center gap-1 text-sm font-medium',
              'text-foreground/70 hover:text-primary transition-colors'
            )}
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-1 text-sm font-medium',
                'text-foreground/70 hover:text-primary transition-colors'
              )}
            >
              <ArrowUpRight className="h-4 w-4" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
