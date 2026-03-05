import Link from "next/link";
import { SiteWrapper } from "../../src/components/layout/SiteWrapper";
import { getAllBlogPosts } from "../../src/lib/blog.server";

const posts = getAllBlogPosts();
const blogCategories = [...new Set(posts.map((post) => post.category))];

export const metadata = {
  title: "Blog de arquitectura y remodelación en Caracas",
  description:
    "Artículos prácticos sobre remodelación residencial, diseño interior y decisiones de presupuesto en Caracas.",
  keywords: [
    "blog arquitectura Caracas",
    "remodelación de apartamentos Caracas",
    "diseño de interiores Caracas",
    "presupuesto remodelación vivienda",
  ],
  alternates: {
    canonical: "/blog/",
  },
};

function formatDate(value) {
  return new Date(value).toLocaleDateString("es-VE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <SiteWrapper>
      <section className="mx-auto max-w-6xl px-4 pt-16 md:px-8">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl">
          Blog de arquitectura y remodelación
        </h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          Contenido editorial para ayudarte a decidir mejor en tu proyecto: costos, alcances, tiempos y criterios de
          diseño aplicados a Caracas.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {blogCategories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-20 mt-12 max-w-6xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-2xl border border-zinc-200/70 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <Link href={`/blog/${post.slug}/`} className="block">
                <img
                  src={post.cover}
                  alt={post.coverAlt}
                  className="aspect-[16/10] w-full object-cover"
                />
              </Link>

              <div className="p-5">
                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                  <span>•</span>
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </div>

                <h2 className="font-serif text-2xl font-medium leading-tight text-zinc-900 dark:text-zinc-100">
                  <Link href={`/blog/${post.slug}/`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}/`}
                  className="mt-5 inline-flex text-sm font-semibold text-zinc-800 underline-offset-4 hover:underline dark:text-zinc-200"
                >
                  Leer artículo
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteWrapper>
  );
}
