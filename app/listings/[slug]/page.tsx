import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Star, MapPin, Users, Wifi, Car, Shield, Check } from 'lucide-react'

interface ListingPageProps {
  params: Promise<{ slug: string }>
}

// Mock listing data - in real app this would come from Cosmic CMS
const mockListing = {
  id: '1',
  title: 'Stunning Backyard Pool with Mountain Views',
  slug: 'stunning-backyard-pool-mountain-views',
  metadata: {
    title: 'Stunning Backyard Pool with Mountain Views',
    description: 'Escape to this beautiful private pool surrounded by lush landscaping and breathtaking mountain views. Perfect for families, couples, or small groups looking for a relaxing day in the sun.',
    featured_image: {
      imgix_url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f'
    },
    images: [
      { imgix_url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f' },
      { imgix_url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5' },
      { imgix_url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d' }
    ],
    price_per_hour: 65,
    max_guests: 8,
    location: {
      metadata: {
        city: 'Los Angeles',
        state: 'CA',
        address: '123 Mountain View Dr'
      }
    },
    host: {
      metadata: {
        name: 'Sarah Johnson',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332639'
      }
    },
    amenities: [
      'Heated Pool',
      'Pool Float',
      'Outdoor Shower',
      'BBQ Grill',
      'Pool Chairs',
      'Shade Structure',
      'Parking',
      'Wifi'
    ],
    rules: [
      'No smoking',
      'No glass containers',
      'Clean up after yourself',
      'Respect neighbors',
      'No loud music after 8 PM'
    ],
    instant_book: true,
    pet_friendly: false
  }
}

export default async function ListingPage({ params }: ListingPageProps) {
  const { slug } = await params
  
  // In a real app, you would fetch the listing by slug from Cosmic CMS
  // For now, we'll use mock data
  if (slug !== mockListing.slug) {
    notFound()
  }

  const listing = mockListing

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Image Gallery */}
        <section className="relative h-96 md:h-[500px]">
          <img
            src={`${listing.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={listing.metadata.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Title and basics */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {listing.metadata.title}
                  </h1>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-medium">4.9</span>
                    <span className="text-gray-600">(127 reviews)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{listing.metadata.location.metadata.city}, {listing.metadata.location.metadata.state}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Up to {listing.metadata.max_guests} guests</span>
                  </div>
                </div>

                {listing.metadata.instant_book && (
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    ⚡ Instant Book Available
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About this space</h2>
                <p className="text-gray-700 leading-relaxed">
                  {listing.metadata.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">What this place offers</h2>
                <div className="grid grid-cols-2 gap-4">
                  {listing.metadata.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">House rules</h2>
                <div className="space-y-2">
                  {listing.metadata.rules.map((rule, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                      <span className="text-gray-700">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-gray-900">
                      ${listing.metadata.price_per_hour}
                      <span className="text-lg font-normal text-gray-600">/hour</span>
                    </div>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Start time
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>9:00 AM</option>
                          <option>10:00 AM</option>
                          <option>11:00 AM</option>
                          <option>12:00 PM</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          End time
                        </label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>1:00 PM</option>
                          <option>2:00 PM</option>
                          <option>3:00 PM</option>
                          <option>4:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Guests
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>1 guest</option>
                        <option>2 guests</option>
                        <option>3 guests</option>
                        <option>4 guests</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full btn btn-primary py-3 text-lg"
                    >
                      Book Now
                    </button>
                  </form>

                  <div className="mt-6 space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>$65 x 4 hours</span>
                      <span>$260</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>$26</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold text-gray-900">
                      <span>Total</span>
                      <span>$286</span>
                    </div>
                  </div>
                </div>

                {/* Host Info */}
                <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={`${listing.metadata.host.metadata.avatar}?w=120&h=120&fit=crop&auto=format,compress`}
                      alt={listing.metadata.host.metadata.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Hosted by {listing.metadata.host.metadata.name}
                      </div>
                      <div className="text-sm text-gray-600">Joined in 2022</div>
                    </div>
                  </div>
                  <button className="w-full mt-4 btn btn-outline">
                    Contact Host
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}