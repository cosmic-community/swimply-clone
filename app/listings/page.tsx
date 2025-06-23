import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ListingGrid from '@/components/ListingGrid'
import SearchFilters from '@/components/SearchFilters'
import { getListings, getCategories, getLocations } from '@/lib/cosmic'
import { SearchFilters as SearchFiltersType } from '@/types'

interface ListingsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function ListingsPage({ searchParams }: ListingsPageProps) {
  const params = await searchParams
  
  // Convert search params to filters
  const filters: SearchFiltersType = {
    category: typeof params.category === 'string' ? params.category : undefined,
    location: typeof params.location === 'string' ? params.location : undefined,
    date: typeof params.date === 'string' ? params.date : undefined,
    guests: typeof params.guests === 'string' ? parseInt(params.guests) : undefined,
    instantBook: params.instantBook === 'true',
    petFriendly: params.petFriendly === 'true'
  }

  const [listings, categories, locations] = await Promise.all([
    getListings(filters),
    getCategories(),
    getLocations()
  ])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-8">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-1/4">
              <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                <SearchFilters 
                  categories={categories}
                  locations={locations}
                  currentFilters={filters}
                />
              </Suspense>
            </div>

            {/* Listings Grid */}
            <div className="w-full lg:w-3/4">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Available Listings
                </h1>
                <p className="text-gray-600">
                  {listings.length} {listings.length === 1 ? 'listing' : 'listings'} found
                </p>
              </div>

              <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>}>
                <ListingGrid listings={listings} />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default ListingsPage