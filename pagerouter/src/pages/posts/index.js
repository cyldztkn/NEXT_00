import Link from "next/link";
export default function Posts() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-2 pb-20 gap-4 sm:p-6 font-[family-name:var(--font-geist-sans)]">
      <nav className="flex items-center justify-center gap-6 text-lg font-semibold text-gray-700 dark:text-gray-200">
        <Link href="/posts/1">Post1</Link> | 
        <Link href="/posts/2">Post2</Link>
      </nav>
      <h1>Posts</h1>
      <p>Posts sayfasi</p>
    </div>
  );
}
