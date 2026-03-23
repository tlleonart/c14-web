import { convex } from '@/server/convex/client'
import { api } from '../../../../convex/_generated/api'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://carbono-14.net'

export async function GET() {
  let posts: { slug: string; title: string; summary?: string | null; author: string; publishedAt?: number | null; category?: string | null }[] = []

  if (convex) {
    try {
      posts = await convex.query(api.content.listPublished)
    } catch {
      posts = []
    }
  }

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.summary ?? ''}]]></description>
      <pubDate>${post.publishedAt ? new Date(post.publishedAt).toUTCString() : new Date().toUTCString()}</pubDate>
      <author>contacto@carbono-14.net (${post.author})</author>
      ${post.category ? `<category>${post.category}</category>` : ''}
    </item>`
    )
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Carbono14 Blog — IA Operativa</title>
    <link>${siteUrl}/blog</link>
    <description>Artículos técnicos, casos de estudio y guías prácticas sobre IA operativa.</description>
    <language>es</language>
    <atom:link href="${siteUrl}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new Response(rss.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
