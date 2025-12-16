import React from 'react';
import { Section } from '../ui/Section';
import { ClipboardList, Utensils, Users, Star, TrendingUp, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: ClipboardList,
    title: 'Operational Audit & Restructuring',
    description: 'Comprehensive analysis of your current operations to identify inefficiencies and implement structural improvements.',
  },
  {
    icon: Utensils,
    title: 'Menu Engineering & Optimization',
    description: 'Data-driven menu design to maximize profitability, reduce waste, and enhance culinary appeal.',
  },
  {
    icon: Users,
    title: 'Staff Training & Leadership',
    description: 'Empowering your team with world-class service standards and leadership development programs.',
  },
  {
    icon: Star,
    title: 'Brand & CX Enhancement',
    description: 'Elevating your brand identity and customer journey to create memorable, loyalty-building experiences.',
  },
  {
    icon: TrendingUp,
    title: 'Financial Performance',
    description: 'Strategies to optimize costs, increase revenue streams, and improve overall profit margins.',
  },
  {
    icon: Rocket,
    title: 'Restaurant Launch Strategy',
    description: 'End-to-end support for new concepts, from feasibility studies to grand opening execution.',
  },
];

export const Services: React.FC = () => {
  return (
    <Section id="services" bg="light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-ticmc-green mb-4">Our Expertise</h2>
        <div className="w-20 h-1 bg-ticmc-gold mx-auto mb-6" />
        <p className="text-gray-600 text-lg">
          We provide tailored solutions to address the unique challenges of the modern food and beverage industry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-transparent hover:border-ticmc-gold group"
          >
            <div className="w-14 h-14 bg-ticmc-green/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-ticmc-gold/10 transition-colors">
              <service.icon className="text-ticmc-green group-hover:text-ticmc-gold transition-colors" size={28} />
            </div>
            <h3 className="font-serif text-xl font-bold text-ticmc-green mb-3">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
