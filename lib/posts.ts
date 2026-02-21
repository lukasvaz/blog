import fs from 'fs/promises';
import path from 'path';

const postsDir = path.join(process.cwd(), 'data', 'posts');

export async function getPostBySlug(slug: string) {
  const file = path.join(postsDir, `${slug}.md`);
  try {
    const raw = await fs.readFile(file, 'utf8');
    const match = raw.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)/);
    const frontmatter: Record<string, string> = {};
    if (match) {
      for (const line of match[1].split('\n')) {
        const [k, ...v] = line.split(':');
        frontmatter[k.trim()] = v.join(':').trim();
      }
    }
    const content = match ? match[2].trim() : raw;
    return { slug, frontmatter, content };
  } catch (err) {
    return null;
  }
}

export async function getAllPosts() {
  try {
    const files = await fs.readdir(postsDir);
    return files
      .filter((f) => f.endsWith('.md'))
      .map((f) => ({ slug: f.replace(/\.md$/, '') }));
  } catch {
    return [];
  }
}
