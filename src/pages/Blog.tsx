import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Ancient Art of Stone Carving: Preserving Tradition in Modern Times',
      excerpt: 'Explore how traditional stone carving techniques have evolved and adapted to contemporary needs while maintaining their cultural essence.',
      image: 'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg',
      date: '2024-01-15',
      author: 'Master Ravi Sharma',
      category: 'Traditional Craft',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Choosing the Right Stone for Your Temple Sculpture',
      excerpt: 'A comprehensive guide to selecting the perfect stone material based on climate, purpose, and spiritual significance.',
      image: 'https://images.pexels.com/photos/1131183/pexels-photo-1131183.jpeg',
      date: '2024-01-10',
      author: 'Deepak Patel',
      category: 'Material Guide',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Vastu Shastra and Stone Sculptures: Placement Guidelines',
      excerpt: 'Understanding the principles of Vastu Shastra for optimal placement of stone sculptures in homes and temples.',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg',
      date: '2024-01-05',
      author: 'Anita Sharma',
      category: 'Vastu & Spirituality',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Maintaining Your Stone Sculptures: Care and Preservation Tips',
      excerpt: 'Essential maintenance practices to keep your stone artworks beautiful and intact for generations.',
      image: 'https://images.pexels.com/photos/4164818/pexels-photo-4164818.jpeg',
      date: '2023-12-28',
      author: 'Master Ravi Sharma',
      category: 'Maintenance',
      readTime: '4 min read'
    },
    {
      id: 5,
      title: 'The Significance of Iconography in Hindu Temple Sculptures',
      excerpt: 'Delving into the deep symbolic meanings and cultural importance of various motifs in traditional Hindu stone art.',
      image: 'https://images.pexels.com/photos/3992952/pexels-photo-3992952.jpeg',
      date: '2023-12-20',
      author: 'Dr. Priya Joshi',
      category: 'Cultural Heritage',
      readTime: '8 min read'
    },
    {
      id: 6,
      title: 'Modern Garden Design with Traditional Stone Elements',
      excerpt: 'How to incorporate classical stone sculptures and fountains into contemporary landscape design.',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      date: '2023-12-15',
      author: 'Deepak Patel',
      category: 'Design Inspiration',
      readTime: '5 min read'
    }
  ];

  const categories = [
    'All Posts',
    'Traditional Craft',
    'Material Guide',
    'Vastu & Spirituality',
    'Maintenance',
    'Cultural Heritage',
    'Design Inspiration'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Posts');

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-stone-800 mb-6">Our Blog</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Insights, tips, and stories from the world of stone artistry and cultural heritage
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gold-500 text-white shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="inline-block bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured Post
              </span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={filteredPosts[0].image}
                  alt={filteredPosts[0].title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-sm text-stone-500">
                  <span className="bg-stone-100 px-3 py-1 rounded-full">{filteredPosts[0].category}</span>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{new Date(filteredPosts[0].date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <span>{filteredPosts[0].readTime}</span>
                </div>
                
                <h2 className="text-3xl font-serif font-bold text-stone-800 leading-tight">
                  {filteredPosts[0].title}
                </h2>
                
                <p className="text-lg text-stone-600 leading-relaxed">
                  {filteredPosts[0].excerpt}
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User size={16} className="text-stone-400" />
                    <span className="text-stone-600 font-medium">{filteredPosts[0].author}</span>
                  </div>
                </div>
                
                <button className="inline-flex items-center text-gold-600 font-semibold hover:text-gold-700 transition-colors">
                  Read Full Article
                  <ArrowRight className="ml-2" size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-12 text-center">
            {selectedCategory === 'All Posts' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-stone-700">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-stone-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-stone-800 mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User size={14} className="text-stone-400" />
                      <span className="text-stone-600 text-sm">{post.author}</span>
                    </div>
                    
                    <button className="text-gold-600 hover:text-gold-700 transition-colors">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-stone-600 mb-2">No posts found</h3>
              <p className="text-stone-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-stone-800 to-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-stone-200 mb-8">
            Subscribe to our newsletter for the latest insights, tips, and updates from the world of stone artistry
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 text-stone-800 focus:ring-2 focus:ring-gold-500"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-stone-400 text-sm mt-4">
            No spam, unsubscribe at any time
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;