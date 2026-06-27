import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard.jsx'
import { useSEO } from '../hooks/useSEO.js'
import { useInView } from '../hooks/useInView.js'

const CATEGORIES = [
  'Chocolates',
  'Candies',
  'Lollipops',
  'Eclairs',
  'Wafers',
  'Gems',
  'Cones',
  'Biscuits & Bakery',
  'Jelly & Juice',
  'Palkova sweets',
  'Chips',
  'Kadalai Mittai',
  'Traditional Snacks',
  "90's Candy",
  'Kinder Joy',
  'Kids Toys',
]

function RevealSection({ children, className = '', delay = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`reveal${inView ? ' revealed' : ''} ${delay} ${className}`}>
      {children}
    </div>
  )
}

export default function Products() {
  const { t } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.includes(initialCategory) ? initialCategory : 'All'
  )

  useSEO(
    'Our Products – Wholesale Chocolates, Candies & More | R.S.M Traders',
    'Browse our full range of wholesale products — chocolates, candies, biscuits, wafers, lollipops, kinder joy, traditional snacks and kids items. Contact for best rates.',
    '/products'
  )

  useEffect(() => {
    if (activeCategory === 'All') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', activeCategory)
    }
    setSearchParams(searchParams, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory])

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return products
    return products.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-6xl">

        <RevealSection>
          <h1 className="mb-2 text-center font-display text-3xl font-bold text-honey">
            {t('products.title')}
          </h1>
          <p className="mb-8 text-center text-sm text-cream/50">
            {filtered.length} {activeCategory === 'All' ? 'products available' : `products in ${activeCategory}`}
          </p>
        </RevealSection>

        {/* Category filter pills */}
        <RevealSection delay="delay-100">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {['All', ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-gold bg-gold text-espresso shadow-md shadow-gold/20'
                    : 'border-cocoa/60 text-cream/80 hover:border-gold/60 hover:text-gold hover:scale-105'
                }`}
              >
                {cat === 'All' ? t('products.all') : cat}
              </button>
            ))}
          </div>
        </RevealSection>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-cream/60">{t('products.empty')}</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
