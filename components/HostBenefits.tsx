import Link from 'next/link'
import { DollarSign, Calendar, Users, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: 'Earn extra income',
    description: 'Make money from your pool when you\'re not using it'
  },
  {
    icon: Calendar,
    title: 'You\'re in control',
    description: 'Set your own schedule, prices, and house rules'
  },
  {
    icon: Users,
    title: 'Meet great people',
    description: 'Connect with your neighbors and build community'
  },
  {
    icon: TrendingUp,
    title: 'Growing demand',
    description: 'Join thousands of hosts earning on Swimply'
  }
]

export default function HostBenefits() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Share your pool, earn extra income
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Turn your backyard into a source of passive income. Join thousands of hosts who are already earning money from their pools.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-white/80 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/host" className="btn bg-white text-primary hover:bg-gray-100">
              Start hosting today
            </Link>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&auto=format,compress"
              alt="Beautiful backyard pool"
              className="rounded-2xl shadow-float"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 rounded-xl p-4 shadow-float">
              <div className="text-2xl font-bold text-primary">$500+</div>
              <div className="text-sm text-gray-600">Average monthly earnings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}