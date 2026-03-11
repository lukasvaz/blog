import fs from 'fs/promises';
import path from 'path';

// Type declarations for blog posts
export interface PostSummary {
  slug: string;
  title?: string;
  subtitle?: string;
  date?: string;
  thumbnail?: string;
}

export interface Post extends PostSummary {
  content: string;
  frontmatter: Record<string, string>;
}


// New: read post summaries from data/post-summaries.json
export async function getAllPostSummaries(): Promise<PostSummary[]> {
  try {
    const file = path.join(process.cwd(), 'data','posts', 'post-summaries.json');
    const raw = await fs.readFile(file, 'utf8');
    const parsed = JSON.parse(raw) as PostSummary[];
    return parsed;
  } catch {
    return [];
  }
}

// Refactor: return full posts from data/posts.json (useful for testing / CMS fallback)
export async function getAllPosts(): Promise<Post[]> {
  try {
    const file = path.join(process.cwd(), 'data','posts', 'posts.json');
    const raw = await fs.readFile(file, 'utf8');
    const parsed = JSON.parse(raw) as Post[];
    return parsed;
  } catch {
    return [];
  }
}

// Refactor: search posts.json by title or slug
export async function getPostBySlug(search: string): Promise<Post | null> {
  try {
    const posts = await getAllPosts();
    const found = posts.find((p) => p.slug === search || p.title === search);
    return found ?? null;
  } catch {
    return null;
  }
}
