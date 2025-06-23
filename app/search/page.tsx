'use client'

import { useState } from 'react'
import { Search, MapPin, Calendar, Users, Filter, Grid, List } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ListingGrid from '@/components/ListingGrid'
import SearchFilters from '@/components/SearchFilters'
import { Category, Location, Listing } from '@/types'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const [guests, setGuests] = useState('1')
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Mock data for SearchFilters props - properly typed
  const categories: Category[] = [
    { 
      id: '1', 
      title: 'Swimming Pools', 
      slug: 'swimming-pools',
      type_slug: 'categories',
      metadata: { name: 'Swimming Pools', description: 'Private pools for swimming and relaxation' },
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z'
    },
    { 
      id: '2', 
      title: 'Tennis Courts', 
      slug: 'tennis-courts',
      type_slug: 'categories',
      metadata: { name: 'Tennis Courts', description: 'Professional tennis courts for rent' },
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z'
    },
    { 
      id: '3', 
      title: 'Basketball Courts', 
      slug: 'basketball-courts',
      type_slug: 'categories',
      metadata: { name: 'Basketball Courts', description: 'Courts for basketball games' },
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z'
    },
    { 
      id: '4', 
      title: 'Hot Tubs', 
      slug: 'hot-tubs',
      type_slug: 'categories',
      metadata: { name: 'Hot Tubs', description: 'Relaxing hot tubs and spas' },
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z'
    }
  ]

  const locations: Location[] = [
    { 
      id: '1', 
      title: 'Los Angeles', 
      slug: 'los-angeles',
      type_slug: 'locations',
      metadata: { city: 'Los Angeles', state: 'California', country: 'USA', featured: true },
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z'
    },
    { 
      id: '2', 
      title: 'Miami', 
      slug: 'miami',
      type_slug: 'locations',
      metadata: { city: 'Miami', state: 'Florida', country: 'USA', featured: true },
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z'
    },
    { 
      id: '3', 
      title: 'New York', 
      slug: 'new-york',
      type_slug: 'locations',
      metadata: { city: 'New York', state: 'New York', country: 'USA', featured: true },
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z'
    },
    { 
      id: '4', 
      title: 'Austin', 
      slug: 'austin',
      type_slug: 'locations',
      metadata: { city: 'Austin', state: 'Texas', country: 'USA', featured: true },
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z'
    }
  ]

  const [currentFilters, setCurrentFilters] = useState({
    category: '',
    location: '',
    priceRange: [0, 1000],
    amenities: [] as string[],
    rating: 0
  })

  // Mock data for ListingGrid props - properly typed
  const listings: Listing[] = [
    {
      id: '1',
      title: 'Luxury Pool Villa',
      slug: 'luxury-pool-villa',
      type_slug: 'listings',
      metadata: {
        title: 'Luxury Pool Villa',
        description: 'Beautiful luxury pool with stunning views',
        price_per_hour: 150,
        address: 'Los Angeles, CA',
        max_guests: 8,
        featured_image: { 
          url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
          imgix_url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5' 
        },
        amenities: ['Pool', 'Hot Tub', 'WiFi'],
        instant_book: true,
        pet_friendly: false,
        listing_status: { key: 'active', value: 'Active' }
      },
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z'
    },
    {
      id: '2',
      title: 'Modern Tennis Court',
      slug: 'modern-tennis-court',
      type_slug: 'listings',
      metadata: {
        title: 'Modern Tennis Court',
        description: 'Professional tennis court with lighting',
        price_per_hour: 75,
        address: 'Miami, FL',
        max_guests: 4,
        featured_image: { 
          url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256',
          imgix_url: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256' 
        },
        amenities: ['Tennis Court', 'Parking', 'Lighting'],
        instant_book: true,
        pet_friendly: false,
        listing_status: { key: 'active', value: 'Active' }
      },
      created_at: '2024-01-01T00:00:00Z',
      modified_at: '2024-01-01T00:00:00Z'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Search Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="container-custom py-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search pools, courts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8+ Guests</option>
                  </select>
                </div>
              </div>

              <button className="btn btn-primary px-8">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Filters and Results */}
        <div className="container-custom py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-80">
              <div className="bg-white rounded-2xl shadow-soft p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                  >
                    <Filter className="w-5 h-5" />
                  </button>
                </div>

                <div className={`${showFilters ? 'block' : 'hidden lg:block'}`}>
                  <SearchFilters 
                    categories={categories}
                    locations={locations}
                    currentFilters={currentFilters}
                    onFiltersChange={setCurrentFilters}
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Search Results</h2>
                  <p className="text-gray-600 mt-1">2,847 places found</p>
                </div>

                <div className="flex items-center space-x-4">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Sort by: Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Distance</option>
                    <option>Rating</option>
                  </select>

                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Listings Grid */}
              <ListingGrid listings={listings} />

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="btn btn-outline px-8">
                  Load More Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}