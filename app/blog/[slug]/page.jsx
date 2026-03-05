import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteWrapper } from "../../../src/components/layout/SiteWrapper";
import { getAllBlogPosts, getBlogPostSlugs, getPostBySlug, markdownToHtml } from "../../../src/lib/blog.server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alfredoarvelo.com";

export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}/`,
      type: "article",
      images: [
        {
          url: post.cover,
          alt: post.coverAlt,
        },
      ],
    },
  };
}

function formatDate(value) {
  return new Date(value).toLocaleDateString("es-VE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const postHtml = await markdownToHtml(post.content);

  const relatedPosts = getAllBlogPosts()
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: "Alfredo Arvelo",
    },
    publisher: {
      "@type": "Organization",
      name: "Alfredo Arvelo Arquitectura",
      url: siteUrl,
    },
    image: [post.cover],
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}/`,
  };

  return (
    <SiteWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <div className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/blog/" className="hover:underline">
            Blog
          </Link>{" "}
          / <span>{post.title}</span>
        </div>

        <header>
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="rounded-full bg-zinc-100 px-3 py-1 font-semibold uppercase tracking-wide dark:bg-zinc-800">
              {post.category}
            </span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>

          <h1 className="font-serif text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">{post.description}</p>
        </header>

        <img src={post.cover} alt={post.coverAlt} className="mt-8 aspect-[16/10] w-full rounded-3xl object-cover" />

        <div
          className="mt-10 max-w-none text-zinc-700 dark:text-zinc-300 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:font-medium [&_h2]:text-zinc-900 [&_h2]:dark:text-zinc-100 [&_p]:mt-4 [&_p]:leading-relaxed [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-zinc-900 [&_strong]:dark:text-zinc-100 [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-4"
          dangerouslySetInnerHTML={{ __html: postHtml }}
        />

        <div className="mt-10 rounded-2xl bg-zinc-50 p-5 text-sm text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
          <p>
            <strong>Categoría:</strong> {post.category}
          </p>
          {post.keywords?.length > 0 && (
            <p className="mt-2">
              <strong>Temas:</strong> {post.keywords.join(" • ")}
            </p>
          )}
        </div>

        <section className="mt-12 rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="font-serif text-2xl font-medium text-zinc-900 dark:text-zinc-100">¿Quieres aplicar esto en tu proyecto?</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Podemos revisar tu caso y definir una ruta clara de alcance, tiempos y presupuesto para tu remodelación.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contacto/" className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800">
              Solicitar diagnóstico
            </Link>
            <Link
              href="/servicios/"
              className="rounded-xl border border-zinc-300 px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Ver servicios
            </Link>
          </div>
        </section>
      </article>

      {relatedPosts.length > 0 && (
        <section className="mx-auto mb-20 max-w-4xl px-4 md:px-8">
          <h2 className="font-serif text-2xl font-medium text-zinc-900 dark:text-zinc-100">Artículos relacionados</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}/`}
                className="rounded-xl border border-zinc-200/70 p-4 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
              >
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{related.category}</p>
                <p className="mt-2 font-medium text-zinc-900 dark:text-zinc-100">{related.title}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </SiteWrapper>
  );
}
