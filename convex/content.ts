import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const contentType = v.union(
  v.literal("blog_post"),
  v.literal("linkedin_post"),
  v.literal("email"),
  v.literal("white_paper"),
  v.literal("case_study"),
);

const contentStatus = v.union(
  v.literal("idea"),
  v.literal("draft"),
  v.literal("in_review"),
  v.literal("approved"),
  v.literal("scheduled"),
  v.literal("published"),
  v.literal("archived"),
);

export const list = query({
  args: {
    status: v.optional(contentStatus),
    type: v.optional(contentType),
  },
  handler: async (ctx, args) => {
    if (args.type && args.status) {
      return await ctx.db
        .query("content")
        .withIndex("by_type_status", (q) =>
          q.eq("type", args.type!).eq("status", args.status!),
        )
        .order("desc")
        .collect();
    }
    if (args.status) {
      return await ctx.db
        .query("content")
        .withIndex("by_status", (q) => q.eq("status", args.status!))
        .order("desc")
        .collect();
    }
    if (args.type) {
      return await ctx.db
        .query("content")
        .withIndex("by_type", (q) => q.eq("type", args.type!))
        .order("desc")
        .collect();
    }
    return await ctx.db.query("content").order("desc").collect();
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("content")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const listPublished = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("content")
      .withIndex("by_status", (q) => q.eq("status", "published"))
      .order("desc")
      .collect();
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    type: contentType,
    body: v.optional(v.string()),
    summary: v.optional(v.string()),
    author: v.string(),
    tags: v.optional(v.array(v.string())),
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("content", {
      ...args,
      status: "idea",
      version: 1,
    });
  },
});

export const publish = mutation({
  args: { id: v.id("content") },
  handler: async (ctx, args) => {
    const doc = await ctx.db.get(args.id);
    if (!doc) throw new Error("Content not found");
    await ctx.db.patch(args.id, {
      status: "published",
      publishedAt: Date.now(),
    });
  },
});
