import React, { useState } from 'react';
import { X, Filter, Search } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Works', count: 20 },
    { id: 'temple', name: 'Temple Sculptures', count: 3 },
    { id: 'Home', name: 'Home', count: 6 },
    { id: 'architectural', name: 'Architectural', count: 3 },
    { id: 'art_Site', name: 'Our Construction Site', count: 8 }
  ];

  const galleryItems = [
    {
      id: 1,
      image: '/images/gallery/art/temple.jpg',
      title: 'Lord Ganesha Temple Sculpture',
      category: 'temple',
      description: 'Intricately carved Ganesha statue in Jodhpur sandstone',
      material: 'Jodhpur Sandstone',
      size: '10 feet height'
    },
    {
      id: 2,
      image: '/images/gallery/art/home3.jpg',
      title: 'Classical Home View ',
      category: 'Home',
      description: 'Elegant marble sculpture for home frontier',
      material: 'White Marble',
      size: '26 feet height'
    },
    {
      id: 3,
      image: '/images/gallery/art/24.jpeg',
      title: 'Home front View Desine',
      category: 'Home',
      // category: 'architectural',
      description: 'Hand-carved pillar with detailed religious iconography',
      material: 'Red Sandstone',
      size: '25 feet height'
    },
    {
      id: 4,
      image: '/images/gallery/art/18.jpeg',
      title: 'Home with garden view',
      category: 'Home',
      description: 'Home temple with intricate carvings and divine motifs',
      material: 'Black Granite',
      size: '18 feet height'
    },
    {
      id: 5,
      image: '/images/gallery/art/14-1.jpeg',
      title: 'Garden Buddha Statue',
      category: 'Home',
      description: 'Peaceful Buddha in meditation pose',
      material: 'Jodhpur Sandstone',
      size: '3.5 feet height'
    },
    {
      id: 6,
      image: '/images/gallery/art/25.jpeg',
      title: 'Decorative Wall Panel',
      category: 'Home',
      description: 'Ornate wall panel with floral patterns',
      material: 'Makrana Marble',
      size: '4x6 feet'
    },
    {
      id: 7,
      image: '/images/gallery/art/26.jpeg',
      title: 'Hanuman Statue',
      category: 'Home',
      description: 'Powerful Hanuman sculpture for temple installation',
      material: 'Red Sandstone',
      size: '5 feet height'
    },
    {
      id: 8,
      image: '/images/gallery/art/design.jpeg',
      title: 'Modern design sculpture',
      category: 'architectural',
      description: 'Contemporary abstract sculpture for modern spaces',
      material: 'White Marble',
      size: '4 feet height'
    },
    {
      id: 9,
      image: '/images/gallery/art/design1.jpg',
      title: 'Home Balcony Arch',
      category: 'architectural',
      description: 'Home balcony arch with intricate carvings',
      material: 'Jodhpur Sandstone',
      size: '12 feet height'
    },
    {
      id: 10,
      image: '/images/gallery/art/design2.jpg',
      title: 'Entry Gate Frontier',
      category: 'architectural',
      description: 'Design for Entry Gate Frontier with floral motifs',
      material: 'Makrana Marble',
      size: '6 feet height'
    },
    {
      id: 11,
      image: '/images/gallery/art/temple1.webp',
      title: 'Temple Shikhara',
      category: 'temple',
      description: 'Majestic temple shikhara with intricate carvings',
      material: 'White Brown Granite',
      size: '5x3 feet'
    },
    {
      id: 12,
      image: '/images/gallery/art/temple2.jpg',
      title: 'Temple Chhatri',
      category: 'temple',
      description: 'Elegant chhatri for temple entrance',
      material: 'White Marble',
      size: '4.5 feet height'
    },
    {
      id: 13,
      image: '/images/gallery/art/front_view.jpg',
      title: 'Main Construction Site',
      category: 'art_Site',
      description: 'Main construction site view with artisans at work',
      material: 'Red Sandstone',
      size: '50x30 feet'
    },
    {
      id: 14,
      image: '/images/gallery/art/main_site.jpg',
      title: 'Stones ',
      category: 'art_Site',
      description: 'Stones used for construction',
      material: 'Jodhpur Sandstone',
      size: 'Various sizes'
    },
    {
      id: 15,
      image: '/images/gallery/art/crane_view.jpg',
      title: 'Crane View on site',
      category: 'art_Site',
      description: 'Crane lifting stones for temple construction',
      material: 'Makrana Marble',
      size: '20 feet height'
    },
    {
      id: 16,
      image: '/images/gallery/art/cutter.jpg',
      title: 'Stone Cutter',
      category: 'art_Site',
      description: 'Stone cutter shaping sandstone blocks',
      material: 'Red Sandstone',
      size: 'Various sizes'
    },
    {
      id: 17,
      image: '/images/gallery/art/pattiya.jpg',
      title: 'Stones ',
      category: 'art_Site',
      description: 'Pattiya stones for temple flooring',
      material: 'Black Marble',
      size: 'Various sizes'
    },
    {
      id: 18,
      image: '/images/gallery/art/main_view_site.jpg',
      title: 'main view of site',
      category: 'art_Site',
      description: 'Main view of the construction site with artisans',
      material: 'Jodhpur Sandstone',
      size: '50x30 feet'
    },
    {
      id: 19,
      image: '/images/gallery/art/stone.jpg',
      title: 'Intricate Stone Pillar',
      category: 'art_Site',
      description: 'Hand-carved stone pillar with divine motifs',
      material: 'Red Sandstone',
      size: '15 feet height'
    },
    {
      id: 20,
      image: '/images/gallery/art/workers.jpg',
      title: 'Artisans at Work',
      category: 'art_Site',
      description: 'Dedicated artisans shaping stone with precision',
      material: 'Black Stone',
      size: 'Various sizes'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-stone-100 to-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-serif font-bold text-stone-800 mb-6">Our Gallery</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Explore our collection of handcrafted stone masterpieces, each telling a unique story of artistry and devotion
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-gold-500 text-white shadow-md'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" size={20} />
              <input
                type="text"
                placeholder="Search artworks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-stone-200">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-stone-800 mb-2">{item.title}</h3>
                  <div className="flex justify-between text-sm text-stone-600">
                    <span>{item.material}</span>
                    <span>{item.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Filter className="mx-auto text-stone-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-stone-600 mb-2">No items found</h3>
              <p className="text-stone-500">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90%] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold-400 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery item"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;