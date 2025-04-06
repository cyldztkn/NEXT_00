import Link from "next/link";

export async function getServerSideProps() {
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
      <h1 className="text-3xl font-bold mb-4">Blog Listesi</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/getServerSideProps/${post.id}`} className="hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
