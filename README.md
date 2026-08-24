# Velyon — Web corporativa multipágina

Proyecto completo de la web comercial de Velyon. La portada resume la propuesta y cada solución y sector tiene una página interna optimizada para una intención de búsqueda concreta.

## Tecnologías

- Astro `7.2.4`
- Tailwind CSS `4.3.3`
- `@lucide/astro` `1.33.0`
- `@lottiefiles/dotlottie-web` para animaciones locales y optimizadas
- `@astrojs/sitemap` para generar el mapa del sitio
- shadcn/ui para Astro mediante React y `components.json`
- React `19.2.8` solamente para los componentes UI de shadcn
- TypeScript en modo estricto

## Requisitos

- Node.js `22.12.0` o superior
- npm `9.6.5` o superior

## Iniciar el proyecto

```bash
npm install
npm run dev
```

Después abre `http://localhost:4321`.

## Comprobar y compilar

```bash
npm run check
npm run build
npm run preview
```

El resultado listo para publicar se genera en `dist/`.

## Personalización inicial

Edita `src/lib/site.ts` para cambiar:

- dominio final;
- correo de contacto;
- número y mensaje de WhatsApp;
- ubicación;
- descripción general de Velyon.

El número `51999999999` es demostrativo y debe reemplazarse antes de publicar.

También debes confirmar el dominio definitivo en `astro.config.mjs`, `public/robots.txt` y `src/lib/site.ts`. El proyecto usa `https://velyon.pe` como referencia para las URL canónicas.

Los textos, precios y listas de cada sección están dentro de los componentes de `src/components/sections/`. Los precios incluidos son referenciales.

## Estructura

```text
src/
├── components/
│   ├── sections/       # Secciones comerciales de la página
│   ├── ui/             # Componentes estilo shadcn/ui
│   ├── Footer.astro
│   ├── Header.astro
│   ├── DetailPage.astro # Plantilla SEO para soluciones y sectores
│   ├── Logo.astro
│   └── WhatsAppButton.astro
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   ├── site.ts         # Datos generales y contacto
│   └── utils.ts        # Utilidad cn() de shadcn
├── pages/
│   ├── soluciones/      # Páginas de cada línea comercial
│   ├── educacion.astro
│   ├── salud.astro
│   ├── negocios-y-servicios.astro
│   └── index.astro
└── styles/
    └── global.css      # Tailwind, tema y paleta Velyon
```

## Componentes shadcn

El proyecto ya incluye `Button`, `Card` y `Badge`. Para agregar otro componente:

```bash
npx shadcn@latest add nombre-del-componente
```

La configuración oficial está en `components.json`. Los componentes React pueden renderizarse estáticamente desde archivos `.astro`; solo agrega una directiva `client:*` cuando el componente necesite interacción en el navegador.

## Formulario de contacto

El formulario valida los campos y prepara un correo con la información ingresada. No requiere backend. Para recibir formularios directamente en una base de datos o servicio externo, reemplaza el comportamiento de `Contact.astro` por tu endpoint preferido.

## Favicons y redes sociales

- `public/favicon.svg`: favicon oficial del prototipo.
- `public/og.png`: imagen para compartir la web en WhatsApp y redes sociales.

## Marca y logos

La marca visible es **Velyon**. `VelyonSoft` se conserva como nombre histórico/comercial en la configuración y el pie, pero no domina el encabezado. Los recursos están en `public/brand/`:

- `logo-velyon-color.svg`: versión principal.
- `logo-velyon-black.svg`: versión monocromática negra.
- `logo-velyon-white.svg`: versión monocromática blanca para fondos oscuros.
- `isotipo-velyon-*.svg`: versiones compactas del símbolo.

No agregues sombras, degradados ni deformaciones al logo. Usa la versión blanca sobre fondos oscuros y la negra cuando una impresión no admita color.

## Arquitectura y SEO

- `/`: resumen comercial, productos en validación, planes y contacto.
- `/soluciones/presencia-digital`
- `/soluciones/ventas-por-internet`
- `/soluciones/automatizacion-y-sistemas`
- `sectores/educacion`: primera vertical prioritaria.
- `/sectores/salud`
- `/sectores/negocios-y-servicios`

Cada página tiene título, descripción, canonical, Open Graph, datos estructurados, una sola etiqueta `h1`, contenido propio, preguntas frecuentes y enlaces internos. `@astrojs/sitemap` genera `sitemap-index.xml` al compilar y `public/robots.txt` indica su ubicación.

## Animaciones Lottie

`LottieAnimation.astro` carga el archivo local `public/animations/technology.lottie` solo cuando se acerca al viewport, lo pausa fuera de pantalla y respeta `prefers-reduced-motion`. Evita colocar animaciones en todas las tarjetas: una animación principal y usos puntuales mantienen la web viva sin perjudicar el rendimiento.

La animación de ejemplo procede de la documentación oficial de LottieFiles. Consulta `CREDITS.md` antes de reemplazarla por una animación gratuita de la galería.

## Publicación

Al ser un sitio estático, puedes desplegarlo en Cloudflare Pages, Netlify, Vercel o cualquier hosting que permita publicar la carpeta `dist/`.
