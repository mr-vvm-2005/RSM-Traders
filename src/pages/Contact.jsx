import { useLanguage } from '../i18n/LanguageContext.jsx'
import { whatsappLink, PHONE_NUMBERS, CONTACT_EMAIL, MAP_LINK, HEAD_OFFICE, BRANCH, STOCKISTS } from '../utils/whatsapp.js'
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

export default function Contact() {
  const { t } = useLanguage()

  useSEO(
    'Contact R.S.M Traders – Call or WhatsApp for Wholesale Orders | Surandai',
    'Contact R.S.M Traders for wholesale orders. Call +91 9578312345 or WhatsApp us. Located in Surandai & Tenkasi. Open 11 AM – 9 PM.',
    '/contact'
  )

  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-5xl">

        <RevealSection>
          <h1 className="mb-10 text-center font-display text-3xl font-bold text-honey">
            {t('contact.title')}
          </h1>
        </RevealSection>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: Contact Details */}
          <RevealSection delay="delay-100" className="h-full">
            <div className="flex h-full flex-col space-y-6 rounded-xl border border-cocoa/60 bg-cocoa/20 p-6">

              {/* Phone */}
              <div>
                <h2 className="mb-2 font-display text-lg font-semibold text-gold">{t('contact.phone')}</h2>
                <a href={`tel:+91${PHONE_NUMBERS[0]}`} className="block text-cream/85 hover:text-honey transition-colors">
                  📞 +91 {PHONE_NUMBERS[0]}
                </a>
                <a href={`tel:+91${PHONE_NUMBERS[1]}`} className="block text-cream/85 hover:text-honey transition-colors">
                  📞 +91 {PHONE_NUMBERS[1]} <span className="text-xs text-cream/50">(Alternate)</span>
                </a>
              </div>

              {/* Email */}
              <div>
                <h2 className="mb-2 font-display text-lg font-semibold text-gold">{t('contact.email')}</h2>
                <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-cream/85 hover:text-honey transition-colors">
                  ✉️ {CONTACT_EMAIL}
                </a>
              </div>

              {/* Working Hours */}
              <div>
                <h2 className="mb-2 font-display text-lg font-semibold text-gold">{t('contact.hours')}</h2>
                <p className="text-cream/85">🕐 {t('contact.hoursValue')}</p>
              </div>

              {/* Head Office */}
              <div>
                <h2 className="mb-2 font-display text-lg font-semibold text-gold">{t('contact.headOffice')}</h2>
                <p className="text-cream/85">📍 {HEAD_OFFICE}</p>
              </div>

              {/* Branch */}
              <div>
                <h2 className="mb-2 font-display text-lg font-semibold text-gold">{t('contact.branch')}</h2>
                <p className="text-cream/85">📍 {BRANCH}</p>
              </div>

              {/* CTAs */}
              <div className="flex gap-3 pt-2">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine flex flex-1 items-center justify-center rounded-lg bg-gold px-4 py-3 font-semibold text-espresso hover:bg-honey transition-colors"
                >
                  💬 WhatsApp
                </a>
                <a
                  href={`tel:+91${PHONE_NUMBERS[0]}`}
                  className="btn-shine flex flex-1 items-center justify-center rounded-lg border border-gold/50 bg-gold/10 px-4 py-3 font-semibold text-honey hover:bg-gold/20 hover:border-gold transition-colors"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </RevealSection>

          {/* Right: Map + Stockists */}
          <div className="flex flex-col gap-6">
            <RevealSection delay="delay-200">
              <div className="overflow-hidden rounded-xl border border-cocoa/60">
                <h2 className="bg-cocoa/40 px-4 py-3 font-display text-lg font-semibold text-gold">
                  {t('contact.location')}
                </h2>
                {/* C3 FIX: Real Surandai, Tamil Nadu coordinates replacing placeholder 0x0 */}
                <iframe
                  title="R.S.M Traders Location – Surandai, Tamil Nadu"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31552.26!2d77.53999!3d8.98007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f4fac4c51c55%3A0x408e1fdbe06e2e70!2sSurandai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1750000000000!5m2!1sen!2sin"
                  className="h-72 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-cocoa/30 px-4 py-3 text-sm text-gold hover:underline transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </RevealSection>

            <RevealSection delay="delay-300">
              <div className="rounded-xl border border-cocoa/60 bg-cocoa/20 p-6">
                <h2 className="mb-3 font-display text-lg font-semibold text-gold">{t('contact.stockists')}</h2>
                <div className="flex flex-wrap gap-2">
                  {STOCKISTS.map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-sm font-medium text-honey transition-colors hover:bg-gold/20"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </div>

        {/* I1 FIX: Netlify Contact Form for email lead capture */}
        <RevealSection delay="delay-200" className="mt-10">
          <div className="rounded-xl border border-cocoa/60 bg-cocoa/20 p-6">
            <h2 className="mb-1 font-display text-xl font-semibold text-gold">{t('contact.formTitle')}</h2>
            <p className="mb-5 text-sm text-cream/55">{t('contact.formSubtitle')}</p>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.target
                fetch('/', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: new URLSearchParams(new FormData(form)).toString(),
                })
                  .then(() => alert(t('contact.formSuccess')))
                  .catch(() => alert(t('contact.formError')))
                form.reset()
              }}
            >
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot spam filter */}
              <p className="hidden">
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gold/70">
                    {t('contact.formName')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t('contact.formNamePlaceholder')}
                    className="w-full rounded-lg border border-cocoa/60 bg-espresso/60 px-4 py-2.5 text-sm text-cream placeholder-cream/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gold/70">
                    {t('contact.formPhone')} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder={t('contact.formPhonePlaceholder')}
                    className="w-full rounded-lg border border-cocoa/60 bg-espresso/60 px-4 py-2.5 text-sm text-cream placeholder-cream/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gold/70">
                  {t('contact.formMessage')} *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={t('contact.formMessagePlaceholder')}
                  className="w-full resize-none rounded-lg border border-cocoa/60 bg-espresso/60 px-4 py-2.5 text-sm text-cream placeholder-cream/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="btn-shine w-full rounded-lg bg-gold py-3 font-bold text-espresso transition-all hover:bg-honey hover:scale-[1.02] active:scale-95"
              >
                📩 {t('contact.formSubmit')}
              </button>
            </form>
          </div>
        </RevealSection>

      </div>
    </div>
  )
}
