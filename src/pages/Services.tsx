import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getServices } from '@/lib/data';

/**
 * Services page - detailed view of all service offerings
 */
export default function Services() {
  const services = getServices();

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="wine-gradient text-white py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 wine-gradient rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-10 right-10 w-24 h-24 wine-gradient rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 wine-gradient rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            AI Services for Wineries
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive AI solutions designed specifically for the wine industry. 
            From vineyard to visitor, we help you optimize every aspect of your operation.
          </p>
        </div>
      </Section>

      {/* Services Details */}
      <Section className="py-20 bg-gradient-to-br from-muted/30 to-background" size="xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="animate-scale-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="card-gradient shadow-wine hover-wine-glow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                        <p className="text-muted-foreground">{service.summary}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Problems */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Common Challenges</h3>
                      <ul className="space-y-2">
                        {service.problems.map((problem, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 mr-3 flex-shrink-0" />
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">What We Deliver</h3>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 mr-3 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pilot */}
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Start Small</h3>
                      <p className="text-sm text-muted-foreground">{service.pilot}</p>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Expected Outcomes</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-wine hover-wine-glow wine-gradient text-white">
                <CardHeader>
                  <h3 className="font-semibold text-white">Ready to Get Started?</h3>
                  <p className="text-sm text-white/90">
                    Book a discovery call to discuss how these services can transform your winery.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full bg-white text-primary hover:bg-white/90">
                    <Link to="/contact">Book Discovery Call</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                    <Link to="/case-studies">View Case Studies</Link>
                  </Button>
                  <div className="pt-4 border-t">
                    <h4 className="font-medium text-sm text-white mb-2">Quick Navigation</h4>
                    <ul className="space-y-2">
                      {services.map((service) => (
                        <li key={service.id}>
                          <a
                            href={`#${service.id}`}
                            className="text-sm text-white/90 hover:text-white transition-colors flex items-center"
                          >
                            <ExternalLink className="w-3 h-3 mr-2" />
                            {service.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}