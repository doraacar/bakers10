import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Instagram: React.FC = () => {
  const headerAnimation = useScrollAnimation();
  const embedAnimation = useScrollAnimation();

  return (
    <section id="instagram" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24">
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Follow Us on Instagram
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Check out our latest work and stay updated with our services
          </p>
        </div>

        <div
          ref={embedAnimation.ref}
          className={`transition-all duration-1000 ${
            embedAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex justify-center">
            <iframe
              src="https://www.instagram.com/bakersautospa/embed"
              className="w-full max-w-4xl border-0"
              style={{ height: '600px' }}
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
