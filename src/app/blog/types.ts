export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  publishedAt: string
  readTime: number
  heroImage?: string
}

const DEFAULT_STYLE = {
  bg: 'rgba(212,64,48,0.1)',
  color: 'var(--primary)',
  border: '1px solid rgba(212,64,48,0.2)',
}

const STYLE_MAP: Record<string, { bg: string; color: string; border: string }> = {
  'ia-operativa': DEFAULT_STYLE,
  'ia operativa': DEFAULT_STYLE,
  gobernanza: {
    bg: 'rgba(45,58,140,0.1)',
    color: 'var(--blue-label)',
    border: '1px solid rgba(45,58,140,0.2)',
  },
  seguridad: {
    bg: 'rgba(45,58,140,0.1)',
    color: 'var(--blue-label)',
    border: '1px solid rgba(45,58,140,0.2)',
  },
  tecnico: {
    bg: 'rgba(96,200,120,0.1)',
    color: 'var(--success)',
    border: '1px solid rgba(96,200,120,0.2)',
  },
  técnico: {
    bg: 'rgba(96,200,120,0.1)',
    color: 'var(--success)',
    border: '1px solid rgba(96,200,120,0.2)',
  },
}

export function getCategoryStyle(category: string) {
  const key = category.toLowerCase().trim()
  return STYLE_MAP[key] ?? DEFAULT_STYLE
}

export function getCategoryLabel(category: string): string {
  return category || 'IA Operativa'
}
