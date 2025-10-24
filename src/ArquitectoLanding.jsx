import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Instagram, Linkedin, Sun, Moon, ArrowRight, Building2, Home, Factory, Ruler } from "lucide-react";
import logo from "./assets/logo_horizontal.png";


// Nota: Usa Tailwind CSS. Si no lo tenés configurado, más abajo te dejo instrucciones rápidas.
// Este componente es una landing de una sola página pensada para un arquitecto/estudio.
// Incluye: Navbar sticky, modo claro/oscuro, Hero, Portafolio con filtros, Sobre mí, Servicios, Contacto y Footer.

const PROJECTS = [
  {
    id: 1,
    title: "Casa Patio",
    category: "Vivienda",
    year: 2024,
    location: "Sevilla, España",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Loft Industrial",
    category: "Interiorismo",
    year: 2023,
    location: "Madrid, España",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Oficinas Nexus",
    category: "Comercial",
    year: 2025,
    location: "Barcelona, España",
    img: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Rehabilitación Torre",
    category: "Rehabilitación",
    year: 2022,
    location: "Valencia, España",
    img: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Vivienda entre medianeras",
    category: "Vivienda",
    year: 2021,
    location: "Bilbao, España",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Showroom Materia",
    category: "Comercial",
    year: 2024,
    location: "Málaga, España",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
  },
];

const CATEGORIES = ["Todos", "Vivienda", "Interiorismo", "Comercial", "Rehabilitación"];


function useTheme() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

return { theme, setTheme };
}

function Navbar({ onJump }) {
  const [open, setOpen] = useState(false);

  const NavLink = ({ id, children }) => (
    <button
      onClick={() => {
        onJump(id);
        setOpen(false);
      }}
      className="px-4 py-2 text-sm font-medium hover:text-primary/90 focus:outline-none"
    >
      {children}
    </button>
  );

  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-8">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo del estudio"
            className="h-12 md:h-40 w-auto object-contain"
          />
        </div>


        <div className="hidden items-center gap-1 md:flex">
          <NavLink id="proyectos">Proyectos</NavLink>
          <NavLink id="sobre">Sobre mí</NavLink>
          <NavLink id="servicios">Servicios</NavLink>
          <NavLink id="contacto">Contacto</NavLink>
          <div className="mx-2 h-5 w-px bg-zinc-300 dark:bg-zinc-700" />
          <button
            aria-label="Cambiar tema"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-xl p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button className="p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-zinc-200/60 bg-white px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900 md:hidden">
          <div className="flex flex-col">
            {[
              { id: "proyectos", label: "Proyectos" },
              { id: "sobre", label: "Sobre mí" },
              { id: "servicios", label: "Servicios" },
              { id: "contacto", label: "Contacto" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onJump(item.id);
                  setOpen(false);
                }}
                className="px-2 py-3 text-left text-sm hover:text-primary"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ onCTAClick }) {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 md:grid-cols-2 md:py-28 md:px-8">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl"
          >
            Diseñamos espacios que inspiran, construimos valor duradero
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-xl text-zinc-600 dark:text-zinc-300"
          >
            Estudio especializado en vivienda, interiorismo y proyectos comerciales con enfoque sostenible y soluciones a medida.
          </motion.p>
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={onCTAClick}
              className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-zinc-900"
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
            className="h-full w-full rounded-3xl object-cover shadow-2xl"
          />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [active, setActive] = useState("Todos");
  const items = useMemo(
    () => (active === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="proyectos" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-10 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Proyectos</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Selección de obras y propuestas. Filtrá por tipología para explorar el portafolio.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-2xl px-4 py-2 text-sm ring-1 ring-inset transition ${
                active === c
                  ? "bg-zinc-900 text-white ring-zinc-900 dark:bg-white dark:text-zinc-900 dark:ring-white"
                  : "text-zinc-700 ring-zinc-300 hover:bg-zinc-100 dark:text-zinc-300 dark:ring-zinc-700 dark:hover:bg-zinc-800"
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
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</h3>
                <span className="text-xs text-zinc-500">{p.year}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{p.category} • {p.location}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="grid items-center gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 md:col-span-3"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Sobre mí</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Soy arquitecto con más de 10 años de experiencia en vivienda, interiorismo y espacios comerciales. Me apasiona
            la relación entre materialidad, luz y confort. Trabajo cada proyecto desde la empatía, la sostenibilidad y la
            precisión técnica.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-zinc-600 dark:text-zinc-300 sm:grid-cols-2">
            <li className="rounded-xl bg-zinc-50 p-3 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">Premio COAM 2023 – Vivienda</li>
            <li className="rounded-xl bg-zinc-50 p-3 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">Passivhaus Designer</li>
            <li className="rounded-xl bg-zinc-50 p-3 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">BIM (Revit) & Render 3D</li>
            <li className="rounded-xl bg-zinc-50 p-3 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">Dirección de obra</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="order-1 md:order-2 md:col-span-2"
        >
          <img
            src="https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1200&auto=format&fit=crop"
            alt="Retrato profesional"
            className="aspect-[3/4] w-full rounded-3xl object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: "Diseño arquitectónico",
      icon: <Home className="h-5 w-5" />,
      desc: "Proyectos de obra nueva y ampliaciones, desde anteproyecto hasta ejecutivos.",
    },
    {
      title: "Interiorismo",
      icon: <Ruler className="h-5 w-5" />,
      desc: "Reformas integrales, mobiliario a medida y dirección de obra.",
    },
    {
      title: "Comercial & Oficinas",
      icon: <Building2 className="h-5 w-5" />,
      desc: "Diseño de espacios de trabajo y retail alineados con tu marca.",
    },
    {
      title: "Licencias y tramitaciones",
      icon: <Factory className="h-5 w-5" />,
      desc: "Asesoramiento técnico, memorias y legalizaciones para tu proyecto.",
    },
  ];

  return (
    <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Servicios</h2>
      <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
        Acompaño cada proyecto con metodología clara, comunicación transparente y foco en el detalle.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-zinc-200/80 bg-white p-5 shadow-sm ring-1 ring-inset ring-transparent transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="mb-3 inline-flex items-center justify-center rounded-2xl bg-zinc-100 p-2 dark:bg-zinc-800">
              {s.icon}
            </div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{s.title}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Contacto</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Contame tu proyecto. Te responderé en 24–48h.</p>

          <form
            className="mt-6 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("¡Gracias! Este es un formulario de ejemplo. Conéctalo a tu backend o usa Formspree.");
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required className="rounded-2xl border border-zinc-300 bg-white p-3 text-sm outline-none ring-0 placeholder:text-zinc-400 focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-white" placeholder="Nombre" />
              <input required type="email" className="rounded-2xl border border-zinc-300 bg-white p-3 text-sm outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-white" placeholder="Email" />
            </div>
            <input className="rounded-2xl border border-zinc-300 bg-white p-3 text-sm outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-white" placeholder="Asunto (opcional)" />
            <textarea required className="min-h-[130px] rounded-2xl border border-zinc-300 bg-white p-3 text-sm outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:focus:border-white" placeholder="Mensaje" />
            <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-zinc-900">
              Enviar mensaje <ArrowRight size={18} />
            </button>
          </form>
        </div>

        <div className="md:col-span-2">
          <div className="rounded-3xl border border-zinc-200/80 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">Datos de contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
              <li className="flex items-center gap-3"><Phone size={16} /> +34 600 000 000</li>
              <li className="flex items-center gap-3"><Mail size={16} /> estudio@arquitecto.com</li>
              <li className="flex items-center gap-3"><MapPin size={16} /> Calle Ejemplo 123, Madrid</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="rounded-xl p-2 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-100 dark:ring-zinc-700 dark:hover:bg-zinc-800"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="rounded-xl p-2 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-100 dark:ring-zinc-700 dark:hover:bg-zinc-800"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200/60 bg-zinc-50 py-8 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-8">
        <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Estudio de Arquitectura. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4 text-xs text-zinc-500">
          <a href="#aviso" className="hover:underline">Aviso legal</a>
          <a href="#privacidad" className="hover:underline">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

export default function ArquitectoLanding() {
  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar onJump={jump} />
      <Hero onCTAClick={() => jump("contacto")} />
      <Portfolio />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

