import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-white">Swimply</span>
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
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/shop" className="text-gray-400 hover:text-white transition-colors">Swimply Shop</Link></li>
              <li><Link href="/gift-cards" className="text-gray-400 hover:text-white transition-colors">Gift Cards</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">Help</Link></li>
              <li><Link href="/trust-safety" className="text-gray-400 hover:text-white transition-colors">Trust & Safety</Link></li>
              <li><Link href="/media" className="text-gray-400 hover:text-white transition-colors">Media Inquiries</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/pools" className="text-gray-400 hover:text-white transition-colors">Public Pools</Link></li>
              <li><Link href="/destinations/los-angeles" className="text-gray-400 hover:text-white transition-colors">Los Angeles</Link></li>
              <li><Link href="/destinations/new-york" className="text-gray-400 hover:text-white transition-colors">New York</Link></li>
              <li><Link href="/destinations/miami" className="text-gray-400 hover:text-white transition-colors">Miami</Link></li>
              <li><Link href="/destinations/atlanta" className="text-gray-400 hover:text-white transition-colors">Atlanta</Link></li>
              <li><Link href="/destinations/austin" className="text-gray-400 hover:text-white transition-colors">Austin</Link></li>
              <li><Link href="/destinations/houston" className="text-gray-400 hover:text-white transition-colors">Houston</Link></li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li><Link href="/host/pool" className="text-gray-400 hover:text-white transition-colors">List a Pool</Link></li>
              <li><Link href="/host/tennis" className="text-gray-400 hover:text-white transition-colors">List Tennis</Link></li>
              <li><Link href="/host/pickleball" className="text-gray-400 hover:text-white transition-colors">List Pickleball</Link></li>
              <li><Link href="/host/basketball" className="text-gray-400 hover:text-white transition-colors">List Basketball</Link></li>
              <li><Link href="/host/resources" className="text-gray-400 hover:text-white transition-colors">Host Resources Center</Link></li>
              <li><Link href="/neighbors" className="text-gray-400 hover:text-white transition-colors">Neighbors</Link></li>
              <li><Link href="/neighbor-support" className="text-gray-400 hover:text-white transition-colors">Neighbor Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">USA (English)</span>
              <div className="text-gray-400 text-sm">
                Download the Swimply App
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}