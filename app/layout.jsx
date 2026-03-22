import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alfredoarvelo.com";
const socialImage = {
  url: "/og/alfredo-arvelo-og.jpg",
  width: 1200,
  height: 630,
  alt: "Diseno y remodelacion en Caracas - Alfredo Arvelo Arquitectura",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alfredo Arvelo | Arquitectura e Interiorismo",
    template: "%s | Alfredo Arvelo",
  },
  description:
    "Alfredo Arvelo Arquitectura, estudio de arquitectura en Caracas especializado en remodelaciones residenciales e interiorismo.",
  keywords: [
    "Alfredo Arvelo Arquitectura",
    "estudio de arquitectura en Caracas",
    "arquitecto en Caracas",
    "diseño de interiores en Caracas",
    "remodelaciones residenciales en Caracas",
    "Venezuela",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: siteUrl,
    siteName: "Alfredo Arvelo Arquitectura",
    title: "Alfredo Arvelo | Arquitectura e Interiorismo",
    description:
      "Estudio de arquitectura en Caracas especializado en remodelaciones residenciales e interiorismo.",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfredo Arvelo | Arquitectura e Interiorismo",
    description:
      "Estudio de arquitectura especializado en vivienda, interiorismo y proyectos comerciales en Caracas.",
    images: [socialImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
