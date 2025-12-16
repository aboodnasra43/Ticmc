import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import data from '../../data/coFounder.json';

export const Heritage: React.FC = () => {
  return (
    <Section id="heritage" bg="light">
      <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-ticmc-gold">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-2xl font-bold text-ticmc-green mb-4">{data.heritage.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{data.heritage.description}</p>
            
            <div className="space-y-6">
              {data.heritage.milestones.map((milestone, idx) => (
                <div key={idx} className="flex gap-4 items-start border-l-2 border-gray-100 pl-4">
                  <div className="min-w-[80px] font-bold text-ticmc-gold text-sm pt-1">{milestone.year}</div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">{milestone.title}</h4>
                    <p className="text-xs text-gray-500">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <h4 className="text-ticmc-green font-bold mb-6 text-sm uppercase tracking-wider">Success Stories</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.images.gallery.slice(0, 8).map((img, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-sm overflow-hidden cursor-pointer border border-gray-200 shadow-sm"
                >
                  <img src={img} alt={`Heritage Highlight ${idx + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
            
            {/* Featured Archive Image - Brothers */}
            <div className="mt-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video rounded-sm overflow-hidden cursor-pointer border border-gray-200 shadow-sm"
              >
                <img 
                  src={data.images.gallery[8]} 
                  alt="Mustafa and Belhassen Nasra in Dubai (2002)" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">Mustafa & Belhassen Nasra — Dubai, 2002</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
