import Link from 'next/link'

const spaceTypes = [
  {
    icon: '🏊',
    name: 'Pools',
    description: 'Private swimming pools',
    href: '/search?category=pools'
  },
  {
    icon: '🎾',
    name: 'Tennis courts',
    description: 'Professional tennis courts',
    href: '/search?category=tennis'
  },
  {
    icon: '🏓',
    name: 'Pickleball courts',
    description: 'Modern pickleball courts',
    href: '/search?category=pickleball'
  },
  {
    icon: '🏀',
    name: 'Hoops',
    description: 'Basketball courts',
    href: '/search?category=basketball'
  },
  {
    icon: '🏠',
    name: 'Indoor havens',
    description: 'Indoor recreation spaces',
    href: '/search?category=indoor'
  },
  {
    icon: '🌳',
    name: 'Backyards',
    description: 'Private outdoor spaces',
    href: '/search?category=backyard'
  }
]

export default function SpaceTypes() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            More than just pools
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Enjoy a variety of joy filled spaces, always unique, always your own
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {spaceTypes.map((space) => (
            <Link
              key={space.name}
              href={space.href}
              className="group text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-3 group-hover:bg-white/20 transition-all duration-200">
                <div className="text-3xl mb-2">{space.icon}</div>
              </div>
              <p className="text-white font-medium group-hover:text-white/90 transition-colors">
                {space.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}