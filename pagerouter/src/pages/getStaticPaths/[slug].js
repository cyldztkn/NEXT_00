// Sayfa bileşeni
export default function BlogDetail({ post }) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">StaticPaths</h1>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

// build sırasında hangi sayfaların üretileceğini belirler
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.slice(0, 10).map((post) => ({
    params: { slug: post.id.toString() }, // dinamik route: [slug].js
  }));

  return {
    paths,
    fallback: false, // fallback modunu birazdan detaylandıracağım
  };
}

// Her bir sayfanın verisini getirir
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.slug}`
  );
  const post = await res.json();

  return {
    props: { post },
  };
}
