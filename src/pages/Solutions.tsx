import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Section } from '@/components/ui/section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getRoles, getServicesForRole } from '@/lib/data';
import { ServiceCard } from '@/components/ui/service-card';

/**
 * Solutions page - services organized by role and use case
 */
export default function Solutions() {
  const roles = getRoles();

  return (
    <Layout>
      {/* Hero Section */}
      <Section size="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions by Role
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Discover how AI can address your specific challenges, whether you're focused on 
            winemaking, operations, or guest experience.
          </p>
        </div>
      </Section>

      {/* Role-Based Solutions */}
      <Section background="muted" size="xl">
        <Tabs defaultValue={roles[0]?.id} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {roles.map((role) => (
              <TabsTrigger key={role.id} value={role.id} className="text-sm">
                {role.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {roles.map((role) => (
            <TabsContent key={role.id} value={role.id} className="space-y-8">
              {/* Role Overview */}
              <Card className="card-gradient shadow-medium">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-foreground">{role.title}</h2>
                  <p className="text-muted-foreground">{role.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Pain Points */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Common Challenges</h3>
                      <ul className="space-y-3">
                        {role.pains.map((pain, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions Overview */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">How AI Helps</h3>
                      <div className="space-y-3">
                        {getServicesForRole(role.id).map((service) => (
                          <div key={service.id} className="flex items-center space-x-3">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-sm font-medium text-foreground">{service.title}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild className="mt-4" size="sm">
                        <a href="/contact">Discuss Your Needs</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Services */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Recommended Solutions for {role.title}s
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getServicesForRole(role.id).map((service) => (
                    <ServiceCard key={service.id} service={service} showDetails />
                  ))}
                </div>
              </div>

              {/* Implementation Approach */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <h3 className="font-semibold text-foreground">Implementation Approach</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2">
                        1
                      </div>
                      <h4 className="font-medium text-sm text-foreground mb-1">Assessment</h4>
                      <p className="text-xs text-muted-foreground">
                        We analyze your current workflows and identify key improvement areas
                      </p>
                    </div>
                    <div>
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2">
                        2
                      </div>
                      <h4 className="font-medium text-sm text-foreground mb-1">Pilot</h4>
                      <p className="text-xs text-muted-foreground">
                        Start with a focused pilot project to demonstrate value
                      </p>
                    </div>
                    <div>
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-2">
                        3
                      </div>
                      <h4 className="font-medium text-sm text-foreground mb-1">Scale</h4>
                      <p className="text-xs text-muted-foreground">
                        Expand successful solutions across your operation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </Section>
    </Layout>
  );
}