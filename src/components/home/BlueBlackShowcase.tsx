import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, TrendingUp, Users, ChevronRight, FileText, Image as ImageIcon } from 'lucide-react';
import blueBlackData from '../../data/blueBlack.json';

export const BlueBlackShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery'>('overview');
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="py-20 bg-ticmc-dark text-white relative overflow-hidden" id="blue-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/assets/portfolio-hotel.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-ticmc-gold flex flex-col items-center gap-4">
            <img src="/assets/blue-black/logo.png" alt="Blue & Black Logo" className="h-24 w-auto object-contain mb-2" />
            {blueBlackData.title}
          </h2>
          <p className="text-xl text-gray-300 font-serif italic">{blueBlackData.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar / Navigation */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/5 p-8 rounded-sm border border-white/10 backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-gray-300 mb-8 font-serif italic">
                "{blueBlackData.description}"
              </p>
              
              {blueBlackData.established && (
                <div className="flex items-center gap-2 text-ticmc-gold mb-8 border-b border-white/10 pb-8">
                  <Calendar size={20} />
                  <span className="font-medium">Established {blueBlackData.established}</span>
                </div>
              )}
              
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
                    <h3 className="text-3xl font-serif font-bold text-white mb-6">Experience</h3>
                    <div className="space-y-6 text-gray-300">
                      <p className="text-lg leading-relaxed">
                        Located in the vibrant Menzah 6 district, Blue & Black offers a unique blend of sophisticated dining and relaxed lounge culture. Our venue is designed to cater to diverse moods, from intimate dinners to lively social gatherings.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {blueBlackData.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-4 bg-white/5 p-4 rounded-sm border border-white/5">
                            <div className="w-2 h-2 bg-ticmc-gold rounded-full"></div>
                            <span className="font-medium text-white">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-serif font-bold text-white mb-6">Atmosphere</h3>
                  
                  <div className="relative group">
                    <div className="relative aspect-video overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                      <motion.img 
                        key={activeImage}
                        src={blueBlackData.images.gallery[activeImage]} 
                        alt="Blue & Black Atmosphere" 
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Navigation Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {blueBlackData.images.gallery.map((_, idx) => (
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
                    {blueBlackData.images.gallery.map((img, idx) => (
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
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
