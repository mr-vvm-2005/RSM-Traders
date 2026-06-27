import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [location])

  // Add shadow when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/',         label: t('nav.home') },
    { to: '/products', label: t('nav.products') },
    { to: '/about',    label: t('nav.about') },
    { to: '/contact',  label: t('nav.contact') },
  ]

  const linkClass = ({ isActive }) =>
    `relative pb-0.5 text-sm font-medium transition-colors hover:text-gold ${
      isActive ? 'text-gold' : 'text-cream/80'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b border-cocoa/60 bg-espresso/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

        {/* Logo */}
        <NavLink
          to="/"
          className="font-display text-xl font-bold tracking-wide text-honey transition-opacity hover:opacity-80"
          aria-label="R.S.M Traders – Home"
        >
          R.S.M Traders
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {({ isActive }) => (
                <>
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="rounded-full border border-gold/60 px-3 py-1 text-sm font-medium text-honey transition-all hover:bg-gold/10 hover:border-gold active:scale-95"
          >
            {lang === 'en' ? 'EN | தமிழ்' : 'தமிழ் | EN'}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-honey transition-transform active:scale-90"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        className={`overflow-hidden border-t border-cocoa/60 bg-espresso transition-all duration-300 md:hidden ${
          open ? 'max-h-64 py-3' : 'max-h-0'
        }`}
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `block px-6 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-cocoa/50 text-gold border-l-2 border-gold'
                  : 'text-cream/80 hover:text-gold hover:bg-cocoa/30'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
