import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ticmc-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/assets/logo.png" alt="TICMC Logo" className="h-12 w-auto brightness-0 invert" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none tracking-wide text-ticmc-gold">TICMC</span>
                <span className="text-[10px] uppercase tracking-widest opacity-80">Consulting & Management</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transforming hospitality businesses into high-performance operations through strategic leadership and operational excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-ticmc-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-ticmc-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-ticmc-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-ticmc-gold mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Operational Audit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Menu Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Staff Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brand Enhancement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financial Improvement</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-ticmc-gold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-ticmc-gold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-ticmc-gold shrink-0 mt-0.5" />
                <span>Tunis, Tunisia, Dubai, UAE & Doha, Qatar</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-ticmc-gold shrink-0" />
                <div className="flex flex-col">
                  <span>+216 976 259 30</span>
                  <span>+974 3393 4370</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-ticmc-gold shrink-0" />
                <span>Ticmcgroup@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} TICMC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
