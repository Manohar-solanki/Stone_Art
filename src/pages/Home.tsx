import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: '/images/gallery/main1.jpg',
      title: 'Timeless Stone Artistry',
      subtitle: 'Crafting Sacred Sculptures with Traditional Excellence'
    },
    {
      image: '/images/gallery/hero-bg.jpg',
      title: 'Temple Architecture',
      subtitle: 'Preserving Cultural Heritage Through Stone'
    },
    {
      image: '/images/gallery/t2.jpg',
      title: 'Custom Stone Creations',
      subtitle: 'Bringing Your Vision to Life in Stone'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      location: 'Mumbai, Maharashtra',
      text: 'Exceptional craftsmanship! The temple sculptures exceeded our expectations. The attention to detail and cultural authenticity is remarkable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    {
      name: 'Priya Patel',
      location: 'Ahmedabad, Gujarat',
      text: 'Beautiful garden sculptures that have become the centerpiece of our home. The quality and finish are outstanding.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    },
    {
      name: 'Dr. Amit Gupta',
      location: 'Delhi, NCR',
      text: 'Professional service from consultation to installation. The custom Ganesha sculpture is absolutely stunning.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '100+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-stone-200 animate-slide-up">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                  <Link
                    to="/gallery"
                    className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    View Gallery
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <Link
                    to="/quote"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-stone-800 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Custom Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-gold-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-stone-800 mb-2">{stat.number}</div>
                <div className="text-stone-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-stone-800 mb-6">
                Heritage Craftsmanship Meets Modern Excellence
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                For over 15 years, Mahadev Stone Art has been at the forefront of traditional stone carving, 
                creating breathtaking sculptures and architectural elements that honor our cultural heritage 
                while meeting contemporary design needs.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Our master artisans combine time-honored techniques with modern tools to deliver exceptional 
                quality in every piece, from intricate temple sculptures to elegant garden décor.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <Shield className="text-gold-600" size={24} />
                <span className="text-stone-700 font-medium">100% Authentic Craftsmanship</span>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center text-gold-600 font-semibold hover:text-gold-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/gallery/art/14-1.jpeg"
                alt="Stone carving process"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <img
                src="/images/gallery/art/25.jpeg"
                alt="Finished sculpture"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">
              Featured Masterpieces
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Explore our collection of exceptional stone artworks, each piece telling a story of devotion and craftsmanship
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: '/images/gallery/art/26.jpeg',
                title: 'Home View',
                description: 'Elegant stone sculpture enhancing modern architecture'
              },
              {
                image: '/images/gallery/art/design1.jpg',
                title: 'Stone Design',
                description: 'Intricate stone design blending tradition with modern aesthetics'
              },
              {
                image: '/images/gallery/art/loding_truck.jpg',
                title: 'Loading Truck',
                description: 'Efficient transport of our handcrafted stone masterpieces'
              }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-stone-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Complete Gallery
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-stone-600">
              Trusted by families and institutions across India
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                      />
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-gold-500 fill-current" size={20} />
                        ))}
                      </div>
                      <p className="text-lg text-stone-600 italic mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <h4 className="font-semibold text-stone-800 text-lg">{testimonial.name}</h4>
                      <p className="text-stone-500">{testimonial.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft size={24} className="text-stone-700" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight size={24} className="text-stone-700" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Create Your Stone Masterpiece?
          </h2>
          <p className="text-xl text-stone-200 mb-8 max-w-3xl mx-auto">
            Let our master artisans bring your vision to life with authentic craftsmanship and attention to detail that has made us a trusted name in stone art.
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
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;