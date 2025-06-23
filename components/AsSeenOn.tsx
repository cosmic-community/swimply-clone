import WavySection from './WavySection'

export default function AsSeenOn() {
  return (
    <WavySection backgroundColor="#4fabdd" waveColor="#ffffff">
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* User Count */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join over 4,000,000+ people who love to Swimply
            </h2>
          </div>

          {/* Guest/Host Toggle */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/20 rounded-full p-1 flex">
              <button className="px-8 py-3 rounded-full bg-white text-swimply-blue font-semibold">
                Guests
              </button>
              <button className="px-8 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-colors">
                Hosts
              </button>
            </div>
          </div>

          {/* Question */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              How do you want to Swimply?
            </h3>
            <p className="text-xl text-white/90 mb-12">
              Over 15,000 Swimply's in 125 cities for any occasion.
            </p>
          </div>

          {/* Activity Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🐶</div>
              <h4 className="text-white font-semibold mb-2">Paw parties</h4>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🏡</div>
              <h4 className="text-white font-semibold mb-2">Family swims</h4>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🥳</div>
              <h4 className="text-white font-semibold mb-2">Pool parties</h4>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🧖</div>
              <h4 className="text-white font-semibold mb-2">Solo self care days</h4>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🤑</div>
              <h4 className="text-white font-semibold mb-2">$50 budget fun</h4>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">✨</div>
              <h4 className="text-white font-semibold mb-2">Night swims</h4>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">📸</div>
              <h4 className="text-white font-semibold mb-2">Photo shoots</h4>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🐕</div>
              <h4 className="text-white font-semibold mb-2">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">NEW</span>
                <br />Pet Swims
              </h4>
            </div>
          </div>

          {/* Pet Swims Feature */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-16">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold mr-3">NEW</span>
              <span className="text-2xl">🐶</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Introducing Pet Swims</h3>
            <p className="text-white/90 mb-6">
              Hand curated pools designed for you and your pet to have the best pool day!
            </p>
          </div>

          {/* More than just pools */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              More than just pools
            </h3>
            <p className="text-xl text-white/90 mb-12">
              Enjoy a variety of joy filled spaces, always unique, always your own
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-3">
                  <div className="text-3xl">🏊</div>
                </div>
                <p className="text-white font-medium">Pools</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-3">
                  <div className="text-3xl">🎾</div>
                </div>
                <p className="text-white font-medium">Tennis courts</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-3">
                  <div className="text-3xl">🏓</div>
                </div>
                <p className="text-white font-medium">Pickleball courts</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-3">
                  <div className="text-3xl">🏀</div>
                </div>
                <p className="text-white font-medium">Hoops</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-3">
                  <div className="text-3xl">🏠</div>
                </div>
                <p className="text-white font-medium">Indoor havens</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-3">
                  <div className="text-3xl">🌳</div>
                </div>
                <p className="text-white font-medium">Backyards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WavySection>
  )
}