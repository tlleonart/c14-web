'use client'

import { useState, useEffect } from 'react'

const SECTION_IDS = ['problema', 'agentes', 'metodologia', 'gobernanza', 'testimonios']

export function useActiveSection(threshold = 0.3): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[]

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        threshold,
        rootMargin: `-${68}px 0px -40% 0px`,
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])

  return activeSection
}
