import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const list = query({
  args: {},
  handler: async (ctx) => {
    const clients = await ctx.db
      .query('clients')
      .withIndex('by_displayOrder')
      .order('asc')
      .collect()

    return Promise.all(
      clients.map(async (client) => ({
        _id: client._id,
        _creationTime: client._creationTime,
        name: client.name,
        imageUrl: await ctx.storage.getUrl(client.image),
        url: client.url,
        displayOrder: client.displayOrder,
      }))
    )
  },
})

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl()
  },
})

export const create = mutation({
  args: {
    name: v.string(),
    image: v.id('_storage'),
    url: v.string(),
    displayOrder: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('clients', args)
  },
})

export const update = mutation({
  args: {
    id: v.id('clients'),
    name: v.optional(v.string()),
    image: v.optional(v.id('_storage')),
    url: v.optional(v.string()),
    displayOrder: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args

    if (fields.image) {
      const existing = await ctx.db.get(id)
      if (existing) {
        await ctx.storage.delete(existing.image)
      }
    }

    const updateFields: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) {
        updateFields[key] = value
      }
    }

    await ctx.db.patch(id, updateFields)
  },
})

export const remove = mutation({
  args: {
    id: v.id('clients'),
  },
  handler: async (ctx, args) => {
    const client = await ctx.db.get(args.id)
    if (client) {
      await ctx.storage.delete(client.image)
      await ctx.db.delete(args.id)
    }
  },
})
