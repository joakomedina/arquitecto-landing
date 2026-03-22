import Link from "next/link";
import { SiteWrapper } from "../../src/components/layout/SiteWrapper";
import { PROJECTS } from "../../src/data/projects";

const resolveImageSrc = (asset) => (typeof asset === "string" ? asset : asset?.src || "");

export const metadata = {
  title: "Proyectos de remodelación de apartamentos en Caracas",
  description:
    "Portafolio de proyectos de remodelación e interiorismo en Caracas: cocinas, baños, viviendas y apartamentos.",
  keywords: [
    "proyectos de remodelación de apartamentos en Caracas",
    "proyectos de diseño de interiores en Caracas",
    "remodelaciones residenciales en Venezuela",
    "reformas de cocinas modernas",
    "remodelación de baños modernos",
    "diseño de interiores contemporáneo",
  ],
  alternates: {
    canonical: "/proyectos",
  },
};

function groupByCategory(items) {
  return items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
}

export default function ProyectosPage() {
  const grouped = groupByCategory(PROJECTS);
  const orderedCategories = Object.keys(grouped).sort();

  return (
    <SiteWrapper>
      <section className="mx-auto max-w-6xl px-4 pt-16 md:px-8">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl">
          Proyectos de remodelación en Caracas
        </h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          Esta selección muestra reformas residenciales y de interiorismo con enfoque funcional y criterio
          contemporáneo. Cada ficha documenta alcance, tipología y decisiones clave de diseño.
        </p>
      </section>

      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-8">
        <h2 className="font-serif text-3xl font-medium text-zinc-900 dark:text-zinc-100">Explora por tipología</h2>
        <div className="mt-8 space-y-12">
          {orderedCategories.map((category) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{category}</h3>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[category].map((project) => (
                  <article
                    key={project.slug}
                    className="overflow-hidden rounded-2xl border border-zinc-200/70 bg-white dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    <img
                      src={resolveImageSrc(project.img)}
                      alt={project.title}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-serif text-lg font-medium text-zinc-900 dark:text-zinc-100">{project.title}</h4>
                      <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">
                        {project.location} - {project.year}
                      </p>
                      {project.intro && (
                        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {project.intro.slice(0, 150)}...
                        </p>
                      )}
                      <Link
                        href={`/proyectos/${project.slug}`}
                        className="mt-4 inline-block text-sm font-semibold text-zinc-800 underline-offset-4 hover:underline dark:text-zinc-200"
                      >
                        Ver proyecto completo
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-20 mt-14 max-w-6xl px-4 md:px-8">
        <h2 className="font-serif text-3xl font-medium text-zinc-900 dark:text-zinc-100">Preguntas frecuentes</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl bg-zinc-50 p-5 dark:bg-zinc-900">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              ¿Qué tipo de proyectos atienden en Caracas?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Reformas de apartamentos, cocinas, baños, habitaciones y remodelaciones residenciales integrales.
            </p>
          </article>
          <article className="rounded-xl bg-zinc-50 p-5 dark:bg-zinc-900">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">¿Puedo cotizar con una visita inicial?</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Sí. El proceso inicia con diagnóstico del espacio para definir alcance, tiempo y presupuesto objetivo.
            </p>
          </article>
        </div>
        <div className="mt-6">
          <Link href="/contacto" className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800">
            Solicitar presupuesto
          </Link>
        </div>
      </section>
    </SiteWrapper>
  );
}
