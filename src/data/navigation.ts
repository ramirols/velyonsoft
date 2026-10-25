export interface ProductLink {
    label: string;
    detail: string;
    href: string;
    status: string;
    featured: boolean;
    type: "health" | "inventory" | "business";
    demoUrl?: string;
    hero: string;
    platforms: string[];
    features: string[];
}

export const productLinks: ProductLink[] = [
    {
        label: "Synkro",
        detail:
            "Software de gestión clínica, agenda semanal y notas para consultorios psicológicos.",
        href:
            "/productos/sistema-para-consultorios",
        status:
            "En validación comercial",
        featured: true,
        type: "health",
        demoUrl: "https://synkro-psicology.vercel.app/demo",
        hero:
            "Software clínico especializado para psicólogos y consultorios.",
        platforms: [
            "Panel web",
            "Agenda semanal",
            "Acceso seguro"
        ],
        features: [
            "Agenda visual por turnos",
            "Fichas clínicas digitales",
            "Notas de sesión estructuradas",
            "Modo demostración activo"
        ]
    },
    {
        label: "Velyon Inventory",
        detail:
            "Control de stock, almacenes y movimientos comerciales en tiempo real.",
        href:
            "/productos/sistema-inventario",
        status:
            "Prototipo en desarrollo",
        featured: false,
        type: "inventory",
        hero:
            "Controla tus productos, movimientos y stock desde un solo sistema.",
        platforms: [
            "Panel web",
            "Módulos conectados"
        ],
        features: [
            "Stock en tiempo real",
            "Entradas y salidas",
            "Control de almacenes",
            "Reportes comerciales"
        ]
    }
];

export const mainSectorLinks = [
    {
        number: "01",
        label: "Salud",
        detail: "Consultorios, clínicas y gestión de citas",
        href: "/sectores/salud",
    },
    {
        number: "02",
        label: "Educación",
        detail: "Colegios, academias y plataformas de formación",
        href: "/sectores/educacion",
    },
    {
        number: "03",
        label: "Comercio y pymes",
        detail: "Catálogos, tiendas y orden de pedidos",
        href: "/sectores/pymes-y-servicios",
    },
    {
        number: "04",
        label: "Servicios profesionales",
        detail: "Estudios contables, legales y consultoría",
        href: "/sectores/servicios-profesionales",
    },
];

export const allSectorLinks = [
    ...mainSectorLinks,
    {
        number: "05",
        label: "Restaurantes y comida",
        detail: "Menús interactivos y pedidos por WhatsApp",
        href: "/sectores/restaurantes",
    },
    {
        number: "06",
        label: "Hoteles y turismo",
        detail: "Webs para agencias de viaje y hospedajes",
        href: "/sectores/hoteles-turismo",
    },
    {
        number: "07",
        label: "Inmobiliarias",
        detail: "Catálogos de proyectos y departamentos",
        href: "/sectores/inmobiliarias",
    },
    {
        number: "08",
        label: "Logística y transporte",
        detail: "Cotizadores web y registro operativo",
        href: "/sectores/logistica-transporte",
    },
    {
        number: "09",
        label: "Agricultura",
        detail: "Sistemas para comercializadoras agrícolas",
        href: "/sectores/agricultura",
    },
];

export const sectorLinks = allSectorLinks;

export const solutionLinks = [
    {
        number: "01",
        label: "Páginas web",
        detail: "Webs profesionales para captar clientes",
        href: "/soluciones/desarrollo-web",
    },
    {
        number: "02",
        label: "Ventas por internet",
        detail: "Ecommerce, catálogos y ventas online",
        href: "/soluciones/ventas-por-internet",
    },
    {
        number: "03",
        label: "Software a medida",
        detail: "Sistemas adaptados a cada negocio",
        href: "/soluciones/software-a-medida",
    },
    {
        number: "04",
        label: "Aplicaciones móviles",
        detail: "Apps para Android y iOS",
        href: "/soluciones/aplicaciones-moviles",
    },
    {
        number: "05",
        label: "Automatización de procesos",
        detail: "Integraciones y tareas automáticas",
        href: "/soluciones/automatizacion-de-procesos",
    },
    {
        number: "06",
        label: "Mantenimiento y evolución",
        detail: "Actualizaciones y soporte continuo",
        href: "/soluciones/mantenimiento-y-evolucion",
    },
] as const;