import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
  readKey: process.env.COSMIC_READ_KEY || ''
})

export interface BlogPost {
  id: string
  title: string
  slug: string
  status: string
  metadata: {
    excerpt?: string
    content?: string
    featured_image?: {
      imgix_url: string
    }
    publish_date?: string
    read_time?: string
    category?: string
    author?: {
      title: string
      metadata?: {
        name?: string
        bio?: string
        avatar?: {
          imgix_url: string
        }
      }
    }
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog-posts' })
      .props(['id', 'title', 'slug', 'status', 'metadata'])
      .depth(1)
      .sort('metadata.publish_date')
    
    return response.objects.filter((post: BlogPost) => post.status === 'published')
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return []
    }
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'blog-posts', slug })
      .props(['id', 'title', 'slug', 'status', 'metadata'])
      .depth(1)
    
    if (response.object.status !== 'published') {
      return null
    }
    
    return response.object
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getFeaturedBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'blog-posts',
        'metadata.featured': true 
      })
      .props(['id', 'title', 'slug', 'status', 'metadata'])
      .depth(1)
      .limit(limit)
      .sort('metadata.publish_date')
    
    return response.objects.filter((post: BlogPost) => post.status === 'published')
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return []
    }
    console.error('Error fetching featured blog posts:', error)
    return []
  }
}