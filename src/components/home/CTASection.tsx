import React from 'react';
import { Phone, MessageCircle, Calendar, ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  const ctaOptions = [
    {
      icon: Phone,
      title: 'Call Now',
      description: 'Speak directly with our experts',
      action: 'tel:+18173338524',
      buttonText: '(817) 333-8524',
      primary: false,
      color: 'orange'
    },
    {
      icon: MessageCircle,
      title: 'Get Quote',
      description: 'Free consultation & estimate',
      action: '#quote',
      buttonText: 'Request Quote',
      primary: true,
      color: 'teal'
    },
    {
      icon: Calendar,
      title: 'Schedule',
      description: 'Book a consultation visit',
      action: '#schedule',
      buttonText: 'Schedule Visit',
      primary: false,
      color: 'lime'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-orange-400 to-lime-400">
              Your Space?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Join hundreds of satisfied clients who've experienced the MM Remodelers difference. 
            Let's bring your vision to life with industrial-strength construction and modern design.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 mb-12">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
              <span>500+ Projects Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <span>100% Satisfaction Guarantee</span>
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
                  ? 'bg-gradient-to-br from-teal-500/20 to-teal-600/20 border-teal-500/50 hover:border-teal-400'
                  : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
              } backdrop-blur-sm`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                option.color === 'teal'
                  ? 'bg-teal-500/20 border border-teal-500/30 group-hover:bg-teal-500/30'
                  : option.color === 'orange'
                  ? 'bg-orange-500/20 border border-orange-500/30 group-hover:bg-orange-500/30'
                  : 'bg-lime-500/20 border border-lime-500/30 group-hover:bg-lime-500/30'
              }`}>
                <option.icon className={`w-8 h-8 transition-all duration-300 group-hover:scale-110 ${
                  option.color === 'teal'
                    ? 'text-teal-400'
                    : option.color === 'orange'
                    ? 'text-orange-400'
                    : 'text-lime-400'
                }`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
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
                    ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 shadow-lg hover:shadow-teal-500/25'
                    : option.color === 'orange'
                    ? 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                    : 'border-2 border-lime-500 text-lime-500 hover:bg-lime-500 hover:text-gray-900'
                }`}
              >
                <span>{option.buttonText}</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Glow Effect */}
              {option.primary && (
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="text-center p-8 rounded-2xl bg-red-500/10 border border-red-500/20">
          <h3 className="text-xl font-bold text-white mb-2">Emergency Service Available</h3>
          <p className="text-gray-400 mb-4">24/7 support for urgent construction emergencies</p>
          <a
            href="tel:+18173338524"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
          >
            <Phone className="w-5 h-5" />
            <span>Emergency Hotline</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;