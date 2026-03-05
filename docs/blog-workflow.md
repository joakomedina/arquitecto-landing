# Flujo de Publicación de Blog (Markdown)

## 1) Entrega del cliente (2 artículos por semana)

Para cada artículo, el cliente debe entregar:

- `archivo .md` usando la plantilla `content/blog/_template.md`
- 1 imagen de portada (JPG/PNG)

## 2) Ubicación de archivos en el proyecto

1. Copia el markdown en:
   - `content/blog/<slug-del-articulo>.md`
2. Si necesitas una nueva portada:
   - guárdala en `public/blog/`
   - en frontmatter usa ruta directa: `cover: "/blog/mi-imagen.jpg"`

## 3) Campos obligatorios del frontmatter

- `title`
- `description`
- `excerpt`
- `publishedAt` (YYYY-MM-DD)
- `updatedAt` (YYYY-MM-DD)
- `readingTime` (ej: `6 min`)
- `category` (ej: `Guía`, `Presupuesto`, `Decisión`)
- `cover` (ruta pública, ej: `/blog/mi-imagen.jpg`)
- `coverAlt`
- `keywords` (lista)

## 4) Verificación antes de publicar

```bash
npm run lint
npm run build
```

## 5) Publicación

```bash
git add .
git commit -m "feat(blog): publica nuevos artículos"
git push
```

Luego despliegas en Coolify.
