import Link from "next/link";
import { About } from "../../src/components/home/About";
import { SiteWrapper } from "../../src/components/layout/SiteWrapper";

export const metadata = {
  title: "Sobre mí | Alfredo Arvelo",
  description:
    "Perfil profesional de Alfredo Arvelo, arquitecto en Caracas especializado en vivienda, interiorismo y reformas residenciales.",
  alternates: {
    canonical: "/sobre",
  },
};

export default function SobrePage() {
  return (
    <SiteWrapper>
      <section className="mx-auto max-w-5xl px-4 pt-16 md:px-8">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl">
          Arquitecto en Caracas con enfoque residencial
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          Trabajo proyectos de vivienda e interiorismo con una metodología clara: diagnóstico, diseño, coordinación y
          entrega. El objetivo es mejorar funcionalidad, confort y valor del inmueble.
        </p>
      </section>

      <div className="mt-8">
        <About />
      </div>

      <section className="mx-auto mb-20 mt-8 max-w-5xl px-4 md:px-8">
        <h2 className="font-serif text-3xl font-medium text-zinc-900 dark:text-zinc-100">Método de trabajo</h2>
        <div className="mt-5 grid gap-4 text-sm text-zinc-600 dark:text-zinc-400 md:grid-cols-3">
          <p className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
            Definición de alcance técnico y presupuesto realista.
          </p>
          <p className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
            Diseño interior con decisiones concretas de materialidad y uso.
          </p>
          <p className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
            Coordinación de obra y control de calidad hasta la entrega.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/proyectos" className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800">
            Ver proyectos
          </Link>
          <Link
            href="/contacto"
            className="rounded-xl border border-zinc-300 px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Contactar
          </Link>
        </div>
      </section>
    </SiteWrapper>
  );
}
