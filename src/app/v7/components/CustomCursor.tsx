'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './CustomCursor.module.css'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
      if (!visible) setVisible(true)
    }

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        setHovering(true)
      }
    }

    const out = (e: MouseEvent) => {
      const target = e.relatedTarget as HTMLElement | null
      if (!target?.closest('a, button, [role="button"], input, textarea, select')) {
        setHovering(false)
      }
    }

    const leave = () => setVisible(false)
    const enter = () => setVisible(true)

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
    }
  }, [visible])

  return (
    <div
      ref={cursorRef}
      className={`${styles.cursor} ${hovering ? styles.hovering : ''} ${visible ? styles.visible : ''}`}
      aria-hidden="true"
    />
  )
}
