import Link from "next/link";
import Head from "next/head";

export async function generateMetadata() {
  return {
    title: "APP ROUTER - Tüm YAzılar",
    description: "Tüm Yazılar",
  };
}

export default async function Posts({ params }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>

      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">APP ROUTER / POSTS</h1>
        <nav className="flex gap-4">
          <Link href="/" className="text-emerald-300 hover:text-white">
            Ana Sayfa
          </Link>
          <Link href="/posts" className="text-emerald-300 hover:text-white">
            Tüm Yazılar
          </Link>
        </nav>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.slice(0, 10).map((post) => (
          <div key={post.id} className="bg-emerald-900 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
            <Link
              href={`/posts/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              Devamını Oku
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}
