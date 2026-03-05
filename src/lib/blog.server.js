import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import cocinaEstandarCover from "../data/fotos-projects/cocina-estandar/cocina-estandar.jpeg";
import loftKitchenCover from "../data/fotos-projects/loft-manhattan/COCINA_2.33.jpg";
import pradosCover from "../data/fotos-projects/casa-prados/12.TVROOM-PORTADA.jpg";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const COVER_MAP = {
  "cocina-estandar": cocinaEstandarCover,
  "loft-kitchen": loftKitchenCover,
  "prados-cover": pradosCover,
};

const resolveImageSrc = (asset) => (typeof asset === "string" ? asset : asset?.src || "");

function resolveCover(coverValue) {
  if (typeof coverValue === "string") {
    if (coverValue.startsWith("http://") || coverValue.startsWith("https://")) {
      return coverValue;
    }

    if (coverValue.startsWith("/")) {
      return coverValue;
    }

    if (coverValue.includes("/")) {
      return `/${coverValue.replace(/^\/+/, "")}`;
    }

    if (COVER_MAP[coverValue]) {
      return resolveImageSrc(COVER_MAP[coverValue]);
    }
  }

  return resolveImageSrc(cocinaEstandarCover);
}

function getPostFiles() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md") && !file.startsWith("_"));
}

function normalizePost(fileName, data, content) {
  const slug = fileName.replace(/\.md$/, "");
  const publishedAt = data.publishedAt || new Date().toISOString().slice(0, 10);
  const updatedAt = data.updatedAt || publishedAt;

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    excerpt: data.excerpt || "",
    publishedAt,
    updatedAt,
    readingTime: data.readingTime || "5 min",
    category: data.category || "Guía",
    cover: resolveCover(data.cover),
    coverAlt: data.coverAlt || data.title || slug,
    keywords: Array.isArray(data.keywords) ? data.keywords : [],
    content,
  };
}

export function getAllBlogPosts() {
  return getPostFiles()
    .map((fileName) => {
      const fullPath = path.join(BLOG_DIR, fileName);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);
      return normalizePost(fileName, data, content);
    })
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

export function getPostBySlug(slug) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return normalizePost(`${slug}.md`, data, content);
}

export function getBlogPostSlugs() {
  return getPostFiles().map((fileName) => fileName.replace(/\.md$/, ""));
}

export async function markdownToHtml(markdown) {
  const processedContent = await remark().use(html).process(markdown || "");
  return processedContent.toString();
}
