/**
 * Typed data loading utilities
 */

import servicesData from '@/data/services.json';
import rolesData from '@/data/roles.json';
import casesData from '@/data/cases.json';
import siteData from '@/data/site.json';
import navData from '@/data/nav.json';

export interface Service {
  id: string;
  title: string;
  summary: string;
  icon: string;
  problems: string[];
  deliverables: string[];
  pilot: string;
  outcomes: string[];
}

export interface Role {
  id: string;
  title: string;
  description: string;
  pains: string[];
  recommendedServiceIds: string[];
  primaryColor: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  problem: string;
  approach: string;
  impact: string;
  metrics: {
    [key: string]: string;
  };
  quote: string;
  category: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    description: string;
  };
  meta: {
    title: string;
    description: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    linkedin: string;
    twitter: string;
  };
  cta: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  whyItWorks: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export const getServices = (): Service[] => servicesData as Service[];
export const getRoles = (): Role[] => rolesData as Role[];
export const getCaseStudies = (): CaseStudy[] => casesData as CaseStudy[];
export const getSiteConfig = (): SiteConfig => siteData as SiteConfig;
export const getNavData = () => navData;

export const getServiceById = (id: string): Service | undefined => {
  return getServices().find(service => service.id === id);
};

export const getServicesForRole = (roleId: string): Service[] => {
  const role = getRoles().find(r => r.id === roleId);
  if (!role) return [];
  
  return role.recommendedServiceIds
    .map(id => getServiceById(id))
    .filter((service): service is Service => service !== undefined);
};