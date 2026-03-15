'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useActiveSection } from '@/shared/hooks/useActiveSection'
import styles from './Header.module.css'

const NAV_LINKS = [
  { href: '#problema', label: 'El problema' },
  { href: '#agentes', label: 'Agentes' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#gobernanza', label: 'Gobernanza' },
  { href: '#testimonios', label: 'Clientes' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      closeMenu()
      const id = href.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    [closeMenu]
  )

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          href="#top"
          className={styles.logo}
          onClick={(e) => handleNavClick(e, '#top')}
        >
          <span className={styles.logoText}>Carbono</span>
          <span className={styles.logoAccent}>14</span>
        </a>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                activeSection === link.href.replace('#', '') ? styles.navLinkActive : ''
              }`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.ctaGroup}>
          <a
            href="#contacto"
            className={styles.ctaButton}
            onClick={(e) => handleNavClick(e, '#contacto')}
          >
            Hablemos
          </a>
          <button
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.overlay}>
          <div className={styles.overlayHeader}>
            <a href="#top" className={styles.logo} onClick={(e) => handleNavClick(e, '#top')}>
              <span className={styles.logoText}>Carbono</span>
              <span className={styles.logoAccent}>14</span>
            </a>
            <button
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Cerrar menú"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className={styles.overlayNav}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.overlayLink}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            className={styles.overlayCta}
            onClick={(e) => handleNavClick(e, '#contacto')}
          >
            Hablemos
          </a>
        </div>
      )}
    </header>
  )
}
