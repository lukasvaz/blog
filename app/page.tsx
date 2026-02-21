import Link from 'next/link';
import { getAllPostSummaries } from '@/lib';
import type { PostSummary } from '@/lib/posts';

export default async function Home() {
  const posts: PostSummary[] = await getAllPostSummaries();

  return (
    <main style={{ maxWidth: 900, margin: '32px auto', padding: '0 16px' }}>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {posts.map((p) => (
            <li key={p.slug} style={{ padding: '16px 0', borderBottom: '1px solid #eee' }}>
              <h2 style={{ margin: 0 }}>
                <Link href={`/posts/${p.slug}`}>{p.title ?? p.slug}</Link>
              </h2>
              {p.subtitle && <p style={{ margin: '8px 0', color: '#666' }}>{p.subtitle}</p>}
              {p.date && <small style={{ color: '#999' }}>{p.date}</small>}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
