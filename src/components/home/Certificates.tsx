import React, { useRef } from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import data from '../../data/coFounder.json';

export const Certificates: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (!data.certificates || data.certificates.length === 0) return null;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth / (window.innerWidth < 768 ? 1 : 3); // Scroll one item width roughly
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="certificates" bg="light">
      <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-ticmc-green relative group">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-serif text-2xl font-bold text-ticmc-green">Certifications & Achievements</h3>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-gray-100 hover:bg-ticmc-gold hover:text-white transition-colors duration-300"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-gray-100 hover:bg-ticmc-gold hover:text-white transition-colors duration-300"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {data.certificates.map((cert, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="min-w-[100%] md:min-w-[calc(33.333%-1rem)] snap-center rounded-sm overflow-hidden border border-gray-200 shadow-md bg-white"
            >
              <div className="aspect-[4/3] relative flex items-center justify-center bg-gray-50 p-2">
                <img 
                  src={cert} 
                  alt={`Certificate ${idx + 1}`} 
                  className="w-full h-full object-contain" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
