import React, { useState } from 'react';
import { Upload, Calculator, Send } from 'lucide-react';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    stoneType: '',
    size: '',
    purpose: '',
    budget: '',
    timeline: '',
    description: '',
    hasDesign: false,
    location: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    alert('Thank you for your quote request! We will get back to you within 24 hours with a detailed proposal.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      stoneType: '',
      size: '',
      purpose: '',
      budget: '',
      timeline: '',
      description: '',
      hasDesign: false,
      location: ''
    });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-stone-800 mb-6">Get Custom Quote</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Tell us about your vision and we'll provide a detailed quote tailored to your specific requirements
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <Calculator className="text-gold-600 mr-3" size={32} />
              <h2 className="text-3xl font-serif font-bold text-stone-800">Project Details</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
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
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-stone-700 mb-2">
                    Project Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="City, State"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-white rounded-lg p-6 border border-stone-200">
                <h3 className="text-xl font-semibold text-stone-800 mb-6">Project Specifications</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-stone-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      <option value="temple-sculpture">Temple Sculpture</option>
                      <option value="garden-decor">Garden Décor</option>
                      <option value="architectural">Architectural Elements</option>
                      <option value="custom-carving">Custom Carving</option>
                      <option value="restoration">Stone Restoration</option>
                      <option value="fountain">Water Fountain</option>
                      <option value="memorial">Memorial Sculpture</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="stoneType" className="block text-sm font-medium text-stone-700 mb-2">
                      Preferred Stone Type
                    </label>
                    <select
                      id="stoneType"
                      name="stoneType"
                      value={formData.stoneType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value="">I need guidance</option>
                      <option value="jodhpur-sandstone">Jodhpur Sandstone</option>
                      <option value="makrana-marble">Makrana Marble</option>
                      <option value="red-sandstone">Red Sandstone</option>
                      <option value="black-granite">Black Granite</option>
                      <option value="white-marble">White Marble</option>
                      <option value="other">Other (specify in description)</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-stone-700 mb-2">
                      Approximate Size
                    </label>
                    <input
                      type="text"
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="e.g., 4 feet height, 3x2 feet"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="purpose" className="block text-sm font-medium text-stone-700 mb-2">
                      Purpose/Location
                    </label>
                    <select
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value="">Select purpose</option>
                      <option value="indoor-temple">Indoor Temple</option>
                      <option value="outdoor-temple">Outdoor Temple</option>
                      <option value="home-decoration">Home Decoration</option>
                      <option value="garden-outdoor">Garden/Outdoor</option>
                      <option value="commercial-space">Commercial Space</option>
                      <option value="public-installation">Public Installation</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Budget and Timeline */}
              <div className="bg-white rounded-lg p-6 border border-stone-200">
                <h3 className="text-xl font-semibold text-stone-800 mb-6">Budget & Timeline</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-stone-700 mb-2">
                      Budget Range (INR)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under ₹50,000</option>
                      <option value="50k-1lakh">₹50,000 - ₹1,00,000</option>
                      <option value="1-3lakh">₹1,00,000 - ₹3,00,000</option>
                      <option value="3-5lakh">₹3,00,000 - ₹5,00,000</option>
                      <option value="5-10lakh">₹5,00,000 - ₹10,00,000</option>
                      <option value="above-10lakh">Above ₹10,00,000</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-stone-700 mb-2">
                      Expected Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (within 1 month)</option>
                      <option value="2-3months">2-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months-plus">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-stone-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                  placeholder="Please provide detailed description of your vision, specific requirements, cultural or religious significance, preferred style, and any other important details..."
                />
              </div>

              {/* File Upload */}
              <div className="bg-white rounded-lg p-6 border border-stone-200">
                <h3 className="text-lg font-semibold text-stone-800 mb-4">Reference Materials (Optional)</h3>
                <div className="border-2 border-dashed border-stone-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto text-stone-400 mb-4" size={48} />
                  <p className="text-stone-600 mb-2">Upload sketches, photos, or reference images</p>
                  <p className="text-stone-500 text-sm">Supported formats: JPG, PNG, PDF (Max 10MB each)</p>
                  <button
                    type="button"
                    className="mt-4 bg-stone-200 text-stone-700 px-4 py-2 rounded-lg hover:bg-stone-300 transition-colors"
                  >
                    Choose Files
                  </button>
                </div>
                
                <div className="mt-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="hasDesign"
                      checked={formData.hasDesign}
                      onChange={handleChange}
                      className="rounded border-stone-300 text-gold-600 focus:ring-gold-500"
                    />
                    <span className="text-stone-700">I have a specific design/sketch ready</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
                >
                  Submit Quote Request
                  <Send className="ml-2" size={20} />
                </button>
                <p className="text-stone-500 text-sm mt-4">
                  We'll review your request and get back to you within 24 hours with a detailed proposal
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Custom Work */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">
              Why Choose Us for Custom Work?
            </h2>
            <p className="text-lg text-stone-600">
              What makes our custom stone art exceptional
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Free Consultation',
                description: 'Detailed discussion about your vision, requirements, and expert guidance on materials and design options.',
                icon: '🗣️'
              },
              {
                title: '3D Design Preview',
                description: 'Visual representation of your sculpture before we begin carving, ensuring your complete satisfaction.',
                icon: '🎨'
              },
              {
                title: 'Progress Updates',
                description: 'Regular photo updates throughout the carving process so you can see your vision coming to life.',
                icon: '📸'
              },
              {
                title: 'Quality Guarantee',
                description: 'Every piece undergoes strict quality checks and comes with our craftsmanship guarantee.',
                icon: '✅'
              },
              {
                title: 'Safe Delivery',
                description: 'Professional packaging and secure delivery with insurance coverage and installation support.',
                icon: '🚚'
              },
              {
                title: 'Lifetime Support',
                description: 'Ongoing maintenance advice and restoration services to keep your sculpture in perfect condition.',
                icon: '🛠️'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;