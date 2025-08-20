import { Link } from 'react-router-dom';
import { Linkedin, Mail, Award, Shield, DollarSign, Zap } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/**
 * About page featuring founder profile and company values
 */
export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="wine-gradient text-white py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-1/4 w-24 h-24 wine-gradient rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-10 right-1/4 w-32 h-32 wine-gradient rounded-full opacity-30 animate-float" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-1/3 right-10 w-18 h-18 wine-gradient rounded-full opacity-25 animate-float" style={{ animationDelay: '2.8s' }} />
        
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            About AI Sommelier
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Bridging the gap between cutting-edge AI technology and the timeless craft of winemaking.
          </p>
        </div>
      </Section>

      {/* Founder Profile */}
      <Section className="py-20 bg-gradient-to-br from-muted/30 to-background" size="xl">
        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient shadow-strong">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Photo Placeholder */}
                <div className="md:col-span-1">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center mb-4">
                    <div className="text-4xl font-bold text-primary">AB</div>
                  </div>
                  <div className="text-center space-y-2">
                    <h2 className="text-xl font-bold text-foreground">Abhishek</h2>
                    <p className="text-sm text-muted-foreground">Founder & AI Architect</p>
                    <div className="flex justify-center space-x-3">
                      <Button asChild size="sm" variant="outline">
                        <a href="https://linkedin.com/in/abhishek" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 mr-1" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <a href="mailto:abhishek@aisommelier.com">
                          <Mail className="h-4 w-4 mr-1" />
                          Email
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Bio and Experience */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Background</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Abhishek is a Senior ML Engineer and AI architect with extensive experience building 
                      production-grade AI systems for manufacturing and consumer experiences. Having worked 
                      with both Fortune 500 companies and innovative startups, he brings a practical, 
                      results-driven approach to AI implementation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Why Wineries?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The wine industry represents a perfect intersection of tradition and innovation. 
                      While deeply rooted in centuries-old practices, modern wineries face complex 
                      challenges in quality control, demand forecasting, and customer experience that 
                      AI is uniquely positioned to solve.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Technical Expertise</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-foreground">Machine Learning</div>
                        <div className="text-sm font-medium text-foreground">Computer Vision</div>
                        <div className="text-sm font-medium text-foreground">Natural Language Processing</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-foreground">Production Systems</div>
                        <div className="text-sm font-medium text-foreground">Data Architecture</div>
                        <div className="text-sm font-medium text-foreground">Process Automation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Company Values */}
      <Section size="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every project and partnership.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Privacy & Security */}
          <Card className="text-center card-gradient shadow-medium">
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Privacy & Security</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Your data remains yours. We implement enterprise-grade security and ensure 
                full compliance with privacy regulations. No vendor lock-in, complete transparency.
              </p>
            </CardContent>
          </Card>

          {/* Cost-Effectiveness */}
          <Card className="text-center card-gradient shadow-medium">
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Cost-Effectiveness</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Smart implementation focused on ROI. We start small, prove value quickly, 
                and scale thoughtfully to maximize your investment and minimize risk.
              </p>
            </CardContent>
          </Card>

          {/* Ease of Implementation */}
          <Card className="text-center card-gradient shadow-medium">
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Ease of Implementation</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Seamless integration with your existing workflows. Comprehensive training, 
                ongoing support, and systems designed to enhance rather than disrupt your operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Mission */}
      <Section className="wine-gradient text-white py-20 relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            To help wineries embrace AI thoughtfully and successfully, preserving the artistry 
            of winemaking while unlocking new levels of quality, efficiency, and guest experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="min-w-[200px] bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Start a Conversation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[200px] border-white/20 text-white hover:bg-white/10 hover:border-white/50">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}