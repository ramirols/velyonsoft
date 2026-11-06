export const siteConfig = {
  name: "Velyon",
  alternateName: "VelyonSoft",
  legalName: "VelyonSoft",
  descriptor: "Estudio de soluciones tecnológicas",
  tagline: "Tecnología para vender y operar mejor.",
  description:
    "Velyon desarrolla páginas web, tiendas online, automatizaciones y sistemas a medida para negocios y empresas en Perú.",
  url: "https://www.velyonsoft.com",
  email: "contacto@velyonsoft.com",
  location: "Lima, Perú",
  whatsappNumber: "51900083518",
  whatsappMessage:
    "Hola Velyon, quisiera conversar sobre una solución para mi negocio.",
} as const;

export const socialNetworks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/velyonsoft",
    icon: "instagram",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/velyonsoft",
    icon: "facebook",
  },
];

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
