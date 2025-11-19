import React from 'react';
import { Check, Star, Crown, Gem } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Pricing: React.FC = () => {
  const headerAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();
  const additionalAnimation = useScrollAnimation();
  const guaranteeAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const packages = [
    {
      name: "Basic",
      prices: {
        small: "$110",
        medium: "$135",
        large: "$145"
      },
      icon: <Star className="w-6 h-6" />,
      popular: false,
      cardClass: "pricing-card-silver",
      buttonClass: "btn-silver",
      description: "Comprehensive interior and exterior care",
      features: [
        "Exterior Foam Bath",
        "Two bucket hand wash & dry",
        "Wheel cleaning & tire dressing",
        "Glass cleaning",
        "Interior wipe down + interior vac",
        "Floor mat cleaning",

      ],
      buttonText: "Choose Basic"
    },
    {
      name: "Intermediate",
      prices: {
        small: "$250",
        medium: "$275",
        large: "$285"
      },
      icon: <Crown className="w-6 h-6" />,
      popular: false,
      cardClass: "pricing-card-gold",
      buttonClass: "btn-gold",
      description: "Premium detailing with ceramic protection",
      features: [
        "Exterior foam bath & towel dry",
        "Two bucket hand wash",
        "Deep clean wheels & tires + add no sling hydrophobic tire protectant",
        "2-month ceramic sealant",
        "Trunk seal & door jamb cleaning",
        "Interior deep vacuum & wipe down",
        "Vent cleaning",
        "All surface conditioning",
        "Floor mat cleaning & conditioning",
        "Wipe down all windows",
        "Shampoo and extract all upholstery (seats, carpets, floormats)",
        "Tornador Spray",
        
      ],
      buttonText: "Choose Intermediate"
    },
    {
      name: "Advanced",
      prices: {
        small: "$400",
        medium: "$450",
        large: "$500"
      },
      icon: <Gem className="w-6 h-6" />,
      popular: false,
      cardClass: "pricing-card-diamond",
      buttonClass: "btn-diamond",
      description: "Ultimate protection with clay bar treatment",
      features: [
        "Exterior foam bath & towel dry",
        "Two bucket hand wash",
        "Deep clean wheels & tires",
        "Tire shine",
        "Hydrophobic tire protectant",
        "One year hydrophobic sealant",
        "Vent & crevice detailing",
        "Interior deep clean",
        "Trunk seal & door jamb cleaning",
        "Interior deep clean vacuum & wipe down",
        "Vent cleaning",
        "All surface conditioning",
        "Floor mat cleaning & conditioning",
        "Wipe down all windows",
        "Shampoo  & extract all upholstery",
        "Interior blow out",
        "Iron decontamination",
        "Clay treatment"
      ],
      buttonText: "Choose Advanced"
    }
  ];

  const compactPackages = [
    {
      name: "Exterior Only",
      prices: {
        small: "$70",
        medium: "$95",
        large: "$105"
      },
      duration: "1h 30m",
      category: "exterior",
      cardClass: "compact-card-basic",
      buttonClass: "btn-compact-basic",
      features: [
        "100% hand wash",
        "Exterior foam care",
        "Deep clean tires & wheels",
        "Add tire dressing protectant",
        "Add paint protection sealant",
        "Optional upgrade to wax (+$50)"
      ]
    },
    {
      name: "Interior Only",
      prices: {
        small: "$200",
        medium: "$250",
        large: "$300"
      },
      duration: "2h 30m",
      category: "interior",
      cardClass: "compact-card-pro",
      buttonClass: "btn-compact-pro",
      features: [
        "All door panels, windows, dash, console, cupholders interior plastics etc, scrubbed & deep cleaned",
        "Deep vacuum + interior air blowout",
        "Shampoo & extraction on all seats, fabrics, floormats, & interior upholstery",
        "Deep clean & condition leather seats (if applicable)",
        "Interior conditioning & high quality, non greasy protectant",
        "Vent & crevice cleaning",
        "Floor mat conditioning"
      ]
    }
  ];

  const maintenancePlan = {
    name: "Maintenance Plan",
    prices: {
      small: "$80",
      medium: "$105",
      large: "$115"
    },
    duration: "1h 30m",
    frequency: "2-4 weeks",
    note: "A full detail is required before enrolling in this plan",
    cardClass: "compact-card-ultra",
    buttonClass: "btn-compact-ultra",
    features: [
      "Exterior foam bath",
      "Two bucket hand wash & dry",
      "Interior wipe down",
      "Interior vac",
      "Wipe all windows"
    ]
  };

  const additionalServices = [
    { service: "Headlight Restoration", price: "$50" },
    { service: "Engine Bay Cleaning", price: "$20" },
    { service: "Pet Hair Removal", price: "$30" },
    { service: "Plastic Trim Exterior Restore", price: "$30" },
    { service: "Extra Dirty", price: "$20" },
    { service: "Extra Large Vehicle", price: "$20" }
  ];


  return (
    <section id="pricing" className="py-20 gradient-pricing">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Full Detail Packages
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your vehicle's needs. All packages include 
            our satisfaction guarantee and premium products.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsAnimation.ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative ${pkg.cardClass} p-8 rounded-lg ${
                cardsAnimation.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Popular Ribbon Badge */}
              {pkg.popular && (
                <div className="ribbon-badge">
                  <div className="ribbon-content">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-8">
                <div className="text-white mb-4 flex justify-center icon-wrapper">
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {pkg.name}
                </h3>

                {/* Pricing Area with Glow */}
                <div className="price-area space-y-2 mb-4">
                  <div className="flex justify-between items-center px-4 py-2">
                    <span className="text-gray-300 text-sm">Small:</span>
                    <span className="price-text text-white font-bold text-2xl">{pkg.prices.small}</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-2">
                    <span className="text-gray-300 text-sm">Medium:</span>
                    <span className="price-text text-white font-bold text-2xl">{pkg.prices.medium}</span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-2">
                    <span className="text-gray-300 text-sm">Large:</span>
                    <span className="price-text text-white font-bold text-2xl">{pkg.prices.large}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 text-sm flex items-start">
                    <Check className="w-4 h-4 text-white mr-3 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://clienthub.getjobber.com/booking/3d50ca1a-7ae4-4fde-8ed8-2c517bb03b50"
                target="_blank"
                rel="noopener noreferrer"
                className={`${pkg.buttonClass} w-full py-4 text-base font-medium rounded-lg block text-center`}
              >
                <span>{pkg.buttonText}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Individual Services Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Individual Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {compactPackages.map((pkg, index) => (
              <div
                key={index}
                className={`${pkg.cardClass} compact-pricing-card p-8 rounded-lg transition-all duration-300`}
              >
                <div className="text-center mb-6">
                  <h5 className="text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h5>
                  <p className="text-gray-400 text-sm mb-4">{pkg.duration}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center px-3 py-2">
                      <span className="text-gray-300 text-sm">Small:</span>
                      <span className="text-white font-bold text-xl">{pkg.prices.small}</span>
                    </div>
                    <div className="flex justify-between items-center px-3 py-2">
                      <span className="text-gray-300 text-sm">Medium:</span>
                      <span className="text-white font-bold text-xl">{pkg.prices.medium}</span>
                    </div>
                    <div className="flex justify-between items-center px-3 py-2">
                      <span className="text-gray-300 text-sm">Large:</span>
                      <span className="text-white font-bold text-xl">{pkg.prices.large}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm flex items-start">
                      <Check className="w-4 h-4 text-white mr-3 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://clienthub.getjobber.com/booking/3d50ca1a-7ae4-4fde-8ed8-2c517bb03b50"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${pkg.buttonClass} w-full py-3 text-base font-medium rounded-lg block text-center`}
                >
                  <span>Book Now</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Plan Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-4">
            Maintenance Plan
          </h3>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            {maintenancePlan.note}
          </p>

          <div className="max-w-2xl mx-auto">
            <div className={`${maintenancePlan.cardClass} compact-pricing-card p-8 rounded-lg transition-all duration-300`}>
              <div className="text-center mb-6">
                <div className="text-white text-sm mb-2">Recommended frequency: {maintenancePlan.frequency}</div>
                <p className="text-white text-sm mb-4">{maintenancePlan.duration}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center px-3 py-2">
                    <span className="text-gray-300 text-sm">Small:</span>
                    <span className="text-white font-bold text-xl">{maintenancePlan.prices.small}</span>
                  </div>
                  <div className="flex justify-between items-center px-3 py-2">
                    <span className="text-gray-300 text-sm">Medium:</span>
                    <span className="text-white font-bold text-xl">{maintenancePlan.prices.medium}</span>
                  </div>
                  <div className="flex justify-between items-center px-3 py-2">
                    <span className="text-gray-300 text-sm">Large:</span>
                    <span className="text-white font-bold text-xl">{maintenancePlan.prices.large}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {maintenancePlan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300 text-sm flex items-start">
                    <Check className="w-4 h-4 text-white mr-3 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://clienthub.getjobber.com/booking/3d50ca1a-7ae4-4fde-8ed8-2c517bb03b50"
                target="_blank"
                rel="noopener noreferrer"
                className={`${maintenancePlan.buttonClass} w-full py-3 text-base font-medium rounded-lg block text-center`}
              >
                <span>Enroll Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div
          ref={additionalAnimation.ref}
          className={`gradient-card-hover border border-gray-800 p-8 transition-all duration-1000 ${
            additionalAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-gray-800">
                <span className="text-gray-300">{item.service}</span>
                <span className="text-white font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div 
          ref={guaranteeAnimation.ref}
          className={`text-center mt-16 gradient-card-hover p-8 transition-all duration-1000 ${
            guaranteeAnimation.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Mileage Fee
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Free mobile service within 30 miles of Waterford,Connecticut. For Locations Beyond: 
            31-75 Miles: $1.00 per additional mile
            76+ Miles: $2.00 per additional mile
          </p>
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaAnimation.ref}
          className={`text-center mt-16 transition-all duration-1000 ${
            ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-300 mb-8 text-lg">
            Ready to book your service?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://clienthub.getjobber.com/booking/3d50ca1a-7ae4-4fde-8ed8-2c517bb03b50" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-800 text-black hover:text-white px-8 py-4 text-base font-medium transition-all duration-300 text-center">
              Book Online
            </a>
            <a href="tel:+18609179942" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-base font-medium transition-all duration-300 text-center">
              Call +1 (860) 917-9942
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;