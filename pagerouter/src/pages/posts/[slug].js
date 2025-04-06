import { useRouter } from "next/router";
import Link from "next/link";

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="min-h-screen bg-indigo-950 text-white p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Blog Detay Sayfası</h1>
        <nav className="flex gap-4">
          <Link href="/" className="text-indigo-300 hover:text-white">
            Ana Sayfa
          </Link>
          <Link href="/posts" className="text-indigo-300 hover:text-white">
            Tüm Yazılar
          </Link>
        </nav>
      </header>

      <main>
        <h2 className="text-2xl font-semibold mb-4">Post: {slug}</h2>
        <p className="mb-4">Bu bir dinamik blog post sayfasıdır.</p>
        <div className="p-4 bg-indigo-900 rounded-lg">
          <p>Pages Router kullanılarak oluşturuldu.</p>
          <p>
            router.query kullanılarak slug değeri alındı:{" "}
            <span className="font-mono bg-indigo-800 px-2 py-1 rounded">
              {slug}
            </span>
          </p>
        </div>
      </main>
    </div>
  );
}
