import { PROJECTS } from "../src/data/projects";
import { getAllBlogPosts } from "../src/lib/blog.server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alfredoarvelo.com";
export const dynamic = "force-static";

export default function sitemap() {
  const staticPages = ["", "servicios", "proyectos", "blog", "contacto", "sobre"].map((path) => ({
    url: `${siteUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const projectPages = PROJECTS.filter((p) => p.slug).map((project) => ({
    url: `${siteUrl}/proyectos/${project.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages = getAllBlogPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
