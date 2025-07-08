import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat, Bath, Building2, Home, Trees, Factory } from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: ChefHat,
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into a modern culinary workspace',
      image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
      category: 'residential'
    },
    {
      icon: Bath,
      title: 'Bathroom Renovation',
      description: 'Create luxurious spa-like bathrooms with premium fixtures',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      category: 'residential'
    },
    {
      icon: Building2,
      title: 'Commercial Build-Out',
      description: 'Professional spaces designed for productivity and success',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg',
      category: 'commercial'
    },
    {
      icon: Home,
      title: 'Home Additions',
      description: 'Expand your living space with seamless integration',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg',
      category: 'residential'
    },
    {
      icon: Trees,
      title: 'Outdoor Living',
      description: 'Create stunning outdoor entertaining spaces',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      category: 'residential'
    },
    {
      icon: Factory,
      title: 'Industrial Renovation',
      description: 'Modernize facilities while maintaining efficiency',
      image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg',
      category: 'commercial'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="text-teal-400">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From residential renovations to commercial build-outs, we deliver industrial-strength 
            construction with modern design sensibilities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-teal-500/50 transition-all duration-500 transform hover:scale-105"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Category Badge */}
                <div className="mb-4">
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
                    <service.icon className="w-8 h-8 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-teal-400 font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* 3D Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 transform hover:scale-105 group"
          >
            <span className="text-lg font-semibold">View All Services</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;