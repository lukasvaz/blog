import Link from 'next/link';
import Image from 'next/image';
import type { PostSummary } from '@/lib/posts';

export function BlogSummary({ post }: { post: PostSummary }) {
  return (
    <article className="w-full  py-4 border-b border-soft-foreground/20">
      <Link href={`/posts/${post.slug}`} className="text-inherit no-underline flex items-start gap-4">
        <div className="flex-1">
          <h2 className="m-0 text-3xl font-semibold">
            {post.title ?? post.slug}
          </h2>

          {post.subtitle && (
            <p className="mt-2 text-gray-600">{post.subtitle}</p>
          )}

        <div className="flex items-center gap-3 text-gray-500 mt-2 text-sm">
          {post.date && <time className="text-sm">{post.date}</time>}
        </div>
      </div>

      <div className="shrink-0">
        {post.thumbnail ? (
          <Image
            src={post.thumbnail}
            alt={post.title ?? post.slug}
            width={200}
            height={150}
            className="object-cover rounded"
          />
        ) : (
          <div className="w-40 h-24 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>
        </Link>
    </article>
  );
}   
