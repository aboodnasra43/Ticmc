import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { MessageSquare, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct mailto link
    const subject = `Contact Request from ${formState.name}`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\n\nMessage:\n${formState.message}`;
    const mailtoLink = `mailto:Ticmcgroup@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open mail client
    window.location.href = mailtoLink;

    // Simulate API call for UI feedback
    setTimeout(() => {
      localStorage.setItem('ticmc_contact_submission', JSON.stringify(formState));
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact" bg="light">
      <div className="max-w-4xl mx-auto bg-white rounded-sm shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Info Side */}
        <div className="bg-ticmc-green text-white p-10 md:w-2/5 flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ready to elevate your hospitality business? Contact us for a consultation.
            </p>
            
            <div className="space-y-6">
              <div>
                <span className="text-ticmc-gold text-xs uppercase tracking-widest block mb-1">Email</span>
                <a href="mailto:Ticmcgroup@gmail.com" className="text-lg hover:text-ticmc-gold transition-colors">Ticmcgroup@gmail.com</a>
              </div>
              <div>
                <span className="text-ticmc-gold text-xs uppercase tracking-widest block mb-1">WhatsApp</span>
                <a href="https://wa.me/21697625930" className="text-lg hover:text-ticmc-gold transition-colors flex items-center gap-2">
                  <MessageSquare size={18} /> +216 976 259 30
                </a>
                <a href="https://wa.me/97433934370" className="text-lg hover:text-ticmc-gold transition-colors flex items-center gap-2 mt-2">
                  <MessageSquare size={18} /> +974 3393 4370
                </a>
              </div>
              <div>
                <span className="text-ticmc-gold text-xs uppercase tracking-widest block mb-1">Location</span>
                <p className="text-lg">Tunis, Tunisia<br/>Dubai, UAE<br/>Doha, Qatar</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="w-12 h-12 border border-ticmc-gold/30 rounded-full flex items-center justify-center">
              <img src="/assets/logo.png" alt="Logo" className="h-6 w-auto brightness-0 invert" />
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-10 md:w-3/5">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <Send size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-ticmc-green mb-2">Message Sent!</h3>
              <p className="text-gray-500">Thank you for contacting TICMC. We will get back to you shortly.</p>
              <Button variant="outline" className="mt-8" onClick={() => setIsSubmitted(false)}>Send Another</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-ticmc-gold focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-ticmc-gold focus:border-transparent outline-none transition-all"
                    placeholder="+216..."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-ticmc-gold focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-ticmc-gold focus:border-transparent outline-none transition-all"
                  placeholder="How can we help you?"
                />
              </div>
              <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};
