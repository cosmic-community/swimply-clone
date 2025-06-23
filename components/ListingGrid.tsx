import Link from 'next/link'
import { Star, MapPin, Users } from 'lucide-react'
import { Listing } from '@/types'

interface ListingGridProps {
  listings: Listing[]
}

export default function ListingGrid({ listings }: ListingGridProps) {
  if (!listings || listings.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🏊</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No listings found</h3>
        <p className="text-gray-600 mb-6">
          Try adjusting your search filters or browse all available listings.
        </p>
        <Link href="/listings" className="btn btn-primary">
          View All Listings
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                  <span className="text-gray-400 text-4xl">
                    {listing.metadata?.category?.metadata?.icon || '🏊'}
                  </span>
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

              {/* Category */}
              {listing.metadata?.category && (
                <div className="flex items-center space-x-1 mb-2">
                  <span className="text-lg">{listing.metadata.category.metadata?.icon}</span>
                  <span className="text-sm text-gray-600">
                    {listing.metadata.category.metadata?.name}
                  </span>
                </div>
              )}

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

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {listing.metadata?.instant_book && (
                  <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    ⚡ Instant Book
                  </span>
                )}
                {listing.metadata?.pet_friendly && (
                  <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    🐕 Pet Friendly
                  </span>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}