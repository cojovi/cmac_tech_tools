import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/mmLogoNoBG.png" alt="MM Remodelers" className="h-10 w-auto" />
              <div>
                <span className="text-xl font-bold text-white">MM</span>
                <span className="text-sm text-teal-400 ml-1">REMODELERS</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Texas-based renovation experts combining industrial strength with modern design. 
              Building the future, one project at a time.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/MMRemodelers/" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Services', href: '/services' },
                { name: 'Projects', href: '/projects' },
                { name: 'About Us', href: '/about' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Kitchen Remodeling',
                'Bathroom Renovation',
                'Commercial Build-Out',
                'Home Additions',
                'Outdoor Living',
                'Industrial Renovation'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm hover:text-teal-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>101 Collins Ct</p>
                  <p>Fort Worth, TX, United States</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="tel:+18173338524" className="text-gray-400 text-sm hover:text-teal-400 transition-colors">
                  (817) 333-8524
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:Info@mmremodelers.com" className="text-gray-400 text-sm hover:text-teal-400 transition-colors">
                  Info@mmremodelers.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p>Sat: 8:00 AM - 4:00 PM</p>
                  <p>Sun: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} cojovi.com | MM Remodelers. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Licensing
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;