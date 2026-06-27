import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { whatsappLink, PHONE_NUMBERS } from '../utils/whatsapp.js'
import { useInView } from '../hooks/useInView.js'

function PlaceholderImage({ name }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-cocoa/40">
      <span className="px-3 text-center font-display text-sm text-honey/70">{name}</span>
    </div>
  )
}

export default function ProductCard({ product }) {
  const { t, lang } = useLanguage()
  const [imgError, setImgError] = useState(false)
  const [ref, inView] = useInView()
  const hasRealImage = product.image && product.image !== 'placeholder'
  const displayName = lang === 'ta' && product.nameTa ? product.nameTa : product.name

  return (
    <div
      ref={ref}
      className={`reveal scale-up${inView ? ' revealed' : ''} group overflow-hidden rounded-xl border border-cocoa/60 bg-cocoa/20 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg hover:shadow-gold/10`}
    >
      {/* Product image */}
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-gradient-to-br from-cocoa/40 to-espresso/80 p-3">
        {hasRealImage && !imgError ? (
          <img
            src={product.image}
            alt={displayName}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <PlaceholderImage name={displayName} />
        )}
        {/* Category badge */}
        <span className="absolute top-2 left-2 rounded-full bg-espresso/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold/90 backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      {/* Product info */}
      <div className="p-3">
        <h3 className="mb-0.5 font-display text-sm font-semibold leading-snug text-cream line-clamp-2">
          {displayName}
        </h3>
        <p className="mb-2 text-xs text-gold/80">
          {product.price === 'Contact for Price' ? t('products.contactForPrice') : product.price}
        </p>

        {/* Order buttons – fixed height, no-wrap text */}
        <div className="flex gap-1.5">
          <a
            href={whatsappLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine flex flex-1 items-center justify-center gap-1 rounded-lg bg-gold py-2 text-xs font-bold text-espresso transition-colors hover:bg-honey whitespace-nowrap"
          >
            💬 WhatsApp
          </a>
          <a
            href={`tel:+91${PHONE_NUMBERS[0]}`}
            className="btn-shine flex flex-1 items-center justify-center gap-1 rounded-lg border border-gold/50 bg-gold/10 py-2 text-xs font-bold text-honey transition-colors hover:bg-gold/20 hover:border-gold whitespace-nowrap"
          >
            📞 {t('products.callNow')}
          </a>
        </div>
      </div>
    </div>
  )
}
