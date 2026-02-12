// src/data/projects.js

// ✅ Casa Prados (local images)
import pradosCover from "./fotos-projects/casa-prados/12.TVROOM-PORTADA.jpg";

import pradosAreas01 from "./fotos-projects/casa-prados/13.TVROOM.jpg";
import pradosAreas02 from "./fotos-projects/casa-prados/6.COMEDOR.jpg";

import pradosCocina01 from "./fotos-projects/casa-prados/4.COCINA.jpg";
import pradosCocina02 from "./fotos-projects/casa-prados/5.COCINA.jpg";

import pradosBanos01 from "./fotos-projects/casa-prados/30.BANOHABITACIONPRINCIPAL.jpg";
import pradosBanos02 from "./fotos-projects/casa-prados/36.BANOHABITACIONNINAS.jpg";

import pradosIE01 from "./fotos-projects/casa-prados/15.TERRAZA.jpg";
import pradosIE02 from "./fotos-projects/casa-prados/16.TERRAZA.jpg";

import pradosMat01 from "./fotos-projects/casa-prados/23.HABITACIONPRINCIPAL.jpg";
import pradosMat02 from "./fotos-projects/casa-prados/28.HABITACIONPRINCIPAL-VESTIER.jpg";

import loftCocina01 from "./fotos-projects/loft-manhattan/COCINA_1.33.jpg";
import loftCocina02 from "./fotos-projects/loft-manhattan/COCINA_2.33.jpg";
import loftCocina03 from "./fotos-projects/loft-manhattan/COCINA_3.33.jpg";
import loftHabPrincipal from "./fotos-projects/loft-manhattan/HAB_PRINCIPAL.33.jpg";
import loftBanoPrincipal from "./fotos-projects/loft-manhattan/BANO_PRINCIPAL.33.jpg";
import loftBanoAux from "./fotos-projects/loft-manhattan/BANO_AUXILIAR.33.jpg";
import loftCover from "./fotos-projects/loft-manhattan/HAB_AUXILIAR.33.jpg";

// ✅ Apartamento 41
import apt41Sala from "./fotos-projects/loft-manhattan-apto-41/2.SALA.jpg"; // portada
import apt41Cocina from "./fotos-projects/loft-manhattan-apto-41/1.COCINA.jpg";
import apt41Habitacion from "./fotos-projects/loft-manhattan-apto-41/3.HABITACION.jpg";
import apt41Bano from "./fotos-projects/loft-manhattan-apto-41/4.BANO.jpg";

// ✅ Remodelación Cocina Vivienda Unifamiliar
import cocinaViviendaPortada from "./fotos-projects/remodelacion-cocina/4.COCINA.jpg";
import cocinaVivienda01 from "./fotos-projects/remodelacion-cocina/1.COCINA.jpg";
import cocinaVivienda02 from "./fotos-projects/remodelacion-cocina/2.COCINA.jpg";
import cocinaVivienda03 from "./fotos-projects/remodelacion-cocina/3.COCINA.jpg";

// ✅ Apartamento Hombre Soltero (Remodelación parcial)
import solteroPortada from "./fotos-projects/apartamento-hombre-soltero/3.SALACOMEDOR.jpg";

import solteroCocina01 from "./fotos-projects/apartamento-hombre-soltero/1.COCINA.jpg";
import solteroCocina02 from "./fotos-projects/apartamento-hombre-soltero/2.COCINA.jpg";

import solteroSala01 from "./fotos-projects/apartamento-hombre-soltero/3.SALACOMEDOR.jpg";
import solteroSala02 from "./fotos-projects/apartamento-hombre-soltero/4.SALACOMEDOR.jpg";

import solteroHab01 from "./fotos-projects/apartamento-hombre-soltero/5.HABITACIONPRINCIPAL.jpg";
import solteroHab02 from "./fotos-projects/apartamento-hombre-soltero/6.HABITACIONPRINCIPAL.jpg";
import solteroHab03 from "./fotos-projects/apartamento-hombre-soltero/7.HABITACIONPRINCIPAL.jpg";

import solteroBano01 from "./fotos-projects/apartamento-hombre-soltero/8.BANOPRINCIPAL.jpg";
import solteroBano02 from "./fotos-projects/apartamento-hombre-soltero/9.BANOPRINCIPAL.jpg";


export const PROJECTS = [
  {
    id: 1,
    slug: "casa-prados",
    title: "Casa Prados",
    category: "Vivienda",
    year: 2024,
    location: "Caracas, Venezuela",

    // ✅ portada en el grid + header del modal
    img: pradosCover,

    // ✅ galería general (si quieres un carrusel global)
    images: [
      pradosCover,
      pradosAreas01, pradosAreas02,
      pradosCocina01, pradosCocina02,
      pradosBanos01, pradosBanos02,
      pradosIE01, pradosIE02,
      pradosMat01, pradosMat02,
    ],

    facts: {
      "Tipología": "Vivienda unifamiliar",
      "Superficie construida": "600 m² (1 nivel)",
      "Parcela": "1.000 m²",
      "Alcance": "Reforma integral (sin modificar distribución)",
    },

    intro:
      "Reforma integral de una vivienda unifamiliar de los años 70, actualizada para una familia joven sin alterar su distribución original. La intervención moderniza acabados, mejora funcionalidad y potencia la luz natural, preservando la esencia arquitectónica existente.",

    // ✅ Secciones con 2 fotos por intervención
    contentSections: [
      {
        title: "Áreas sociales",
        body:
          "Unificación material y continuidad espacial para mejorar la fluidez y coherencia visual.",
        images: [pradosAreas01, pradosAreas02],
      },
      {
        title: "Cocina",
        body:
          "Cocina con identidad propia: negro mate y piso tipo madera en espina de pescado.",
        images: [pradosCocina01, pradosCocina02],
      },
      {
        title: "Baños",
        body:
          "Renovación integral de revestimientos, sanitarios e instalaciones para elevar confort y calidad.",
        images: [pradosBanos01, pradosBanos02],
      },
      {
        title: "Relación interior–exterior",
        body:
          "Aperturas y cerramientos de vidrio para potenciar luz natural y ampliar visualmente las áreas sociales.",
        images: [pradosIE01, pradosIE02],
      },
      {
        title: "Materialidad y acabados",
        body:
          "Paleta neutral y atemporal: blancos + grises, y restauración de madera existente con diálogo contemporáneo.",
        images: [pradosMat01, pradosMat02],
      },
    ],

    seoKeywords:
      "remodelación de vivienda, reforma integral, vivienda unifamiliar, interiorismo contemporáneo, Prados, Caracas",
  },

  {
  id: 2,
  slug: "loft-manhattan-campo-alegre",
  title: "Loft Manhattan · Campo Alegre",
  category: "Interiorismo",
  year: 2024,
  location: "Campo Alegre, Caracas, Venezuela",

  img: loftCover,

  images: [
    loftCocina01,
    loftCocina02,
    loftCocina03,
    loftHabPrincipal,
    loftBanoPrincipal,
    loftBanoAux,
  ],

  facts: {
    "Tipología": "Apartamento residencial",
    "Superficie": "90 m²",
    "Destino": "Inversión para alquiler",
    "Alcance": "Remodelación y equipamiento integral (llave en mano)",
  },

  intro:
    "Remodelación y equipamiento integral de un apartamento destinado al mercado de alquiler en el edificio Loft Manhattan, Campo Alegre. La intervención transformó una unidad en obra gris en un inmueble completamente equipado y listo para habitar.",

  contentSections: [
    {
      title: "Cocina",
      body:
        "Diseño y ejecución de cocina contemporánea con selección de electrodomésticos, mobiliario fijo y soluciones funcionales orientadas a bajo mantenimiento y durabilidad.",
      images: [loftCocina01, loftCocina02, loftCocina03],
    },
    {
      title: "Habitación principal",
      body:
        "Equipamiento integral con mobiliario, iluminación y textiles bajo una paleta neutra y atemporal que refuerza amplitud y confort.",
      images: [loftHabPrincipal],
    },
    {
      title: "Baños",
      body:
        "Integración de revestimientos existentes con nuevas mamparas de vidrio, mobiliario y mejoras funcionales para elevar la percepción de calidad.",
      images: [loftBanoPrincipal, loftBanoAux],
    },
  ],

  seoKeywords:
    "remodelación de apartamento en Caracas, diseño interior para alquiler, equipamiento llave en mano, inversión inmobiliaria Campo Alegre, interiorismo contemporáneo Venezuela",
  },
  
{
  id: 3,
  slug: "apartamento-41-loft-manhattan",
  title: "Apartamento 41 · Loft Manhattan",
  category: "Interiorismo",
  year: 2024,
  location: "Campo Alegre, Caracas, Venezuela",

  img: apt41Sala, // portada en grid y header

  images: [
    apt41Sala,
    apt41Cocina,
    apt41Habitacion,
    apt41Bano,
  ],

  facts: {
    "Tipología": "Apartamento residencial",
    "Superficie": "70 m²",
    "Destino": "Inversión para alquiler",
    "Alcance": "Remodelación y equipamiento integral (llave en mano)",
  },

  intro:
    "Adecuación interior y equipamiento integral de un apartamento concebido para el mercado de alquiler en el edificio Loft Manhattan. La intervención transformó una unidad en obra gris en un inmueble completamente equipado y listo para ocupación inmediata.",

  contentSections: [
    {
      title: "Área social integrada",
      body:
        "La cocina, sala y comedor se plantean como un espacio continuo que maximiza la amplitud visual y optimiza el uso eficiente del área disponible.",
      images: [apt41Sala],
    },
    {
      title: "Cocina",
      body:
        "Diseño y ejecución de cocina nueva con selección de electrodomésticos y soluciones funcionales orientadas a bajo mantenimiento y durabilidad.",
      images: [apt41Cocina],
    },
    {
      title: "Habitación principal",
      body:
        "Espacio compacto con vestier integrado y mobiliario seleccionado bajo una estética neutra y atemporal.",
      images: [apt41Habitacion],
    },
    {
      title: "Baño",
      body:
        "Integración de acabados existentes con nueva mampara de vidrio y mobiliario funcional, priorizando durabilidad y facilidad de mantenimiento.",
      images: [apt41Bano],
    },
  ],

  seoKeywords:
    "remodelación apartamento 70 m2 Caracas, diseño interior para alquiler, interiorismo contemporáneo Campo Alegre, equipamiento llave en mano Venezuela",
},

{
  id: 4,
  slug: "remodelacion-cocina-vivienda-unifamiliar",
  title: "Remodelación de Cocina · Vivienda Unifamiliar",
  category: "Cocina",
  year: 2024,
  location: "Caracas, Venezuela",

  img: cocinaViviendaPortada,

  images: [
    cocinaViviendaPortada,
    cocinaVivienda01,
    cocinaVivienda02,
    cocinaVivienda03,
  ],

  facts: {
    "Tipología": "Vivienda unifamiliar",
    "Intervención": "Remodelación integral de cocina",
    "Alcance": "Actualización de mobiliario, acabados e iluminación",
    "Condición": "Sin modificación de distribución",
  },

  intro:
    "Remodelación integral de la cocina de una vivienda unifamiliar, concebida como un obsequio familiar para modernizar uno de los espacios más importantes del hogar, respetando su configuración original.",

  contentSections: [
    {
      title: "Concepto de intervención",
      body:
        "La propuesta se desarrolló dentro del perímetro existente, sin demoliciones ni integración con otras áreas. El enfoque estuvo en actualizar acabados, equipamiento y mobiliario, optimizando funcionalidad sin alterar la distribución.",
    },
    {
      title: "Mobiliario y almacenamiento",
      body:
        "Se diseñó un nuevo sistema de mobiliario en acabado blanco roto, aportando luminosidad y atemporalidad. Se incorporaron soluciones de almacenamiento que permiten ocultar electrodomésticos de uso cotidiano, garantizando una lectura limpia y ordenada.",
      images: [cocinaVivienda01, cocinaVivienda02],
    },
    {
      title: "Materialidad e iluminación",
      body:
        "La intervención incluyó renovación de pisos y revestimientos contemporáneos en paredes expuestas. La iluminación cálida, tanto general como puntual, refuerza la sensación de confort y hace del espacio un ambiente acogedor para el uso diario.",
      images: [cocinaVivienda03],
    },
    {
      title: "Resultado",
      body:
        "Una cocina modernizada que equilibra funcionalidad y estética, manteniendo la distribución original pero transformando completamente su imagen y experiencia espacial.",
    },
  ],

  seoKeywords:
    "remodelación de cocina Caracas, cocina moderna vivienda unifamiliar, diseño de cocina contemporánea, reforma cocina sin modificar distribución, interiorismo residencial Venezuela",
},

{
  id: 5,
  slug: "apartamento-hombre-soltero-remodelacion-parcial",
  title: "Apartamento · Remodelación Parcial (Hombre Soltero)",
  category: "Interiorismo",
  year: 2024,
  location: "Caracas, Venezuela",

  img: solteroPortada,

  images: [
    solteroSala01,
    solteroSala02,
    solteroCocina01,
    solteroCocina02,
    solteroHab01,
    solteroHab02,
    solteroHab03,
    solteroBano01,
    solteroBano02,
  ],

  facts: {
    "Tipología": "Apartamento residencial",
    "Alcance": "Remodelación parcial por etapas",
    "Enfoque": "Optimización de recursos + hilo conductor de diseño",
    "Entregable": "Base funcional sin mobiliario sala/comedor",
  },

  intro:
    "Intervención puntual de un apartamento para un hombre soltero, enfocada en actualizar espacios clave sin una remodelación integral. El proyecto demuestra cómo decisiones precisas y coherentes permiten transformar un inmueble por etapas, manteniendo un hilo conductor de diseño.",

  contentSections: [
    {
      title: "Cocina y área social integrada",
      body:
        "La cocina se planteó como protagonista del área social integrada a sala y comedor. Se incorporó mobiliario contemporáneo en gris oscuro y se reutilizó el tope de cuarzo blanco del desayunador. En sala–comedor se aplicaron molduras decorativas, un acento en wall panel de madera y papel tapiz contemporáneo. Se restauró el piso de mármol para preservar su valor estético.",
      images: [solteroCocina01, solteroCocina02],
    },
    {
      title: "Sala–comedor",
      body:
        "Intervención focalizada en envolvente y detalles: molduras, acentos materiales y recuperación del piso existente para elevar la percepción espacial sin necesidad de obra pesada.",
      images: [solteroSala01, solteroSala02],
    },
    {
      title: "Habitación principal",
      body:
        "Se incorporó un piso nuevo y un tratamiento cromático diferenciado: azul marino en paredes y molduras, y pared del área de TV en gris con molduras blancas para contraste. Se recuperaron closets existentes actualizando herrajes y laqueando puertas en blanco. Cortinas en dos capas (translúcida + blackout) para control total de luz.",
      images: [solteroHab01, solteroHab02],
    },
    {
      title: "Baño principal",
      body:
        "Renovación completa con cambio de revestimientos, nuevo mueble de lavamanos y luminarias de luz cálida, elevando confort y calidad percibida.",
      images: [solteroBano01, solteroBano02],
    },
    {
      title: "Intervenciones complementarias",
      body:
        "Se pintaron paredes y puertas restantes en blanco para unificar y potenciar luminosidad. En esta etapa no se incluyó mobiliario de sala y comedor, dejando la base lista para futuras fases.",
      images: [solteroHab03],
    },
    {
      title: "Resultado",
      body:
        "Un apartamento funcional, contemporáneo y visualmente armonioso, optimizando recursos y permitiendo continuar por etapas sin perder coherencia de diseño.",
    },
  ],

  seoKeywords:
    "remodelación parcial apartamento, interiorismo por etapas, reforma de cocina y sala integrada, baño principal renovado, diseño interior contemporáneo Caracas",
},






  // ...resto de proyectos
];

export const CATEGORIES = ["Todos", "Vivienda", "Interiorismo", "Cocina"];
