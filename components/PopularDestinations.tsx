import Link from 'next/link'

const destinations = [
  {
    name: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1534190760961-74e8c1b5c3da?w=600&h=400&fit=crop&auto=format,compress',
    pools: '2,400+'
  },
  {
    name: 'New York',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop&auto=format,compress',
    pools: '1,800+'
  },
  {
    name: 'Miami',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&auto=format,compress',
    pools: '1,200+'
  },
  {
    name: 'Atlanta',
    image: 'https://images.unsplash.com/photo-1526602553025-c5b4c1ffd1db?w=600&h=400&fit=crop&auto=format,compress',
    pools: '900+'
  },
  {
    name: 'Austin',
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=600&h=400&fit=crop&auto=format,compress',
    pools: '800+'
  },
  {
    name: 'Houston',
    image: 'https://images.unsplash.com/photo-1577450900040-0d16decae3b2?w=600&h=400&fit=crop&auto=format,compress',
    pools: '750+'
  }
]

export default function PopularDestinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular destinations
          </h2>
          <p className="text-xl text-gray-600">
            Discover amazing pools in these top cities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.name}
              href={`/cities/${destination.name.toLowerCase().replace(' ', '-')}`}
              className="group relative overflow-hidden rounded-xl aspect-video card-hover"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                <p className="text-white/90">{destination.pools} pools</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/cities" className="btn btn-outline">
            View all destinations
          </Link>
        </div>
      </div>
    </section>
  )
}