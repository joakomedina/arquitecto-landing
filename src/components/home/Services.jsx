import { useState } from "react";
import { motion } from "framer-motion";
import {
    Home,
    Ruler,
    Building2,
    Factory,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import kitchen01 from "../../data/fotos-projects/remodelacion-cocina/1.COCINA.jpg";
import kitchen02 from "../../data/fotos-projects/remodelacion-cocina/2.COCINA.jpg";
import kitchen03 from "../../data/fotos-projects/remodelacion-cocina/3.COCINA.jpg";
import kitchen04 from "../../data/fotos-projects/remodelacion-cocina/4.COCINA.jpg";

export function Services() {
    const [slideIndex, setSlideIndex] = useState(0);
    const kitchenSlides = [kitchen01, kitchen02, kitchen03, kitchen04];
    const whatsappNumber = "584141548002";

    const items = [
        {
            title: "Diseno arquitectonico",
            icon: <Home className="h-6 w-6" />,
            desc: "Proyectos de obra nueva y ampliaciones, desde anteproyecto hasta ejecutivos.",
        },
        {
            title: "Interiorismo",
            icon: <Ruler className="h-6 w-6" />,
            desc: "Reformas integrales, mobiliario a medida y direccion de obra.",
        },
        {
            title: "Comercial y Oficinas",
            icon: <Building2 className="h-6 w-6" />,
            desc: "Diseno de espacios de trabajo y retail alineados con tu marca.",
        },
        {
            title: "Licencias y tramitaciones",
            icon: <Factory className="h-6 w-6" />,
            desc: "Asesoramiento tecnico, memorias y legalizaciones para tu proyecto.",
        },
    ];

    const packages = [
        {
            name: "Cocina Llave en Mano Estandar (Modelo Prados)",
            price: "Desde USD 3.600",
            subtitle: "Diseno cerrado basado en un sistema probado, con alcance y tiempos definidos.",
            slides: kitchenSlides,
            includes: [
                "Levantamiento tecnico y ajuste del modelo al espacio",
                "Mobiliario completo (bajos, altos, columnas y panelados)",
                "Cubierta y peninsula/isla segun layout aplicable",
                "Iluminacion funcional y decorativa del paquete",
                "Coordinacion y ejecucion llave en mano",
                "Checklist y entrega final",
            ],
            applies: [
                "Cocinas de 12 a 14 metros lineales",
                "Planta rectangular o similar",
                "Punto de agua y descarga en posicion existente",
                "Sin cambios estructurales mayores",
            ],
            excludes: [
                "Electrodomesticos premium fuera del set estandar",
                "Demoliciones estructurales",
                "Reubicaciones mayores de plomeria, gas o electricidad",
                "Obras fuera del area de cocina",
            ],
            timeline: "7 a 10 semanas (diseno 2, fabricacion 4-6, instalacion 1-2)",
            cta: "Ver si mi espacio aplica",
            ctaHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hola Alfredo, quiero validar si mi cocina aplica al paquete Cocina Llave en Mano Estandar. Te comparto medidas y fotos."
            )}`,
            recommended: true,
        },
        {
            name: "Proyecto A Consultar",
            price: "A cotizar",
            subtitle: "Solucion personalizada para requerimientos fuera de estandar.",
            includes: [
                "Diagnostico del caso y requerimientos",
                "Alcance tecnico a medida",
                "Propuesta economica personalizada",
                "Plan de trabajo por fases",
            ],
            applies: [
                "Distribuciones no estandar",
                "Cambios de instalaciones o estructura",
                "Personalizacion alta de materiales y mobiliario",
            ],
            timeline: "A definir segun alcance",
            cta: "Solicitar diagnostico",
            ctaHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hola Alfredo, quiero solicitar un diagnostico para mi proyecto de cocina. Te comparto contexto y requerimientos."
            )}`,
            recommended: false,
        },
    ];

    const nextSlide = (total) => {
        setSlideIndex((prev) => (prev + 1) % total);
    };

    const prevSlide = (total) => {
        setSlideIndex((prev) => (prev - 1 + total) % total);
    };

    return (
        <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
            <div className="mb-12 md:text-center">
                <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Servicios</h2>
                <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300 md:mx-auto">
                    Acompano cada proyecto con metodologia clara, comunicacion transparente y foco en el detalle.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((s, i) => (
                    <motion.div
                        key={s.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="group rounded-3xl border border-zinc-200/60 bg-white p-6 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                    >
                        <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-zinc-100 p-3 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors dark:bg-zinc-800 dark:text-zinc-100 dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900">
                            {s.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{s.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.desc}</p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-24">
                <div className="mb-10 text-center">
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                        Propuesta de Valor
                    </span>
                    <h3 className="mt-4 font-serif text-3xl font-medium text-zinc-900 dark:text-zinc-100">
                        Planes para empezar rapido
                    </h3>
                </div>

                <div className="mt-16 grid items-start gap-8 md:grid-cols-2">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.name}
                            className={`relative flex flex-col rounded-3xl ring-1 transition-all ${pkg.recommended
                                ? "bg-[#D4AF37] p-4 md:p-5 ring-amber-300 text-zinc-950 shadow-xl scale-105 z-10"
                                : "bg-[#F0F8FF] p-4 md:p-5 ring-zinc-200 text-zinc-900 hover:shadow-lg dark:bg-[#F0F8FF] dark:ring-zinc-200 dark:text-zinc-900"
                                }`}
                        >
                            {pkg.recommended && (
                                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                                    Recomendado
                                </div>
                            )}
                            <h4 className="font-serif text-xl font-medium leading-tight">{pkg.name}</h4>
                            <p className={`mt-2 text-sm leading-tight ${pkg.recommended ? "opacity-95" : "opacity-80"}`}>{pkg.subtitle}</p>
                            <div className="my-2 text-3xl font-bold">{pkg.price}</div>

                            {pkg.slides && (
                                <div className="mb-4">
                                    <div className="relative overflow-hidden rounded-2xl">
                                        <img
                                            src={pkg.slides[slideIndex]}
                                            alt={`Cocina modelo estandar - vista ${slideIndex + 1}`}
                                            className="h-56 w-full object-cover"
                                        />
                                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10" />
                                        <button
                                            type="button"
                                            onClick={() => prevSlide(pkg.slides.length)}
                                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-zinc-900 shadow-md hover:bg-white"
                                            aria-label="Foto anterior"
                                        >
                                            <ChevronLeft size={18} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => nextSlide(pkg.slides.length)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-zinc-900 shadow-md hover:bg-white"
                                            aria-label="Foto siguiente"
                                        >
                                            <ChevronRight size={18} />
                                        </button>
                                    </div>
                                    <div className="mt-2 flex items-center justify-center gap-2">
                                        {pkg.slides.map((_, idx) => (
                                            <button
                                                key={idx}
                                                type="button"
                                                onClick={() => setSlideIndex(idx)}
                                                aria-label={`Ir a foto ${idx + 1}`}
                                                className={`h-2.5 w-2.5 rounded-full transition ${idx === slideIndex
                                                    ? "bg-white dark:bg-zinc-900"
                                                    : "bg-white/40 dark:bg-zinc-900/40"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            <ul className={`flex-1 space-y-2 ${pkg.recommended ? "text-xs opacity-100" : "text-sm opacity-90"} leading-tight`}>
                                {pkg.includes.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2.5 leading-tight">
                                        <CheckCircle2 size={18} className={pkg.recommended ? "text-yellow-400 dark:text-yellow-600" : "text-zinc-400"} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className={`mt-3 rounded-2xl p-3 ${pkg.recommended ? "text-xs" : "text-sm"}`}>
                                <p className="mb-2 font-semibold leading-tight">Aplica si:</p>
                                <ul className={`space-y-1.5 leading-tight ${pkg.recommended ? "opacity-100" : "opacity-90"}`}>
                                    {pkg.applies.map((item) => (
                                        <li key={item} className="flex items-start gap-2 leading-tight">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-current"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {pkg.excludes && (
                                <div className={`mt-3 rounded-2xl bg-black/5 p-3 ${pkg.recommended ? "text-xs" : "text-sm"} dark:bg-white/10`}>
                                    <p className="mb-2 font-semibold leading-tight">No incluye:</p>
                                    <ul className={`space-y-1.5 leading-tight ${pkg.recommended ? "opacity-100" : "opacity-90"}`}>
                                        {pkg.excludes.map((item) => (
                                            <li key={item} className="flex items-start gap-2 leading-tight">
                                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-current"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <p className={`mt-3 ${pkg.recommended ? "text-xs opacity-100" : "text-sm opacity-90"}`}>
                                Tiempo estimado: <span className="font-semibold">{pkg.timeline}</span>
                            </p>

                            {pkg.ctaHref ? (
                                <a
                                    href={pkg.ctaHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`mt-8 w-full rounded-xl py-3 text-center text-sm font-semibold transition-transform active:scale-95 ${pkg.recommended
                                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-bold uppercase tracking-wide text-white hover:from-yellow-600 hover:to-orange-600"
                                        : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                                        }`}
                                >
                                    {pkg.cta}
                                </a>
                            ) : (
                                <button
                                    className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-transform active:scale-95 ${pkg.recommended
                                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-bold uppercase tracking-wide text-white hover:from-yellow-600 hover:to-orange-600"
                                        : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                                        }`}
                                >
                                    {pkg.cta}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
