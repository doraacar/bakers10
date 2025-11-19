import React from 'react';
import { Car, Droplets, Shield, Sparkles, Zap, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const headerAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Exterior Wash & Dry",
      description: "Complete exterior cleaning with premium soap, hand wash, and spot-free rinse. Includes wheel cleaning and tire shine.",
      features: ["Hand wash", "Wheel cleaning", "Tire shine", "Spot-free rinse"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Interior Detailing",
      description: "Deep cleaning of all interior surfaces including vacuuming, dashboard cleaning, and leather conditioning.",
      features: ["Complete vacuuming", "Dashboard cleaning", "Leather conditioning", "Window cleaning"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Full Detail Package",
      description: "Complete interior and exterior detailing service for the ultimate car care experience.",
      features: ["Everything included", "Engine bay cleaning", "Premium service"]
    }
  ];

  return (
    <section id="services" className="py-20 gradient-services">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            From basic washes to premium detailing, we offer comprehensive car care services 
            to keep your vehicle looking its absolute best.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridAnimation.ref} className="max-w-5xl mx-auto">
          {/* Top Row - Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {services.slice(0, 2).map((service, index) => (
              <div
                key={index}
                className={`gradient-card-hover border border-gray-800 p-8 hover:border-white/20 transition-all duration-700 group ${
                  gridAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="text-white mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Row - Centered Card */}
          <div className="flex justify-center">
            <div
              className={`gradient-card-hover border border-gray-800 p-8 hover:border-white/20 transition-all duration-700 group w-full md:w-1/2 ${
                gridAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: '200ms'
              }}
            >
              <div className="text-white mb-6 group-hover:text-gray-300 transition-colors duration-300">
                {services[2].icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {services[2].title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {services[2].description}
              </p>

              <ul className="space-y-2">
                {services[2].features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaAnimation.ref}
          className={`text-center mt-16 transition-all duration-1000 ${
            ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-300 mb-8 text-lg">
            Ready to give your car the care it deserves?
          </p>
          <a href="https://clienthub.getjobber.com/booking/3d50ca1a-7ae4-4fde-8ed8-2c517bb03b50" target="_blank" rel="noopener noreferrer" className="inline-block bg-white hover:bg-gray-800 text-black hover:text-white px-8 py-4 text-base font-medium transition-all duration-300">
            Book Your Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;