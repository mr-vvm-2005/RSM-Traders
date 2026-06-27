import { useLanguage } from '../i18n/LanguageContext.jsx'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO.js'
import { useInView } from '../hooks/useInView.js'

function RevealSection({ children, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`reveal${inView ? ' revealed' : ''} ${className}`}>
      {children}
    </div>
  )
}

export default function NotFound() {
  const { t } = useLanguage()

  useSEO(
    'Page Not Found – R.S.M Traders',
    'The page you are looking for does not exist. Return to R.S.M Traders home page.',
    '/'
  )

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20 text-center">
      <RevealSection>
        <div className="mx-auto max-w-md">
          {/* 404 number */}
          <p className="mb-2 font-display text-8xl font-extrabold text-gold/20 select-none">404</p>

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-4xl">
            🔍
          </div>

          {/* Text */}
          <h1 className="mb-3 font-display text-2xl font-bold text-honey">
            {t('notFound.title')}
          </h1>
          <p className="mb-8 text-cream/60">
            {t('notFound.subtitle')}
          </p>

          {/* CTA */}
          <Link
            to="/"
            className="btn-shine inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3 font-bold text-espresso transition-all hover:scale-105 hover:bg-honey active:scale-95"
          >
            🏠 {t('notFound.goHome')}
          </Link>
        </div>
      </RevealSection>
    </div>
  )
}
