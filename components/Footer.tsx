import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/images/logo.svg" 
                alt="Swimply Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Discover and book private pools, hot tubs, gathering spaces, sports courts and soon much more. #EscapeLocally
            </p>
            <div className="text-sm text-gray-400">
              © 2025 Swimply, Inc. All rights reserved.
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About us</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-white transition-colors">Categories</Link></li>
              <li><span className="text-gray-500">Careers (Coming Soon)</span></li>
              <li><span className="text-gray-500">Help Center (Coming Soon)</span></li>
              <li><span className="text-gray-500">Trust & Safety (Coming Soon)</span></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/listings?category=pools" className="text-gray-400 hover:text-white transition-colors">Swimming Pools</Link></li>
              <li><Link href="/listings?location=los-angeles" className="text-gray-400 hover:text-white transition-colors">Los Angeles</Link></li>
              <li><Link href="/listings?location=new-york" className="text-gray-400 hover:text-white transition-colors">New York</Link></li>
              <li><Link href="/listings?location=miami" className="text-gray-400 hover:text-white transition-colors">Miami</Link></li>
              <li><Link href="/listings?location=atlanta" className="text-gray-400 hover:text-white transition-colors">Atlanta</Link></li>
              <li><Link href="/listings?location=austin" className="text-gray-400 hover:text-white transition-colors">Austin</Link></li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li><Link href="/host" className="text-gray-400 hover:text-white transition-colors">Become a Host</Link></li>
              <li><Link href="/host" className="text-gray-400 hover:text-white transition-colors">List Your Pool</Link></li>
              <li><Link href="/host" className="text-gray-400 hover:text-white transition-colors">List Your Court</Link></li>
              <li><span className="text-gray-500">Host Resources (Coming Soon)</span></li>
              <li><span className="text-gray-500">Host Support (Coming Soon)</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-500 text-sm">Terms of Service (Coming Soon)</span>
              <span className="text-gray-500 text-sm">Privacy Policy (Coming Soon)</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">USA (English)</span>
              <div className="text-gray-400 text-sm">
                Download the App (Coming Soon)
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}