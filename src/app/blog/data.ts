import type { BlogPost } from './types'

/**
 * Blog posts data — placeholder structure for Alexia's content.
 * Will be migrated to Convex queries when Dante adds the content table.
 */
export const BLOG_POSTS: BlogPost[] = [
  // Posts will be added by Alexia — this array is the content source.
  // Example structure:
  // {
  //   slug: 'por-que-ia-operativa',
  //   title: '¿Por qué IA operativa y no IA generativa para procesos críticos?',
  //   excerpt: 'La diferencia entre un agente que improvisa y uno que opera con reglas claras.',
  //   content: '<p>Contenido HTML del artículo...</p>',
  //   category: 'ia-operativa',
  //   author: 'Carbono14',
  //   publishedAt: '2026-03-25',
  //   readTime: 5,
  // },
]

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug)
  if (!current) return getAllPosts().slice(0, limit)

  return getAllPosts()
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0
      const bMatch = b.category === current.category ? 1 : 0
      return bMatch - aMatch
    })
    .slice(0, limit)
}
