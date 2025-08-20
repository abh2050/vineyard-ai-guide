import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  metric: string;
  label: string;
  description?: string;
  className?: string;
}

/**
 * Metric card for displaying key statistics and outcomes
 */
export function MetricCard({ metric, label, description, className }: MetricCardProps) {
  return (
    <Card className={cn("text-center card-gradient", className)}>
      <CardContent className="pt-6 pb-6">
        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
          {metric}
        </div>
        <div className="text-sm font-medium text-foreground mb-1">
          {label}
        </div>
        {description && (
          <div className="text-xs text-muted-foreground">
            {description}
          </div>
        )}
      </CardContent>
    </Card>
  );
}