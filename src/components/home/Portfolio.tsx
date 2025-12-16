import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" bg="dark" className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ticmc-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-ticmc-gold font-bold uppercase tracking-widest text-sm mb-2 block">Success Stories</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-gray-400">
              See how we've helped hospitality businesses achieve operational excellence and financial growth.
            </p>
          </div>
          <Button variant="outline" className="shrink-0">View All Projects</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-sm mb-6">
              <img 
                src="/assets/portfolio-hotel.jpg" 
                alt="Luxury Hotel Turnaround" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-ticmc-gold text-sm font-medium uppercase">Turnaround Strategy</span>
              <span className="text-gray-500 text-sm">Dubai, UAE</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-ticmc-gold transition-colors">
              Luxury Hotel F&B Revitalization
            </h3>
            <p className="text-gray-400 mb-4 line-clamp-2">
              Restructured 4 dining outlets, resulting in a 35% revenue increase and 20% cost reduction within 6 months.
            </p>
            <div className="flex items-center text-white text-sm font-medium group-hover:translate-x-2 transition-transform">
              Read Case Study <ArrowRight size={16} className="ml-2 text-ticmc-gold" />
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden rounded-sm mb-6">
              <img 
                src="/assets/services-chef.jpg" 
                alt="Fine Dining Launch" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-ticmc-gold text-sm font-medium uppercase">New Concept Launch</span>
              <span className="text-gray-500 text-sm">Tunis, Tunisia</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-ticmc-gold transition-colors">
              Modern Mediterranean Fine Dining
            </h3>
            <p className="text-gray-400 mb-4 line-clamp-2">
              Full-scope launch from menu engineering to staff training, achieving #1 TripAdvisor ranking in first quarter.
            </p>
            <div className="flex items-center text-white text-sm font-medium group-hover:translate-x-2 transition-transform">
              Read Case Study <ArrowRight size={16} className="ml-2 text-ticmc-gold" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
