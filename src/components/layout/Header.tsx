import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { clsx } from 'clsx';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="TICMC Logo" className="h-12 w-auto" />
          <div className={clsx("flex flex-col", isScrolled ? "text-ticmc-green" : "text-white")}>
            <span className="font-serif font-bold text-xl leading-none tracking-wide">TICMC</span>
            <span className="text-[10px] uppercase tracking-widest opacity-80">Consulting & Management</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={clsx(
                'text-sm font-medium uppercase tracking-wider transition-colors hover:text-ticmc-gold',
                isScrolled ? 'text-ticmc-green' : 'text-white/90'
              )}
            >
              {link.name}
            </a>
          ))}
          <Button variant={isScrolled ? 'primary' : 'gold'} size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get in Touch
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-ticmc-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-8 px-4 flex flex-col gap-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-ticmc-green font-medium text-lg py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" fullWidth onClick={() => {
            setIsMobileMenuOpen(false);
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Get in Touch
          </Button>
        </div>
      )}
    </header>
  );
};
