"use client";

import ArquitectoLanding from "./ArquitectoLanding";
import { Hero } from "./components/home/Hero";
import { Portfolio } from "./components/home/Portfolio";
import { Services } from "./components/home/Services";
import { About } from "./components/home/About";
import { Contact } from "./components/home/Contact";
import { SiteWrapper } from "./components/layout/SiteWrapper";

const USE_LEGACY_LANDING =
  process.env.NODE_ENV !== "production" && process.env.NEXT_PUBLIC_LANDING_VARIANT === "legacy";

function RefactorLanding() {
  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <SiteWrapper>
      <div>
        <Hero onCTAClick={() => jump("contacto")} />
        <Portfolio />
        <About />
        <Services includePremium includeConsult={false} />
        <Contact />
      </div>
    </SiteWrapper>
  );
}

export default function App() {
  return USE_LEGACY_LANDING ? <ArquitectoLanding /> : <RefactorLanding />;
}
