import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What Our <span className="text-teal-400">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from satisfied clients who've experienced 
            the MM Remodelers difference firsthand.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 p-3 bg-gray-800 text-white rounded-full hover:bg-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500/25"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 p-3 bg-gray-800 text-white rounded-full hover:bg-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500/25"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Content */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center border border-teal-500/30">
                <Quote className="w-8 h-8 text-teal-400" />
              </div>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-center mb-8">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic">
                "{currentTestimonial.content}"
              </p>
            </blockquote>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      index < currentTestimonial.rating
                        ? 'text-orange-400 fill-orange-400'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Client Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-teal-500/30"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/20 to-transparent"></div>
              </div>

              {/* Client Details */}
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-white">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-400">
                  {currentTestimonial.role}
                  {currentTestimonial.company && (
                    <span className="text-teal-400"> • {currentTestimonial.company}</span>
                  )}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Project: {currentTestimonial.project}
                </p>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-teal-400 scale-110'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ready to join our satisfied clients?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 font-semibold">
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;