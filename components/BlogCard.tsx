import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

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

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="card card-hover">
        {post.metadata.featured_image && (
          <div className="relative aspect-video overflow-hidden">
            <img
              src={`${post.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {post.metadata.category && (
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.metadata.category}
                </span>
              </div>
            )}
          </div>
        )}
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          {post.metadata.excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.metadata.excerpt}
            </p>
          )}
          
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            {post.metadata.publish_date && (
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.metadata.publish_date).toLocaleDateString()}</span>
              </div>
            )}
            {post.metadata.read_time && (
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.metadata.read_time}</span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}