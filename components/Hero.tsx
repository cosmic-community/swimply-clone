'use client'

import { useState } from 'react'
import { Search, MapPin, Calendar, Users } from 'lucide-react'
import { Location } from '@/types'

interface HeroProps {
  locations: Location[]
}

export default function Hero({ locations }: HeroProps) {
  const [searchData, setSearchData] = useState({
    category: 'pools',
    location: '',
    date: '',
    guests: ''
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic
    const searchParams = new URLSearchParams({
      category: searchData.category,
      location: searchData.location,
      date: searchData.date,
      guests: searchData.guests
    })
    window.location.href = `/listings?${searchParams.toString()}`
  }

  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          preload="metadata"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop&auto=format,compress"
            alt="Beautiful pool with city view"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Rent private{' '}
            <span className="text-gradient bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Pools
            </span>
            ,<br />
            by the hour.
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white mb-8 opacity-90">
            Book unique pools, tennis courts, and other private venues near you
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-2 mb-8 text-white">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-xs">👥</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="text-xs">❤️</span>
              </div>
            </div>
            <span className="text-lg">
              Over 4 million ⭐⭐⭐⭐⭐ experiences hosted by 15,000 hosts and counting!
            </span>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white rounded-2xl p-6 shadow-float max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  I want...
                </label>
                <select
                  value={searchData.category}
                  onChange={(e) => setSearchData({ ...searchData, category: e.target.value })}
                  className="input"
                >
                  <option value="pools">Pools 🏊</option>
                  <option value="tennis-courts">Tennis Courts 🎾</option>
                  <option value="basketball-courts">Basketball Courts 🏀</option>
                  <option value="pickleball-courts">Pickleball Courts 🏓</option>
                </select>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Location
                </label>
                <select
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                  className="input"
                >
                  <option value="">Enter address</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.metadata?.city}, {location.metadata?.state}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Date
                </label>
                <input
                  type="date"
                  value={searchData.date}
                  onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
                  className="input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Guests
                </label>
                <select
                  value={searchData.guests}
                  onChange={(e) => setSearchData({ ...searchData, guests: e.target.value })}
                  className="input"
                >
                  <option value="">How many?</option>
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6">
              <button type="submit" className="btn btn-primary w-full md:w-auto px-8 py-3 text-lg">
                <Search className="w-5 h-5 mr-2" />
                Search Pools
              </button>
            </div>
          </form>

          {/* How it works link */}
          <div className="mt-8">
            <a href="#trust-safety" className="text-white hover:text-blue-100 transition-colors underline">
              How Swimply works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}