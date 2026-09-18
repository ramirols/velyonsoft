import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { a as renderComponent, f as renderTemplate, h as addAttribute, p as maybeRenderHead } from "./server_DA5ogtCn.mjs";
import { t as createComponent } from "./compiler_DVgYHClu.mjs";
import { a as ArrowRight, s as siteConfig, t as $$BaseLayout } from "./BaseLayout_-LWBpbU2.mjs";
import { t as ExternalLink } from "./external-link_CfZD4I8c.mjs";
import { t as projects } from "./projects_BibG9jQP.mjs";
//#region src/pages/proyectos/index.astro
var proyectos_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const schema = [{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Proyectos realizados por Velyon",
		"description": "Portafolio de proyectos digitales desarrollados por Velyon: páginas web, sistemas y soluciones tecnológicas para negocios.",
		"url": new URL("/proyectos", siteConfig.url).href
	}, {
		"@context": "https://schema.org",
		"@type": "ItemList",
		itemListElement: projects.map((project, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: project.name,
			url: project.url
		}))
	}];
	const stats = [
		{
			number: "+40",
			label: "proyectos desarrollados"
		},
		{
			number: "5+",
			label: "años creando soluciones"
		},
		{
			number: "10+",
			label: "sectores trabajados"
		}
	];
	const categories = [
		"Todos",
		"Ecommerce",
		"Landing Page",
		"Web corporativa",
		"Educación"
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Proyectos realizados | Velyon",
		"description": "Conoce proyectos digitales desarrollados por Velyon: páginas web, sistemas y soluciones tecnológicas para negocios.",
		"schema": schema
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main><!-- HERO --><section class="bg-velyon-mist py-20 sm:py-28"><div class="container-velyon"><div class="max-w-[850px]"><span class="section-label">Portafolio Velyon</span><h1 class="mt-6 font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[.95] tracking-[-0.065em]">Proyectos reales que convierten ideas en<span class="font-serif italic text-velyon-deep">soluciones digitales.</span></h1><p class="mt-7 max-w-[650px] text-lg leading-8 text-muted-foreground">Cada proyecto nace desde una necesidad concreta: mejorar ventas, ordenar procesos o construir una presencia digital más sólida.</p></div><!-- STATS --><div class="mt-16 grid max-w-[850px] grid-cols-3 gap-4 max-[650px]:grid-cols-1">${stats.map((stat) => renderTemplate`<div class="rounded-2xl border border-border bg-white p-7"><strong class="font-display text-4xl font-bold text-velyon-deep">${stat.number}</strong><p class="mt-2 text-sm font-semibold text-muted-foreground">${stat.label}</p></div>`)}</div></div></section><!-- PROYECTOS --><section class="bg-white py-24 sm:py-28"><div class="container-velyon"><div class="mb-14 flex items-end justify-between gap-8 max-[700px]:flex-col"><div><span class="section-label">Proyectos seleccionados</span><h2 class="section-title mt-3">Soluciones construidas para negocios reales.</h2></div><p class="max-w-[360px] text-sm leading-7 text-muted-foreground">Una selección de trabajos donde aplicamos diseño, desarrollo y estrategia digital.</p></div><!-- FILTROS VISUALES --><div class="mb-10 flex flex-wrap gap-2">${categories.map((category, index) => renderTemplate`<span${addAttribute(["rounded-full border px-4 py-2 text-xs font-bold", index === 0 ? "border-velyon-deep bg-velyon-deep text-white" : "border-border text-muted-foreground"], "class:list")}>${category}</span>`)}</div><!-- GRID --><div class="grid grid-cols-3 gap-6 max-[950px]:grid-cols-2 max-[650px]:grid-cols-1">${projects.map((project) => renderTemplate`<a${addAttribute(project.url, "href")} target="_blank" rel="noopener noreferrer" class="group overflow-hidden rounded-[24px] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,50,44,.12)]"><!-- Imagen --><div class="relative aspect-[16/10] overflow-hidden bg-velyon-mist">${project.image && renderTemplate`<img${addAttribute(project.image, "src")}${addAttribute(project.name, "alt")} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105">`}<div class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-velyon-deep">${project.category}</div></div><!-- Contenido --><div class="p-6"><h3 class="font-display text-xl font-bold">${project.name}</h3><p class="mt-3 text-sm leading-7 text-muted-foreground">${project.description}</p><div class="mt-6 flex items-center gap-2 text-xs font-extrabold text-velyon-deep">Ver proyecto${renderComponent($$result, "ExternalLink", ExternalLink, { "class": "size-3.5" })}</div></div></a>`)}</div></div></section><!-- CTA --><section class="bg-velyon-deep py-24 text-white"><div class="container-velyon"><div class="flex items-end justify-between gap-10 max-[750px]:flex-col"><div><span class="section-label !text-velyon-mint">¿Tienes un proyecto?</span><h2 class="mt-4 max-w-[700px] font-display text-[clamp(2.4rem,5vw,4rem)] font-bold leading-tight tracking-[-0.05em]">Construyamos una solución digital para tu negocio.</h2></div><a href="/#contacto" class="btn-light">Conversemos${renderComponent($$result, "ArrowRight", ArrowRight, { "class": "size-4" })}</a></div></div></section></main>` })}`;
}, "C:/Users/User/Desktop/velyon/src/pages/proyectos/index.astro", void 0);
var $$file = "C:/Users/User/Desktop/velyon/src/pages/proyectos/index.astro";
var $$url = "/proyectos";
//#endregion
//#region \0virtual:astro:page:src/pages/proyectos/index@_@astro
var page = () => proyectos_exports;
//#endregion
export { page };
