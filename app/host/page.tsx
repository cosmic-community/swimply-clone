import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { DollarSign, Calendar, Shield, TrendingUp, Check } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  'Set your own schedule and prices',
  'Meet new people in your community',
  'Property protection guarantee',
  '24/7 customer support',
  'Easy booking management',
  'Verified guest system'
]

const stats = [
  { number: '$500+', label: 'Average monthly earnings' },
  { number: '15,000+', label: 'Active hosts' },
  { number: '4M+', label: 'Happy experiences' },
  { number: '50+', label: 'Cities nationwide' }
]

export default function HostPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Turn your pool into profit
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Join thousands of hosts earning extra income by sharing their pools with neighbors
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#calculator" className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3">
                    Calculate earnings
                  </Link>
                  <Link href="#how-it-works" className="btn border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                    How it works
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&auto=format,compress"
                  alt="Beautiful backyard pool"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why host with Swimply?
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-3">
                      <Check className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-xl">
                  <DollarSign className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Flexible income</h3>
                  <p className="text-gray-600 text-sm">Earn money on your schedule</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-xl">
                  <Calendar className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">You're in control</h3>
                  <p className="text-gray-600 text-sm">Set your own availability</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-xl">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Protected</h3>
                  <p className="text-gray-600 text-sm">Comprehensive insurance coverage</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Growing market</h3>
                  <p className="text-gray-600 text-sm">High demand for private pools</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How it works
              </h2>
              <p className="text-xl text-gray-600">
                Get started in 3 simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">List your space</h3>
                <p className="text-gray-600">Take photos and describe your pool area</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Set your terms</h3>
                <p className="text-gray-600">Choose your schedule, pricing, and rules</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Start earning</h3>
                <p className="text-gray-600">Welcome guests and earn money</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/auth/signup" className="btn btn-primary px-8 py-3 text-lg">
                Start hosting today
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}