import { Facebook, Instagram, Linkedin } from "@lucide/astro";

export const siteConfig = {
  name: "Velyon",
  legalName: "VelyonSoft",
  descriptor: "Estudio de soluciones tecnológicas",
  tagline: "Tecnología para vender y operar mejor.",
  description:
    "Velyon crea páginas web, tiendas online, automatizaciones y sistemas para negocios que quieren vender más y operar mejor.",
  url: "https://velyonsoft.com",
  email: "contacto@velyonsoft.com",
  location: "Lima, Perú",
  whatsappNumber: "51997676432",
  whatsappMessage: "Hola Velyon, quisiera conversar sobre una solución para mi negocio.",
} as const;

export const solutionLinks = [
  {
    number: "01",
    label: "Presencia digital",
    detail: "Webs que inspiran confianza",
    href: "/soluciones/presencia-digital",
  },
  {
    number: "02",
    label: "Ventas por internet",
    detail: "Catálogos y tiendas online",
    href: "/soluciones/ventas-por-internet",
  },
  {
    number: "03",
    label: "Automatización y sistemas",
    detail: "Procesos simples y conectados",
    href: "/soluciones/automatizacion-y-sistemas",
  },
] as const;

export const sectorLinks = [
  {
    number: "01",
    label: "Educación",
    detail: "Colegios, academias y formación",
    href: "/sectores/educacion",
  },
  {
    number: "02",
    label: "Salud",
    detail: "Consultorios y centros médicos",
    href: "/sectores/salud",
  },
  {
    number: "03",
    label: "Negocios y servicios",
    detail: "Soluciones para pymes",
    href: "/sectores/negocios-y-servicios",
  },
] as const;

export const socialNetworks = [
  {
    name: "Instagram",
    url: "https://instagram.com/velyonsoft",
    icon: "instagram",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/velyonsoft",
    icon: "facebook",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/velyonsoft",
    icon: "linkedin",
  },
];

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
