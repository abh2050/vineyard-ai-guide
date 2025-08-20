import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MetricCard } from '@/components/ui/metric-card';
import { getCaseStudies } from '@/lib/data';

/**
 * Case Studies page showcasing success stories
 */
export default function CaseStudies() {
  const caseStudies = getCaseStudies();

  return (
    <Layout>
      {/* Hero Section */}
      <Section size="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Success Stories
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            See how wineries are transforming their operations with AI. 
            Real results from real implementations.
          </p>
        </div>
      </Section>

      {/* Case Studies Grid */}
      <Section background="muted" size="xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} className="card-gradient shadow-medium h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {caseStudy.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{caseStudy.client}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-3">{caseStudy.title}</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Problem */}
                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-destructive mr-2" />
                    Challenge
                  </h3>
                  <p className="text-sm text-muted-foreground">{caseStudy.problem}</p>
                </div>

                {/* Approach */}
                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                    Approach
                  </h3>
                  <p className="text-sm text-muted-foreground">{caseStudy.approach}</p>
                </div>

                {/* Impact */}
                <div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-success mr-2" />
                    Impact
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{caseStudy.impact}</p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(caseStudy.metrics).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-background/50 rounded-lg">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-primary pl-4 bg-primary/5 p-4 rounded-r-lg">
                  <p className="text-sm italic text-muted-foreground">"{caseStudy.quote}"</p>
                  <footer className="text-xs text-muted-foreground mt-2">— {caseStudy.client}</footer>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Summary */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Aggregate Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <MetricCard 
              metric="40%" 
              label="Average Cost Reduction"
              description="Across quality control and operations"
            />
            <MetricCard 
              metric="60%" 
              label="Improvement in Efficiency"
              description="Through automation and AI insights"
            />
            <MetricCard 
              metric="95%" 
              label="Client Satisfaction"
              description="Would recommend our services"
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
            Join the wineries already transforming their operations with AI.
          </p>
          <Button asChild size="lg" variant="secondary" className="min-w-[200px]">
            <Link to="/contact" className="inline-flex items-center">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
}