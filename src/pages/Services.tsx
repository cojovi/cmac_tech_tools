import React, { useState } from 'react';
import { ArrowRight, Check, ChefHat, Bath, Building2, Home, Trees, Factory } from 'lucide-react';
import { services } from '../data/services';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'commercial'>('all');

  const iconMap = {
    ChefHat: ChefHat,
    Bath: Bath,
    Building2: Building2,
    Home: Home,
    Trees: Trees,
    Factory: Factory
  };

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Our <span className="text-teal-400">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            From concept to completion, we deliver industrial-strength construction 
            with modern design innovation across residential and commercial projects.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'residential', label: 'Residential' },
              { id: 'commercial', label: 'Commercial' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveCategory(filter.id as any)}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === filter.id
                    ? 'bg-teal-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              
              return (
                <div
                  key={service.id}
                  className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-500 hover:scale-105"
                >
                  {/* Category Badge */}
                  <div className="mb-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      service.category === 'residential'
                        ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                        : 'bg-lime-500/20 text-lime-400 border border-lime-500/30'
                    }`}>
                      {service.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-teal-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 group">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-teal-400">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We follow a proven methodology that ensures every project is delivered 
              on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial meeting to understand your vision and requirements' },
              { step: '02', title: 'Design & Planning', description: 'Detailed plans and 3D visualizations of your project' },
              { step: '03', title: 'Construction', description: 'Professional execution with regular progress updates' },
              { step: '04', title: 'Completion', description: 'Final walkthrough and project handover with warranty' }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-teal-500 to-gray-600 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                <p className="text-gray-400 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's discuss how we can bring your vision to life with our expert craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-teal-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Get Free Quote
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-600 transition-colors font-semibold">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;