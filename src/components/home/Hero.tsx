import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Cpu, Code, Zap, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/image.png',
      title: 'AI-Powered',
      subtitle: 'Phone Call Minions',
      description: 'Advanced machine learning and neural network powered ai agents for answering systems or cold calling'
    },
    {
      image: '/image.png',
      title: 'Intelligent',
      subtitle: 'Call Automation',
      description: 'Sophisticated AI agents that handle customer calls with human-like conversation abilities'
    },
    {
      image: '/image.png',
      title: '24/7',
      subtitle: 'Virtual Assistants',
      description: 'Never miss a call again with AI minions that work around the clock for your business'
    }
  ];

  const stats = [
    { icon: Cpu, value: '10K+', label: 'Calls Handled/Day' },
    { icon: Code, value: '95%', label: 'Customer Satisfaction' },
    { icon: Zap, value: '24/7', label: 'AI Availability' }
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
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/90" />
          </div>
        ))}
      </div>

      {/* Animated Circuit Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="circuit-pattern animate-pulse"></div>
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-rain">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="matrix-char"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Terminal-style Header */}
          <div className="cmd-line text-left max-w-2xl mx-auto mb-8">
            <span className="text-brand-accent">./initialize</span>
            <span className="text-gray-400 ml-2">--platform=tech.cmac.tool</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="text-brand-primary glitch" data-text={slides[currentSlide].title}>{slides[currentSlide].title}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-cyber">
                {slides[currentSlide].subtitle}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-brand-primary to-cyber-600 text-white rounded-lg hover:from-cyber-600 hover:to-brand-secondary transition-all duration-300 shadow-2xl hover:shadow-glow-cyan transform hover:scale-105">
              <Terminal className="w-5 h-5" />
              <span className="text-lg font-semibold font-mono">Initialize Platform</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="group flex items-center space-x-3 px-8 py-4 border-2 border-brand-secondary text-brand-secondary rounded-lg hover:bg-brand-secondary hover:text-white transition-all duration-300 transform hover:scale-105">
              <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="text-lg font-semibold font-mono">View Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="group data-stream">
                <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-primary/50 transition-all duration-300 hover:bg-white/10">
                  <stat.icon className="w-8 h-8 text-brand-primary group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white font-mono">{stat.value}</div>
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
                ? 'bg-brand-primary scale-110'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;