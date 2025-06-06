import React from 'react';
import { Link } from 'wouter';
import { Service } from '@/lib/types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="service-card p-8 transition duration-300 h-full flex flex-col relative bg-transparent">
      {/* Content */}
      <div className="text-emerald mb-6 relative">
        <i className={`bx ${service.icon} text-5xl`}></i>
      </div>
      <h3 className="font-space font-bold text-xl text-gunmetal mb-4 relative">
        {service.title}
      </h3>
      <p className="text-gunmetal/80 flex-grow mb-6 relative">{service.description}</p>
      <Link href="/contact">
        <span className="text-emerald hover:text-purpureus transition-colors inline-block cursor-pointer relative font-medium">
          Learn More
        </span>
      </Link>
    </div>
  );
};

export default ServiceCard;
