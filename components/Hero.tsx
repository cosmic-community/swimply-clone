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
    const searchParams = new URLSearchParams({
      category: searchData.category,
      location: searchData.location,
      date: searchData.date,
      guests: searchData.guests
    })
    window.location.href = `/listings?${searchParams.toString()}`
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <source src="/videos/outdoor-activities.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop&auto=format,compress"
            alt="People enjoying outdoor activities"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Rent private{' '}
          <span className="text-swimply-blue">Pools</span>
          , by the hour.
        </h1>

        {/* Stats */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12 text-white text-lg">
          <span>Over 4 million</span>
          <div className="flex">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <span>experiences hosted by 15,000 hosts and counting!</span>
          <span className="text-red-400">❤️</span>
        </div>

        {/* As Seen On brands would go here */}
        <div className="mb-16">
          <p className="text-white/80 text-sm mb-4">As seen on:</p>
          {/* Brand logos placeholder */}
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-white font-bold">CNN</div>
            <div className="text-white font-bold">ABC</div>
            <div className="text-white font-bold">NBC</div>
            <div className="text-white font-bold">Forbes</div>
          </div>
        </div>
      </div>
    </section>
  )
}