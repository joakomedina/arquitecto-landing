export function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
                <div className="flex flex-col items-center md:items-start">
                    <p className="font-serif text-lg font-medium text-zinc-900 dark:text-zinc-100">Alfredo Arvelo</p>
                    <p className="text-sm text-zinc-500">Arquitectura & Interiorismo</p>
                </div>

                <p className="text-xs text-zinc-400">
                    © {new Date().getFullYear()} Todos los derechos reservados.
                </p>

                <div className="flex gap-6 text-xs text-zinc-500">
                    <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300">Aviso Legal</a>
                    <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300">Privacidad</a>
                </div>
            </div>
        </footer>
    );
}
