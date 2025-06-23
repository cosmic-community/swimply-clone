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
    window.location.href = `/listings?${searchParams.toString()}`
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Fallback background image - only show if video fails or hasn't loaded */}
        <div 
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
            videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop&auto=format,compress')`
          }}
        />
        
        {/* Video element */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
          }`}
          preload="auto"
          poster="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop&auto=format,compress"
        >
          <source src="https://swimply-static.s3.us-east-1.amazonaws.com/hero/v2/desktop-pool.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

        {/* As Seen On brands */}
        <div className="mb-16">
          <p className="text-white/80 text-sm mb-4">As seen on:</p>
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