import { Metadata } from 'next'
import Link from 'next/link'
import { Search, MapPin, Users, Clock, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Browse Categories - Swimply Clone',
  description: 'Discover all the amazing venues you can book by the hour - pools, tennis courts, basketball courts, and more.',
}

const categories = [
  {
    id: 'pools',
    name: 'Swimming Pools',
    emoji: '🏊',
    description: 'Dive into luxury with private pools',
    count: '2,500+',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&auto=format,compress',
    features: ['Heated pools', 'Pool equipment', 'Poolside seating', 'Privacy'],
    priceRange: '$25-150/hour'
  },
  {
    id: 'tennis-courts',
    name: 'Tennis Courts',
    emoji: '🎾',
    description: 'Serve up some fun on private courts',
    count: '800+',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop&auto=format,compress',
    features: ['Professional courts', 'Equipment rental', 'Lighting', 'Coaching available'],
    priceRange: '$30-80/hour'
  },
  {
    id: 'basketball-courts',
    name: 'Basketball Courts',
    emoji: '🏀',
    description: 'Shoot hoops on premium courts',
    count: '650+',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop&auto=format,compress',
    features: ['Full courts', 'Half courts', 'Indoor/Outdoor', 'Equipment'],
    priceRange: '$20-60/hour'
  },
  {
    id: 'pickleball-courts',
    name: 'Pickleball Courts',
    emoji: '🏓',
    description: 'Play Americas fastest growing sport',
    count: '450+',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&auto=format,compress',
    features: ['Regulation courts', 'Paddles included', 'Beginner friendly', 'Tournaments'],
    priceRange: '$15-45/hour'
  },
  {
    id: 'event-spaces',
    name: 'Event Spaces',
    emoji: '🎉',
    description: 'Host memorable gatherings',
    count: '1,200+',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop&auto=format,compress',
    features: ['Party areas', 'Catering allowed', 'Sound systems', 'Decorations'],
    priceRange: '$50-300/hour'
  },
  {
    id: 'gyms',
    name: 'Private Gyms',
    emoji: '💪',
    description: 'Work out in exclusive fitness spaces',
    count: '350+',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format,compress',
    features: ['Full equipment', 'Personal training', 'Clean facilities', 'Flexible hours'],
    priceRange: '$40-120/hour'
  }
]

const popularLocations = [
  { name: 'Los Angeles', count: '850+ venues', image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=300&h=200&fit=crop&auto=format,compress' },
  { name: 'Miami', count: '720+ venues', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format,compress' },
  { name: 'New York', count: '650+ venues', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&h=200&fit=crop&auto=format,compress' },
  { name: 'Austin', count: '480+ venues', image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=300&h=200&fit=crop&auto=format,compress' }
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Browse All Categories
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Discover amazing venues for every occasion - from private pools to tennis courts and beyond
            </p>
            
            {/* Quick Search */}
            <div className="bg-white rounded-2xl p-6 shadow-float max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search by location or venue type..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <button className="btn btn-primary px-6 py-3">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Venue
            </h2>
            <p className="text-lg text-gray-600">
              From pools to courts, find the perfect space for your next adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/listings?category=${category.id}`}
                className="group bg-white rounded-2xl shadow-card hover:shadow-float transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                    {category.count} venues
                  </div>
                  <div className="absolute top-4 right-4 text-2xl">
                    {category.emoji}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-blue-600">
                      {category.priceRange}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-gray-600 ml-1">4.8</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500 mb-2">Popular features:</div>
                    <div className="flex flex-wrap gap-2">
                      {category.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600">
              Explore venues in top cities across the country
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularLocations.map((location, index) => (
              <Link
                key={index}
                href={`/listings?location=${location.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-float transition-all duration-300"
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{location.name}</h3>
                  <p className="text-sm opacity-90">{location.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Venue?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of happy customers who book with us every day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/listings" className="btn btn-secondary px-8 py-3">
              Browse All Venues
            </Link>
            <Link href="/host" className="btn btn-outline btn-white px-8 py-3">
              List Your Venue
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}