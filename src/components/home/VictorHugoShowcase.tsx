import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Wine, Music, ChevronRight, Star } from 'lucide-react';
import victorHugoData from '../../data/victorHugo.json';

export const VictorHugoShowcase: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="py-20 bg-ticmc-dark text-white relative overflow-hidden" id="victor-hugo">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out mix-blend-overlay"
          style={{ backgroundImage: `url('${victorHugoData.gallery[activeImage]}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ticmc-dark via-ticmc-dark/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-ticmc-gold flex flex-col items-center gap-4">
            <img src="/assets/victor-hugo/logo.png" alt="Victor Hugo Logo" className="h-24 w-auto object-contain mb-2" />
            {victorHugoData.profile.name}
          </h2>
          <div className="flex justify-center items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-ticmc-gold" />
              <span>{victorHugoData.profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-ticmc-gold" />
              <span>Est. {victorHugoData.profile.established}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery & Video */}
          <div className="relative group space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <motion.img 
                key={activeImage}
                src={victorHugoData.gallery[activeImage]} 
                alt="Victor Hugo Interior" 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {victorHugoData.gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeImage === idx ? 'bg-ticmc-gold w-6' : 'bg-white/50 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Video Section */}
            {victorHugoData.video && (
              <div className="relative aspect-video overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                <video 
                  src={victorHugoData.video} 
                  controls 
                  className="w-full h-full object-cover"
                  poster={victorHugoData.gallery[0]}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-ticmc-gold/20 -z-10 rounded-sm hidden md:block"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-serif font-bold text-white mb-6">
                {victorHugoData.successStory.title}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {victorHugoData.profile.description}
              </p>
              
              <div className="bg-white/5 p-6 rounded-sm border-l-2 border-ticmc-gold mb-8">
                <p className="text-gray-300 italic">
                  "{victorHugoData.successStory.solution}"
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {victorHugoData.successStory.results.map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-ticmc-gold shrink-0 mt-1" />
                  <span className="text-sm text-gray-300">{result}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-ticmc-gold font-bold mb-4 uppercase tracking-wider text-sm">Key Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {victorHugoData.features.map((feature, idx) => (
                  <div key={idx} className="group">
                    <h5 className="font-bold text-white mb-1 group-hover:text-ticmc-gold transition-colors">
                      {feature.title}
                    </h5>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
