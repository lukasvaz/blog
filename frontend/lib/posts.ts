import { error } from 'console';
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
}
const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;


//get post summaries from strapi
export async function getAllPostSummaries(): Promise<PostSummary[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/blogs?fields[0]=title&fields[1]=slug&fields[2]=subtitle&fields[3]=date&populate=thumbnail`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch post summaries');
    }
    const data = await res.json();
    const summaries = data.data.map((item: any) => ({
      slug: item.slug,
      title: item.title,
      subtitle: item.subtitle,
      date: item.date,
      thumbnail: item.thumbnail?.url ? `${STRAPI_URL}${item.thumbnail?.url}` : null,
    }));
    return summaries;   
  } catch (e) {
    console.error('Error fetching post summaries', e);
    return [];
  }
}

// get post from strapi by slug
export async function getPostBySlug(search: string): Promise<Post | null> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/blogs?filters[slug][$eq]=${search}&populate=thumbnail`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch post');
    }
    const data = await res.json();
    const item = data.data[0];
    if (!item) {
      return null;
    }
    return {
      slug: item.slug,
      title: item.title,
      subtitle: item.subtitle,
      date: item.date,
      thumbnail: item.thumbnail?.data?.attributes?.url || null,
      content: item.content || '',
    }
  } catch {
    console.error('Error fetching post');
    return null;
  }
}
   
