import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Code, Database, Cloud, Network, Shield } from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Phone Call Agents',
      description: 'Advanced machine learning and neural network powered ai agents for answering systems',
      image: '/image.png',
      category: 'ai'
    },
    {
      icon: Code,
      title: 'Cold Calling Automation',
      description: 'Intelligent cold calling systems that engage prospects with natural conversation',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      category: 'automation'
    },
    {
      icon: Database,
      title: 'Call Analytics Platform',
      description: 'Real-time call analytics and performance tracking for your AI agents',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
      category: 'analytics'
    },
    {
      icon: Cloud,
      title: 'Voice Recognition System',
      description: 'Advanced voice processing and natural language understanding capabilities',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
      category: 'voice'
    },
    {
      icon: Network,
      title: 'Lead Generation Tools',
      description: 'AI-powered lead qualification and appointment setting automation',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
      category: 'leads'
    },
    {
      icon: Shield,
      title: 'Customer Support Bots',
      description: 'Intelligent customer service automation with escalation capabilities',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
      category: 'support'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="text-brand-primary">AI Minions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From phone answering to cold calling, we deliver intelligent AI agents 
            with cutting-edge technology and natural conversation abilities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-brand-primary/50 transition-all duration-500 transform hover:scale-105"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Circuit Pattern Overlay */}
              <div className="absolute inset-0 circuit-pattern opacity-10 group-hover:opacity-20 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    service.category === 'ai'
                      ? 'bg-brand-primary/20 text-brand-primary border border-brand-primary/30'
                      : service.category === 'automation'
                      ? 'bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/30'
                      : 'bg-brand-accent/20 text-brand-accent border border-brand-accent/30'
                  }`}>
                    {service.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center group-hover:bg-brand-primary/30 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-brand-primary font-medium font-mono">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* 3D Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-brand-primary to-cyber-600 text-white rounded-lg hover:from-cyber-600 hover:to-brand-secondary transition-all duration-300 shadow-lg hover:shadow-glow-cyan transform hover:scale-105 group"
          >
            <span className="text-lg font-semibold font-mono">Meet Your AI Minions</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;