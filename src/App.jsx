import React from "react";
import ArquitectoLanding from "./ArquitectoLanding";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/home/Hero";
import { Portfolio } from "./components/home/Portfolio";
import { Services } from "./components/home/Services";
import { About } from "./components/home/About";
import { Contact } from "./components/home/Contact";
import { Footer } from "./components/layout/Footer";
import { SEO } from "./components/common/SEO";

const USE_LEGACY_LANDING = import.meta.env.VITE_LANDING_VARIANT === "legacy";

function RefactorLanding() {
  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <SEO
        title="Alfredo Arvelo | Arquitectura e Interiorismo"
        description="Estudio de arquitectura especializado en vivienda, interiorismo y proyectos comerciales en Caracas. DiseÃ±o sostenible y soluciones a medida."
        keywords="arquitecto, caracas, interiorismo, reformas, proyectos, vivienda, comercial"
      />

      <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900">
        <Navbar onJump={jump} />
        <main>
          <Hero onCTAClick={() => jump("contacto")} />
          <Portfolio />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return USE_LEGACY_LANDING ? <ArquitectoLanding /> : <RefactorLanding />;
}
