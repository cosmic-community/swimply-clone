import Link from 'next/link'
import { Star, MapPin, Users } from 'lucide-react'
import { Listing } from '@/types'

interface FeaturedListingsProps {
  listings: Listing[]
}

export default function FeaturedListings({ listings }: FeaturedListingsProps) {
  if (!listings || listings.length === 0) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Listings
            </h2>
            <p className="text-gray-600">No listings available at the moment.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover pools near me
          </h2>
          <p className="text-gray-600 text-lg">
            Here's your guide to Escaping Locally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <Link
              key={listing.id}
              href={`/listings/${listing.slug}`}
              className="group"
            >
              <div className="card card-hover">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  {listing.metadata?.featured_image ? (
                    <img
                      src={`${listing.metadata.featured_image.imgix_url}?w=600&h=450&fit=crop&auto=format,compress`}
                      alt={listing.metadata?.title || listing.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-4xl">🏊</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                      {listing.metadata?.title || listing.title}
                    </h3>
                    <div className="flex items-center space-x-1 ml-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">4.9</span>
                    </div>
                  </div>

                  {/* Location */}
                  {listing.metadata?.location && (
                    <div className="flex items-center space-x-1 text-gray-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">
                        {listing.metadata.location.metadata?.city}, {listing.metadata.location.metadata?.state}
                      </span>
                    </div>
                  )}

                  {/* Amenities */}
                  {listing.metadata?.amenities && listing.metadata.amenities.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {listing.metadata.amenities.slice(0, 3).map((amenity, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                      {listing.metadata.amenities.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{listing.metadata.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Price and guests */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">
                        Up to {listing.metadata?.max_guests || 8} guests
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-gray-900">
                        ${listing.metadata?.price_per_hour || 50}
                      </span>
                      <span className="text-gray-600 text-sm">/hour</span>
                    </div>
                  </div>

                  {/* Instant book badge */}
                  {listing.metadata?.instant_book && (
                    <div className="mt-3">
                      <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        ⚡ Instant Book
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/listings" className="btn btn-primary">
            View All Listings
          </Link>
        </div>
      </div>
    </section>
  )
}