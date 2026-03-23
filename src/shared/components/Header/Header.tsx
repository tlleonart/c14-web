'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useActiveSection } from '@/shared/hooks/useActiveSection'
import styles from './Header.module.css'

const NAV_LINKS: { href: string; label: string; external?: boolean }[] = [
  { href: '#problema', label: 'El problema' },
  { href: '#agentes', label: 'Agentes' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#gobernanza', label: 'Seguridad' },
  { href: '/blog', label: 'Blog', external: true },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useActiveSection()
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'

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

      if (href === '#top') {
        if (isHome) {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          router.push('/')
        }
        return
      }

      const id = href.replace('#', '')

      if (isHome) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        router.push(`/#${id}`)
      }
    },
    [closeMenu, isHome, router]
  )

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Carbono</span>
          <span className={styles.logoAccent}>14</span>
        </Link>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) =>
            link.external ? (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                className={`${styles.navLink} ${
                  isHome && activeSection === link.href.replace('#', '') ? styles.navLinkActive : ''
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className={styles.ctaGroup}>
          <a
            href={isHome ? '#contacto' : '/#contacto'}
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
            <Link href="/" className={styles.logo} onClick={closeMenu}>
              <span className={styles.logoText}>Carbono</span>
              <span className={styles.logoAccent}>14</span>
            </Link>
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
            {NAV_LINKS.map((link) =>
              link.external ? (
                <Link key={link.href} href={link.href} className={styles.overlayLink} onClick={closeMenu}>
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  className={styles.overlayLink}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
          <a
            href={isHome ? '#contacto' : '/#contacto'}
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
