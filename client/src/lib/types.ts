export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stats {
  label: string;
  value: string;
  percentage: number;
}

export interface Testimonial {
  quote: string;
  name: string;
  position: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  stats: Stats[];
  testimonial: Testimonial;
  process: ProcessStep[];
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}
