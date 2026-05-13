import {
    Menu,
    X,
    Grid3X3,
    Briefcase,
    BookOpen,
    Mail,
    Moon,
    SunMedium,
    Laptop,
    Code,
    Boxes,
    Smartphone,
    ChevronDown,
    Scale,
    Brain,
    UtensilsCrossed,
    ShoppingBag,
    Workflow,
    Building2,
} from "lucide-react";
import { useState, useEffect } from "react";
import { getWhatsAppLink, getWhatsAppLinkWithMessage } from "../lib/constants";

function ThemeToggleIcon({ theme }) {
    const isDark = theme === "dark";

    return (
        <span className="relative block h-[18px] w-[18px]">
            <SunMedium
                size={18}
                className={`absolute inset-0 transition-all duration-500 ease-out motion-reduce:transition-none ${isDark
                    ? "rotate-0 scale-100 opacity-100"
                    : "rotate-90 scale-0 opacity-0"
                    }`}
            />
            <Moon
                size={18}
                className={`absolute inset-0 transition-all duration-500 ease-out motion-reduce:transition-none ${isDark
                    ? "-rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                    }`}
            />
        </span>
    );
}

export default function Header({ lang = "es" }) {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState("light");

    const translations = {
        es: {
            inicio: "Inicio",
            sobre_nosotros: "Sobre Nosotros",
            servicios: "Servicios",
            proyectos: "Proyectos",
            contacto: "Contacto",
            toggleTheme: "Cambiar tema",
            servicesEyebrow: "Servicios",
            servicesTitle: "Soluciones para crecer y operar mejor",
            servicesOverview: "Servicios principales",
            servicesSpecialized: "Servicios especializados",
        },
        en: {
            inicio: "Home",
            sobre_nosotros: "About Us",
            servicios: "Services",
            proyectos: "Projects",
            contacto: "Contact",
            toggleTheme: "Toggle theme",
            servicesEyebrow: "Services",
            servicesTitle: "Solutions to grow and operate better",
            servicesOverview: "Core services",
            servicesSpecialized: "Specialized services",
        },
    };

    const t = translations[lang] || translations.es;

    const navLinks = [
        {
            name: t.sobre_nosotros,
            href: `/${lang}/sobre-nosotros`,
            icon: <BookOpen size={18} />,
        },
        {
            name: t.proyectos,
            href: `/${lang}/proyectos`,
            icon: <Briefcase size={18} />,
        },
    ];

    const primaryContactHref = getWhatsAppLink();

const featuredServicePlans = {
        es: [
            { name: "Landing Page Profesional", description: "Diseño profesional, responsive y optimizado para convertir visitantes en clientes.", icon: Laptop },
            { name: "Web Corporativa", description: "Sitio web completo para tu empresa con diseño profesional y estructura optimizada.", icon: Code },
            { name: "Desarrollo en WordPress", description: "Sitios personalizados en el CMS más popular del mundo conPanel de gestión fácil.", icon: Code },
            { name: "Aplicaciones Móviles", description: "Apps nativas e híbridas para iOS y Android con experiencia de usuario fluida.", icon: Smartphone },
            { name: "Marketing Digital", description: "Estrategias de publicidad online, SEO y gestión de redes sociales para tu negocio.", icon: Boxes },
            { name: "Automatizaciones de Procesos", description: "Optimiza tu operación con flujos automatizados que reducen tiempo y errores.", icon: Laptop },
        ],
        en: [
            { name: "Professional Landing Page", description: "Professional, responsive design optimized to convert visitors into customers.", icon: Laptop },
            { name: "Corporate Website", description: "Complete website for your business with professional design and optimized structure.", icon: Code },
            { name: "WordPress Development", description: "Custom sites on the world's most popular CMS with an easy management panel.", icon: Code },
            { name: "Mobile Applications", description: "Native and hybrid apps for iOS and Android with smooth user experience.", icon: Smartphone },
            { name: "Digital Marketing", description: "Online advertising strategies, SEO and social media management for your business.", icon: Boxes },
            { name: "Process Automations", description: "Optimize your operations with automated workflows that reduce time and errors.", icon: Laptop },
        ],
    }[lang];

    const servicesLinks = [
        {
            name: lang === "es" ? "Software para abogados" : "Software for law firms",
            href: `/${lang}/servicios/software-para-abogados`,
            label: lang === "es" ? "Legal" : "Legal",
            description: lang === "es"
                ? "Gestiona clientes, casos, documentos y agenda desde un solo sistema."
                : "Manage clients, cases, documents and schedules in one place.",
            icon: Scale,
            badgeClass: "bg-sky-500/12 text-sky-700 dark:text-sky-300",
            iconClass: "text-sky-700 dark:text-sky-300",
        },
        {
            name: lang === "es" ? "Software para psicólogos" : "Software for psychologists",
            href: `/${lang}/servicios/software-para-psicologos`,
            label: lang === "es" ? "Salud" : "Health",
            description: lang === "es"
                ? "Organiza pacientes, sesiones, historial clínico y control de pagos."
                : "Organize patients, sessions, clinical records and payments.",
            icon: Brain,
            badgeClass: "bg-violet-500/12 text-violet-700 dark:text-violet-300",
            iconClass: "text-violet-700 dark:text-violet-300",
        },
        {
            name: lang === "es" ? "Software para restaurantes" : "Software for restaurants",
            href: `/${lang}/servicios/software-para-restaurantes`,
            label: lang === "es" ? "Gastronomía" : "Food service",
            description: lang === "es"
                ? "Centraliza pedidos, reservas, menú digital, mesas e inventario."
                : "Centralize orders, reservations, digital menus, tables and inventory.",
            icon: UtensilsCrossed,
            badgeClass: "bg-amber-500/14 text-amber-700 dark:text-amber-300",
            iconClass: "text-amber-700 dark:text-amber-300",
        },
        {
            name: lang === "es" ? "Tiendas virtuales" : "Online stores",
            href: `/${lang}/servicios/tiendas-virtuales`,
            label: "E-commerce",
            description: lang === "es"
                ? "Vende online con catálogo, carrito, panel y optimización para convertir."
                : "Sell online with catalog, cart, dashboard and conversion-focused optimization.",
            icon: ShoppingBag,
            badgeClass: "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300",
            iconClass: "text-emerald-700 dark:text-emerald-300",
        },
        {
            name: lang === "es" ? "Automatización de procesos" : "Process automation",
            href: `/${lang}/servicios/automatizacion-de-procesos`,
            label: lang === "es" ? "Operaciones" : "Operations",
            description: lang === "es"
                ? "Reduce tareas manuales con flujos, alertas e integraciones a medida."
                : "Reduce manual work with workflows, alerts and tailored integrations.",
            icon: Workflow,
            badgeClass: "bg-cyan-500/12 text-cyan-700 dark:text-cyan-300",
            iconClass: "text-cyan-700 dark:text-cyan-300",
        },
        {
            name: lang === "es" ? "Desarrollo web empresas" : "Business web development",
            href: `/${lang}/servicios/desarrollo-web-empresas`,
            label: lang === "es" ? "Corporativo" : "Corporate",
            description: lang === "es"
                ? "Crea una web corporativa rápida, clara y orientada a captar clientes."
                : "Build a fast, clear corporate website designed to attract clients.",
            icon: Building2,
            badgeClass: "bg-rose-500/12 text-rose-700 dark:text-rose-300",
            iconClass: "text-rose-700 dark:text-rose-300",
        },
    ];

    const specializedDropdownLinks = servicesLinks;

    useEffect(() => {
        const syncTheme = () => {
            setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
        };

        syncTheme();
        document.addEventListener("themechange", syncTheme);

        return () => {
            document.removeEventListener("themechange", syncTheme);
        };
    }, []);

    useEffect(() => {
        const syncHeaderState = () => {
            setOpen(false);
        };

        document.addEventListener("astro:page-load", syncHeaderState);

        return () => {
            document.removeEventListener("astro:page-load", syncHeaderState);
        };
    }, []);

    const switchLang = (newLang) => {
        const url = new URL(window.location.href);
        const segments = url.pathname.split("/").filter(Boolean);

        if (segments[0] === "es" || segments[0] === "en") {
            segments[0] = newLang;
        } else {
            segments.unshift(newLang);
        }

        url.pathname = `/${segments.join("/")}`;
        window.location.href = url.toString();
    };

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";

        if (typeof window.__setTheme === "function") {
            window.__setTheme(nextTheme);
        } else {
            document.documentElement.classList.toggle("dark", nextTheme === "dark");
            document.documentElement.dataset.theme = nextTheme;
            document.dispatchEvent(
                new CustomEvent("themechange", { detail: { theme: nextTheme } }),
            );
        }

        setTheme(nextTheme);
    };

    const themeButtonClass = "border border-border/70 bg-card/80 text-primary hover:bg-muted hover:scale-105 active:scale-95";

    const headerLogoSrc = theme === "dark" ? "/velyon-logo-mo.webp" : "/velyon-logo-mc.webp";

    return (
        <header className="fixed top-3 left-0 w-full z-50 px-3 transition-all duration-500 sm:top-4 sm:px-4 lg:top-6 lg:px-6">
            <div className="max-w-7xl mx-auto">
                <div
                    className="relative flex items-center justify-between rounded-2xl border border-white/25 bg-background/45 px-3 py-2.5 shadow-lg shadow-black/5 backdrop-blur-2xl transition-all duration-500 ease-out dark:border-white/10 dark:bg-background/35 sm:px-4 lg:px-6 lg:py-3"
                >
                    <div className="flex items-center">
                        <a
                            href={`/${lang}#inicio`}
                            className="inline-flex items-center py-1 transition-all duration-500 ease-in-out lg:ml-2"
                        >
                            <div className="rounded-xl border border-white/20 bg-white/10 p-2 shadow-lg shadow-black/20 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                                <img
                                    src={headerLogoSrc}
                                    alt="VelyonSoft Logo"
                                    className="h-6 w-auto object-cover"
                                />
                            </div>
                        </a>
                    </div>

                    <nav
                        className="hidden items-center gap-4 text-sm font-medium text-primary transition-colors duration-300 lg:flex xl:gap-8"
                    >
                        <a href={`/${lang}/sobre-nosotros`} className="flex items-center gap-2 hover:text-secondary">
                            <BookOpen size={18} />
                            {t.sobre_nosotros}
                        </a>

                        <div className="static group">
                            <button
                                type="button"
                                className="flex items-center gap-2 transition-colors hover:text-secondary"
                            >
                                <Grid3X3 size={18} />
                                {t.servicios}
                                <ChevronDown
                                    size={16}
                                    className="transition-transform duration-200 group-hover:rotate-180"
                                />
                            </button>

                            <div className="absolute left-0 right-0 top-full z-50 pt-2 opacity-0 invisible translate-y-3 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-background shadow-2xl shadow-black/15 dark:bg-card">
                                    <div>
                                        <div className="border-b border-border/60 px-6 pb-5 pt-6 lg:px-8">
                                            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-secondary">
                                                {t.servicesEyebrow}
                                            </p>
                                            <p className="mt-3 text-2xl font-semibold tracking-tight text-primary">
                                                {t.servicesTitle}
                                            </p>
                                        </div>

                                        <div className="grid gap-0 lg:grid-cols-2">
                                            <div className="border-b border-border/60 px-6 py-6 lg:border-b-0 lg:border-r lg:px-8">
                                                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary">
                                                    {t.servicesOverview}
                                                </p>
                                                <div className="mt-5 max-h-[300px] overflow-y-auto pr-2">
<div className="grid gap-2.5">
                                                    {featuredServicePlans.map((plan) => {
                                                        const Icon = plan.icon;
                                                        const message = lang === "es"
                                                            ? `Hola VelyonSoft! Me interesa el servicio de "${plan.name}". ¿Podrían darme información y una cotización por favor?`
                                                            : `Hello VelyonSoft! I'm interested in the "${plan.name}" service. Could you please give me information and a quote?`;

                                                        return (
                                                            <a
                                                                key={plan.name}
                                                                href={getWhatsAppLinkWithMessage(message)}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="group/item flex items-start gap-3 rounded-[1.35rem] border border-transparent px-3 py-3 transition-all duration-200 hover:border-border/70 hover:bg-muted/65"
                                                            >
                                                                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-card text-secondary">
                                                                    <Icon size={18} />
                                                                </div>

                                                                <div className="min-w-0 flex-1">
                                                                    <p className="text-[1rem] font-semibold leading-tight text-primary transition-colors group-hover/item:text-secondary">
                                                                        {plan.name}
                                                                    </p>
                                                                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                                                        {plan.description}
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        );
                                                    })}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="px-6 py-6 lg:px-8">
                                                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-secondary">
                                                    {t.servicesSpecialized}
                                                </p>
                                                <div className="mt-5 max-h-[300px] overflow-y-auto pr-2">
                                                    <div className="grid gap-2.5">
                                                    {specializedDropdownLinks.map((service) => {
                                                        const Icon = service.icon;

                                                        return (
                                                            <a
                                                                key={service.href}
                                                                href={service.href}
                                                                className="group/item flex items-start gap-3 rounded-[1.35rem] border border-transparent px-3 py-3 transition-all duration-200 hover:border-border/70 hover:bg-muted/65"
                                                            >
                                                                <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-card ${service.iconClass}`}>
                                                                    <Icon size={18} />
                                                                </div>

                                                                <div className="min-w-0 flex-1">
                                                                    <p className="text-[1rem] font-semibold leading-tight text-primary transition-colors group-hover/item:text-secondary">
                                                                        {service.name}
                                                                    </p>
                                                                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                                                        {service.description}
                                                                    </p>
                                                                </div>
                                                                </a>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href={`/${lang}/proyectos`} className="flex items-center gap-2 hover:text-secondary">
                            <Briefcase size={18} />
                            {t.proyectos}
                        </a>

                    </nav>

                    <div className="hidden lg:flex items-center gap-3">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={t.toggleTheme}
                            className={`group flex h-10 w-10 items-center justify-center rounded-xl transition duration-300 ${themeButtonClass}`}
                        >
                            <ThemeToggleIcon theme={theme} />
                        </button>

                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => switchLang("es")}
                                className={`cursor-pointer rounded-lg px-3 py-1 text-sm font-bold transition ${lang === "es"
                                    ? "bg-secondary text-white"
                                    : "text-muted-foreground hover:text-primary"
                                    }`}
                            >
                                ES
                            </button>

                            <button
                                type="button"
                                onClick={() => switchLang("en")}
                                className={`cursor-pointer rounded-lg px-3 py-1 text-sm font-bold transition ${lang === "en"
                                    ? "bg-secondary text-white"
                                    : "text-muted-foreground hover:text-primary"
                                    }`}
                            >
                                EN
                            </button>
                        </div>

                        <a
                            href={primaryContactHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl bg-secondary px-5 py-2 font-semibold text-white transition-all hover:opacity-90"
                        >
                            <Mail size={18} />
                            {t.contacto}
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        aria-controls="mobile-navigation"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/80 text-primary transition-colors hover:bg-muted lg:hidden"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {open && (
                    <div
                        id="mobile-navigation"
                        className="mt-2 max-h-[calc(100vh-6.5rem)] overflow-y-auto rounded-2xl border border-border/70 bg-background p-4 shadow-xl shadow-black/10 backdrop-blur-sm transition-all duration-300 dark:bg-card sm:p-5 lg:hidden"
                    >
                        <div className="space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-base font-semibold text-primary transition hover:bg-muted hover:text-secondary"
                                >
                                    {link.icon}
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="mt-5 border-t border-border/60 pt-5">
                            <p className="px-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                                Servicios
                            </p>
                            <div className="mt-3 grid gap-2 sm:grid-cols-2">
                                {servicesLinks.map((service) => {
                                    const Icon = service.icon;

                                    return (
                                        <a
                                            key={service.href}
                                            href={service.href}
                                            onClick={() => setOpen(false)}
                                            className="flex min-w-0 items-start gap-3 rounded-2xl border border-border/60 bg-card/70 p-3 transition hover:border-secondary/30 hover:bg-muted/70"
                                        >
                                            <span className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background ${service.iconClass}`}>
                                                <Icon size={18} />
                                            </span>
                                            <span className="min-w-0">
                                                <span className="block truncate text-sm font-bold text-primary">
                                                    {service.name}
                                                </span>
                                                <span className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${service.badgeClass}`}>
                                                    {service.label}
                                                </span>
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 border-t border-border/60 pt-5">
                            <button
                                type="button"
                                onClick={toggleTheme}
                                aria-label={t.toggleTheme}
                                className={`group flex h-10 w-10 items-center justify-center rounded-xl transition duration-300 ${themeButtonClass}`}
                            >
                                <ThemeToggleIcon theme={theme} />
                            </button>

                            <button
                                type="button"
                                onClick={() => switchLang("es")}
                                className={`font-bold ${lang === "es"
                                    ? "text-secondary"
                                    : "text-muted-foreground"
                                    }`}
                            >
                                ES
                            </button>

                            <button
                                type="button"
                                onClick={() => switchLang("en")}
                                className={`font-bold ${lang === "en"
                                    ? "text-secondary"
                                    : "text-muted-foreground"
                                    }`}
                            >
                                EN
                            </button>
                        </div>

                        <a
                            href={primaryContactHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpen(false)}
                            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-secondary py-3 font-semibold text-white transition hover:opacity-90"
                        >
                            <Mail size={18} />
                            {t.contacto}
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}
