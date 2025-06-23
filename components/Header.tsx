'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Swimply</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/listings" className="text-gray-700 hover:text-primary transition-colors">
              Find a Pool
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary transition-colors">
              Browse Categories
            </Link>
            <Link href="/host" className="text-gray-700 hover:text-primary transition-colors">
              Become a Host
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/search" className="btn btn-outline">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Link>
            <Link href="/signin" className="text-gray-700 hover:text-primary transition-colors">
              Sign In
            </Link>
            <Link href="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/listings"
                className="text-gray-700 hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Find a Pool
              </Link>
              <Link
                href="/categories"
                className="text-gray-700 hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Categories
              </Link>
              <Link
                href="/host"
                className="text-gray-700 hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Become a Host
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link href="/search" className="btn btn-outline">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Link>
                <Link href="/signin" className="btn btn-secondary">
                  Sign In
                </Link>
                <Link href="/signup" className="btn btn-primary">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}