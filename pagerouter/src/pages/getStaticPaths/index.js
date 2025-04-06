import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts: posts.slice(0, 10), // sadece 10 tane gösterelim
    },
  };
}

export default function BlogList({ posts }) {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">Static Paths</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/getStaticPaths/${post.id}`} className="hover:underline">
             - {post.title.slice(0,12)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
