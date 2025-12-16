import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Star, Music, Coffee, Wine, ChevronRight, Image as ImageIcon } from 'lucide-react';
import naghamData from '../../data/nagham.json';

export const NaghamShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'highlights' | 'gallery'>('overview');

  return (
    <section className="py-20 bg-ticmc-green text-white relative overflow-hidden" id="nagham">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full p-2 flex items-center justify-center">
             <img src={naghamData.images.logo} alt={naghamData.profile.name} className="max-w-full max-h-full object-contain" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-ticmc-gold">
            {naghamData.profile.name}
          </h2>
          <div className="flex justify-center items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-ticmc-gold" />
              <span>{naghamData.profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-ticmc-gold" />
              <span>{naghamData.profile.established}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar / Navigation */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/5 p-8 rounded-sm border border-white/10 backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-gray-300 mb-8 font-serif italic">
                "{naghamData.profile.description}"
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
                  <span>Success Story</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === 'overview' ? 'rotate-90' : ''}`} />
                </button>
                <button
                  onClick={() => setActiveTab('highlights')}
                  className={`w-full flex items-center justify-between p-4 rounded-sm transition-all duration-300 ${
                    activeTab === 'highlights' 
                      ? 'bg-ticmc-gold text-ticmc-dark font-bold' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <span>Key Highlights</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === 'highlights' ? 'rotate-90' : ''}`} />
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
              className="bg-white/5 p-8 md:p-12 rounded-sm border border-white/10 backdrop-blur-sm min-h-[500px]"
            >
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-6">{naghamData.successStory.title}</h3>
                    
                    {/* Grand Opening Image */}
                    <div className="mb-8 rounded-sm overflow-hidden border border-white/10">
                      <img src={naghamData.images.main} alt="Nagham Grand Opening" className="w-full h-full object-cover" />
                      <div className="bg-ticmc-gold/10 p-2 text-center text-ticmc-gold text-sm font-bold uppercase tracking-wider">
                        Grand Opening Event
                      </div>
                    </div>

                    <div className="space-y-6 text-gray-300">
                      <div>
                        <h4 className="text-ticmc-gold font-bold mb-2 uppercase tracking-wider text-sm">The Challenge</h4>
                        <p>{naghamData.successStory.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-ticmc-gold font-bold mb-2 uppercase tracking-wider text-sm">The Solution</h4>
                        <p>{naghamData.successStory.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {naghamData.successStory.results.map((result, index) => (
                      <div key={index} className="bg-white/5 p-6 rounded-sm border border-white/5 text-center">
                        <div className="mb-4 text-ticmc-gold flex justify-center">
                          <Star className="w-8 h-8" />
                        </div>
                        <p className="font-medium text-white">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'highlights' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {naghamData.highlights.map((item, idx) => (
                    <div key={idx} className="group bg-white/5 p-6 rounded-sm hover:bg-white/10 transition-colors">
                      <div className="mb-4 text-ticmc-gold">
                        {idx === 0 ? <Music className="w-8 h-8" /> :
                         idx === 1 ? <Coffee className="w-8 h-8" /> :
                         idx === 2 ? <Star className="w-8 h-8" /> :
                         <Wine className="w-8 h-8" />}
                      </div>
                      <h4 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-ticmc-gold transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-serif font-bold text-white mb-6">Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {naghamData.images.gallery?.map((img, idx) => (
                      <div key={idx} className="aspect-square rounded-sm overflow-hidden border border-white/10 group relative">
                        <img 
                          src={img} 
                          alt={`Nagham Gallery ${idx + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      </div>
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
