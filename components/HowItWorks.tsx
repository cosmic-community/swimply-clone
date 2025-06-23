export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Find your secret paradise.",
      subtitle: "Browse. Book. Swim.",
      description: "Explore stunning private pools near you, pick your date and time, and send a request. Need it fast? Look for the ⚡ icon to book instantly — no waiting.",
      icon: "🔍"
    },
    {
      number: 2,
      title: "Arrive and enjoy.",
      subtitle: "Everything you need, when you need it.",
      description: "You'll get clear arrival instructions before your swim. When you arrive, some hosts greet you personally, others let you walk right in #selfserve",
      icon: "🏡"
    },
    {
      number: 3,
      title: "Make it yours.",
      subtitle: "Swim, soak, Escape — your way.",
      description: "Whether it's a solo unwind, family hangout, or party with friends, the space is all yours for the time you booked. No sharing. No strangers.",
      icon: "😌"
    },
    {
      number: 4,
      title: "Review and repeat.",
      subtitle: "Wrap it up — and come back soon!",
      description: "Leave the pool as you found and with quick review to help the next guest. Then? Book again so you can count down till your next Swimply!",
      icon: "⭐️"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Here's how Swimply works, Step by Step.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">{step.icon}</span>
              </div>

              {/* Step number */}
              <div className="mb-4">
                <span className="text-sm font-medium text-primary uppercase tracking-wide">
                  Step {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>

              {/* Subtitle */}
              <p className="text-primary font-medium mb-4">
                {step.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Find pools near me
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="btn btn-primary">
                Download the app
              </a>
              <div className="text-gray-600">
                <div className="text-sm">Faster communication</div>
                <div className="text-sm">Easier navigation</div>
                <div className="text-sm">Exclusive in-app promotions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}