import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🕉</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">Mahadev</h3>
                <p className="text-sm text-stone-400">Stone Art</p>
              </div>
            </div>
            <p className="text-stone-300 leading-relaxed">
              Crafting timeless stone sculptures and architectural elements with traditional techniques and modern precision. Preserving cultural heritage through authentic stonework.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mahadev_sand_art_stones97/" className="w-8 h-8 bg-stone-700 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/mahadev_sand_art_stones97/" className="w-8 h-8 bg-stone-700 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors" target = "_blank" rel="noopener noreferrer">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-stone-700 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Services', href: '/services' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-stone-300 hover:text-gold-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Temple Sculptures',
                'Garden Décor',
                'Custom Carving',
                'Architectural Elements',
                'Stone Restoration',
                'Export Services',
              ].map((service) => (
                <li key={service}>
                  <span className="text-stone-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-stone-300">
                    Balesar Road, Jodhpur<br />
                    Rajasthan, India - 342023
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gold-500 flex-shrink-0" />
                <p className="text-stone-300">+91 9549577752</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gold-500 flex-shrink-0" />
                <p className="text-stone-300">info@tharurja.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={18} className="text-gold-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-stone-300">
                    Mon - sun: 9:00 AM - 6:00 PM<br />
                    {/* Sunday: Closed */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 text-sm">
              © 2025 Mahadev Stone Art. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-stone-400 hover:text-gold-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-stone-400 hover:text-gold-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;