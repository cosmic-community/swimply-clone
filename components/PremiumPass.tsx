import { Check } from 'lucide-react'

const premiumFeatures = [
  '$0 service fees on bookings up to $250',
  '$0 cancellation fees',
  'Priority support',
  'Access to exclusive deals',
  'Early access to new features'
]

export default function PremiumPass() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-yellow-400 text-black px-4 py-2 rounded-full inline-block mb-6 font-bold">
            ✨ PREMIUM PASS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Swimply Premium Pass
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            For just $19.99/month, unlock exclusive benefits and save on every booking
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Premium Benefits</h3>
              <div className="space-y-4">
                {premiumFeatures.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Savings Calculator</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Monthly bookings:</span>
                  <span className="font-semibold">4 bookings</span>
                </div>
                <div className="flex justify-between">
                  <span>Average booking:</span>
                  <span className="font-semibold">$100</span>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Monthly savings:</span>
                    <span className="text-green-400">$40+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="btn bg-yellow-400 text-black hover:bg-yellow-300 font-bold text-lg px-8 py-4">
            Start Premium Pass Trial
          </button>
          
          <p className="text-sm text-white/70 mt-4">
            7-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}