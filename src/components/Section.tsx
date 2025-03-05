
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
}

const Section = ({
  id,
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
  contentClassName,
}: SectionProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'min-h-screen w-full py-20 px-6 md:px-12 lg:px-24',
        isVisible ? 'opacity-100' : 'opacity-0',
        'transition-opacity duration-1000',
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className={cn('section-heading', titleClassName)}>
          {title}
        </h2>
        
        {subtitle && (
          <p className={cn('section-subheading', subtitleClassName)}>
            {subtitle}
          </p>
        )}
        
        <div className={cn('mt-12', contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
