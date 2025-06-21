import React from 'react';
import { Award, Users, Clock, Shield, Heart, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'Every piece we create is infused with dedication and love for the craft'
    },
    {
      icon: Shield,
      title: 'Authentic Craftsmanship',
      description: 'Traditional techniques passed down through generations'
    },
    {
      icon: Target,
      title: 'Client Satisfaction',
      description: 'Your vision and satisfaction are our primary goals'
    }
  ];

  const team = [
    {
      name: 'Heeru Solanki',
      position: 'Chief Artisan & Founder',
      experience: '6+ Years',
      image: '/images/team/heeru.png',
      description: 'Master craftsman specializing in temple sculptures and religious iconography'
    },
    {
      name: 'Sheru Solanki',
      position: 'Senior Stone Carver',
      experience: '5+ Years',
      image: '/images/team/sheru.png',
      description: 'Expert in architectural elements and decorative stone work'
    },
    {
      name: 'Girdhar Solanki',
      position: 'Design Consultant',
      experience: '8+ Years',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239293.jpeg',
      description: 'Specializes in custom designs and client consultation'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-stone-800 mb-6">Our Story</h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              A legacy of stone craftsmanship that bridges ancient traditions with contemporary artistry
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-stone-800 mb-6">
                A Legacy Carved in Stone
              </h2>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  Founded in 2008 by Heeru Solanki, Mahadev Stone Art began as a humble workshop in Jodhpur, 
                  Rajasthan - the heart of India's stone carving tradition. What started as a passion for preserving 
                  ancient craftsmanship has evolved into one of the region's most respected stone art studios.
                </p>
                <p>
                  Our journey is rooted in the belief that stone is not just a material, but a medium to express 
                  devotion, culture, and artistic excellence. Each piece we create carries forward the legacy of 
                  master craftsmen who have shaped India's architectural heritage for centuries.
                </p>
                <p>
                  Today, we serve clients across India and internationally, creating everything from intimate home 
                  sculptures to grand temple installations, always maintaining the same dedication to quality and 
                  authenticity that defined our early work.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg"
                alt="Workshop"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg"
                alt="Craftsman at work"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-6">Our Core Values</h2>
            <p className="text-xl text-stone-600">
              The principles that guide every creation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-6">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-stone-800 mb-4">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-stone-800 mb-6">Meet Our Artisans</h2>
            <p className="text-xl text-stone-600">
              The skilled hands behind every masterpiece
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-semibold text-stone-800 mb-2">{member.name}</h3>
                <p className="text-gold-600 font-medium mb-2">{member.position}</p>
                <p className="text-stone-500 mb-4">{member.experience}</p>
                <p className="text-stone-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">Our Achievements</h2>
            <p className="text-xl text-stone-200">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50,000+', label: 'Projects Completed', icon: Award },
              { number: '15+', label: 'Years Experience', icon: Clock },
              { number: '100000+', label: 'Happy Clients', icon: Users },
              { number: '25+', label: 'Master Artisans', icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-stone-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;