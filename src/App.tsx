import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import VehicleSizeGuide from './components/VehicleSizeGuide';
import Instagram from './components/Instagram';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <VehicleSizeGuide />
      <Instagram />
      <Contact />
    </div>
  );
}

export default App;