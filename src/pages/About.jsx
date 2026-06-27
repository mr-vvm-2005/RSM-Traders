import { useLanguage } from '../i18n/LanguageContext.jsx'
import { PHONE_NUMBERS, STOCKISTS } from '../utils/whatsapp.js'
import { useSEO } from '../hooks/useSEO.js'
import { useInView } from '../hooks/useInView.js'

function RevealSection({ children, className = '', delay = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`reveal${inView ? ' revealed' : ''} ${delay} ${className}`}>
      {children}
    </div>
  )
}

export default function About() {
  const { t } = useLanguage()

  useSEO(
    'About R.S.M Traders – Wholesale Supplier in Surandai, Tenkasi',
    'Learn about R.S.M Traders – 10+ years of trusted wholesale supply of chocolates, candies, biscuits and more across Surandai and Tenkasi region. Founded by M. Mani Maran.',
    '/about'
  )

  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-4xl">

        {/* Page Title */}
        <RevealSection>
          <h1 className="mb-10 text-center font-display text-4xl font-bold text-honey">
            {t('about.title')}
          </h1>
        </RevealSection>

        {/* Founder Section */}
        <RevealSection delay="delay-100">
          <div className="mb-12 flex flex-col items-center gap-8 rounded-2xl border border-cocoa/60 bg-cocoa/20 p-8 sm:flex-row sm:items-start transition-shadow hover:shadow-xl hover:shadow-gold/10">
            <img
              src="/assets/owner.jpg"
              alt="M. Mani Maran – Founder, R.S.M Traders"
              className="h-44 w-44 flex-shrink-0 rounded-2xl border-4 border-gold object-cover object-top shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div>
              <p className="mb-1 text-sm uppercase tracking-widest text-gold">{t('about.founderLabel')}</p>
              <h2 className="mb-1 font-display text-2xl font-bold text-honey">{t('founder.name')}</h2>
              <p className="mb-3 text-sm font-medium text-gold/80">{t('about.founderRole')}</p>
              <p className="text-cream/85 leading-relaxed">{t('about.body1')}</p>
            </div>
          </div>
        </RevealSection>

        {/* About Story */}
        <RevealSection delay="delay-200">
          <div className="mb-10 space-y-4 rounded-xl border border-cocoa/40 bg-cocoa/10 p-6">
            <p className="text-cream/85 leading-relaxed">{t('about.body2')}</p>
            <p className="text-cream/85 leading-relaxed">{t('about.body3')}</p>
          </div>
        </RevealSection>

        {/* Info Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: '📍',
              label: t('about.headOffice'),
              content: '4/82 Main Road, Venkateswara Puram – 627854',
              delay: 'delay-100',
            },
            {
              icon: '📍',
              label: t('about.branch'),
              content: 'D.No 18/7/240, Sivagurunatha Puram, Surandai – 627859',
              delay: 'delay-200',
            },
            {
              icon: '🕐',
              label: t('about.hours'),
              content: t('contact.hoursValue'),
              delay: 'delay-300',
            },
            {
              icon: '📞',
              label: t('about.contact'),
              content: null, // phone numbers rendered separately
              delay: 'delay-400',
            },
          ].map(({ icon, label, content, delay }) => (
            <RevealSection key={label} delay={delay}>
              <div className="rounded-xl border border-cocoa/60 bg-cocoa/20 p-5 h-full transition-shadow hover:shadow-lg hover:shadow-gold/10">
                <h3 className="mb-2 font-display text-base font-semibold text-gold">
                  {icon} {label}
                </h3>
                {content ? (
                  <p className="text-sm text-cream/80">{content}</p>
                ) : (
                  <>
                    <a href={`tel:+91${PHONE_NUMBERS[0]}`} className="block text-sm text-cream/80 hover:text-honey transition-colors">
                      +91 {PHONE_NUMBERS[0]}
                    </a>
                    <a href={`tel:+91${PHONE_NUMBERS[1]}`} className="block text-sm text-cream/80 hover:text-honey transition-colors">
                      +91 {PHONE_NUMBERS[1]} <span className="text-xs text-cream/50">(Alternate)</span>
                    </a>
                  </>
                )}
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Stockists */}
        <RevealSection delay="delay-200">
          <div className="mb-8 rounded-xl border border-cocoa/60 bg-cocoa/20 p-6">
            <h3 className="mb-4 font-display text-lg font-semibold text-gold">{t('about.stockists')}</h3>
            <div className="flex flex-wrap gap-3">
              {STOCKISTS.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-honey transition-colors hover:bg-gold/20"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* Registration Details */}
        <RevealSection delay="delay-300">
          <div className="rounded-xl border border-cocoa/60 bg-cocoa/20 p-6">
            <h3 className="mb-4 font-display text-lg font-semibold text-gold">{t('about.registration')}</h3>
            <div className="flex flex-col gap-3 text-sm text-cream/80">
              <p>
                <span className="font-semibold text-gold">{t('about.gst')}:</span> 33CNSPG7713H1ZT
              </p>
              <p>
                <span className="font-semibold text-gold">{t('about.fssai')}:</span> 1241902600075
              </p>
            </div>
          </div>
        </RevealSection>

      </div>
    </div>
  )
}
