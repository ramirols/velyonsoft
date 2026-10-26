import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

export default defineConfig({

  site: "https://www.velyonsoft.com",

  trailingSlash: "never",

  output: "server",

  adapter: vercel(),

  redirects: {
    "/productos/plaga-software": {
      status: 301,
      destination: "/soluciones/software-a-medida",
    },
    "/sitemap.xml": {
      status: 301,
      destination: "/sitemap-index.xml",
    },
    "/soluciones/tiendas-online": {
      status: 301,
      destination: "/soluciones/ventas-por-internet",
    },
    "/soluciones/tiendas-virtuales": {
      status: 301,
      destination: "/soluciones/ventas-por-internet",
    },
    "/soluciones/presencia-digital": {
      status: 301,
      destination: "/soluciones/desarrollo-web",
    },
    "/soluciones/marketing-digital": {
      status: 301,
      destination: "/soluciones/desarrollo-web",
    },
    "/soluciones/sistemas-gestion": {
      status: 301,
      destination: "/soluciones/automatizacion-de-procesos",
    },
    "/soluciones/automatizacion-y-sistemas": {
      status: 301,
      destination: "/soluciones/automatizacion-de-procesos",
    },
    "/sectores/negocios-y-servicios": {
      status: 301,
      destination: "/sectores/pymes-y-servicios",
    },
    "/soluciones": {
      status: 301,
      destination: "/#soluciones",
    },
    "/sectores": {
      status: 301,
      destination: "/#sectores",
    },
    "/productos": {
      status: 301,
      destination: "/#productos",
    },
    "/es": {
      status: 301,
      destination: "/",
    },
    "/en": {
      status: 301,
      destination: "/",
    },
    "/es/proyectos": {
      status: 301,
      destination: "/proyectos",
    },
    "/en/proyectos": {
      status: 301,
      destination: "/proyectos",
    },
    "/en/projects": {
      status: 301,
      destination: "/proyectos",
    },
  },

  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes("/productos/plaga-software"),
    }),
  ],

  vite: {
    plugins: [
      tailwindcss()
    ],
  },

});