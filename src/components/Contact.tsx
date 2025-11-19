import React, { useState } from 'react';
import { Phone, Mail, Clock, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const headerAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();
  const emergencyAnimation = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (860) 917-9942",
      link: "tel:+18609179942"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "BakersAutoSpa1@gmail.com",
      link: "mailto:BakersAutoSpa1@gmail.com"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "2:00 PM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "8:00 AM - 8:00 PM" }
  ];

  return (
    <section id="contact" className="py-20 gradient-contact">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to give your vehicle the care it deserves? Contact us today to schedule 
            your appointment or get a custom quote for your specific needs.
          </p>
        </div>

        <div 
          ref={contentAnimation.ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Contact Information */}
          <div className={`transition-all duration-1000 ${
            contentAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>
            
            {/* Contact Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="gradient-card-hover border border-gray-800 p-6 hover:border-white/20 transition-all duration-300"
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-300">
                          {info.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours Table */}
            <div className="gradient-card-hover border border-gray-800 p-6">
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Business Hours
              </h4>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-b-0">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className="text-white font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${
            contentAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h3 className="text-2xl font-bold text-white mb-8">
              Request a Quote
            </h3>
            
            <form action="https://formsubmit.co/bakersautospa2@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New Contact Form Submission - Baker's Auto Spa" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={window.location.href} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white placeholder-gray-400 focus:border-white/40 focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white placeholder-gray-400 focus:border-white/40 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white placeholder-gray-400 focus:border-white/40 focus:outline-none transition-colors duration-300"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-white text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white focus:border-white/40 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="silver-package">Silver Package</option>
                    <option value="gold-package">Gold Package</option>
                    <option value="diamond-package">Diamond Package</option>
                    <option value="basic-exterior">Basic Exterior</option>
                    <option value="pro-exterior">Pro Exterior</option>
                    <option value="ultra-exterior">Ultra Exterior</option>
                    <option value="basic-interior">Basic Interior</option>
                    <option value="pro-interior">Pro Interior</option>
                    <option value="ultra-interior">Ultra Interior</option>
                    <option value="custom-quote">Custom Quote</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white placeholder-gray-400 focus:border-white/40 focus:outline-none transition-colors duration-300 resize-vertical"
                  placeholder="Tell us about your vehicle and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white hover:bg-gray-800 text-black hover:text-white px-8 py-4 text-base font-medium transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Emergency Contact */}
        <div 
          ref={emergencyAnimation.ref}
          className={`mt-16 text-center gradient-card-hover border border-gray-800 p-8 transition-all duration-1000 ${
            emergencyAnimation.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Need Immediate Service?
          </h3>
          <p className="text-gray-300 mb-6">
            For urgent requests or same-day appointments, give us a call directly.
          </p>
          <a
            href="tel:+18609179942"
            className="inline-flex items-center space-x-2 bg-white hover:bg-gray-800 text-black hover:text-white px-8 py-4 text-base font-medium transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now: +1 (860) 917-9942</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;