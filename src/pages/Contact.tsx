import { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { getSiteConfig } from '@/lib/data';

/**
 * Contact page with lead form and contact information
 */
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const siteConfig = getSiteConfig();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API call
    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submission:', data);
      
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <Section size="xl">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours 
              to discuss how AI can transform your winery operations.
            </p>
            <Button asChild>
              <a href="/">Return to Home</a>
            </Button>
          </div>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <Section size="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Discuss Your AI Journey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Ready to explore how AI can transform your winery? 
            Let's start with a conversation about your specific needs and goals.
          </p>
        </div>
      </Section>

      {/* Contact Content */}
      <Section background="muted" size="xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient shadow-strong">
            <CardHeader>
              <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required className="mt-1" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Winery/Company *</Label>
                    <Input id="company" name="company" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="role">Your Role</Label>
                    <Input id="role" name="role" placeholder="e.g., Winemaker, Owner, Operations Manager" className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">How can we help? *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    className="mt-1 min-h-[120px]"
                    placeholder="Tell us about your challenges, goals, or questions about AI for your winery..."
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="consent" name="consent" required />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                    I agree to receive communications from AI Sommelier regarding my inquiry. 
                    You can unsubscribe at any time.
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="card-gradient shadow-medium">
              <CardHeader>
                <h3 className="text-xl font-bold text-foreground">Get in Touch Directly</h3>
                <p className="text-muted-foreground">
                  Prefer to reach out directly? Here are other ways to connect.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <a 
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <a 
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <div className="text-sm text-muted-foreground">{siteConfig.contact.address}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calendar Booking */}
            <Card className="card-gradient shadow-medium">
              <CardHeader>
                <h3 className="text-xl font-bold text-foreground">Book a Discovery Call</h3>
                <p className="text-muted-foreground">
                  Schedule a 30-minute conversation to discuss your AI goals.
                </p>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <a href="https://calendly.com/aisommelier/discovery" target="_blank" rel="noopener noreferrer">
                    Schedule Discovery Call
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  No commitment required • Free consultation
                </p>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24 Hours</div>
                  <div className="text-sm text-muted-foreground">Average Response Time</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    We respond to all inquiries within one business day, usually much sooner.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </Layout>
  );
}