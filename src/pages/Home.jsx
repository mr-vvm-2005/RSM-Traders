import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { whatsappLink, PHONE_NUMBERS } from '../utils/whatsapp.js'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard.jsx'
import { useSEO } from '../hooks/useSEO.js'
import { useInView } from '../hooks/useInView.js'

function RevealSection({ children, className = '', delay = '', direction = '' }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`reveal ${direction}${inView ? ' revealed' : ''} ${delay} ${className}`}>
      {children}
    </div>
  )
}

/* ─── Category config ─────────────────────────── */
const CATEGORIES = [
  { key: 'chocolates',          name: 'Chocolates',             emoji: '🍫' },
  { key: 'candies',             name: 'Candies',                emoji: '🍬' },
  { key: 'lollipops',           name: 'Lollipops',              emoji: '🍭' },
  { key: 'eclairs',             name: 'Eclairs',                emoji: '🍮' },
  { key: 'wafers',              name: 'Wafers',                 emoji: '🥞' },
  { key: 'gems',                name: 'Gems',                   emoji: '💎' },
  { key: 'cones',               name: 'Cones',                  emoji: '🍦' },
  { key: 'biscuitsBakery',      name: 'Biscuits & Bakery',      emoji: '🍪' },
  { key: 'jellyJuice',          name: 'Jelly & Juice',          emoji: '🧃' },
  { key: 'palkovaSweets',       name: 'Palkova sweets',         emoji: '🍮' },
  { key: 'chips',               name: 'Chips',                  emoji: '🥔' },
  { key: 'kadalaiMittai',       name: 'Kadalai Mittai',         emoji: '🥜' },
  { key: 'traditionalSnacks',   name: 'Traditional Snacks',     emoji: '🌽' },
  { key: '90sCandy',            name: "90's Candy",             emoji: '🎉' },
  { key: 'kinderJoy',           name: 'Kinder Joy',             emoji: '🥚' },
  { key: 'kidsToys',            name: 'Kids Toys',              emoji: '🪀' },
]

const WHY_ITEMS = [
  { key: 'experience', icon: '🏆' },
  { key: 'trusted',    icon: '🤝' },
  { key: 'pricing',    icon: '💰' },
  { key: 'stock',      icon: '📦' },
]

/* ─── Animated counter hook ──────────────────── */
function useCountUp(target, duration = 1200, suffix = '') {
  const [display, setDisplay] = useState('0')
  const numericTarget = parseInt(target.replace(/\D/g, ''), 10)
  const hasSuffix = target.includes('+')

  useEffect(() => {
    let start = 0
    const step = Math.ceil(numericTarget / (duration / 30))
    const timer = setInterval(() => {
      start = Math.min(start + step, numericTarget)
      setDisplay(start + (hasSuffix ? '+' : ''))
      if (start >= numericTarget) clearInterval(timer)
    }, 30)
    return () => clearInterval(timer)
  }, [numericTarget, duration, hasSuffix])

  return display
}

/* ─── StatBox with counter ───────────────────── */
function StatBox({ value, label }) {
  const count = useCountUp(value)
  return (
    <div className="text-center">
      <p className="anim-count-up font-display text-2xl font-bold text-gold sm:text-3xl">{count}</p>
      <p className="text-xs text-cream/60 sm:text-sm">{label}</p>
    </div>
  )
}

/* ─── Ticker items ───────────────────────────── */
const TICKER = [
  'Oshon Vijay','Allwin Jelly','Yawin','Chocolates',
  'Candies','Wafers','Biscuits','Lollipops','Kinder Joy',
  '90\'s Candy','Kids Toys','Traditional Sweets',
]

export default function Home() {
  const { t } = useLanguage()
  const featured = products.slice(0, 8)

  useSEO(
    'R.S.M Traders – Wholesale Chocolates, Candies & Biscuits | Surandai, Tenkasi',
    'R.S.M Traders is a trusted wholesale supplier of chocolates, candies, biscuits, wafers and kids products in Surandai, Tenkasi. 10+ years of reliable supply.',
    '/'
  )

  return (
    <div>

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section className="hero-mesh relative overflow-hidden pb-28 pt-14 text-center">

        {/* ── Background blur blobs ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="particle" style={{ width:260, height:260, top:'-8%',  left:'-6%',  animationDelay:'0s',   opacity:0.25 }} />
          <div className="particle" style={{ width:200, height:200, top:'10%',  right:'-5%', animationDelay:'2.5s', opacity:0.18 }} />
          <div className="particle" style={{ width:150, height:150, bottom:'12%', left:'5%',  animationDelay:'1.2s', opacity:0.15 }} />
          <div className="particle" style={{ width:120, height:120, bottom:'5%', right:'10%', animationDelay:'3.5s', opacity:0.20 }} />
        </div>

        {/* ── Orbital dashed rings ── */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="orbit-ring anim-orbit"     style={{ width:340, height:340, marginLeft:-170, marginTop:-170 }} />
          <div className="orbit-ring anim-orbit-rev" style={{ width:430, height:430, marginLeft:-215, marginTop:-215 }} />
        </div>

        {/* ── Logo with proper circle crop ── */}
        <div className="anim-scale-in relative mx-auto mb-6 flex items-center justify-center" style={{ width:160, height:160, animationDelay:'0ms' }}>
          {/* Glow ring */}
          <span className="anim-pulse-ring absolute inset-0 rounded-full" />
          {/* Gold border ring */}
          <span className="absolute inset-0 rounded-full border-4 border-gold shadow-2xl shadow-gold/40" />
          {/* Logo – correct circle crop: wrapper clips, image fills */}
          <div className="anim-float relative z-10 h-36 w-36 overflow-hidden rounded-full"
               style={{ border: '4px solid transparent' }}>
            <img
              src="/assets/logo.jpg"
              alt="R.S.M Traders Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* ── Region sub-label ── */}
        <p className="anim-fade-up mb-3 text-xs uppercase tracking-[0.32em] text-gold/85"
           style={{ animationDelay: '120ms' }}>
          {t('hero.subRegion')}
        </p>

        {/* ── Shimmer headline ── */}
        <h1 className="hero-shimmer anim-fade-up mb-1 px-4 font-display text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '220ms' }}>
          R.S.M Traders
        </h1>

        {/* ── Tagline ── */}
        <p className="anim-fade-up mb-2 px-4 font-display text-xl font-semibold text-honey sm:text-2xl"
           style={{ animationDelay: '340ms' }}>
          {t('hero.tagline')}
        </p>

        {/* ── Description ── */}
        <p className="anim-fade-up mx-auto mb-10 max-w-md px-6 text-sm leading-relaxed text-cream/60"
           style={{ animationDelay: '440ms' }}>
          {t('hero.desc')}
        </p>

        {/* ── CTA Buttons ── */}
        <div className="anim-fade-up flex flex-wrap items-center justify-center gap-4 px-4"
             style={{ animationDelay: '540ms' }}>
          <Link
            to="/products"
            className="group relative overflow-hidden rounded-xl bg-gold px-9 py-4 font-bold text-espresso shadow-xl shadow-gold/25 transition-all duration-300 hover:scale-105 hover:bg-honey hover:shadow-gold/40 active:scale-95"
          >
            {/* shine sweep */}
            <span className="absolute inset-0 -translate-x-full bg-white/20 skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative z-10">{t('hero.shopNow')} →</span>
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border-2 border-gold/50 bg-gold/8 px-9 py-4 font-bold text-honey backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gold hover:bg-gold/20 active:scale-95"
          >
            💬 {t('hero.whatsapp')}
          </a>
        </div>

        {/* ── Stats bar ── */}
        <div className="anim-fade-up mx-auto mt-14 grid max-w-xl grid-cols-3 divide-x divide-gold/20 overflow-hidden rounded-2xl border border-gold/20 bg-cocoa/30 px-4 py-5 backdrop-blur-sm"
             style={{ animationDelay: '640ms' }}>
          <StatBox value="10+" label={t('hero.statYears')} />
          <StatBox value="16+" label={t('hero.statCats')} />
          <StatBox value="2"   label={t('hero.statOffices')} />
        </div>

        {/* ── Scroll indicator ── */}
        <div className="scroll-dot anim-fade-in" style={{ animationDelay: '900ms' }} />
      </section>

      {/* ══════════════════════════════════════
          TICKER STRIP
      ══════════════════════════════════════ */}
      <div className="ticker-wrap overflow-hidden border-y border-gold/20 bg-cocoa/40 py-3 select-none">
        <div className="anim-ticker flex whitespace-nowrap">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i} className="mx-8 font-display text-sm font-semibold tracking-wide text-gold/75">
              ✦ {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          CATEGORIES
      ══════════════════════════════════════ */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <p className="mb-2 text-center text-xs uppercase tracking-[0.25em] text-gold/65">
              {t('categories.browse')}
            </p>
            <h2 className="mb-10 text-center font-display text-3xl font-bold text-honey">
              {t('categories.title')}
            </h2>
          </RevealSection>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {CATEGORIES.map((cat, i) => (
              <RevealSection key={cat.key} delay={`delay-${Math.min((i % 6 + 1) * 100, 600)}`}>
                <Link
                  to={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="card-hover group flex flex-col items-center gap-2.5 rounded-2xl border border-cocoa/60 bg-cocoa/20 px-3 py-5 text-center h-full"
                >
                  <span className="text-3xl transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(212,166,74,0.6)]">
                    {cat.emoji}
                  </span>
                  <span className="font-display text-xs font-semibold leading-tight text-cream/90 transition-colors group-hover:text-gold">
                    {t(`categories.${cat.key}`)}
                  </span>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURED PRODUCTS
      ══════════════════════════════════════ */}
      <section className="bg-cocoa/10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <p className="mb-2 text-center text-xs uppercase tracking-[0.25em] text-gold/65">
              {t('featured.topPicks')}
            </p>
            <h2 className="mb-10 text-center font-display text-3xl font-bold text-honey">
              {t('featured.title')}
            </h2>
          </RevealSection>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <RevealSection delay="delay-200">
            <div className="mt-10 text-center">
              <Link
                to="/products"
                className="btn-shine inline-flex items-center gap-2 rounded-xl border border-gold/50 px-8 py-3 font-semibold text-honey transition-all hover:scale-105 hover:bg-gold/10"
              >
                {t('featured.viewAll')}
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════════ */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <p className="mb-2 text-center text-xs uppercase tracking-[0.25em] text-gold/65">
              {t('why.promise')}
            </p>
            <h2 className="mb-12 text-center font-display text-3xl font-bold text-honey">
              {t('why.title')}
            </h2>
          </RevealSection>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_ITEMS.map(({ key, icon }, i) => (
              <RevealSection key={key} delay={`delay-${(i + 1) * 100}`}>
                <div className="card-hover glass-card rounded-2xl p-7 text-center h-full">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-2xl">
                    {icon}
                  </div>
                  <h3 className="mb-2 font-display text-base font-bold text-honey">{t(`why.${key}`)}</h3>
                  <p className="text-sm leading-relaxed text-cream/65">{t(`why.${key}Desc`)}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOUNDER
      ══════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-cocoa/30 to-espresso px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-center text-xs uppercase tracking-[0.25em] text-gold/65">
            {t('founder.leadership')}
          </p>
          <div className="glass-card flex flex-col items-center gap-8 rounded-3xl p-8 sm:flex-row sm:items-start sm:text-left">
            {/* Founder photo – proper circle crop */}
            <div className="relative flex-shrink-0">
              <span className="anim-pulse-ring absolute inset-0 rounded-full" />
              <div className="relative z-10 h-36 w-36 overflow-hidden rounded-full border-4 border-gold shadow-xl shadow-gold/20">
                <img
                  src="/assets/owner.jpg"
                  alt="M. Mani Maran – Founder"
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top' }}
                />
              </div>
            </div>
            <div>
              <h2 className="mb-0.5 font-display text-2xl font-bold text-honey">{t('founder.title')}</h2>
              <p className="mb-0.5 font-semibold text-gold">{t('founder.name')}</p>
              <p className="mb-4 text-xs uppercase tracking-widest text-cream/45">{t('founder.role')}</p>
              <p className="text-sm leading-relaxed text-cream/80">{t('founder.intro')}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['tag1','tag2','tag3','tag4'].map((k) => (
                  <span key={k} className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs text-honey">
                    {t(`founder.${k}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section className="px-4 py-20">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-[#3d2011] via-cocoa/60 to-espresso p-10 text-center shadow-2xl">
          {/* Corner glow blobs */}
          <span className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-gold/12 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-gold/12 blur-3xl" />

          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-gold/65">{t('cta.getInTouch')}</p>
          <h2 className="mb-2 font-display text-3xl font-bold text-honey">{t('cta.title')}</h2>
          <p className="mb-8 text-sm text-cream/65">{t('cta.subtitle')}</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-gold px-8 py-4 font-bold text-espresso shadow-lg shadow-gold/25 transition-all hover:scale-105 hover:bg-honey active:scale-95"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10">💬 {t('cta.whatsapp')}</span>
            </a>
            <a
              href={`tel:+91${PHONE_NUMBERS[0]}`}
              className="rounded-xl border-2 border-gold/50 bg-gold/8 px-8 py-4 font-bold text-honey transition-all hover:scale-105 hover:border-gold hover:bg-gold/20 active:scale-95"
            >
              📞 {t('cta.call')}
            </a>
          </div>

          {/* Stockist badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-cream/35">{t('cta.stockists')}</span>
            {['Oshon Vijay', 'Allwin Jelly', 'Yawin'].map((b) => (
              <span key={b} className="rounded-full border border-gold/20 bg-gold/5 px-3 py-0.5 text-xs text-honey/75">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
