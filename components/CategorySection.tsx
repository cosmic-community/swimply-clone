import Link from 'next/link'
import { Category } from '@/types'

interface CategorySectionProps {
  categories: Category[]
}

export default function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="py-20 bg-primary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Over 15,000 Swimply's in 125 cities for any occasion.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-white text-lg">
            <span>🐶 Paw parties</span>
            <span>🏡 Family swims</span>
            <span>🥳 Pool parties</span>
            <span>🧖 Solo self care days</span>
            <span>🤑 $50 budget fun</span>
            <span>✨ Night swims</span>
            <span>📸 Photo shoots</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            More than just pools
          </h3>
          <p className="text-blue-100 text-lg mb-8">
            Enjoy a variety of joy filled spaces, always unique, always your own
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 text-center card-hover">
                <div className="text-4xl mb-3">
                  {category.metadata?.icon || '🏊'}
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {category.metadata?.name || category.title}
                </h4>
              </div>
            </Link>
          ))}
          
          {/* Additional categories to match the design */}
          <div className="bg-white rounded-xl p-6 text-center card-hover">
            <div className="text-4xl mb-3">🏀</div>
            <h4 className="font-semibold text-gray-900">Hoops</h4>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center card-hover">
            <div className="text-4xl mb-3">🏠</div>
            <h4 className="font-semibold text-gray-900">Indoor havens</h4>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center card-hover">
            <div className="text-4xl mb-3">🌿</div>
            <h4 className="font-semibold text-gray-900">Backyards</h4>
          </div>
        </div>
      </div>
    </section>
  )
}