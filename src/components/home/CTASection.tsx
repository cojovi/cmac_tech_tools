import React from 'react';
import { Terminal, Zap, Code, ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  const ctaOptions = [
    {
      icon: Terminal,
      title: 'AI Dashboard',
      description: 'Direct access to your AI phone call minions',
      action: '#console',
      buttonText: 'Open Dashboard',
      primary: false,
      color: 'secondary'
    },
    {
      icon: Zap,
      title: 'Start Calling',
      description: 'Activate your AI agents instantly',
      action: '#deploy',
      buttonText: 'Activate AI',
      primary: true,
      color: 'primary'
    },
    {
      icon: Code,
      title: 'Documentation',
      description: 'Complete setup guides and training materials',
      action: '#docs',
      buttonText: 'View Docs',
      primary: false,
      color: 'accent'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Circuit Pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-5"></div>

      {/* Matrix Rain */}
      <div className="absolute inset-0 opacity-5">
        <div className="matrix-rain">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="matrix-char"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${20 + Math.random() * 10}s`
              }}
            >
              {['>', '<', '/', '\\', '|', '{', '}', '[', ']'][Math.floor(Math.random() * 9)]}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-cyber">
              The Future?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Join thousands of businesses who've experienced the Cody's AI difference. 
            Let's transform your phone operations with AI-powered call agents and intelligent automation.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 mb-12">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
              <span>1M+ API Calls Daily</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
              <span>24/7 Global Support</span>
            </div>
          </div>
        </div>

        {/* CTA Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${
                option.primary
                  ? 'bg-gradient-to-br from-brand-primary/20 to-brand-primary/30 border-brand-primary/50 hover:border-brand-primary'
                  : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
              } backdrop-blur-sm`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                option.color === 'primary'
                  ? 'bg-brand-primary/20 border border-brand-primary/30 group-hover:bg-brand-primary/30'
                  : option.color === 'secondary'
                  ? 'bg-brand-secondary/20 border border-brand-secondary/30 group-hover:bg-brand-secondary/30'
                  : 'bg-brand-accent/20 border border-brand-accent/30 group-hover:bg-brand-accent/30'
              }`}>
                <option.icon className={`w-8 h-8 transition-all duration-300 group-hover:scale-110 ${
                  option.color === 'primary'
                    ? 'text-brand-primary'
                    : option.color === 'secondary'
                    ? 'text-brand-secondary'
                    : 'text-brand-accent'
                }`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
                {option.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {option.description}
              </p>

              {/* Button */}
              <a
                href={option.action}
                className={`inline-flex items-center justify-center w-full px-6 py-4 rounded-lg font-semibold transition-all duration-300 group ${
                  option.primary
                    ? 'bg-gradient-to-r from-brand-primary to-cyber-600 text-white hover:from-cyber-600 hover:to-brand-secondary shadow-lg hover:shadow-glow-cyan'
                    : option.color === 'secondary'
                    ? 'border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white'
                    : 'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-gray-900'
                }`}
              >
                <span>{option.buttonText}</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Glow Effect */}
              {option.primary && (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* System Status */}
        <div className="text-center p-8 rounded-2xl bg-brand-accent/10 border border-brand-accent/20">
          <h3 className="text-xl font-bold text-white mb-2 font-mono">System Status: Operational</h3>
          <p className="text-gray-400 mb-4">99.9% uptime with 24/7 monitoring and support</p>
          <a
            href="#status"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-accent text-gray-900 rounded-lg hover:bg-brand-accent/80 transition-colors font-medium font-mono"
          >
            <Zap className="w-5 h-5" />
            <span>View Status Page</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;