import Link from 'next/link'

const appFeatures = [
  'Faster communication',
  'Easier navigation', 
  'Exclusive in-app promotions'
]

export default function MobileApp() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Download the app
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the full Swimply experience on your mobile device
            </p>
            
            <div className="space-y-4 mb-8">
              {appFeatures.map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#" className="inline-flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=200&h=60&fit=crop&auto=format,compress" 
                  alt="Download on App Store" 
                  className="h-14 w-auto"
                />
              </Link>
              <Link href="#" className="inline-flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=200&h=60&fit=crop&auto=format,compress" 
                  alt="Get it on Google Play" 
                  className="h-14 w-auto"
                />
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop&auto=format,compress"
              alt="Mobile app screenshot"
              className="rounded-3xl shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}