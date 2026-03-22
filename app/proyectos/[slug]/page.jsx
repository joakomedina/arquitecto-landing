import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "../../../src/data/projects";
import { SiteWrapper } from "../../../src/components/layout/SiteWrapper";

const resolveImageSrc = (asset) => (typeof asset === "string" ? asset : asset?.src || "");

const getProject = (slug) => PROJECTS.find((item) => item.slug === slug);

const PROJECT_KEYWORDS = {
  "casa-prados": [
    "remodelación de vivienda unifamiliar en Caracas",
    "reforma integral de vivienda en Caracas",
    "diseño de interiores en vivienda unifamiliar",
  ],
  "loft-manhattan-campo-alegre": [
    "remodelación de loft en Campo Alegre Caracas",
    "diseño de loft moderno en Caracas",
    "reforma de apartamento tipo loft en Caracas",
  ],
  "apartamento-41-loft-manhattan": [
    "remodelación de apartamento en Caracas",
    "reforma interior de apartamento en Caracas",
    "diseño de interiores para apartamentos modernos",
  ],
  "remodelacion-cocina-vivienda-unifamiliar": [
    "remodelación de cocina en Caracas",
    "cocina moderna empotrada en Caracas",
    "diseño de cocina para vivienda unifamiliar",
  ],
  "apartamento-hombre-soltero-remodelacion-parcial": [
    "remodelación parcial de apartamento en Caracas",
    "reforma de habitaciones en apartamento Caracas",
    "diseño de interiores para apartamento moderno",
  ],
};

export function generateStaticParams() {
  return PROJECTS.filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Alfredo Arvelo",
    };
  }

  return {
    title: project.title,
    description: project.intro || `${project.title} - ${project.category} en ${project.location}.`,
    keywords: PROJECT_KEYWORDS[project.slug] || [],
    alternates: {
      canonical: `/proyectos/${project.slug}`,
    },
  };
}

export default async function ProyectoDetallePage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <SiteWrapper>
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-8">
        <div className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/proyectos" className="hover:underline">
            Proyectos
          </Link>{" "}
          / <span>{project.title}</span>
        </div>

        <h1 className="font-serif text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h1>
        <p className="mt-3 text-sm uppercase tracking-wide text-zinc-500">
          {project.category} - {project.location} - {project.year}
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl">
          <img src={resolveImageSrc(project.img)} alt={project.title} className="h-[420px] w-full object-cover" />
        </div>

        {project.intro && (
          <p className="mt-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">{project.intro}</p>
        )}

        {project.facts && (
          <div className="mt-8 rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900">
            <h2 className="font-serif text-2xl font-medium text-zinc-900 dark:text-zinc-100">Ficha técnica</h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {Object.entries(project.facts).map(([key, value]) => (
                <div key={key} className="rounded-xl border border-zinc-200/70 p-3 dark:border-zinc-800">
                  <dt className="text-xs uppercase tracking-wide text-zinc-500">{key}</dt>
                  <dd className="mt-1 text-sm text-zinc-900 dark:text-zinc-200">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {project.contentSections?.map((section, idx) => (
          <section key={idx} className="mt-10">
            <h3 className="font-serif text-2xl font-medium text-zinc-900 dark:text-zinc-100">{section.title}</h3>
            {section.body && <p className="mt-3 text-zinc-600 dark:text-zinc-400">{section.body}</p>}
            {section.images?.length > 0 && (
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {section.images.map((img, imgIdx) => (
                  <img
                    key={`${section.title}-${imgIdx}`}
                    src={resolveImageSrc(img)}
                    alt={`${project.title} - ${section.title} ${imgIdx + 1}`}
                    className="aspect-[4/3] w-full rounded-xl object-cover"
                  />
                ))}
              </div>
            )}
          </section>
        ))}
      </section>
    </SiteWrapper>
  );
}
