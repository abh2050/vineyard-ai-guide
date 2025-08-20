import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { getSiteConfig } from '@/lib/data';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
  primaryHref?: string;
  secondaryHref?: string;
}

/**
 * Call-to-action section with primary and secondary buttons
 */
export function CTASection({
  title = "Ready to Transform Your Winery?",
  description = "Let's discuss how AI can improve your quality, forecast demand, and elevate guest experiences.",
  primaryText,
  secondaryText,
  primaryHref = "/contact",
  secondaryHref = "/services"
}: CTASectionProps) {
  const siteConfig = getSiteConfig();
  
  const primaryCTA = primaryText || siteConfig.cta.primary;
  const secondaryCTA = secondaryText || siteConfig.cta.secondary;

  return (
    <Section background="primary" size="lg">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary" className="min-w-[200px]">
            <Link to={primaryHref} className="inline-flex items-center">
              {primaryCTA}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="min-w-[200px] border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link to={secondaryHref}>
              {secondaryCTA}
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}