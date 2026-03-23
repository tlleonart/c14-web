export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: 'ia-operativa' | 'gobernanza' | 'tecnico'
  author: string
  publishedAt: string
  readTime: number
  heroImage?: string
}

export const CATEGORY_LABELS: Record<BlogPost['category'], string> = {
  'ia-operativa': 'IA Operativa',
  gobernanza: 'Gobernanza',
  tecnico: 'Técnico',
}

export const CATEGORY_STYLES: Record<
  BlogPost['category'],
  { bg: string; color: string; border: string }
> = {
  'ia-operativa': {
    bg: 'rgba(212,64,48,0.1)',
    color: 'var(--primary)',
    border: '1px solid rgba(212,64,48,0.2)',
  },
  gobernanza: {
    bg: 'rgba(45,58,140,0.1)',
    color: 'var(--blue-label)',
    border: '1px solid rgba(45,58,140,0.2)',
  },
  tecnico: {
    bg: 'rgba(96,200,120,0.1)',
    color: 'var(--success)',
    border: '1px solid rgba(96,200,120,0.2)',
  },
}
