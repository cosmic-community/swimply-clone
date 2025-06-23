'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Filter, X } from 'lucide-react'
import { Category, Location, SearchFilters as SearchFiltersType } from '@/types'

interface SearchFiltersProps {
  categories: Category[]
  locations: Location[]
  currentFilters: SearchFiltersType
}

export default function SearchFilters({ categories, locations, currentFilters }: SearchFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState<SearchFiltersType>(currentFilters)

  useEffect(() => {
    setFilters(currentFilters)
  }, [currentFilters])

  const updateFilter = (key: keyof SearchFiltersType, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    applyFilters(newFilters)
  }

  const applyFilters = (newFilters: SearchFiltersType) => {
    const params = new URLSearchParams()
    
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '' && value !== false) {
        params.set(key, value.toString())
      }
    })

    router.push(`/listings?${params.toString()}`)
  }

  const clearFilters = () => {
    setFilters({})
    router.push('/listings')
  }

  const hasActiveFilters = Object.values(filters).some(value => 
    value !== undefined && value !== null && value !== '' && value !== false
  )

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-outline w-full"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
          {hasActiveFilters && (
            <span className="ml-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
              Active
            </span>
          )}
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`
        fixed inset-0 z-50 lg:relative lg:inset-auto lg:z-auto
        ${isOpen ? 'block' : 'hidden lg:block'}
      `}>
        {/* Backdrop (mobile only) */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />

        {/* Filter Content */}
        <div className="
          fixed right-0 top-0 h-full w-80 bg-white lg:relative lg:w-full lg:h-auto
          overflow-y-auto lg:overflow-visible
          shadow-xl lg:shadow-none
          p-6 lg:p-0
        ">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Filters</h2>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-primary hover:text-primary-dark"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="space-y-6">
            {/* Category Filter */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Category</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value=""
                    checked={!filters.category}
                    onChange={() => updateFilter('category', undefined)}
                    className="mr-3 text-primary focus:ring-primary"
                  />
                  All Categories
                </label>
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category.id}
                      checked={filters.category === category.id}
                      onChange={() => updateFilter('category', category.id)}
                      className="mr-3 text-primary focus:ring-primary"
                    />
                    <span className="mr-2">{category.metadata?.icon}</span>
                    {category.metadata?.name || category.title}
                  </label>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Location</h3>
              <select
                value={filters.location || ''}
                onChange={(e) => updateFilter('location', e.target.value || undefined)}
                className="input w-full"
              >
                <option value="">All Locations</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.metadata?.city}, {location.metadata?.state}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Price per hour</h3>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.priceMin || ''}
                  onChange={(e) => updateFilter('priceMin', e.target.value ? parseInt(e.target.value) : undefined)}
                  className="input"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.priceMax || ''}
                  onChange={(e) => updateFilter('priceMax', e.target.value ? parseInt(e.target.value) : undefined)}
                  className="input"
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Number of guests</h3>
              <select
                value={filters.guests || ''}
                onChange={(e) => updateFilter('guests', e.target.value ? parseInt(e.target.value) : undefined)}
                className="input w-full"
              >
                <option value="">Any number</option>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'guest' : 'guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Features</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.instantBook || false}
                    onChange={(e) => updateFilter('instantBook', e.target.checked || undefined)}
                    className="mr-3 text-primary focus:ring-primary"
                  />
                  ⚡ Instant Book
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.petFriendly || false}
                    onChange={(e) => updateFilter('petFriendly', e.target.checked || undefined)}
                    className="mr-3 text-primary focus:ring-primary"
                  />
                  🐕 Pet Friendly
                </label>
              </div>
            </div>
          </div>

          {/* Mobile Apply Button */}
          <div className="mt-8 lg:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-primary w-full"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  )
}