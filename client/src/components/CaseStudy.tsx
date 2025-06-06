import React, { useState } from 'react';
import { CaseStudy as CaseStudyType } from '@/lib/types';
import { motion } from 'framer-motion';

interface CaseStudyProps {
  caseStudy: CaseStudyType;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ caseStudy }) => {
  const [showAfterImage, setShowAfterImage] = useState(false);
  const [showProcess, setShowProcess] = useState(false);

  return (
    <div className="mb-32 border-t border-gunmetal/10 pt-16">
      {/* Case Study Title */}
      <h2 className="text-xl font-medium text-gunmetal mb-6">{caseStudy.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Image Container - simple square layout */}
        <div>
          <div className="aspect-video border border-gunmetal/10 mb-4 overflow-hidden">
            <img 
              src={showAfterImage ? caseStudy.afterImage : caseStudy.beforeImage} 
              alt={`${caseStudy.title} ${showAfterImage ? 'after' : 'before'} implementation`} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Simple Toggle */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowAfterImage(false)}
              className={`text-sm ${!showAfterImage ? 'text-emerald font-medium' : 'text-gunmetal/70'}`}
            >
              Before
            </button>
            <span className="text-gunmetal/50">/</span>
            <button 
              onClick={() => setShowAfterImage(true)}
              className={`text-sm ${showAfterImage ? 'text-emerald font-medium' : 'text-gunmetal/70'}`}
            >
              After
            </button>
          </div>
        </div>
        
        {/* Description and Stats */}
        <div>
          <p className="text-gunmetal/80 mb-8">{caseStudy.description}</p>
          
          {/* Key Stats - Simple text */}
          <div className="mb-8">
            {caseStudy.stats.map((stat, index) => (
              <div className="mb-2" key={index}>
                <span className="text-gunmetal/80">{stat.label}:</span>{' '}
                <span className="text-gunmetal font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
          
          {/* Client Testimonial - Simple format */}
          <div className="border-t border-gunmetal/10 pt-6">
            <p className="text-gunmetal/80 italic mb-4">"{caseStudy.testimonial.quote}"</p>
            <p className="text-gunmetal/80">
              — {caseStudy.testimonial.name}, {caseStudy.testimonial.position}
            </p>
          </div>
        </div>
      </div>
      
      {/* Process Steps - Minimal horizontal list */}
      <div>
        <button 
          className="text-emerald hover:underline mb-6 focus:outline-none"
          onClick={() => setShowProcess(!showProcess)}
        >
          {showProcess ? 'Hide process details' : 'View process details'}
        </button>
        
        {showProcess && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {caseStudy.process.map((step, index) => (
              <div key={index} className="border-t border-gunmetal/10 pt-4">
                <p className="text-gunmetal font-medium mb-2">{step.title}</p>
                <p className="text-gunmetal/70">{step.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudy;
