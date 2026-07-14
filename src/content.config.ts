import { defineCollection, z } from "astro:content";
import { getBlogPosts } from "./lib/wordpress";

const blog = defineCollection({
  loader: async () => {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
      id: post.id,
      data: {
        title: post.title,
        description: post.description,
        content: post.content,
        pubDate: post.pubDate,
        author: post.author,
        authorSlug: post.authorSlug,
        image: post.image,
        tags: post.tags,
        category: post.category,
        categorySlug: post.categorySlug,
      },
    }));
  },
  schema: z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    authorSlug: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    categorySlug: z.string().optional(),
  }),
});

export const collections = { blog };
