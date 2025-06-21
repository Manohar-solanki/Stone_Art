import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-stone-800 mb-6">Contact Us</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Get in touch with our team to discuss your stone art project or any questions you may have
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">Get in Touch</h2>
                <p className="text-lg text-stone-600 leading-relaxed mb-8">
                  We'd love to hear about your project and discuss how we can bring your vision to life 
                  with our expert stone craftsmanship.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Our Workshop</h3>
                    <p className="text-stone-600">
                      Balesar Road, Jodhpur<br />
                      Rajasthan, India - 342001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Phone</h3>
                    <p className="text-stone-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Email</h3>
                    <p className="text-stone-600">info@mahadevstoneart.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Business Hours</h3>
                    <p className="text-stone-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Workshop Image */}
              <div className="mt-8">
                <img
                  src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg"
                  alt="Our workshop"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-stone-50 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-stone-800 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a topic</option>
                      <option value="custom-quote">Custom Quote Request</option>
                      <option value="temple-sculpture">Temple Sculpture</option>
                      <option value="garden-decor">Garden Décor</option>
                      <option value="architectural">Architectural Elements</option>
                      <option value="restoration">Stone Restoration</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Please describe your project requirements, preferred materials, timeline, and any other details..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Find Our Workshop</h2>
            <p className="text-lg text-stone-600">
              Visit us at our workshop in Jodhpur to see our artisans at work
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <div className="w-full h-96 bg-stone-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto text-stone-400 mb-4" size={48} />
                <p className="text-stone-600 font-medium">Interactive Map</p>
                <p className="text-stone-500 text-sm">
                  Balesar Road, Jodhpur, Rajasthan - 342001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-stone-600">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'How long does it typically take to complete a custom sculpture?',
                answer: 'Timeline varies based on complexity and size. Simple sculptures take 2-4 weeks, while elaborate temple installations may require 2-3 months. We provide detailed timelines during consultation.'
              },
              {
                question: 'Do you provide installation services?',
                answer: 'Yes, we offer professional installation services for all our sculptures. Our team ensures proper placement, leveling, and anchoring for both indoor and outdoor installations.'
              },
              {
                question: 'What types of stone do you work with?',
                answer: 'We work with premium stones including Jodhpur Sandstone, Makrana Marble, Red Sandstone, Black Granite, and other regional varieties. We help you choose the best material for your specific needs.'
              },
              {
                question: 'Can you create sculptures based on photographs or sketches?',
                answer: 'Absolutely! Our artisans are skilled at working from reference materials. We can create sculptures from photographs, sketches, or even descriptions, ensuring accuracy to your vision.'
              },
              {
                question: 'Do you offer international shipping?',
                answer: 'Yes, we provide international shipping services with proper packaging and insurance. We handle all export documentation and work with reliable shipping partners worldwide.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-stone-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-stone-800 mb-3">{faq.question}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;