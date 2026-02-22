'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/lib/routes';
export function Header() {
  const pathname = usePathname() || '/';
  const isPosts = pathname === ROUTES.POSTS || pathname === ROUTES.HOME;
  const isAbout = pathname.startsWith(ROUTES.ABOUT);

  return (
    <header className='py-4 border-b border-soft-foreground/20 mb-8'>
      <div className='flex items-center justify-between max-w-3xl mx-auto px-4'>
        <div className='text-2xl font-bold'>
          <Link href="/">Dev Blogs</Link>
        </div>
        <nav>
          <span className='flex gap-4'>
            <Link
              href='/'
              aria-current={isPosts ? 'page' : undefined}
              className={isPosts ? 'text-foreground' : 'text-soft-foreground'}
            >
              Posts
            </Link>

            <Link
              href='/about'
              aria-current={isAbout ? 'page' : undefined}
              className={isAbout ? 'text-foreground' : 'text-soft-foreground'}
            >
              About me
            </Link>
          </span>
        </nav>
      </div>
    </header>
  );
}
