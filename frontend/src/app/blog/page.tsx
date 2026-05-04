import { getPosts } from "@/lib/services";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
