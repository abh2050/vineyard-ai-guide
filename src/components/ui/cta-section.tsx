import { Button } from "./button";
import { Section } from "./section";
import { Badge } from "./badge";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <Section className="py-20 wine-gradient text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 wine-gradient rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-10 right-10 w-24 h-24 wine-gradient rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 wine-gradient rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 animate-scale-in">
          <Sparkles className="w-4 h-4 mr-2" />
          Ready to Transform?
        </Badge>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
          Start Your AI Journey Today
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Join forward-thinking wineries already using AI to enhance their operations, improve quality, and delight customers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="group bg-white text-primary hover:bg-white/90 hover-lift shadow-wine px-8 py-4 text-lg"
          >
            Book Your Discovery Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg"
          >
            Download Overview
          </Button>
        </div>
        
        <p className="text-sm text-white/70 mt-6">
          No commitment required • 30-minute consultation • Custom AI roadmap
        </p>
      </div>
    </Section>
  );
};