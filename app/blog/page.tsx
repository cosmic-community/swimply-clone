import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogGrid from '@/components/BlogGrid'
import { getBlogPosts } from '@/lib/blog'

async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Swimply Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover tips for hosting, stories from our community, and insights into the sharing economy
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <Suspense fallback={<div className="py-20 text-center">Loading posts...</div>}>
          <BlogGrid posts={posts} />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  )
}

export default BlogPage