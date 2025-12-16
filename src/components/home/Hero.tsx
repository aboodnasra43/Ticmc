import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero-bg.jpg" 
          alt="Luxury Restaurant Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ticmc-dark/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-ticmc-dark via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-ticmc-gold/50 rounded-full text-ticmc-gold text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
            Premium F&B Consulting
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Transforming Hospitality <br />
            <span className="text-ticmc-gold italic">Into High-Performance Business</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Strategic leadership and operational excellence for restaurants, cafés, and hospitality businesses in Dubai, Qatar, and Tunisia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Our Services
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ticmc-green" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
