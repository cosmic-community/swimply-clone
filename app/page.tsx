import { Suspense } from 'react'
import Hero from '@/components/Hero'
import CategorySection from '@/components/CategorySection'
import FeaturedListings from '@/components/FeaturedListings'
import HowItWorks from '@/components/HowItWorks'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getCategories, getListings, getFeaturedLocations } from '@/lib/cosmic'

async function HomePage() {
  const [categories, listings, locations] = await Promise.all([
    getCategories(),
    getListings(),
    getFeaturedLocations()
  ])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero locations={locations} />
        
        <Suspense fallback={<div className="py-20 text-center">Loading categories...</div>}>
          <CategorySection categories={categories} />
        </Suspense>
        
        <Suspense fallback={<div className="py-20 text-center">Loading listings...</div>}>
          <FeaturedListings listings={listings.slice(0, 6)} />
        </Suspense>
        
        <HowItWorks />
      </main>
      
      <Footer />
    </div>
  )
}

export default HomePage