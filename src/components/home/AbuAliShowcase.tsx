import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, TrendingUp, Users, ChevronRight, FileText, Image as ImageIcon } from 'lucide-react';
import abuAliData from '../../data/abuAli.json';

export const AbuAliShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'menu' | 'gallery'>('story');
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="py-20 bg-ticmc-dark text-white relative overflow-hidden" id="abu-ali">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/assets/portfolio-hotel.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-ticmc-gold flex flex-col items-center gap-4">
            <img src="/assets/abu-ali/logo.png" alt="Abu Ali Logo" className="h-24 w-auto object-contain mb-2" />
            {abuAliData.profile.name}
          </h2>
          <div className="flex justify-center items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-ticmc-gold" />
              <span>{abuAliData.profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-ticmc-gold" />
              <span>Est. {abuAliData.profile.established}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar / Navigation */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/5 p-8 rounded-sm border border-white/10 backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-gray-300 mb-8 font-serif italic">
                "{abuAliData.profile.description}"
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={() => setActiveTab('story')}
                  className={`w-full flex items-center justify-between p-4 rounded-sm transition-all duration-300 ${
                    activeTab === 'story' 
                      ? 'bg-ticmc-gold text-ticmc-dark font-bold' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <span>Success Story</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === 'story' ? 'rotate-90' : ''}`} />
                </button>
                <button
                  onClick={() => setActiveTab('menu')}
                  className={`w-full flex items-center justify-between p-4 rounded-sm transition-all duration-300 ${
                    activeTab === 'menu' 
                      ? 'bg-ticmc-gold text-ticmc-dark font-bold' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <span>Curated Menu</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === 'menu' ? 'rotate-90' : ''}`} />
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

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-ticmc-gold font-bold mb-4">Downloads</h4>
                <div className="space-y-3">
                  <a 
                    href="/assets/documents/abu-ali-profile.doc" 
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                    download
                  >
                    <div className="p-2 bg-white/5 rounded-full group-hover:bg-ticmc-gold group-hover:text-ticmc-dark transition-colors">
                      <FileText className="w-4 h-4" />
                    </div>
                    Restaurant Profile (DOC)
                  </a>
                  <a 
                    href="/assets/documents/abu-ali-menu.pdf" 
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                    download
                  >
                    <div className="p-2 bg-white/5 rounded-full group-hover:bg-ticmc-gold group-hover:text-ticmc-dark transition-colors">
                      <FileText className="w-4 h-4" />
                    </div>
                    Full Menu (PDF)
                  </a>
                </div>
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
              {activeTab === 'story' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-6">{abuAliData.successStory.title}</h3>
                    <div className="space-y-6 text-gray-300">
                      <div>
                        <h4 className="text-ticmc-gold font-bold mb-2 uppercase tracking-wider text-sm">The Challenge</h4>
                        <p>{abuAliData.successStory.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-ticmc-gold font-bold mb-2 uppercase tracking-wider text-sm">The Solution</h4>
                        <p>{abuAliData.successStory.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    {abuAliData.successStory.results.map((result, index) => (
                      <div key={index} className="bg-white/5 p-6 rounded-sm border border-white/5">
                        <div className="mb-4 text-ticmc-gold">
                          {index === 0 ? <TrendingUp className="w-8 h-8" /> : 
                           index === 1 ? <Users className="w-8 h-8" /> : 
                           <Award className="w-8 h-8" />}
                        </div>
                        <p className="font-medium text-white">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'menu' && (
                <div className="space-y-10">
                  <div className="flex justify-between items-end border-b border-white/10 pb-6">
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-white mb-2">Signature Menu</h3>
                      <p className="text-gray-400">Curated by TICMC Culinary Team</p>
                    </div>
                    <a 
                      href="/assets/documents/abu-ali-menu.pdf" 
                      className="hidden md:flex items-center gap-2 text-ticmc-gold hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
                      download
                    >
                      Download Full Menu
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="grid gap-12">
                    {abuAliData.menu.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="text-xl font-serif text-ticmc-gold mb-6 flex items-center gap-4">
                          <span className="w-8 h-[1px] bg-ticmc-gold"></span>
                          {section.category}
                          <span className="w-8 h-[1px] bg-ticmc-gold"></span>
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                          {section.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="group">
                              <div className="flex justify-between items-baseline mb-2">
                                <h5 className="font-bold text-white group-hover:text-ticmc-gold transition-colors">{item.name}</h5>
                                <span className="text-ticmc-gold font-serif">{item.price}</span>
                              </div>
                              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-serif font-bold text-white mb-6">Atmosphere & Experience</h3>
                  
                  <div className="relative group">
                    <div className="relative aspect-video overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                      <motion.img 
                        key={activeImage}
                        src={abuAliData.gallery[activeImage]} 
                        alt="Abu Ali Atmosphere" 
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Navigation Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {abuAliData.gallery.map((_, idx) => (
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
                    {abuAliData.gallery.map((img, idx) => (
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
