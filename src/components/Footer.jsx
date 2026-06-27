import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { PHONE_NUMBERS, CONTACT_EMAIL, whatsappLink } from '../utils/whatsapp.js'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-cocoa/60 bg-cocoa/30 px-4 pt-10 pb-6 text-sm text-cream/70">
      <div className="mx-auto max-w-6xl">

        {/* Top grid */}
        <div className="mb-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3">

          {/* Brand column */}
          <div>
            <p className="mb-2 font-display text-xl font-bold text-honey">R.S.M Traders</p>
            <p className="text-sm leading-relaxed text-cream/60">
              Trusted wholesale supplier of chocolates, candies, biscuits &amp; kids products across Surandai and Tenkasi region.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-3 font-semibold uppercase tracking-widest text-gold/80 text-xs">{t('footer.quickLinks')}</p>
            <ul className="space-y-2">
              {[
                { to: '/',         label: t('nav.home') },
                { to: '/products', label: t('nav.products') },
                { to: '/about',    label: t('nav.about') },
                { to: '/contact',  label: t('nav.contact') },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="transition-colors hover:text-gold hover:pl-1 inline-block duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="mb-3 font-semibold uppercase tracking-widest text-gold/80 text-xs">{t('footer.contact')}</p>
            <ul className="space-y-2">
              <li>
                <a href={`tel:+91${PHONE_NUMBERS[0]}`} className="hover:text-honey transition-colors">
                  📞 +91 {PHONE_NUMBERS[0]}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="break-all hover:text-honey transition-colors">
                  ✉️ {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-honey transition-colors"
                >
                  💬 WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cocoa/60 pt-5">
          <div className="flex flex-col items-center gap-2 text-center text-xs text-cream/40">
            <p>GSTIN: 33CNSPG7713H1ZT &nbsp;·&nbsp; FSSAI: 1241902600075</p>
            <p>© {new Date().getFullYear()} R.S.M Traders. {t('footer.rights')}</p>
            <a
              href="https://site-studio-in.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold hover:underline transition-colors"
            >
              {t('footer.credit')}
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
