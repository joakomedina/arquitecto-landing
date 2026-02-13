# 📐 Arquitectura Landing – Documentación Técnica

## 📌 Descripción del Proyecto

Landing page profesional para estudio de arquitectura desarrollada con:

- React
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS
- Lucide Icons

Incluye:

- Hero principal
- Portafolio con filtro por categorías
- Modal de proyecto con galería por intervención
- Sección Sobre mí
- Servicios
- Formulario de contacto funcional
- Modo oscuro permanente

---

# 🏗️ Estructura del Proyecto

src/
│
├── assets/
│ ├── logo_horizontal.png
│ └── proyectos/
│
├── data/
│ ├── projects.js
│ └── fotos-projects/
│ ├── casa-prados/
│ ├── loft-manhattan/
│ ├── loft-manhattan-apto-41/
│ ├── remodelacion-cocina/
│ └── hombre-soltero/
│
├── ArquitectoLanding.jsx
└── main.jsx

yaml
Copiar código

---

# 🗂 Gestión de Proyectos

Los proyectos están centralizados en:

src/data/projects.js

css
Copiar código

Cada proyecto incluye:

```js
{
  id,
  slug,
  title,
  category,
  year,
  location,
  img, // portada
  images, // galería general
  facts,
  intro,
  contentSections: [
    {
      title,
      body,
      images: []
    }
  ],
  seoKeywords
}
📷 Estructura de Imágenes
Cada proyecto tiene su carpeta propia dentro de:

bash
Copiar código
src/data/fotos-projects/
Ejemplo:

markdown
Copiar código
fotos-projects/
└── casa-prados/
    ├── 12.TVROOM-PORTADA.jpg
    ├── 13.TVROOM.jpg
    ├── 4.COCINA.jpg
    └── ...
Las imágenes se importan directamente en projects.js:

js
Copiar código
import pradosCover from "./fotos-projects/casa-prados/12.TVROOM-PORTADA.jpg";
🌙 Sistema de Tema
Actualmente configurado en modo oscuro permanente.

Hook personalizado:

js
Copiar código
function useTheme() {
  const [theme] = useState("dark");

  React.useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return { theme };
}
Botón visual se mantiene pero no altera el estado.

📬 Formulario de Contacto
Implementado con EmailJS.

Instalación:

nginx
Copiar código
npm install @emailjs/browser
Implementación:

js
Copiar código
await emailjs.sendForm(
  "service_h1gwn5m",
  "template_58mdo6e",
  e.target,
  "PUBLIC_KEY"
);
Estados manejados:

idle

loading

success

error

Mensajes de feedback visual incluidos.

🔗 Redes Sociales
Enlaces configurados con apertura en nueva pestaña:

jsx
Copiar código
<a
  href="https://instagram.com/usuario"
  target="_blank"
  rel="noopener noreferrer"
>
🎨 Tecnologías Utilizadas
Tecnología	Uso
React	Framework base
Vite	Bundler
Tailwind CSS	Estilos
Framer Motion	Animaciones
Lucide React	Iconografía
EmailJS	Envío de correos sin backend

📈 Estado Actual
✅ 5 proyectos cargados
✅ Galerías por intervención
✅ Modal funcional
✅ Filtros por categoría
✅ Formulario operativo
✅ Modo oscuro forzado
✅ Deploy funcional

🚀 Próximos Pasos Estratégicos
Migrar modal a páginas individuales (React Router)

Implementar meta dinámicos por proyecto

Optimización SEO técnica

Implementar sitemap

Optimizar imágenes (lazy loading)

Mejorar estructura H1-H2 semántica

🧠 Arquitectura de Contenido
Cada proyecto sigue una estructura:

Contexto

Concepto

Intervenciones

Materialidad

Resultado

Pensado para:

Experiencia de usuario

SEO

Narrativa profesional

🔐 Consideraciones
No hay backend propio.

EmailJS gestiona envío de formularios.

Las imágenes están embebidas en build.

No hay rutas individuales todavía.

🏁 Conclusión
Actualmente el proyecto es una landing profesional funcional, visualmente sólida y preparada para escalar hacia una arquitectura SEO completa mediante páginas individuales por proyecto.

yaml
Copiar código

---

Si quieres, ahora puedo prepararte:

- 📄 Documento estratégico SEO
- 🧠 Roadmap técnico de evolución
- 🏗️ Arquitectura SEO completa
- 📊 Plan de posicionamiento local para Caracas

Tú decides el siguiente nivel.