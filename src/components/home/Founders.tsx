import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import coFounderData from '../../data/coFounder.json';

export const Founders: React.FC = () => {
  const belhassenImages = [
    "/assets/ceo-conference/image-1.png",
    "/assets/ceo-conference/image-2.png",
    "/assets/ceo-conference/image-3.png"
  ];

  return (
    <Section id="founders" bg="white">
      <div className="space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-ticmc-gold font-bold uppercase tracking-widest text-sm mb-3 block">Leadership</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ticmc-green mb-6">
            The Founders
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            United by blood and a shared vision, the Nasra brothers have combined their expertise to redefine hospitality standards across the region.
          </p>
        </div>

        {/* Belhassen Nasra */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <h3 className="font-serif text-3xl font-bold text-ticmc-green mb-2">Belhassen Nasra</h3>
              <span className="text-ticmc-gold font-medium uppercase tracking-wide text-sm">Founder</span>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                With over a decade of high-level experience in the Food & Beverage industry across Dubai, Qatar, and Tunisia, Belhassen Nasra has established himself as a transformative leader in hospitality management.
              </p>
              <p>
                His expertise in Market Positioning and developing successful models that can be scaled or adapted to different audiences and market gaps.
              </p>
              <p>
                At TICMC, Belhassen leads a team dedicated to elevating standards, optimizing performance, and crafting world-class guest experiences. His thought leadership is frequently recognized at industry conferences where he shares insights on the future of hospitality.
              </p>
            </div>

            <div className="flex gap-8 border-t border-gray-100 pt-8">
              <div>
                <span className="block text-3xl font-serif font-bold text-ticmc-gold">15+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-ticmc-gold">50+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Projects Delivered</span>
              </div>
            </div>

            {/* Conference Gallery Mini */}
            <div>
              <h4 className="text-ticmc-green font-bold mb-4 text-xs uppercase tracking-wider">Industry Highlights</h4>
              <div className="grid grid-cols-3 gap-3">
                {belhassenImages.map((img, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-sm overflow-hidden cursor-pointer border border-gray-200"
                  >
                    <img src={img} alt={`Conference Highlight ${idx + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden relative z-10 shadow-2xl">
               <img src="/assets/ceo-conference/nasra-solo.png" alt="Belhassen Nasra" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-ticmc-gold z-0 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-ticmc-green/10 z-0 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200" />

        {/* Mustafa Nasra */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-1 relative">
             {/* @ts-ignore */}
            {coFounderData.images.centerImage && (
              <div className="relative rounded-sm overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform duration-500 z-10">
                <img 
                  /* @ts-ignore */
                  src={coFounderData.images.centerImage} 
                  alt={coFounderData.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
             <div className="absolute -top-6 -right-6 w-2/3 h-2/3 border-2 border-ticmc-gold z-0 hidden md:block" />
             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-ticmc-gold/10 z-0 rounded-full blur-2xl" />
          </div>

          <div className="order-2 space-y-8">
            <div>
              <h3 className="font-serif text-3xl font-bold text-ticmc-green mb-2">{coFounderData.name}</h3>
              <span className="text-ticmc-gold font-medium uppercase tracking-wide text-sm">Founder</span>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{coFounderData.bio}</p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};
