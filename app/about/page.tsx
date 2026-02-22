export default function About() {
  return (
    <main style={{ maxWidth: 900, margin: '32px auto', padding: '0 16px' }}>
      <h1>About me</h1>

      <p>
        I’m a web developer focused on building fast, accessible, and maintainable
        web applications with Next.js and React. I enjoy writing about technical
        topics, learning new tools, and improving developer experience.
      </p>

      <section style={{ marginTop: 24 }}>
        <h2>Experience</h2>
        <p>Worked on frontend and full-stack projects using React, TypeScript and Node.js.</p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Skills</h2>
        <ul>
          <li>Next.js / React</li>
          <li>TypeScript</li>
          <li>HTML & CSS (Tailwind)</li>
          <li>Markdown / MDX</li>
        </ul>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Contact</h2>
        <p>
          You can reach me at <a href="mailto:you@example.com">you@example.com</a> or connect on
          social links in the footer.
        </p>
        <p>
          Download resume: <a href="/resume.pdf">resume.pdf</a> (if available)
        </p>
      </section>
    </main>
  );
}
