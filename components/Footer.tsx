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
                src="https://cdn.cosmicjs.com/3a164340-5062-11f0-a051-23c10f41277a-Swimply_Horiz_Logo_-_Blue_140x2x.avif" 
                alt="Swimply Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Swimply, Escape locally. Discover and book private pools, hot tubs, gathering spaces, sports courts and soon much more. #EscapeLocally
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
              <li><span className="text-gray-500">Swimply Shop</span></li>
              <li><span className="text-gray-500">Gift Cards</span></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors">Help</Link></li>
              <li><Link href="/trust-safety" className="text-gray-400 hover:text-white transition-colors">Trust & Safety</Link></li>
              <li><Link href="/media" className="text-gray-400 hover:text-white transition-colors">Media Inquiries</Link></li>
              <li><span className="text-gray-500">Collaboration Inquiries</span></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-500">Public Pools</span></li>
              <li><Link href="/search?category=pools" className="text-gray-400 hover:text-white transition-colors">Swimming Pools</Link></li>
              <li><Link href="/search?location=los-angeles" className="text-gray-400 hover:text-white transition-colors">Los Angeles</Link></li>
              <li><Link href="/search?location=new-york" className="text-gray-400 hover:text-white transition-colors">New York</Link></li>
              <li><Link href="/search?location=portland" className="text-gray-400 hover:text-white transition-colors">Portland</Link></li>
              <li><Link href="/search?location=atlanta" className="text-gray-400 hover:text-white transition-colors">Atlanta</Link></li>
              <li><Link href="/search?location=austin" className="text-gray-400 hover:text-white transition-colors">Austin</Link></li>
              <li><Link href="/search?location=houston" className="text-gray-400 hover:text-white transition-colors">Houston</Link></li>
              <li><Link href="/search?location=dallas" className="text-gray-400 hover:text-white transition-colors">Dallas</Link></li>
              <li><Link href="/search?location=toronto" className="text-gray-400 hover:text-white transition-colors">Toronto</Link></li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li><Link href="/host" className="text-gray-400 hover:text-white transition-colors">List a Pool</Link></li>
              <li><Link href="/host" className="text-gray-400 hover:text-white transition-colors">List Tennis</Link></li>
              <li><Link href="/host" className="text-gray-400 hover:text-white transition-colors">List Pickleball</Link></li>
              <li><Link href="/host" className="text-gray-400 hover:text-white transition-colors">List Basketball</Link></li>
              <li><span className="text-gray-500">Host Resources Center</span></li>
              <li><span className="text-gray-500">Neighbors</span></li>
              <li><span className="text-gray-500">Neighbor Support</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-500 text-sm">Terms of Service</span>
              <span className="text-gray-500 text-sm">Privacy Policy</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">USA ( English )</span>
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