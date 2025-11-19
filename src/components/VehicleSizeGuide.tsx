import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const VehicleSizeGuide: React.FC = () => {
  const headerAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation();

  const vehicleSizes = [
    {
      title: "Small",
      description: "Compact and subcompact cars",
      imageUrl: "https://j7ptrdd2q7.ufs.sh/f/O28pM5hUrXW3xuSr1VXURj50bkmcNV1QMOriwl4BTAPyts3G"
    },
    {
      title: "Medium",
      description: "Sedans, small SUVs, and crossovers",
      imageUrl: "https://j7ptrdd2q7.ufs.sh/f/O28pM5hUrXW3EwjmLcrYLC7wTmqGInNHgyvdF9xApRfBW02U"
    },
    {
      title: "Large",
      description: "Trucks, vans, and full-size SUVs",
      imageUrl: "https://j7ptrdd2q7.ufs.sh/f/O28pM5hUrXW30pw8M6eZWTSnaRG4p9wAybHktscM5NuiBCjg"
    },
    {
      title: "Extra Large",
      description: "Lifted trucks, dually trucks, extended passenger vans",
      imageUrl: "https://j7ptrdd2q7.ufs.sh/f/O28pM5hUrXW3Xdv8ib1bHDWnE9FMRqlwLG85SAiVQJmd0CYj"
    }
  ];

  return (
    <section id="vehicle-size-guide" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24">
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vehicle Size Guide
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Not sure which size category your vehicle falls into? Use this guide to help determine the right pricing tier.
          </p>
        </div>

        <div
          ref={gridAnimation.ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {vehicleSizes.map((vehicle, index) => (
            <div
              key={index}
              className={`gradient-card-hover border border-gray-800 overflow-hidden transition-all duration-700 ${
                gridAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={vehicle.imageUrl}
                  alt={vehicle.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {vehicle.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {vehicle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleSizeGuide;
