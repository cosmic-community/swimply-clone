'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, MapPin, Calendar, Users } from 'lucide-react'
import { Location } from '@/types'

interface HeroProps {
  locations: Location[]
}

export default function Hero({ locations }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [searchData, setSearchData] = useState({
    category: 'pools',
    location: '',
    date: '',
    guests: ''
  })

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleCanPlay = () => {
        setVideoLoaded(true)
        video.play().catch(console.error)
      }
      
      const handleError = () => {
        setVideoError(true)
        console.error('Video failed to load')
      }

      video.addEventListener('canplay', handleCanPlay)
      video.addEventListener('error', handleError)

      return () => {
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('error', handleError)
      }
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const searchParams = new URLSearchParams({
      category: searchData.category,
      location: searchData.location,
      date: searchData.date,
      guests: searchData.guests
    })
    window.location.href = `/search?${searchParams.toString()}`
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Fallback background image */}
        <div 
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
            videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop&auto=format,compress')`
          }}
        />
        
        {/* Video element */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover object-center min-w-full min-h-full transition-opacity duration-500 ${
              videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              objectPosition: 'center center'
            }}
            preload="auto"
            poster="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop&auto=format,compress"
          >
            <source src="https://swimply-static.s3.us-east-1.amazonaws.com/hero/v2/desktop-pool.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Title */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Rent private{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pools,
            </span>
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl">by the hour.</span>
          </h1>
        </div>

        {/* Stats */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center flex-wrap gap-2 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 text-white text-lg font-medium mb-4">
            <span>Over 4 million</span>
            <div className="flex text-yellow-400">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <span>experiences</span>
          </div>
          <p className="text-white/90 text-xl font-medium">
            hosted by 15,000 hosts and counting! <span className="text-red-400">❤️</span>
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSearch} className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 uppercase tracking-wide">Category</label>
                <select
                  value={searchData.category}
                  onChange={(e) => setSearchData(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 font-medium bg-white"
                >
                  <option value="pools">🏊 Pools</option>
                  <option value="tennis">🎾 Tennis Courts</option>
                  <option value="basketball">🏀 Basketball</option>
                  <option value="events">🎉 Event Spaces</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 uppercase tracking-wide">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    value={searchData.location}
                    onChange={(e) => setSearchData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="Enter city or zip"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 font-medium bg-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 uppercase tracking-wide">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="date"
                    value={searchData.date}
                    onChange={(e) => setSearchData(prev => ({ ...prev, date: e.target.value }))}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 font-medium bg-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 uppercase tracking-wide">Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <select
                    value={searchData.guests}
                    onChange={(e) => setSearchData(prev => ({ ...prev, guests: e.target.value }))}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 font-medium bg-white"
                  >
                    <option value="">Any</option>
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="4">4 guests</option>
                    <option value="8">8+ guests</option>
                  </select>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-5 px-8 rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
            >
              <Search className="w-6 h-6 mr-3" />
              Find a pool
            </button>
            </form>
        </div>
      </div>
    </section>
  )
}