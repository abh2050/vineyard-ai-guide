import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ServiceCard } from '@/components/ui/service-card';
import { MetricCard } from '@/components/ui/metric-card';
import { CTASection } from '@/components/ui/cta-section';
import { getServices, getSiteConfig, getCaseStudies } from '@/lib/data';

/**
 * Home page with hero, services, credibility, and CTA sections
 */
const Index = () => {
  const services = getServices();
  const siteConfig = getSiteConfig();
  const caseStudies = getCaseStudies();
  const featuredCase = caseStudies[0];

  return (
    <Layout>
      {/* Hero Section */}
      <Section size="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {siteConfig.brand.tagline}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.brand.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="min-w-[200px] shadow-wine">
              <Link to="/contact" className="inline-flex items-center">
                {siteConfig.cta.primary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[200px]">
              <Link to="/services">
                {siteConfig.cta.secondary}
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Trust Bar */}
      <Section size="sm" background="muted">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">Trusted by wineries across the globe</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder logos */}
            {['Premium Estate', 'Heritage Vineyards', 'Coastal Cellars', 'Mountain View Winery'].map((name, index) => (
              <div key={index} className="text-sm font-medium text-muted-foreground bg-card px-4 py-2 rounded-lg shadow-soft">
                {name}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section size="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Five Pillars of AI Excellence
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions designed specifically for wineries, 
            from vineyard management to guest experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>

      {/* Why It Works */}
      <Section background="muted" size="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Our Approach Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three principles that ensure successful AI implementation in your winery.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.whyItWorks.map((item, index) => {
            const IconComponent = getIconComponent(item.icon);
            return (
              <Card key={index} className="text-center card-gradient shadow-medium">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Mini Case Study */}
      <Section size="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Real Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how AI transformed operations for one of our winery partners.
          </p>
        </div>
        
        {featuredCase && (
          <Card className="max-w-4xl mx-auto card-gradient shadow-strong">
            <CardContent className="pt-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {featuredCase.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{featuredCase.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredCase.impact}
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 mb-6">
                    <p className="italic text-muted-foreground">"{featuredCase.quote}"</p>
                    <footer className="text-sm text-muted-foreground mt-2">— {featuredCase.client}</footer>
                  </blockquote>
                  <Button asChild variant="outline">
                    <Link to="/case-studies" className="inline-flex items-center">
                      View All Case Studies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(featuredCase.metrics).slice(0, 4).map(([key, value]) => (
                    <MetricCard
                      key={key}
                      metric={value}
                      label={key.replace(/([A-Z])/g, ' $1').trim()}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </Section>

      {/* Final CTA */}
      <CTASection />
    </Layout>
  );
};

// Helper function to get icon component by name
function getIconComponent(iconName: string): React.ComponentType<{ className?: string }> {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'bar-chart-3': ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    'cpu': ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    'users': ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  };

  return iconMap[iconName] || iconMap['cpu'];
}

export default Index;
