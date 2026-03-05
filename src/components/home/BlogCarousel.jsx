"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function formatDate(value) {
  return new Date(value).toLocaleDateString("es-VE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogCarousel({ posts = [] }) {
  const [index, setIndex] = useState(0);
  const safePosts = useMemo(() => posts.filter(Boolean), [posts]);

  if (!safePosts.length) return null;

  const current = safePosts[index];
  const prev = () => setIndex((i) => (i - 1 + safePosts.length) % safePosts.length);
  const next = () => setIndex((i) => (i + 1) % safePosts.length);

  return (
    <section id="blog-home" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Blog
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Ideas y guías prácticas para tomar mejores decisiones de diseño y remodelación.
          </p>
        </div>

        <Link href="/blog/" className="text-sm font-semibold text-zinc-800 underline-offset-4 hover:underline dark:text-zinc-200">
          Ver todos
        </Link>
      </div>

      <article className="overflow-hidden rounded-3xl border border-zinc-200/70 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="grid md:grid-cols-2">
          <img src={current.cover} alt={current.coverAlt} className="h-64 w-full object-cover md:h-full" />

          <div className="flex flex-col p-6 md:p-8">
            <div className="mb-3 flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="rounded-full bg-zinc-100 px-3 py-1 font-semibold uppercase tracking-wide dark:bg-zinc-800">
                {current.category}
              </span>
              <span>{current.readingTime}</span>
              <span>•</span>
              <span>{formatDate(current.publishedAt)}</span>
            </div>

            <h3 className="font-serif text-2xl font-medium leading-tight text-zinc-900 dark:text-zinc-100">
              {current.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{current.excerpt}</p>

            <div className="mt-6 flex items-center justify-between">
              <Link
                href={`/blog/${current.slug}/`}
                className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Leer artículo
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Artículo anterior"
                  className="rounded-full border border-zinc-300 p-2 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Artículo siguiente"
                  className="rounded-full border border-zinc-300 p-2 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-4 flex justify-center gap-2">
        {safePosts.map((post, dotIndex) => (
          <button
            key={post.slug}
            type="button"
            onClick={() => setIndex(dotIndex)}
            aria-label={`Ir al artículo ${dotIndex + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${dotIndex === index ? "bg-zinc-900 dark:bg-zinc-100" : "bg-zinc-300 dark:bg-zinc-700"}`}
          />
        ))}
      </div>
    </section>
  );
}
