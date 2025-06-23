'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const guestFAQs = [
  {
    question: 'How does booking work?',
    answer: 'Choose your date and time, then click Book Now. Pools with the ⚡ Instant Book icon are confirmed immediately. Others require host approval (you\'ll hear back within 24 hours). You\'re only charged once the booking is confirmed. Once confirmed you will get all the information you need including the address, how to enter and how to exit and anything else you\'ll need to enjoy your swim!'
  },
  {
    question: 'What\'s included in the booking?',
    answer: 'Each listing shows what\'s included — some have hot tubs, bathrooms, grills, speakers, etc. Check the amenities section and photos for details. Some listings even offer premium amenities and experiences for an additional cost.'
  },
  {
    question: 'How many people can I bring with me?',
    answer: 'Every pool has its own guest limit but range from 10 guests all the way to 100 guests. Some hosts allow extra guests for a fee. All this information is listed clearly on every pools profile.'
  },
  {
    question: 'Will I have access to a bathroom?',
    answer: '95% of Swimplys offer restroom access. Restroom access and info is listed on every profile.'
  },
  {
    question: 'Will the host be home during my swim?',
    answer: 'It depends. Some hosts stay home, others leave. Listings will indicate this, or you can ask the host directly.'
  },
  {
    question: 'Where is Swimply available?',
    answer: 'Swimply is available in 150+ cities across the U.S., Canada, and Australia — including Los Angeles, New York, Miami, Toronto, Sydney, and more.'
  },
  {
    question: 'Can I rent more than just pools?',
    answer: 'Yes! Swimply also offers hot tubs, sports courts (pickleball, basketball, tennis), backyards, event spaces, and even entire homes.'
  },
  {
    question: 'Can I bring my pet?',
    answer: 'Some hosts allow pets, others don\'t. Check the listing for pet policies, or message the host directly. Look out for listings with a dedicated Pet Swim option — perfect for dogs!'
  }
]

const hostFAQs = [
  {
    question: 'How much can I earn?',
    answer: 'Earnings vary by location, amenities, and demand. Many hosts earn $500+ per month. Premium pools in high-demand areas can earn significantly more.'
  },
  {
    question: 'What insurance coverage do you provide?',
    answer: 'We provide comprehensive property protection and liability coverage for all bookings. Your property is protected against damage, and guests are covered under our liability policy.'
  },
  {
    question: 'How do I set my pricing?',
    answer: 'You have complete control over your pricing. We provide market insights and suggestions based on similar listings in your area, but the final decision is always yours.'
  },
  {
    question: 'Can I block certain dates?',
    answer: 'Absolutely! You control your calendar completely. Block any dates you want to use your pool personally or when it\'s not available for guests.'
  }
]

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<'guests' | 'hosts'>('guests')
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const currentFAQs = activeTab === 'guests' ? guestFAQs : hostFAQs

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Things people ask us
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('guests')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'guests'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Guests
            </button>
            <button
              onClick={() => setActiveTab('hosts')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'hosts'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Hosts
            </button>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {currentFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openQuestion === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openQuestion === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <button className="btn btn-outline">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}