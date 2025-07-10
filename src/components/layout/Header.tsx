import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Zap, Code } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Tools', href: '/services' },
    { name: 'Solutions', href: '/projects' },
    { name: 'Docs', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-brand-primary/20' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Code className="h-10 w-10 text-brand-primary transition-all duration-300 group-hover:scale-110" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-accent rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold text-white tracking-tight font-mono">Cody's</span>
              <span className="text-lg text-brand-primary ml-1 font-mono">ai</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  location.pathname === item.href
                    ? 'text-brand-primary'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#console"
              className="flex items-center space-x-2 px-4 py-2 border border-brand-secondary text-brand-secondary rounded-lg hover:bg-brand-secondary hover:text-white transition-all duration-300 group"
            >
              <Terminal className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span className="text-sm font-medium font-mono">Console</span>
            </a>
            <button className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-brand-primary to-cyber-600 text-white rounded-lg hover:from-cyber-600 hover:to-brand-secondary transition-all duration-300 shadow-lg hover:shadow-glow-cyan">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium font-mono">Deploy</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900/98 backdrop-blur-sm border-b border-brand-primary/20">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-brand-primary'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-700">
                <a
                  href="#console"
                  className="flex items-center space-x-2 text-brand-secondary hover:text-brand-primary transition-colors"
                >
                  <Terminal className="w-4 h-4" />
                  <span className="font-mono">Console</span>
                </a>
                <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-brand-primary to-cyber-600 text-white rounded-lg hover:from-cyber-600 hover:to-brand-secondary transition-all duration-300">
                  <Zap className="w-4 h-4" />
                  <span className="font-mono">Deploy</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;