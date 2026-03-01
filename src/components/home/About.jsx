import { motion } from "framer-motion";
import alfredo from "../../assets/proyectos/AlfredoArvelo.jpg";

export function About() {
    return (
        <section id="sobre" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
            <div className="grid items-center gap-10 md:grid-cols-5">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-2 md:order-1 md:col-span-3"
                >
                    <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Sobre mí</h2>
                    <div className="mt-6 flex flex-col gap-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <p>
                            Soy arquitecto con más de 10 años de experiencia en vivienda, interiorismo y espacios comerciales. Me apasiona
                            la relación entre materialidad, luz y confort.
                        </p>
                        <p>
                            Trabajo cada proyecto desde la empatía, la sostenibilidad y la precisión técnica, buscando siempre que el resultado
                            final no solo sea estéticamente impecable, sino también habitable y funcional.
                        </p>
                    </div>

                    <ul className="mt-8 grid gap-3 text-sm text-zinc-600 dark:text-zinc-300 sm:grid-cols-2">
                        {[
                            "Arquitectura & Interiorismo",
                            "Planos, Renders, 3D",
                            "Dirección de Obra",
                            "Asesoría Técnica",
                            "Profesor Universitario"
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-2 rounded-lg bg-zinc-50 px-4 py-3 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
                                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="order-1 md:order-2 md:col-span-2"
                >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                        <img
                            src={alfredo}
                            alt="Alfredo Arvelo - Arquitecto"
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
