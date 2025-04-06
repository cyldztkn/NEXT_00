// app/posts/[slug]/page.js
// ✅ Head ayarları burada yapılır
export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );
  const post = await res.json();

  return {
    title: `APP ROUTER - ${post.title}`,
    description: post.body,
  };
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return posts.slice(0, 10).map((post) => ({
    slug: post.id.toString(), // route paramı olarak slug
  }));
}

// app/posts/[slug]/page.js
import Link from "next/link";

export default async function PostDetail({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );
  const post = await res.json();

  return (
    <div className="min-h-screen bg-emerald-950 text-white p-6">

      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">APP ROUTER / SINGLE POST</h1>
        <nav className="flex gap-4">
          <Link href="/" className="text-emerald-300 hover:text-white">
            Ana Sayfa
          </Link>
          <Link href="/posts" className="text-emerald-300 hover:text-white">
            Tüm Yazılar
          </Link>
        </nav>
      </header>

      <main>
        <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
        <p className="mb-4">{post.body}</p>
        <div className="p-4 bg-emerald-900 rounded-lg">
          <p>App Router kullanılarak oluşturuldu.</p>
          <p>
            <strong>Slug:</strong> {params.slug}
          </p>
        </div>
      </main>
    </div>
  );
}
