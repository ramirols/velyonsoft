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