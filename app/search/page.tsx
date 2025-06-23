import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SearchPageContent from '@/components/SearchPageContent'

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1">
        <Suspense fallback={
          <div className="container-custom py-20">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        }>
          <SearchPageContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}