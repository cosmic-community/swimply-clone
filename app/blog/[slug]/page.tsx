import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getBlogPost, getBlogPosts } from '@/lib/blog'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Back Button */}
        <div className="container-custom py-8">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="container-custom pb-20">
          <header className="mb-8">
            {post.metadata.category && (
              <div className="mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {post.metadata.category}
                </span>
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              {post.metadata.publish_date && (
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(post.metadata.publish_date).toLocaleDateString()}</span>
                </div>
              )}
              {post.metadata.read_time && (
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.metadata.read_time}</span>
                </div>
              )}
            </div>

            {post.metadata.featured_image && (
              <div className="aspect-video rounded-xl overflow-hidden mb-8">
                <img
                  src={`${post.metadata.featured_image.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            {post.metadata.content && (
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.metadata.content }}
              />
            )}
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default BlogPostPage