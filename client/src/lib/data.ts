import { Service, CaseStudy, ContactInfo } from './types';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: 'globe'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    icon: 'smartphone'
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    description: 'Streamline operations with custom automation solutions.',
    icon: 'settings'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'case1',
    title: 'Financial Services Dashboard Transformation',
    description: 'A leading financial services company struggled with an outdated dashboard that was causing inefficiencies and frustration among their team. We rebuilt their system from the ground up with a focus on simplicity and user experience.',
    beforeImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stats: [
      {
        label: 'Efficiency Improvement',
        value: '68%',
        percentage: 68
      },
      {
        label: 'User Satisfaction',
        value: '94%',
        percentage: 94
      },
      {
        label: 'Training Time Reduction',
        value: '82%',
        percentage: 82
      }
    ],
    testimonial: {
      quote: 'They transformed our complex, unwieldy dashboard into something our team actually enjoys using. Productivity is up, and frustration is down.',
      name: 'Sarah Johnson',
      position: 'CTO, FinancePlus Inc.'
    },
    process: [
      {
        title: 'Discovery',
        description: 'We interviewed 28 users and analyzed existing workflows to identify pain points and opportunities.'
      },
      {
        title: 'Design',
        description: 'Collaborative design workshops resulted in prototypes that were tested and refined with real users.'
      },
      {
        title: 'Development',
        description: 'Agile implementation with bi-weekly demos ensured the solution remained aligned with user needs.'
      },
      {
        title: 'Deployment',
        description: 'Phased rollout with comprehensive training and feedback loops for continuous improvement.'
      }
    ]
  },
  {
    id: 'case2',
    title: 'E-Commerce Platform Integration & Optimization',
    description: 'A rapidly growing online retailer was struggling with disconnected systems, inventory management issues, and scaling challenges. We implemented a comprehensive solution that integrated their sales channels, inventory, and logistics.',
    beforeImage: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    stats: [
      {
        label: 'Order Processing Speed',
        value: '215%',
        percentage: 100
      },
      {
        label: 'Inventory Accuracy',
        value: '99.8%',
        percentage: 99.8
      },
      {
        label: 'Customer Satisfaction',
        value: '92%',
        percentage: 92
      }
    ],
    testimonial: {
      quote: 'Better in Binary helped us scale from a small online store to a multi-channel retail operation without adding complexity to our workflows.',
      name: 'Michael Torres',
      position: 'Founder, Urban Threads Co.'
    },
    process: [
      {
        title: 'System Audit',
        description: 'We mapped all existing systems, data flows, and identified integration points and bottlenecks.'
      },
      {
        title: 'Architecture Design',
        description: 'Created a scalable architecture that simplified workflows while enabling future growth.'
      },
      {
        title: 'Phased Implementation',
        description: 'Deployed changes in manageable increments to minimize disruption and allow for adjustments.'
      },
      {
        title: 'Training & Optimization',
        description: 'Comprehensive training and post-launch optimization based on real-world usage patterns.'
      }
    ]
  }
];

export const contactInfo: ContactInfo = {
  address: '123 Tech Plaza, Suite 400\nSan Francisco, CA 94105',
  email: 'solutions@betterinbinary.com',
  phone: '(415) 555-0123'
};

export const companyStats = {
  yearsExperience: '10+',
  projects: '250+',
  clientSatisfaction: '98%',
  teamSize: '42'
};
