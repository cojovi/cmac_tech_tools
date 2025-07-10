import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Mail, MapPin, Github, Twitter, Linkedin, Code, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Code className="h-10 w-10 text-brand-primary" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-accent rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-xl font-bold text-white font-mono">Cody's</span>
                <span className="text-sm text-brand-primary ml-1 font-mono">ai</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced machine learning and neural network powered ai agents for answering systems or cold calling.
              Building intelligent phone call automation for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/codys-ai" className="text-gray-400 hover:text-brand-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/codysai" className="text-gray-400 hover:text-brand-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/codys-ai" className="text-gray-400 hover:text-brand-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Platform</h3>
            <ul className="space-y-3">
              {[
                { name: 'AI Agents', href: '/services' },
                { name: 'Call Solutions', href: '/projects' },
                { name: 'Documentation', href: '/about' },
                { name: 'Blog', href: '/blog' },
                { name: 'Support', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-brand-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">AI Services</h3>
            <ul className="space-y-3">
              {[
                'AI Phone Call Agents',
                'Cold Calling Automation',
                'Voice Recognition System',
                'Call Analytics Platform',
                'Lead Generation Tools',
                'Customer Support Bots'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm hover:text-brand-primary transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Connect</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>Cloud Infrastructure</p>
                  <p>Global CDN Network</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Terminal className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <a href="#console" className="text-gray-400 text-sm hover:text-brand-primary transition-colors font-mono">
                  API Console
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <a href="mailto:support@tech.cmac.tool" className="text-gray-400 text-sm hover:text-brand-primary transition-colors">
                  support@codysai.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>24/7 System Monitoring</p>
                  <p>99.9% Uptime SLA</p>
                  <p>Global Support Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Cody's AI Phone Call Minions | AI Calling Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">
                API Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;