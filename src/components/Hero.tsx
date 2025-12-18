import React, { useEffect, useState } from 'react';

interface StatisticProps {
  number: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const Statistic: React.FC<StatisticProps> = ({ number, label, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = number / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <div className="text-center">
      <div className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 ${
        isVisible ? 'animate-count-up' : 'opacity-0'
      }`}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-300 text-xs md:text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">

      {/* Full Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className={`w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{
            backgroundImage: 'url(https://j7ptrdd2q7.ufs.sh/f/O28pM5hUrXW3hu3cJfoO7EnTBMKmuW6ZQPXej0JoDSlAb4vC)',
            filter: 'brightness(0.8) contrast(1.2)',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            WebkitBackfaceVisibility: 'hidden',
            WebkitTransform: 'translate3d(0, 0, 0)',
          }}
          onLoad={() => setImageLoaded(true)}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full max-w-7xl mx-auto px-8 lg:px-16 xl:px-24">
        {/* Top Section - Text Content */}
        <div className="flex-1 flex items-start justify-center pt-32">
          <div className="max-w-4xl text-center">
            {/* Main Headline */}
            <div className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <h1 className="text-3xl leading-tight md:text-5xl md:leading-[0.9] lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight">
                Transform Your Ride<br />
                <span className="text-gray-300">with Baker's Auto Spa</span>
              </h1>
            </div>

            {/* Description */}
            <div className={`transform transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-4 leading-relaxed max-w-2xl mx-auto font-light">
                Experience the ultimate shine and protection for your vehicle. Our expert team uses top-notch products and techniques to ensure your car looks its best.
              </p>
              <p className="text-white text-sm md:text-base font-medium mb-8">
                Proudly Serving Connecticut
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`transform transition-all duration-1000 ease-out delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://clienthub.getjobber.com/booking/3d50ca1a-7ae4-4fde-8ed8-2c517bb03b50" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-800 text-black hover:text-white px-8 py-4 text-base font-medium transition-all duration-300 min-w-[120px] text-center">
                  Book Now
                </a>
                <a href="tel:+18609179942" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-base font-medium transition-all duration-300 min-w-[120px] text-center">
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Statistics */}
        <div className="pb-20">
          <div className={`transform transition-all duration-1000 ease-out delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 mb-8 max-w-4xl mx-auto">
              <Statistic
                number={5}
                label="Years Experience"
              />
              <Statistic
                number={98}
                suffix="%"
                label="Customer Satisfaction"
              />
              <Statistic
                number={24}
                suffix="/7"
                label="Support Available"
              />
            </div>

            {/* Additional Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold text-white mb-1">Premium Products</div>
                <p className="text-gray-300 text-sm">Only the finest detailing products</p>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold text-white mb-1">Expert Team</div>
                <p className="text-gray-300 text-sm">Certified professionals with experience</p>
              </div>
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold text-white mb-1">Guaranteed Results</div>
                <p className="text-gray-300 text-sm">100% satisfaction guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;