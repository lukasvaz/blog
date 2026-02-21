import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug } from '@/lib';

type Props = { params: Promise<{ slug: string }> | { slug: string } };

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <article style={{ maxWidth: 900, margin: '32px auto', padding: '0 16px' }}>
      <h1 style={{ marginBottom: 8 }}>{post.title}</h1>
      <p style={{ color: '#666', marginTop: 0 }}>{post.date ?? ''}</p>

      <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6, marginTop: 24 }}>
        {post.content}
      </div>
    </article>
  );
}
  
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post not found' };
  return { title: post.title };
}
