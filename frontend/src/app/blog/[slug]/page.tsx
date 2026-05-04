import { getPostBySlug, getAssetUrl } from "@/lib/services";
import { markdownToHtml } from "@/lib/markdown";
import { notFound } from "next/navigation";
import { directus } from "@/lib/directus";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const { title, date_published, content, featured_image } = post;
  const markdownContent = await markdownToHtml(content ?? "");
  const featuredImageUrl = await getAssetUrl(featured_image ?? "");

  return (
    <article>
      <h1>{title}</h1>
      <time>{date_published}</time>
      <picture>
        <img src={featuredImageUrl} alt={title} />
      </picture>
      <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
    </article>
  );
}
