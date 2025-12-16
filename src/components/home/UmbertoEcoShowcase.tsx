import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Star, Utensils, Wine, ChefHat, ChevronRight, Image as ImageIcon } from 'lucide-react';
import umbertoEcoData from '../../data/umbertoEco.json';

export const UmbertoEcoShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery'>('overview');
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="py-20 bg-ticmc-dark text-white relative overflow-hidden" id="umberto-eco">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/assets/portfolio-hotel.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-ticmc-gold flex flex-col items-center gap-4">
            <img src="/assets/umberto-eco/logo.png" alt="Umberto Eco Logo" className="h-24 w-auto object-contain mb-2" />
            {umbertoEcoData.profile.name}
          </h2>
          <div className="flex justify-center items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-ticmc-gold" />
              <span>{umbertoEcoData.profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-ticmc-gold" />
              <span>{umbertoEcoData.profile.established}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar / Navigation */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/5 p-8 rounded-sm border border-white/10 backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-gray-300 mb-8 font-serif italic">
                "{umbertoEcoData.profile.description}"
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center justify-between p-4 rounded-sm transition-all duration-300 ${
                    activeTab === 'overview' 
                      ? 'bg-ticmc-gold text-ticmc-dark font-bold' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <span>Overview</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === 'overview' ? 'rotate-90' : ''}`} />
                </button>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`w-full flex items-center justify-between p-4 rounded-sm transition-all duration-300 ${
                    activeTab === 'gallery' 
                      ? 'bg-ticmc-gold text-ticmc-dark font-bold' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <span>Gallery</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === 'gallery' ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 p-8 md:p-12 rounded-sm border border-white/10 backdrop-blur-sm min-h-[600px]"
            >
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-6">{umbertoEcoData.successStory.title}</h3>
                    <div className="space-y-6 text-gray-300">
                      <div>
                        <h4 className="text-ticmc-gold font-bold mb-2 uppercase tracking-wider text-sm">The Challenge</h4>
                        <p>{umbertoEcoData.successStory.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-ticmc-gold font-bold mb-2 uppercase tracking-wider text-sm">The Solution</h4>
                        <p>{umbertoEcoData.successStory.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {umbertoEcoData.successStory.results.map((result, index) => (
                      <div key={index} className="bg-white/5 p-6 rounded-sm border border-white/5">
                        <div className="mb-4 text-ticmc-gold">
                          <Star className="w-8 h-8" />
                        </div>
                        <p className="font-medium text-white">{result}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/10">
                    {umbertoEcoData.highlights.map((highlight, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="text-ticmc-gold shrink-0">
                          {index === 0 ? <Utensils className="w-6 h-6" /> :
                           index === 1 ? <Wine className="w-6 h-6" /> :
                           index === 2 ? <Star className="w-6 h-6" /> :
                           <ChefHat className="w-6 h-6" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-1">{highlight.title}</h4>
                          <p className="text-sm text-gray-400">{highlight.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-serif font-bold text-white mb-6">Atmosphere & Cuisine</h3>
                  
                  <div className="relative group">
                    <div className="relative aspect-video overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                      <motion.img 
                        key={activeImage}
                        src={umbertoEcoData.gallery[activeImage]} 
                        alt="Umberto Eco Atmosphere" 
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Navigation Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {umbertoEcoData.gallery.map((_, idx) => (
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
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {umbertoEcoData.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`relative aspect-video rounded-sm overflow-hidden border-2 transition-all ${
                          activeImage === idx ? 'border-ticmc-gold opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>

                  {/* Video Section */}
                  {umbertoEcoData.video && (
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <h4 className="text-ticmc-gold font-bold mb-4 uppercase tracking-wider text-sm">Featured Video</h4>
                      <div className="relative aspect-video overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                        <video 
                          src={umbertoEcoData.video} 
                          controls 
                          className="w-full h-full object-cover"
                          poster={umbertoEcoData.gallery[0]}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
