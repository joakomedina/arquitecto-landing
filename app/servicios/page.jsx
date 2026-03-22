import Link from "next/link";
import { Services } from "../../src/components/home/Services";
import { SiteWrapper } from "../../src/components/layout/SiteWrapper";
import tvRoomCover from "../../src/data/fotos-projects/casa-prados/12.TVROOM-PORTADA.jpg";

export const metadata = {
  title: "Remodelación de apartamentos en Caracas",
  description:
    "Servicios de remodelación integral de apartamentos, cocinas, baños y habitaciones en Caracas.",
  keywords: [
    "remodelación de apartamentos en Caracas",
    "remodelación integral de apartamentos en Caracas",
    "diseño de interiores para apartamentos en Caracas",
    "remodelación de cocina en Caracas",
    "remodelación de baños en Caracas",
    "remodelación de habitaciones en Caracas",
  ],
  alternates: {
    canonical: "/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <SiteWrapper>
      <section className="mx-auto max-w-5xl px-4 pt-10 md:px-8 md:pt-14">
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            backgroundImage: `url(${tvRoomCover?.src || tvRoomCover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative px-6 py-16 md:px-10 md:py-20">
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Remodelación de apartamentos en Caracas
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-100">
              Diseñamos y ejecutamos reformas residenciales con foco en funcionalidad, detalle técnico y valor a largo
              plazo. Trabajamos cocinas, baños, habitaciones y renovaciones integrales.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-5xl gap-6 px-4 lg:grid-cols-3 md:px-8">
        <article className="rounded-2xl border border-zinc-200/70 p-5 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Remodelación integral</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Coordinación completa de arquitectura interior, materiales, obra y cierre técnico.
          </p>
        </article>
        <article className="rounded-2xl border border-zinc-200/70 p-5 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Cocinas y baños</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Soluciones de alto uso con especial atención en ergonomía, almacenamiento e instalaciones.
          </p>
        </article>
        <article className="rounded-2xl border border-zinc-200/70 p-5 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Diseño interior</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Propuestas contemporáneas para actualizar espacios residenciales sin perder habitabilidad.
          </p>
        </article>
      </section>

      <section className="mx-auto mt-12 max-w-5xl px-4 md:px-8">
        <h2 className="font-serif text-3xl font-medium text-zinc-900 dark:text-zinc-100">Cómo trabajamos</h2>
        <ol className="mt-5 grid gap-4 text-sm text-zinc-600 dark:text-zinc-400 lg:grid-cols-2">
          <li className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
            1. Diagnóstico inicial del inmueble y definición de alcance.
          </li>
          <li className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
            2. Propuesta de diseño con criterio técnico y presupuesto objetivo.
          </li>
          <li className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
            3. Planificación de obra por fases y coordinación de proveedores.
          </li>
          <li className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
            4. Ejecución, supervisión y entrega con checklist final.
          </li>
        </ol>
      </section>

      <div className="mt-12">
        <Services compact includePremium includeConsult />
      </div>

      <section className="mx-auto mb-20 mt-10 max-w-5xl px-4 md:px-8">
        <div className="rounded-2xl border border-zinc-200/70 p-6 dark:border-zinc-800">
          <h2 className="font-serif text-2xl font-medium text-zinc-900 dark:text-zinc-100">Siguiente paso</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Si prefieres revisar proyectos reales antes de decidir, explora el portafolio o pasa directo a contacto para
            validar alcance y tiempo estimado.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/proyectos" className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800">
              Ver proyectos
            </Link>
            <Link
              href="/contacto"
              className="rounded-xl border border-zinc-300 px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Ir a contacto
            </Link>
          </div>
        </div>
      </section>
    </SiteWrapper>
  );
}
