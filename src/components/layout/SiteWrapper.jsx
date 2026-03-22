"use client";

import { usePathname, useRouter } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const routeMap = {
    inicio: "/",
    proyectos: "/proyectos",
    blog: "/blog",
    sobre: "/sobre",
    servicios: "/servicios",
    contacto: "/contacto",
  };

  const jump = (id) => {
    if (routeMap[id]) {
      router.push(routeMap[id]);
      return;
    }

    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    router.push(`/#${id}`);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900">
      <Navbar onJump={jump} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
