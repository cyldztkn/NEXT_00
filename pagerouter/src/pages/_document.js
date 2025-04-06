import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="tr">
      <Head>{/* <title>PAGEROUTER</title> */}</Head>
      <body className="antialiased">
        <header className="flex  wrap-normal p-8 items-center justify-center bg-indigo-950 text-white text-2xl">
          PAGEROUTER
        </header>
        <nav className="flex items-center justify-center gap-6">
          <Link href="/">Ana Sayfa</Link> |<Link href="/about">Hakkında</Link> |
          <Link href="/blog">Blog</Link> |
          <Link href="/posts">Posts</Link> |
          <Link href="/getServerSideProps">SSProps</Link> |
          <Link href="/getStaticPaths">Static Paths</Link> |
        </nav>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
