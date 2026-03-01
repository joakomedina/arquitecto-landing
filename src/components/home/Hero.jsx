import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero({ onCTAClick }) {
    return (
        <section className="relative isolate overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 md:grid-cols-2 md:py-28 md:px-8">
                <div className="flex flex-col justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl lg:leading-tight"
                    >
                        Diseñamos espacios que inspiran, construimos valor duradero
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-5 max-w-xl text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed"
                    >
                        Estudio especializado en vivienda, interiorismo y proyectos comerciales con enfoque sostenible y soluciones a medida.
                    </motion.p>
                    <div className="mt-8 flex items-center gap-3">
                        <button
                            onClick={onCTAClick}
                            className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-900"
                        >
                            Solicitar presupuesto <ArrowRight size={18} />
                        </button>
                        <a
                            href="#proyectos"
                            className="rounded-2xl px-5 py-3 text-sm font-medium text-zinc-800 ring-1 ring-inset ring-zinc-300 transition hover:bg-zinc-100 dark:text-zinc-200 dark:ring-zinc-700 dark:hover:bg-zinc-800"
                        >
                            Ver proyectos
                        </a>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="relative"
                >
                    <img
                        src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop"
                        alt="Arquitectura contemporánea"
                        className="h-full w-full rounded-3xl object-cover shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10 dark:ring-white/10" />
                </motion.div>
            </div>
        </section>
    );
}
