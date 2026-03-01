import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo_horizontal.png";
import { ThemeToggle } from "../common/ThemeToggle";

export function Navbar({ onJump }) {
    const [open, setOpen] = useState(false);

    const NavLink = ({ id, children }) => (
        <button
            onClick={() => {
                onJump(id);
                setOpen(false);
            }}
            className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:outline-none dark:text-zinc-100 dark:hover:text-primary-light"
        >
            {children}
        </button>
    );

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <img
                        src={logo}
                        alt="Logo del estudio"
                        // The 'dark:invert-0' keeps it original in dark mode.
                        // 'invert' makes it black in light mode.
                        className="h-20 w-auto object-contain transition-all md:h-24 invert dark:invert-0"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-6 md:flex">
                    <NavLink id="proyectos">Proyectos</NavLink>
                    <NavLink id="sobre">Sobre mí</NavLink>
                    <NavLink id="servicios">Servicios</NavLink>
                    <NavLink id="contacto">Contacto</NavLink>

                    <div className="ml-2 border-l border-zinc-200 pl-4 dark:border-zinc-800">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Menu & Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        className="p-2 text-zinc-600 dark:text-zinc-300"
                        onClick={() => setOpen(!open)}
                        aria-label="Abrir menú"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            {open && (
                <div className="absolute left-0 top-full w-full border-b border-zinc-200/60 bg-white px-4 py-4 shadow-lg ring-1 ring-black/5 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
                    <div className="flex flex-col space-y-2">
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
                                className="rounded-lg px-4 py-3 text-left text-sm font-medium text-zinc-700 hover:bg-zinc-50 hover:text-primary dark:text-zinc-200 dark:hover:bg-zinc-900"
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
