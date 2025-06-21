import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Temple Sculptures',
      description: 'Sacred sculptures and deities crafted with devotion and precision for temples and spiritual spaces.',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg',
      features: [
        'Traditional iconography',
        'Religious consultations',
        'Custom sizing available',
        'Installation services'
      ],
      popular: true
    },
    {
      title: 'Garden Décor',
      description: 'Elegant stone sculptures and decorative elements to enhance your outdoor spaces.',
      image: 'https://images.pexels.com/photos/1131183/pexels-photo-1131183.jpeg',
      features: [
        'Water fountains',
        'Garden statues',
        'Decorative planters',
        'Weather-resistant finish'
      ]
    },
    {
      title: 'Custom Carving',
      description: 'Bespoke stone carving services tailored to your specific requirements and vision.',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg',
      features: [
        'Personal designs',
        '3D consultation',
        'Memorial sculptures',
        'Corporate installations'
      ]
    },
    {
      title: 'Architectural Elements',
      description: 'Structural and decorative stone elements for buildings and architectural projects.',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      features: [
        'Pillars and columns',
        'Wall panels',
        'Entrance gates',
        'Structural consulting'
      ]
    },
    {
      title: 'Stone Restoration',
      description: 'Expert restoration services for antique and damaged stone sculptures and structures.',
      image: 'https://images.pexels.com/photos/3992952/pexels-photo-3992952.jpeg',
      features: [
        'Damage assessment',
        'Historical preservation',
        'Color matching',
        'Protective treatments'
      ]
    },
    {
      title: 'Export Services',
      description: 'International shipping and export services for clients worldwide.',
      image: 'https://images.pexels.com/photos/4164818/pexels-photo-4164818.jpeg',
      features: [
        'Global shipping',
        'Custom packaging',
        'Documentation support',
        'Insurance coverage'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We discuss your vision, requirements, and provide expert guidance on materials and design.'
    },
    {
      step: '02',
      title: 'Design & Approval',
      description: 'Our team creates detailed designs and 3D models for your approval before starting work.'
    },
    {
      step: '03',
      title: 'Crafting',
      description: 'Master artisans begin the meticulous process of bringing your sculpture to life.'
    },
    {
      step: '04',
      title: 'Quality Check',
      description: 'Rigorous quality inspection ensures every detail meets our high standards.'
    },
    {
      step: '05',
      title: 'Delivery & Installation',
      description: 'Safe delivery and professional installation at your desired location.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-stone-800 mb-6">Our Services</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Comprehensive stone art services combining traditional craftsmanship with modern expertise
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Popular
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-stone-800 mb-3">{service.title}</h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="text-gold-500 flex-shrink-0" size={16} />
                        <span className="text-stone-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/quote"
                    className="inline-flex items-center text-gold-600 font-medium hover:text-gold-700 transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-6">Our Process</h2>
            <p className="text-xl text-stone-600">
              From concept to completion, we ensure excellence at every step
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full text-white font-bold text-xl mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-stone-300 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-stone-300 rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-stone-800 mb-6">
                Why Choose Mahadev Stone Art?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Master Craftsmanship',
                    description: '15+ years of experience with traditional techniques passed down through generations.'
                  },
                  {
                    title: 'Premium Materials',
                    description: 'We use only the finest quality stones sourced from renowned quarries across India.'
                  },
                  {
                    title: 'Custom Designs',
                    description: 'Every piece is tailored to your specific requirements and cultural preferences.'
                  },
                  {
                    title: 'Timely Delivery',
                    description: 'Committed to meeting deadlines without compromising on quality.'
                  },
                  {
                    title: 'Lifetime Support',
                    description: 'Ongoing maintenance and restoration services for all our creations.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-gold-500 rounded-full mt-3"></div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-2">{item.title}</h3>
                      <p className="text-stone-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg"
                alt="Quality craftsmanship"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg"
                alt="Detailed work"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-stone-200 mb-8 max-w-3xl mx-auto">
            Let's discuss your vision and create something extraordinary together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Custom Quote
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gold-500 text-gold-400 px-8 py-4 rounded-lg font-semibold hover:bg-gold-500 hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;