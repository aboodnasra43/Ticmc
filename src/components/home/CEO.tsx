import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';

export const CEO: React.FC = () => {
  const conferenceImages = [
    "/assets/ceo-conference/image-1.png",
    "/assets/ceo-conference/image-2.png",
    "/assets/ceo-conference/image-3.png"
  ];

  return (
    <Section id="about" bg="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden relative z-10">
               <img src="/assets/ceo-conference/nasra-solo.png" alt="Belhassen Nasra" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-ticmc-gold z-0 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-ticmc-green/10 z-0 rounded-full blur-2xl" />
          </div>
          
          {/* Conference Gallery */}
          <div>
            <h4 className="text-ticmc-green font-bold mb-4 text-sm uppercase tracking-wider">Industry Leadership</h4>
            <div className="grid grid-cols-3 gap-3">
              {conferenceImages.map((img, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-sm overflow-hidden cursor-pointer border border-gray-200"
                >
                  <img src={img} alt={`Conference Highlight ${idx + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2 italic">Belhassen Nasra speaking at recent international hospitality conferences.</p>
          </div>
        </div>

        <div className="lg:pt-8">
          <span className="text-ticmc-gold font-bold uppercase tracking-widest text-sm mb-2 block">Leadership</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ticmc-green mb-6">
            Meet The Visionary
          </h2>
          <h3 className="text-xl font-medium text-gray-800 mb-6">Belhassen Nasra, CEO</h3>
          
          <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
            <p>
              With over a decade of high-level experience in the Food & Beverage industry across Dubai, Qatar, and Tunisia, Belhassen Nasra has established himself as a transformative leader in hospitality management.
            </p>
            <p>
              His expertise lies in bridging the gap between creative culinary concepts and rigorous operational efficiency. Having managed high-performing establishments, he understands that true luxury lies in the details of execution.
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
        </div>
      </div>
    </Section>
  );
};
