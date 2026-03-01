import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

export function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("idle");

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("idle");

        try {
            await emailjs.sendForm(
                "service_h1gwn5m",
                "template_58mdo6e",
                e.target,
                "Z_TMa58rLcqQyjlEJ"
            );
            setStatus("success");
            e.target.reset();
        } catch (err) {
            console.error(err);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contacto" className="mx-auto max-w-7xl px-4 py-20 md:px-8 bg-white dark:bg-zinc-950 transition-colors">
            <div className="grid gap-12 lg:grid-cols-5">
                <div className="lg:col-span-3">
                    <h2 className="font-serif text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Contacto</h2>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                        ¿Tenés un proyecto en mente? Escribime y conversemos sobre cómo hacerlo realidad.
                    </p>

                    <form className="mt-8 grid gap-6" onSubmit={sendEmail}>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="group">
                                <input
                                    name="user_name"
                                    required
                                    className="w-full border-b border-zinc-200 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-800 dark:focus:border-zinc-100"
                                    placeholder="Nombre completo"
                                />
                            </div>
                            <div className="group">
                                <input
                                    name="user_email"
                                    required
                                    type="email"
                                    className="w-full border-b border-zinc-200 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-800 dark:focus:border-zinc-100"
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                name="subject"
                                className="w-full border-b border-zinc-200 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-800 dark:focus:border-zinc-100"
                                placeholder="Asunto (opcional)"
                            />
                        </div>

                        <div>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                className="w-full resize-none border-b border-zinc-200 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-800 dark:focus:border-zinc-100"
                                placeholder="Mensaje"
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="group inline-flex items-center gap-2 bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                            >
                                {loading ? "Enviando..." : "Enviar mensaje"}
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>

                        {status === "success" && (
                            <p className="text-sm text-green-600 dark:text-green-400">✅ Mensaje enviado con éxito.</p>
                        )}
                        {status === "error" && (
                            <p className="text-sm text-red-600 dark:text-red-400">❌ Error al enviar. Por favor intenta de nuevo.</p>
                        )}
                    </form>
                </div>

                <div className="lg:col-span-2 lg:pl-8">
                    <div className="h-full rounded-3xl bg-zinc-50 p-8 dark:bg-zinc-900">
                        <h3 className="font-serif text-xl font-medium text-zinc-900 dark:text-zinc-100">Información</h3>
                        <ul className="mt-6 space-y-6">
                            <li className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Teléfono</p>
                                    <p className="text-zinc-900 dark:text-zinc-200">+58 414 154 8002</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Email</p>
                                    <p className="text-zinc-900 dark:text-zinc-200">alfredoarvelo@gmail.com</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Estudio</p>
                                    <p className="text-zinc-900 dark:text-zinc-200">
                                        CC Paseo Las Mercedes<br />
                                        Nivel Mercado, Local MCB3<br />
                                        Caracas, Venezuela
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-10 flex gap-4">
                            <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
                            <SocialLink href="https://www.linkedin.com/in/alfredo-arvelo" icon={<Linkedin size={20} />} label="LinkedIn" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
        >
            {icon}
        </a>
    );
}
