import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PROJECTS, CATEGORIES } from "../../data/projects";

export function Portfolio() {
    const [active, setActive] = useState("Todos");
    const [selectedProject, setSelectedProject] = useState(null);
    const items = useMemo(
        () => (active === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
        [active]
    );

    return (
        <section id="proyectos" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-10 md:flex-row md:items-end">
                <div>
                    <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Proyectos</h2>
                    <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
                        Selección de obras y propuestas. Filtrá por tipología para explorar el portafolio.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    {CATEGORIES.map((c) => (
                        <button
                            key={c}
                            onClick={() => setActive(c)}
                            className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wide ring-1 ring-inset transition ${active === c
                                    ? "bg-zinc-900 text-white ring-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 dark:ring-zinc-100"
                                    : "text-zinc-600 ring-zinc-200 hover:bg-zinc-50 dark:text-zinc-400 dark:ring-zinc-800 dark:hover:bg-zinc-900"
                                }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                    <motion.article
                        key={p.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedProject(p)}
                        className="group cursor-pointer overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-serif text-lg font-medium text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                                <span className="text-xs font-mono text-zinc-500">{p.year}</span>
                            </div>
                            <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{p.category} • {p.location}</p>
                        </div>
                    </motion.article>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl dark:bg-zinc-950"
                        >
                            <div className="sticky top-0 z-10 flex justify-end p-4">
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    aria-label="Cerrar modal"
                                    className="rounded-full bg-white/90 p-2 text-zinc-900 shadow-lg backdrop-blur hover:bg-white dark:bg-zinc-900/90 dark:text-zinc-100"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="relative -mt-16">
                                <img src={selectedProject.img} alt={selectedProject.title} className="h-72 w-full object-cover" />
                            </div>
                            <div className="p-6 md:p-10">
                                <div className="mb-6 border-b border-zinc-100 pb-6 dark:border-zinc-800">
                                    <h2 className="font-serif text-3xl font-medium text-zinc-900 dark:text-zinc-50">{selectedProject.title}</h2>
                                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-zinc-500">
                                        <span>{selectedProject.category}</span>
                                        <span>•</span>
                                        <span>{selectedProject.location}</span>
                                        <span>•</span>
                                        <span>{selectedProject.year}</span>
                                    </div>
                                </div>

                                {selectedProject.intro && (
                                    <div className="mb-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                                        <p>{selectedProject.intro}</p>
                                    </div>
                                )}

                                {selectedProject.facts && (
                                    <div className="mb-8 rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900">
                                        <h3 className="mb-4 font-serif text-lg font-medium text-zinc-900 dark:text-zinc-100">Ficha Técnica</h3>
                                        <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                                            {Object.entries(selectedProject.facts).map(([key, value]) => (
                                                <div key={key} className="flex justify-between border-b border-zinc-200/50 pb-2 last:border-0 dark:border-zinc-800">
                                                    <dt className="text-sm font-medium text-zinc-500">{key}</dt>
                                                    <dd className="text-sm text-zinc-900 dark:text-zinc-200">{value}</dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                )}

                                {selectedProject.contentSections?.map((section, idx) => (
                                    <div key={idx} className="mb-8 last:mb-0">
                                        <h4 className="mb-3 font-serif text-xl font-medium text-zinc-900 dark:text-zinc-100">{section.title}</h4>
                                        {section.body && <p className="mb-4 text-zinc-600 dark:text-zinc-400">{section.body}</p>}

                                        {section.images?.length > 0 && (
                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                {section.images.slice(0, 2).map((src, i) => (
                                                    <img
                                                        key={i}
                                                        src={src}
                                                        alt=""
                                                        className="aspect-[4/3] w-full rounded-xl object-cover"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
