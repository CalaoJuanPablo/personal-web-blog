import { directus, getIsPreviewMode } from "../directus";
import { readItems, type Query } from "@directus/sdk";
import type { BlogPost, Schema } from "@/types/directus";

type PostFields = BlogPost["id"] | keyof BlogPost;

type GetAllPostsOptions = Query<Schema, BlogPost>;

interface GetPostBySlugOptions {
  fields?: PostFields[];
}

/**
 * Get multiple posts
 */
export async function getPosts(
  options?: GetAllPostsOptions,
): Promise<BlogPost[]> {
  const isPreviewMode = await getIsPreviewMode();

  const query: Query<Schema, BlogPost> = {
    fields: options?.fields || ["*"],
  };

  if (options?.limit) query.limit = options.limit;
  if (options?.offset) query.offset = options.offset;
  if (options?.sort) query.sort = options.sort;
  if (options?.filter) {
    query.filter = {
      ...options.filter,
      ...(!isPreviewMode && { status: { _eq: "published" } }),
    };
  }

  return await directus.request(readItems("blog_post", query));
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(
  slug: string,
  options?: GetPostBySlugOptions,
): Promise<BlogPost | null> {
  const isPreviewMode = await getIsPreviewMode();

  const query: Query<Schema, BlogPost> = {
    fields: options?.fields || ["*"],
    filter: {
      slug: { _eq: slug },
      ...(!isPreviewMode && { status: { _eq: "published" } }),
    },
    limit: 1,
  };

  const results = await directus.request(readItems("blog_post", query));
  return results.length > 0 ? results[0] : null;
}
