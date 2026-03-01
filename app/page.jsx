import App from "../src/App";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alfredoarvelo.com";

export const metadata = {
  title: "Estudio de arquitectura en Caracas",
  description:
    "Arquitecto en Caracas para remodelaciones residenciales, diseño de interiores y reformas de apartamentos.",
  keywords: [
    "estudio de arquitectura en Caracas",
    "arquitecto en Caracas",
    "remodelaciones residenciales en Caracas",
    "diseño de interiores en Caracas",
    "reformas de apartamentos en Caracas",
    "arquitectura contemporánea en Venezuela",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Alfredo Arvelo Arquitectura",
    url: siteUrl,
    telephone: "+58 414 154 8002",
    areaServed: "Caracas, Venezuela",
    description:
      "Estudio de arquitectura especializado en vivienda, interiorismo y proyectos comerciales.",
    sameAs: ["https://www.linkedin.com/in/alfredo-arvelo"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <App />
    </>
  );
}
