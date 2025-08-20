import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Service } from '@/lib/data';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  showDetails?: boolean;
  className?: string;
}

/**
 * Service card component for displaying service information
 */
export function ServiceCard({ service, showDetails = false, className }: ServiceCardProps) {
  const IconComponent = getIconComponent(service.icon);

  return (
    <Card className={cn(
      "h-full transition-all duration-300 hover:shadow-wine hover:-translate-y-1 card-gradient",
      className
    )}>
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <IconComponent className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg text-foreground">{service.title}</h3>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {service.summary}
        </p>
        
        {showDetails && (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm text-foreground mb-2">Key Benefits:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {service.outcomes.slice(0, 3).map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 mr-2 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <Button asChild variant="ghost" className="mt-6 p-0 h-auto text-primary hover:text-primary-light">
          <Link to="/services" className="inline-flex items-center text-sm font-medium">
            Learn more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

// Helper function to get icon component by name
function getIconComponent(iconName: string): React.ComponentType<{ className?: string }> {
  // This is a simplified icon mapping - in a real app you might use dynamic imports
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'brain-circuit': ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    'trending-up': ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    'message-circle': ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    'map': ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    'database': ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  };

  return iconMap[iconName] || iconMap['brain-circuit'];
}