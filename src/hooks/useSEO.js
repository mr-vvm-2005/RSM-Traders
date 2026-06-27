import { useEffect } from 'react'

/**
 * useSEO – Updates <title>, meta[name="description"], og:title, og:description,
 *           og:url, and canonical URL per page.
 * @param {string} title        - Full page title string
 * @param {string} description  - Meta description (≤160 chars ideal)
 * @param {string} [canonical]  - Optional canonical URL path
 */
export function useSEO(title, description, canonical = '') {
  useEffect(() => {
    const BASE_URL = 'https://rsm-traders.netlify.app'

    // Title
    document.title = title

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', description)

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        document.head.appendChild(link)
      }
      link.href = `${BASE_URL}${canonical}`
    }

    // OG tags (title, description, and url)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDesc  = document.querySelector('meta[property="og:description"]')
    const ogUrl   = document.querySelector('meta[property="og:url"]')
    if (ogTitle) ogTitle.setAttribute('content', title)
    if (ogDesc)  ogDesc.setAttribute('content', description)
    if (ogUrl && canonical) ogUrl.setAttribute('content', `${BASE_URL}${canonical}`)
  }, [title, description, canonical])
}
