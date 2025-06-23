import { Suspense } from 'react'
import Hero from '@/components/Hero'
import PopularDestinations from '@/components/PopularDestinations'
import FeaturedListings from '@/components/FeaturedListings'
import TrustAndSafety from '@/components/TrustAndSafety'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import HostBenefits from '@/components/HostBenefits'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AsSeenOn from '@/components/AsSeenOn'
import StepByStep from '@/components/StepByStep'
import FAQ from '@/components/FAQ'
import MobileApp from '@/components/MobileApp'
import PremiumPass from '@/components/PremiumPass'
import { getListings, getFeaturedLocations } from '@/lib/cosmic'

async function HomePage() {
  const [listings, locations] = await Promise.all([
    getListings(),
    getFeaturedLocations()
  ])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero locations={locations} />
        
        <AsSeenOn />
        
        <StepByStep />
        
        <TrustAndSafety />
        
        <Suspense fallback={<div className="py-20 text-center">Loading destinations...</div>}>
          <PopularDestinations />
        </Suspense>
        
        <Suspense fallback={<div className="py-20 text-center">Loading listings...</div>}>
          <FeaturedListings listings={listings.slice(0, 8)} />
        </Suspense>
        
        <TestimonialCarousel />
        
        <HostBenefits />
        
        <FAQ />
        
        <PremiumPass />
        
        <MobileApp />
      </main>
      
      <Footer />
    </div>
  )
}

export default HomePage