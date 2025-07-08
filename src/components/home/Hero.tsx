import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Award, Users, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      title: 'Industrial Strength',
      subtitle: 'Modern Design',
      description: 'Transform your space with Texas-tough construction and cutting-edge aesthetics'
    },
    {
      image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
      title: 'Commercial Excellence',
      subtitle: 'Residential Comfort',
      description: 'From corporate headquarters to luxury homes, we build for the future'
    },
    {
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg',
      title: 'Smart Integration',
      subtitle: 'Seamless Results',
      description: 'Technology-driven construction meets traditional craftsmanship'
    }
  ];

  const stats = [
    { icon: Award, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '15+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Emergency Support' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90" />
          </div>
        ))}
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-pattern animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="text-teal-400">{slides[currentSlide].title}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-lime-400">
                {slides[currentSlide].subtitle}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-2xl hover:shadow-teal-500/25 transform hover:scale-105">
              <span className="text-lg font-semibold">Start Your Project</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="group flex items-center space-x-3 px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="text-lg font-semibold">Watch Our Work</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-500/50 transition-all duration-300 hover:bg-white/10">
                  <stat.icon className="w-8 h-8 text-teal-400 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-teal-400 scale-110'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;