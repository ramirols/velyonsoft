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
    "/soluciones/sistemas-gestion": {
      status: 301,
      destination: "/soluciones/automatizacion-de-procesos",
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