import { BlogSummary } from './components/BlogSumary';
import { getAllPostSummaries } from '@/lib';
import type { PostSummary } from '@/lib/posts';

export default async function Home() {
  const posts: PostSummary[] = await getAllPostSummaries();

  return (
    <main className="max-w-225 mx-auto my-8 px-4 flex flex-col items-center">
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <>
          {posts.map((p) => (
            <BlogSummary key={p.slug} post={p} />
          ))}
        </>
      )}
    </main>
  );
}
