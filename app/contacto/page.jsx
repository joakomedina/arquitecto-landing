import Link from "next/link";
import { Contact } from "../../src/components/home/Contact";
import { SiteWrapper } from "../../src/components/layout/SiteWrapper";

export const metadata = {
  title: "Presupuesto remodelación de apartamento en Caracas",
  description:
    "Contacto del estudio para solicitar presupuesto de remodelación y diseño de interiores en Caracas.",
  keywords: [
    "presupuesto remodelación de apartamento en Caracas",
    "arquitecto para remodelación en Caracas",
    "solicitar presupuesto diseño de interiores Caracas",
    "contacto estudio de arquitectura Caracas",
  ],
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactoPage() {
  return (
    <SiteWrapper>
      <section className="mx-auto max-w-5xl px-4 pt-16 md:px-8">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl">
          Presupuesto de remodelación en Caracas
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          Comparte tu caso y te respondemos con una propuesta de alcance y ruta de trabajo. Si ya tienes medidas,
          fotos o planos, inclúyelos para acelerar el diagnóstico.
        </p>
      </section>

      <section className="mx-auto mt-10 max-w-5xl px-4 md:px-8">
        <div className="grid gap-4 text-sm text-zinc-600 dark:text-zinc-400 md:grid-cols-3">
          <p className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">Respuesta inicial en 24-48 horas hábiles.</p>
          <p className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">Atención para proyectos en Caracas y zonas cercanas.</p>
          <p className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">Opciones: paquete estándar o proyecto a medida.</p>
        </div>
      </section>

      <div className="mt-8">
        <Contact />
      </div>

      <section className="mx-auto mb-20 mt-8 max-w-5xl px-4 md:px-8">
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Antes de escribir, puedes revisar el tipo de resultados entregados en el portafolio de obras recientes.
        </p>
        <Link href="/proyectos" className="mt-3 inline-block text-sm font-semibold text-zinc-800 underline hover:text-zinc-900 dark:text-zinc-200">
          Ver proyectos recientes
        </Link>
      </section>
    </SiteWrapper>
  );
}
