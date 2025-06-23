import BlogCard from './BlogCard'

interface BlogPost {
  id: string
  title: string
  slug: string
  metadata: {
    excerpt?: string
    featured_image?: {
      imgix_url: string
    }
    publish_date?: string
    read_time?: string
    category?: string
  }
}

interface BlogGridProps {
  posts: BlogPost[]
  showTitle?: boolean
}

export default function BlogGrid({ posts, showTitle = false }: BlogGridProps) {
  return (
    <section className="py-16">
      <div className="container-custom">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from our blog
            </h2>
            <p className="text-xl text-gray-600">
              Tips, stories, and insights from the Swimply community
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}