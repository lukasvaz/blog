import Link from 'next/link';

export function Header() {

  return (
    <header  style={{ padding: '1rem', borderBottom: '1px solid #eaeaea' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 700 }}>
          <Link href="/">Dev Blogs</Link>
        </div>

        <nav>

          <span style={{ display: 'inline-block' }}>
            <Link className={"text-soft-foreground"} href="/" style={{ marginRight: 12 }}>Posts</Link>
            <Link href="/about" className={"text-soft-foreground"}>About me </Link>
          </span>
        </nav>
      </div>
    </header>
  );
}
