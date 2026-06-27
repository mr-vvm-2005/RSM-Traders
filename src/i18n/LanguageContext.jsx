import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'
import en from './en.json'
import ta from './ta.json'

const dictionaries = { en, ta }

const LanguageContext = createContext(null)

function getNested(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('rsm_lang') || 'en')

  useEffect(() => {
    localStorage.setItem('rsm_lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = useMemo(() => {
    return (key) => {
      const value = getNested(dictionaries[lang], key)
      if (value !== null) return value
      const fallback = getNested(dictionaries.en, key)
      return fallback !== null ? fallback : key
    }
  }, [lang])

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'ta' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
