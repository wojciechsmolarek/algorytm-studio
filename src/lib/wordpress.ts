const WP_API = "https://api.algorytm.studio/wp-json/wp/v2";

export interface WPTerm {
  taxonomy: string;
  name: string;
  slug: string;
}

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  author: number;
  _embedded?: {
    author?: { name: string; slug: string; description?: string; avatar_urls?: { [key: string]: string } }[];
    "wp:featuredmedia"?: { source_url: string }[];
    "wp:term"?: WPTerm[][];
  };
}

export interface WPUser {
  id: number;
  name: string;
  slug: string;
  description: string;
  avatar_urls?: { [key: string]: string };
  acf?: {
    rola?: string;
    ekspertyza?: string;
    cytat?: string;
    zdjecie?: string;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  pubDate: Date;
  author: string;
  authorSlug: string;
  image: string | undefined;
  tags: string[];
  category: string | undefined;
  categorySlug: string | undefined;
}

export interface Author {
  id: number;
  name: string;
  slug: string;
  description: string;
  avatar: string;
  role: string | undefined;
  expertise: string | undefined;
  quote: string | undefined;
  photo: string | undefined;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  count: number;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

async function fetchPosts(params: Record<string, string> = {}): Promise<WPPost[]> {
  try {
    const query = new URLSearchParams({ _embed: "1", per_page: "100", ...params });
    const res = await fetch(`${WP_API}/posts?${query.toString()}`);
    if (!res.ok) return [];
    return (await res.json()) as WPPost[];
  } catch {
    return [];
  }
}

function transformPost(post: WPPost): BlogPost {
  const terms = post._embedded?.["wp:term"]?.flat() ?? [];
  const tags = terms
    .filter((t) => t.taxonomy === "post_tag")
    .map((t) => t.name);
  const cat = terms.find((t) => t.taxonomy === "category");

  return {
    id: post.slug,
    title: stripHtml(post.title.rendered),
    description: stripHtml(post.excerpt.rendered),
    content: post.content.rendered,
    pubDate: new Date(post.date),
    author: post._embedded?.author?.[0]?.name ?? "Studio Algorytm",
    authorSlug: post._embedded?.author?.[0]?.slug ?? "",
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
    tags,
    category: cat?.name,
    categorySlug: cat?.slug,
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await fetchPosts();
  return posts.map(transformPost);
}

export async function getAllAuthors(): Promise<Author[]> {
  try {
    const res = await fetch(`${WP_API}/users?per_page=100`);
    if (!res.ok) return [];
    const users = (await res.json()) as WPUser[];
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      slug: user.slug,
      description: user.description || "",
      avatar: user.avatar_urls?.["96"] ?? "",
      role: user.acf?.rola,
      expertise: user.acf?.ekspertyza,
      quote: user.acf?.cytat,
      photo: user.acf?.zdjecie,
    }));
  } catch {
    return [];
  }
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  try {
    const res = await fetch(`${WP_API}/users?slug=${slug}&per_page=1`);
    if (!res.ok) return null;
    const users = (await res.json()) as WPUser[];
    if (!users.length) return null;
    const user = users[0];
    return {
      id: user.id,
      name: user.name,
      slug: user.slug,
      description: user.description || "",
      avatar: user.avatar_urls?.["96"] ?? "",
      role: user.acf?.rola,
      expertise: user.acf?.ekspertyza,
      quote: user.acf?.cytat,
      photo: user.acf?.zdjecie,
    };
  } catch {
    return null;
  }
}

export async function getPostsByAuthor(authorSlug: string): Promise<BlogPost[]> {
  const authors = await getAllAuthors();
  const author = authors.find((a) => a.slug === authorSlug);
  if (!author) return [];
  const posts = await fetchPosts({ author: String(author.id) });
  return posts.map(transformPost);
}

export async function getAllCategories(): Promise<Category[]> {
  try {
    const res = await fetch(`${WP_API}/categories?per_page=100`);
    if (!res.ok) return [];
    const cats = (await res.json()) as WPCategory[];
    return cats
      .filter((c) => c.slug !== "uncategorized" && c.count > 0)
      .map((c) => ({ id: c.id, name: c.name, slug: c.slug, count: c.count }));
  } catch {
    return [];
  }
}

export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  try {
    const catRes = await fetch(`${WP_API}/categories?slug=${categorySlug}&per_page=1`);
    if (!catRes.ok) return [];
    const cats = (await catRes.json()) as WPCategory[];
    if (!cats.length) return [];
    const posts = await fetchPosts({ categories: String(cats[0].id) });
    return posts.map(transformPost);
  } catch {
    return [];
  }
}
