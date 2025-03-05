
import { cn } from '@/lib/utils';
import { FileText, Calendar } from 'lucide-react';

interface PublicationCardProps {
  title: string;
  conference: string;
  date: string;
  description: string;
  pdfUrl: string;
}

const PublicationCard = ({
  title,
  conference,
  date,
  description,
  pdfUrl,
}: PublicationCardProps) => {
  return (
    <div
      className={cn(
        'group p-6 rounded-xl transition-all duration-300',
        'border border-border hover:border-primary/30',
        'bg-card/50 hover:bg-card hover:shadow-md'
      )}
    >
      <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div>{conference}</div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">
        {description}
      </p>
      
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center gap-2 text-sm font-medium',
          'text-primary hover:underline transition-all'
        )}
      >
        <FileText className="h-4 w-4" />
        <span>Read Paper</span>
      </a>
    </div>
  );
};

export default PublicationCard;
