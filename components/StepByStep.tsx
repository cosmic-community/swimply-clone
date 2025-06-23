import Link from 'next/link'

const steps = [
  {
    number: 1,
    emoji: '🔍',
    title: 'Find your secret paradise.',
    subtitle: 'Browse. Book. Swim.',
    description: 'Explore stunning private pools near you, pick your date and time, and send a request. Need it fast? Look for the ⚡ icon to book instantly — no waiting.'
  },
  {
    number: 2,
    emoji: '🏡',
    title: 'Arrive and enjoy.',
    subtitle: 'Everything you need, when you need it.',
    description: 'You\'ll get clear arrival instructions before your swim. When you arrive, some hosts greet you personally, others let you walk right in #selfserve'
  },
  {
    number: 3,
    emoji: '😌',
    title: 'Make it yours.',
    subtitle: 'Swim, soak, Escape — your way.',
    description: 'Whether it\'s a solo unwind, family hangout, or party with friends, the space is all yours for the time you booked. No sharing. No strangers.'
  },
  {
    number: 4,
    emoji: '⭐️',
    title: 'Review and repeat.',
    subtitle: 'Wrap it up — and come back soon!',
    description: 'Leave the pool as you found and with quick review to help the next guest. Then? Book again so you can count down till your next Swimply!'
  }
]

export default function StepByStep() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Here's how Swimply works, Step by Step.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Steps List */}
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl">
                    {step.emoji}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="text-lg font-bold text-primary">Step {step.number}: </span>
                    <span className="text-xl font-bold text-gray-900">{step.title}</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&auto=format,compress"
              alt="Beautiful pool experience"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">⚡</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Instant Book</div>
                  <div className="text-sm text-gray-600">Book immediately</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/search" className="btn btn-primary text-lg px-8 py-4">
            Find pools near me
          </Link>
        </div>
      </div>
    </section>
  )
}