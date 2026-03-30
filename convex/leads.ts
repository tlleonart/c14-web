import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

const statusValidator = v.union(
  v.literal('new'),
  v.literal('contacted'),
  v.literal('qualified'),
  v.literal('proposal'),
  v.literal('closed-won'),
  v.literal('closed-lost'),
)

const bantValidator = v.object({
  budget: v.optional(v.string()),
  authority: v.optional(v.string()),
  need: v.optional(v.string()),
  timeline: v.optional(v.string()),
})

// Public mutation — no auth required, used by LP-001, LP-002, LP-003 routers
export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    source: v.union(
      v.literal('lp-001'),
      v.literal('lp-002'),
      v.literal('lp-003'),
    ),
    assignedTo: v.optional(v.string()),
    notes: v.optional(v.string()),
    bant: v.optional(bantValidator),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('leads', {
      ...args,
      status: 'new',
      createdAt: Date.now(),
    })
  },
})

// Backoffice mutation — update pipeline status, notes, assignee, BANT
export const update = mutation({
  args: {
    id: v.id('leads'),
    status: v.optional(statusValidator),
    assignedTo: v.optional(v.string()),
    notes: v.optional(v.string()),
    bant: v.optional(bantValidator),
  },
  handler: async (ctx, { id, ...fields }) => {
    const patch = Object.fromEntries(
      Object.entries(fields).filter(([, val]) => val !== undefined),
    )
    await ctx.db.patch(id, patch)
  },
})

// Returns all leads ordered by createdAt DESC
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query('leads')
      .withIndex('by_createdAt')
      .order('desc')
      .collect()
  },
})

// Returns a single lead by ID
export const getById = query({
  args: { id: v.id('leads') },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id)
  },
})
