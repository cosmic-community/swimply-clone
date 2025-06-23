import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Users, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Popular Destinations - Swimply Clone',
  description: 'Discover amazing pools and venues in popular destinations across the country.',
}

const destinations = [
  {
    id: 'los-angeles',
    name: 'Los Angeles',
    state: 'California',
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&h=600&fit=crop&auto=format,compress',
    venueCount: 850,
    averagePrice: 75,
    description: 'From Hollywood hills to beachside retreats, LA offers incredible pools with stunning views.',
    highlights: ['Celebrity-style pools', 'Mountain views', 'Year-round sunshine', 'Luxury amenities']
  },
  {
    id: 'miami',
    name: 'Miami',
    state: 'Florida',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&auto=format,compress',
    venueCount: 720,
    averagePrice: 85,
    description: 'Experience the vibrant pool culture of Miami with Art Deco style and tropical vibes.',
    highlights: ['Art Deco pools', 'Tropical settings', 'Beach proximity', 'Nightlife access']
  },
  {
    id: 'new-york',
    name: 'New York',
    state: 'New York',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop&auto=format,compress',
    venueCount: 450,
    averagePrice: 95,
    description: 'Escape the city hustle with rooftop pools and private oases in the Big Apple.',
    highlights: ['Rooftop pools', 'City skyline views', 'Urban oasis', 'Exclusive access']
  },
  {
    id: 'austin',
    name: 'Austin',
    state: 'Texas',
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=800&h=600&fit=crop&auto=format,compress',
    venueCount: 380,
    averagePrice: 65,
    description: 'Keep it weird with unique pools and laid-back vibes in the heart of Texas.',
    highlights: ['Unique designs', 'Live music venues', 'Food truck access', 'Hill country views']
  },
  {
    id: 'atlanta',
    name: 'Atlanta',
    state: 'Georgia',
    image: 'https://images.unsplash.com/photo-1570213489059-0aac6626cade?w=800&h=600&fit=crop&auto=format,compress',
    venueCount: 320,
    averagePrice: 55,
    description: 'Southern hospitality meets modern luxury in Atlanta\'s diverse pool scene.',
    highlights: ['Southern charm', 'Affordable luxury', 'Family-friendly', 'Historic neighborhoods']
  },
  {
    id: 'phoenix',
    name: 'Phoenix',
    state: 'Arizona',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop&auto=format,compress',
    venueCount: 280,
    averagePrice: 70,
    description: 'Desert luxury awaits with resort-style pools and breathtaking Sonoran views.',
    highlights: ['Desert luxury', 'Resort-style pools', 'Mountain backdrops', 'Year-round swimming']
  }
]

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Popular Destinations
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Discover amazing pools, courts, and venues in the most sought-after cities across the country
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <Link
                  key={destination.id}
                  href={`/listings?location=${destination.name.toLowerCase()}`}
                  className="group bg-white rounded-2xl shadow-card hover:shadow-float transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={destination.image}
                      alt={`${destination.name} pools and venues`}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{destination.name}</h3>
                      <p className="text-sm opacity-90">{destination.state}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-medium text-gray-900">
                        {destination.venueCount}+ venues
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{destination.venueCount} venues</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-blue-600">
                          From ${destination.averagePrice}
                        </span>
                        <span className="text-gray-600 text-sm">/hour</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {destination.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-900">Popular features:</div>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.slice(0, 3).map((highlight, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                          >
                            {highlight}
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

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don't See Your City?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We're expanding to new destinations every month. Be the first to know when we arrive!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="btn btn-secondary px-8 py-3">
                Get Notified
              </Link>
              <Link href="/host" className="btn btn-outline btn-white px-8 py-3">
                List Your Venue
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}