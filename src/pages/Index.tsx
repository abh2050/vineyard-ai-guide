import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { MetricCard } from "@/components/ui/metric-card";
import { CTASection } from "@/components/ui/cta-section";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Target, Users, Brain, BarChart3, Wine, Zap } from "lucide-react";
import { getServices, getCaseStudies } from "@/lib/data";
import heroBackground from "@/assets/hero-background.jpg";
import aiVineyard from "@/assets/ai-vineyard.jpg";
import wineTastingTech from "@/assets/wine-tasting-tech.jpg";
import wineAnalytics from "@/assets/wine-analytics.jpg";

const services = getServices();
const cases = getCaseStudies();

// Hero Section Component
const Hero = () => (
  <Section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    />
    <div className="absolute inset-0 wine-gradient-dark opacity-90" />
    
    {/* Floating Elements */}
    <div className="absolute top-20 left-10 animate-float">
      <div className="w-20 h-20 wine-gradient rounded-full opacity-30 animate-glow" />
    </div>
    <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
      <div className="w-16 h-16 wine-gradient rounded-full opacity-40 animate-glow" />
    </div>
    <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
      <div className="w-12 h-12 wine-gradient rounded-full opacity-25 animate-glow" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 text-center animate-slide-up">
      <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 animate-scale-in">
        <Sparkles className="w-4 h-4 mr-2" />
        Next-Generation Wine Intelligence
      </Badge>
      
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        Agentic AI for 
        <span className="block bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
          Wineries
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
        Practical ML systems that improve quality, forecast demand, and elevate guest experience—from vine to visitor.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button size="lg" className="group bg-white text-primary hover:bg-white/90 hover-lift shadow-wine px-8 py-4 text-lg">
          Book a Discovery Call
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg">
          See Our Services
        </Button>
      </div>
    </div>
  </Section>
);

// Trust Bar Component
const TrustBar = () => (
  <Section className="accent-gradient py-16">
    <div className="container mx-auto px-4">
      <p className="text-center text-muted-foreground mb-8 font-medium">
        Trusted by forward-thinking wineries worldwide
      </p>
      <div className="flex justify-center items-center gap-12 opacity-60">
        <div className="bg-muted/50 px-8 py-4 rounded-lg hover-lift">Premium Winery A</div>
        <div className="bg-muted/50 px-8 py-4 rounded-lg hover-lift">Estate Vineyard B</div>
        <div className="bg-muted/50 px-8 py-4 rounded-lg hover-lift">Boutique Wines C</div>
        <div className="bg-muted/50 px-8 py-4 rounded-lg hover-lift">Heritage Cellars D</div>
      </div>
    </div>
  </Section>
);

// Services Grid Component
const ServicesGrid = () => (
  <Section className="py-20 relative">
    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent/30 to-transparent" />
    
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
          <Brain className="w-4 h-4 mr-2" />
          AI-Powered Solutions
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Transform Your Winery with Intelligent Automation
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our five core AI services work together to optimize every aspect of your wine business, from vineyard to customer experience.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className="animate-scale-in hover-lift"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ServiceCard service={service} className="shadow-wine hover-wine-glow" />
          </div>
        ))}
      </div>
    </div>
  </Section>
);

// Why It Works Component
const WhyItWorks = () => (
  <Section className="py-20 wine-gradient text-white relative overflow-hidden">
    {/* Background Images */}
    <div className="absolute inset-0 opacity-20">
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${aiVineyard})` }}
      />
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
            <Target className="w-4 h-4 mr-2" />
            Our Approach
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Our AI Systems Excel
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            We've built our AI specifically for the wine industry, understanding the unique challenges and opportunities that come with crafting exceptional wines.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4 animate-slide-up">
              <div className="w-12 h-12 wine-gradient rounded-lg flex items-center justify-center flex-shrink-0 shadow-wine">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
                <p className="text-white/80">Advanced analytics that turn your winery data into actionable intelligence for better decision-making.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 wine-gradient rounded-lg flex items-center justify-center flex-shrink-0 shadow-wine">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Agentic Automation</h3>
                <p className="text-white/80">Intelligent agents that learn and adapt, automating complex workflows while maintaining quality standards.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 wine-gradient rounded-lg flex items-center justify-center flex-shrink-0 shadow-wine">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Human-in-the-Loop</h3>
                <p className="text-white/80">AI that enhances human expertise rather than replacing it, keeping winemakers at the center of decisions.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src={wineTastingTech} 
            alt="AI-powered wine tasting technology" 
            className="rounded-2xl shadow-strong animate-float"
          />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 wine-gradient rounded-full opacity-60 animate-glow" />
        </div>
      </div>
    </div>
  </Section>
);

// Mini Case Study Component
const MiniCaseStudy = () => {
  const caseStudy = cases[0];
  
  return (
    <Section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-success/10 text-success border-success/20 hover:bg-success/20">
            <Wine className="w-4 h-4 mr-2" />
            Success Story
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Results for Real Wineries
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={wineAnalytics} 
                alt="Wine analytics visualization" 
                className="rounded-2xl shadow-strong hover-lift"
              />
              <div className="absolute top-4 right-4">
                <div className="bg-success text-success-foreground px-4 py-2 rounded-lg font-semibold animate-glow">
                  +47% Efficiency
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">{caseStudy.title}</h3>
              <p className="text-lg text-muted-foreground">{caseStudy.problem}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <MetricCard
                  metric="+23%"
                  label="Quality Score"
                  description="Improvement in wine quality ratings"
                />
                <MetricCard
                  metric="$180K"
                  label="Cost Savings"
                  description="Annual operational savings"
                />
              </div>
              
              <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4">
                "{caseStudy.quote}"
              </blockquote>
              
              <Button variant="outline" className="group hover-lift">
                Read Full Case Study
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyItWorks />
      <MiniCaseStudy />
      <CTASection />
    </Layout>
  );
};

export default Index;