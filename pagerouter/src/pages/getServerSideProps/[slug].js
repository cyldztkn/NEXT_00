import Link from "next/link";

export async function getServerSideProps({ params }) {
  // API'den veya veritabanından veri çekme
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  return (
    <div className="min-h-screen bg-indigo-950 text-white p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">GET SERVER SIDE PROPS / SINGLE</h1>
        <nav className="flex gap-4">
          <Link href="/" className="text-indigo-300 hover:text-white">
            Ana Sayfa
          </Link>
          <Link href="/getServerSideProps" className="text-indigo-300 hover:text-white">
            Tüm Yazılar
          </Link>
        </nav>
      </header>

      <main>
        <h2 className="text-2xl font-semibold mb-4">
          <strong>Title: </strong>
          {post.title}
        </h2>
        <p className="mb-4">
          <strong>Body: </strong>
          {post.body}
        </p>
        <div className="p-4 bg-indigo-900 rounded-lg">
          <p>Pages Router kullanılarak oluşturuldu.</p>
          <p>router.query kullanılarak slug değeri alındı: {post.id}</p>
        </div>
      </main>
    </div>
  );
}
