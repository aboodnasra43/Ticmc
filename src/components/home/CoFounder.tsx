import React from 'react';
import { Section } from '../ui/Section';
import data from '../../data/coFounder.json';

export const CoFounder: React.FC = () => {
  return (
    <Section id="co-founder" bg="light">
      <div className="space-y-16">
        {/* Biography Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column: Text */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <span className="text-ticmc-gold font-bold uppercase tracking-widest text-sm mb-2 block">Leadership</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ticmc-green mb-6">
              {data.role} — {data.name}
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>{data.bio}</p>
            </div>
          </div>
          
          {/* Center Column: Photo */}
          <div className="lg:col-span-1 order-1 lg:order-2 flex justify-center">
             {/* @ts-ignore */}
            {data.images.centerImage && (
              <div className="relative rounded-sm overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-500">
                <img 
                  /* @ts-ignore */
                  src={data.images.centerImage} 
                  alt={data.name}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            )}
          </div>

          {/* Right Column: Video */}
          <div className="lg:col-span-1 order-3 lg:order-3 space-y-6">
             {/* Featured Video */}
            {data.images.video && (
              <div className="relative rounded-sm overflow-hidden shadow-lg border border-gray-200 group">
                <video 
                  src={data.images.video} 
                  controls 
                  className="w-full h-auto object-cover"
                  poster={data.images.gallery[9]} // Using the football player image as poster
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};
