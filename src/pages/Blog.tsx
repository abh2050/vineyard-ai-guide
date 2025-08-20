import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Winemaking: Beyond Automation",
    excerpt: "Exploring how artificial intelligence is reshaping traditional winemaking processes while preserving the artisanal craft that defines great wine.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Industry Insights",
    author: "Abhishek"
  },
  {
    id: 2,
    title: "Implementing Computer Vision for Quality Control: A Practical Guide",
    excerpt: "Step-by-step approach to deploying vision systems in your production line, with real-world examples and ROI calculations.",
    date: "2024-01-08",
    readTime: "8 min read", 
    category: "Technical Guide",
    author: "Abhishek"
  },
  {
    id: 3,
    title: "Guest Experience Revolution: Personalizing Wine Tourism with AI",
    excerpt: "How AI-driven personalization is transforming visitor experiences and driving wine club conversions in the modern tasting room.",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "Guest Experience",
    author: "Abhishek"
  }
];

/**
 * Blog page with article listings (stub implementation)
 */
export default function Blog() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="wine-gradient text-white py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-12 right-12 w-30 h-30 wine-gradient rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-12 left-12 w-26 h-26 wine-gradient rounded-full opacity-30 animate-float" style={{ animationDelay: '1.4s' }} />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 wine-gradient rounded-full opacity-25 animate-float" style={{ animationDelay: '2.6s' }} />
        
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Insights & Expertise
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Practical insights on AI implementation, industry trends, and success stories 
            from the intersection of technology and winemaking.
          </p>
        </div>
      </Section>

      {/* Blog Posts */}
      <Section className="py-20 bg-gradient-to-br from-muted/30 to-background" size="xl">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="card-gradient shadow-wine hover:shadow-strong hover-wine-glow transition-all duration-300 hover-lift">
                <CardContent className="pt-6">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                    <a href={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </a>
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      By {post.author}
                    </div>
                    <Button variant="ghost" asChild className="text-primary hover:text-primary-light p-0">
                      <a href={`/blog/${post.id}`} className="inline-flex items-center">
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="pt-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">More Content Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                We're working on comprehensive guides, case study deep-dives, and technical tutorials. 
                Subscribe to our newsletter to be notified when new content is published.
              </p>
              <Button asChild>
                <Link to="/contact">Stay Updated</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>
    </Layout>
  );
}