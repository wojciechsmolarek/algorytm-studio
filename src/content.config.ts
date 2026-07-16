import { defineCollection, z } from "astro:content";
import { getBlogPosts } from "./lib/wordpress";

const blog = defineCollection({
  loader: async () => {
    const posts = await getBlogPosts();
    return posts.map((post) => ({
      id: post.id,
      title: post.title,
      description: post.description,
      content: post.content,
      pubDate: post.pubDate,
      author: post.author,
      authorSlug: post.authorSlug,
      authorDescription: post.authorDescription,
      authorAvatar: post.authorAvatar,
      authorRole: post.authorRole,
      authorExpertise: post.authorExpertise,
      authorPhoto: post.authorPhoto,
      image: post.image,
      tags: post.tags,
      category: post.category,
      categorySlug: post.categorySlug,
    }));
  },
  schema: z.object({
    title: z.string(),
    description: z.string(),
    content: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    authorSlug: z.string(),
    authorDescription: z.string().optional(),
    authorAvatar: z.string().optional(),
    authorRole: z.string().optional(),
    authorExpertise: z.string().optional(),
    authorPhoto: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    categorySlug: z.string().optional(),
  }),
});

export const collections = { blog };
