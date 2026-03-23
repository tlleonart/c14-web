/**
 * SVG icons for section cards — Brand Guidelines v2.0 §6.4
 * ViewBox: 0 0 28 28, stroke: 1.5px, linecap/linejoin: round, fill: none
 * Color applied via CSS parent (.iconSvg class)
 */

interface IconProps {
  className?: string
}

export function IconScale({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <line x1="14" y1="4" x2="14" y2="22" />
      <line x1="9" y1="22" x2="19" y2="22" />
      <line x1="5" y1="9" x2="23" y2="9" />
      <polygon points="14,3 15.5,4.5 14,6 12.5,4.5" strokeWidth="1.2" />
      <polyline points="5,9 3,16 9,16 7,9" />
      <line x1="3" y1="16" x2="9" y2="16" />
      <polyline points="21,9 19,16 25,16 23,9" />
      <line x1="19" y1="16" x2="25" y2="16" />
    </svg>
  )
}

export function IconShield({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <path d="M14,2.5 L24,7 L24,14 C24,20 19.5,24 14,26 C8.5,24 4,20 4,14 L4,7 Z" />
      <polyline points="9.5,14 12.5,17.5 18.5,11" />
    </svg>
  )
}

export function IconClipboard({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="4" width="18" height="21" rx="2" />
      <rect x="10" y="2" width="8" height="4" rx="1" />
      <line x1="9" y1="11" x2="19" y2="11" />
      <line x1="9" y1="15" x2="19" y2="15" />
      <line x1="9" y1="19" x2="15" y2="19" />
    </svg>
  )
}

export function IconBox({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="10" width="22" height="15" rx="1.5" />
      <polyline points="3,10 7,4 14,4" />
      <polyline points="25,10 21,4 14,4" />
      <line x1="14" y1="4" x2="14" y2="10" />
      <line x1="3" y1="10" x2="25" y2="10" />
      <line x1="14" y1="10" x2="14" y2="17" />
    </svg>
  )
}

export function IconBuilding({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <polyline points="2,11 14,3.5 26,11" />
      <line x1="3" y1="11" x2="25" y2="11" />
      <line x1="7" y1="11" x2="7" y2="22" />
      <line x1="14" y1="11" x2="14" y2="22" />
      <line x1="21" y1="11" x2="21" y2="22" />
      <line x1="3" y1="22" x2="25" y2="22" />
      <line x1="4" y1="24.5" x2="24" y2="24.5" />
    </svg>
  )
}

export function IconDocument({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <path d="M7,2.5 L18,2.5 L23,7.5 L23,25.5 L7,25.5 Z" />
      <polyline points="18,2.5 18,7.5 23,7.5" />
      <line x1="10" y1="12" x2="20" y2="12" />
      <line x1="10" y1="16" x2="20" y2="16" />
      <line x1="10" y1="20" x2="16" y2="20" />
    </svg>
  )
}

export function IconLink({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="3" strokeWidth="1.8" />
      <circle cx="14" cy="4" r="2" />
      <line x1="14" y1="6" x2="14" y2="11" />
      <circle cx="14" cy="24" r="2" />
      <line x1="14" y1="17" x2="14" y2="22" />
      <circle cx="4.5" cy="19" r="2" />
      <line x1="6.2" y1="17.8" x2="11.5" y2="15.5" />
      <circle cx="23.5" cy="19" r="2" />
      <line x1="21.8" y1="17.8" x2="16.5" y2="15.5" />
    </svg>
  )
}

export function IconChart({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <line x1="4" y1="3" x2="4" y2="24" />
      <line x1="4" y1="24" x2="25" y2="24" />
      <rect x="7" y="16" width="3.5" height="8" rx="0.5" />
      <rect x="12.5" y="10" width="3.5" height="14" rx="0.5" />
      <rect x="18" y="6" width="3.5" height="18" rx="0.5" />
      <polyline points="8.5,14 14,8.5 19.5,4.5" opacity="0.5" />
    </svg>
  )
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="11" />
      <polyline points="9,14.5 12.5,18 19,10.5" />
    </svg>
  )
}
