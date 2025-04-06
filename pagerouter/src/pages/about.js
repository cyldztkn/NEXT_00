import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="">
      <Head>
        <title>Hakkında - Next.js Pages Router</title>
        <meta name="description" content="Hakkında Sayfası" />
      </Head>

      <header className="">
        <h1>Next.js Pages Router Örneği</h1>
        <nav>
          <Link href="/">Ana Sayfa</Link> | 
          <Link href="/about">Hakkında</Link> | 
          <Link href="/blog">Blog</Link>
        </nav>
      </header>

      <main className="">
        <h2>Hakkında</h2>
        <p>Bu proje Next.js Pages Router&apos;ı öğrenmek için oluşturuldu.</p>
      </main>
    </div>
  );
}