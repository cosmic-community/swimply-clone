import Link from 'next/link'

export default function PetSwims() {
  return (
    <section className="py-16">
      <div className="container-custom">
        {/* Pet Swims Feature */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold mr-3">NEW</span>
            <span className="text-2xl">🐶</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Introducing Pet Swims
          </h3>
          <p className="text-white/90 mb-6 text-center text-lg">
            Hand curated pools designed for you and your pet to have the best pool day!
          </p>
          <div className="text-center">
            <Link 
              href="/search?category=pet-swims" 
              className="btn bg-yellow-400 text-black hover:bg-yellow-300 font-semibold"
            >
              Find Pet-Friendly Pools
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}