import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "5+",
      label: "Years Experience"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "24/7",
      label: "Customer Support"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: "100%",
      label: "Satisfaction Rate"
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We use only premium products and proven techniques to ensure exceptional results every time."
    },
    {
      title: "Attention to Detail",
      description: "Every inch of your vehicle receives meticulous care from our trained professionals."
    },
    {
      title: "Customer Satisfaction",
      description: "Your happiness is our priority. We're not satisfied until you're completely thrilled with the results."
    },
    {
      title: "Eco-Friendly",
      description: "We're committed to using environmentally responsible products and water-saving techniques."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Baker's Auto Spa
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Founded on a passion for automotive excellence, we’ve been dedicated to transforming vehicles and exceeding expectations since day one.
               
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Story Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Baker's Auto Detailing is a proud family-owned business built on passion, precision, and pride. What began as a simple love for cars quickly grew into a professional detailing service dedicated to bringing out the best in every vehicle. Founded in the summer of 2025, this business represents my lifelong enthusiasm for cars and the values of hard work and excellence that run in my family.
              </p>
              <p>
                My passion for detailing started at a young age while helping my father clean the vans for his business. Those early experiences taught me the importance of patience, craftsmanship, and paying attention to the smallest details. His example of dedication and success inspired me to follow in his footsteps and create something of my own.
              </p>
              <p>
                From the very beginning, my goal has been to deliver more than just clean cars. Every vehicle I detail, whether it is a daily driver or a luxury ride, receives the same level of care and attention as if it were my own. I take pride in transforming every car into something my customers can be proud to drive.
              </p>
              <p>
                Today, Baker's Auto Detailing continues to grow as a trusted name in automotive care. As a family-owned business, we remain committed to quality, honesty, and personal service. Our mission is simple: to treat every vehicle and every customer with the same dedication and respect that started this business from day one.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div
              className="w-full h-96 bg-cover bg-center bg-no-repeat rounded-lg"
              style={{
                backgroundImage: 'url(https://j7ptrdd2q7.ufs.sh/f/O28pM5hUrXW3Tj5NiJAy7hnZsTG5YacV4oQF16wAWdbkCz9P)',
                filter: 'brightness(0.9) contrast(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-white mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            What Sets Us Apart
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 p-8">
                <h4 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-8 text-lg">
            Experience the Baker's Auto Spa difference for yourself
          </p>
          <a href="https://clienthub.getjobber.com/booking/3d50ca1a-7ae4-4fde-8ed8-2c517bb03b50" target="_blank" rel="noopener noreferrer" className="inline-block bg-white hover:bg-gray-800 text-black hover:text-white px-8 py-4 text-base font-medium transition-all duration-300">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;