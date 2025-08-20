import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'muted' | 'primary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Reusable section component with consistent spacing and backgrounds
 */
export function Section({ 
  children, 
  className, 
  background = 'default',
  size = 'lg'
}: SectionProps) {
  const backgroundClasses = {
    default: 'bg-background',
    muted: 'bg-muted/20',
    primary: 'bg-primary text-primary-foreground'
  };

  const sizeClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-20',
    xl: 'py-20 md:py-24'
  };

  return (
    <section className={cn(
      backgroundClasses[background],
      sizeClasses[size],
      className
    )}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}