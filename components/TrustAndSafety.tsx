import { Shield, Clock, Heart, Star } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Verified hosts',
    description: 'All hosts are background checked and verified for your safety'
  },
  {
    icon: Clock,
    title: '24/7 support',
    description: 'Round-the-clock customer support for any questions or issues'
  },
  {
    icon: Heart,
    title: 'Host guarantee',
    description: 'Property protection and damage guarantee for all bookings'
  },
  {
    icon: Star,
    title: 'Quality assurance',
    description: 'Every listing is reviewed and approved by our team'
  }
]

export default function TrustAndSafety() {
  return (
    <section id="trust-safety" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your safety is our priority
          </h2>
          <p className="text-xl text-gray-600">
            Book with confidence knowing we've got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-primary font-medium">
            <span>Learn more about Trust & Safety</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}