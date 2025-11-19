import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Company Name - Top Left */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img
                src="/bakers auto logo.jpg"
                alt="Baker's Auto Spa Logo"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white/20"
              />
              <h1 className="text-white text-xl md:text-2xl font-bold tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
                Baker's Auto Spa
              </h1>
            </div>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">
              Pricing
            </button>
            <button onClick={() => scrollToSection('vehicle-size-guide')} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">
              Size Guide
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">
              Contact Us
            </button>
          </div>

          {/* Phone Number and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+18609179942" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">
              +1 (860) 917-9942
            </a>
            <a href="https://clienthub.getjobber.com/booking/3d50ca1a-7ae4-4fde-8ed8-2c517bb03b50" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-800 text-black hover:text-white px-6 py-3 text-sm font-medium transition-all duration-300">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-3 bg-black/95 backdrop-blur-md">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white hover:text-gray-300 transition-colors duration-300 text-base font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-base font-medium py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-base font-medium py-2"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-base font-medium py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('vehicle-size-guide')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-base font-medium py-2"
            >
              Size Guide
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 text-base font-medium py-2"
            >
              Contact Us
            </button>
            <div className="pt-4 border-t border-gray-800">
              <a
                href="tel:+18609179942"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-base font-medium py-2"
              >
                +1 (860) 917-9942
              </a>
              <a
                href="https://clienthub.getjobber.com/booking/3d50ca1a-7ae4-4fde-8ed8-2c517bb03b50"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white hover:bg-gray-800 text-black hover:text-white px-6 py-3 text-base font-medium transition-all duration-300 mt-2 text-center"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;