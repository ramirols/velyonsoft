import { T as createAstro, a as renderComponent, f as renderTemplate, h as addAttribute, p as maybeRenderHead } from "./server_DA5ogtCn.mjs";
import { t as createComponent } from "./compiler_DVgYHClu.mjs";
import { a as ArrowRight, c as whatsappUrl, o as createLucideIcon_default, s as siteConfig, t as $$BaseLayout } from "./BaseLayout_-LWBpbU2.mjs";
import { t as Check } from "./check_DY0Jvdq_.mjs";
import { t as ChevronRight } from "./chevron-right_CetnjvxA.mjs";
import { t as ExternalLink } from "./external-link_CfZD4I8c.mjs";
import { t as $$LottieAnimation } from "./LottieAnimation_BLDGmJXd.mjs";
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/icons/circle-dot.ts
/**
* @component @name CircleDot
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-dot
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var CircleDot = createLucideIcon_default("circle-dot", [["circle", {
	"cx": "12",
	"cy": "12",
	"r": "10"
}], ["circle", {
	"cx": "12",
	"cy": "12",
	"r": "1"
}]]);
//#endregion
//#region src/components/SolutionPage.astro
createAstro("https://www.velyonsoft.com");
var $$SolutionPage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SolutionPage;
	const props = Astro.props;
	const pageUrl = new URL(props.path, siteConfig.url).href;
	const fullName = `${props.title} ${props.highlight}`.replace(/\s+/g, " ").trim();
	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"@id": `${pageUrl}#service`,
			name: fullName,
			serviceType: props.eyebrow.replace(/^Solución\s*·\s*/i, ""),
			description: props.metaDescription,
			url: pageUrl,
			provider: { "@id": `${siteConfig.url}/#organization` },
			areaServed: {
				"@type": "Country",
				name: "Perú"
			},
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: "Alcance posible",
				itemListElement: props.capabilities.map((item) => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: item.title,
						description: item.description
					}
				}))
			}
		},
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Inicio",
					item: `${siteConfig.url}/`
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Soluciones",
					item: `${siteConfig.url}/#soluciones`
				},
				{
					"@type": "ListItem",
					position: 3,
					name: fullName,
					item: pageUrl
				}
			]
		},
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: props.faqs.map((item) => ({
				"@type": "Question",
				name: item.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: item.answer
				}
			}))
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": props.metaTitle,
		"description": props.metaDescription,
		"schema": schema
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main><section class="border-b border-border bg-white py-16 sm:py-24"><div class="container-velyon"><nav class="mb-10 flex items-center gap-2 text-xs font-semibold text-muted-foreground" aria-label="Migas de pan"><a href="/" class="transition-colors hover:text-velyon-deep">Inicio</a>${renderComponent($$result, "ChevronRight", ChevronRight, {
		"class": "size-3.5",
		"aria-hidden": "true"
	})}<span>Soluciones</span>${renderComponent($$result, "ChevronRight", ChevronRight, {
		"class": "size-3.5",
		"aria-hidden": "true"
	})}<span aria-current="page">${props.eyebrow.replace(/^Solución\s*·\s*/i, "")}</span></nav><div class="grid grid-cols-[minmax(0,1.08fr)_minmax(300px,.72fr)] items-center gap-12 max-[860px]:grid-cols-1"><div><span class="section-label">${props.eyebrow}</span><h1 class="max-w-[820px] font-display text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[.96] tracking-[-0.065em] text-velyon-ink">${props.title}<em class="font-serif font-medium text-velyon-deep">${props.highlight}</em></h1><p class="mt-7 max-w-[690px] text-lg leading-8 text-muted-foreground">${props.description}</p><div class="mt-9 flex flex-wrap gap-3"><a class="btn-primary" href="/#contacto">Solicitar diagnóstico ${renderComponent($$result, "ArrowRight", ArrowRight, {
		"class": "size-4",
		"aria-hidden": "true"
	})}</a><a class="btn-outline"${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer">Conversar por WhatsApp</a></div></div><aside class="relative min-h-[420px] overflow-hidden rounded-[32px] border border-velyon-deep/10 bg-velyon-mist p-7 sm:p-9" aria-label="Resumen de la solución"><div class="absolute -right-20 -top-20 size-60 rounded-full border border-velyon-deep/10"></div><div class="absolute -right-8 -top-8 size-36 rounded-full border border-velyon-deep/10"></div>${props.lottieSrc && renderTemplate`${renderComponent($$result, "LottieAnimation", $$LottieAnimation, {
		"class": "relative z-10 mx-auto size-52",
		"src": props.lottieSrc,
		"label": `Animación para ${fullName}`
	})}`}<div class="relative z-10 mt-6 border-t border-velyon-deep/15 pt-5"><p class="text-[10px] font-extrabold uppercase tracking-[.18em] text-velyon-deep">Punto de partida</p><p class="mt-3 font-display text-xl font-bold leading-snug text-velyon-ink">${props.introTitle}</p></div></aside></div></div></section><section class="py-24"><div class="container-velyon grid grid-cols-[.72fr_1.28fr] gap-20 max-[860px]:grid-cols-1 max-[860px]:gap-10"><div class="max-w-[480px]"><span class="section-label">El problema antes que la tecnología</span><h2 class="section-title">${props.introTitle}</h2><p class="mt-6 text-[15px] leading-7 text-muted-foreground">${props.intro}</p></div><ol class="border-t border-border">${props.outcomes.map((item, index) => renderTemplate`<li class="grid grid-cols-[56px_1fr] gap-4 border-b border-border py-7"><span class="pt-1 text-xs font-extrabold text-velyon-deep">0${index + 1}</span><div><h3 class="font-display text-xl font-bold tracking-tight">${item.title}</h3><p class="mt-2 max-w-[650px] text-sm leading-7 text-muted-foreground">${item.description}</p></div></li>`)}</ol></div></section><section class="bg-velyon-deep py-24 text-white"><div class="container-velyon"><div class="grid grid-cols-[.72fr_1.28fr] gap-20 max-[860px]:grid-cols-1 max-[860px]:gap-10"><div><span class="section-label !text-velyon-mint">Capacidades</span><h2 class="font-display text-[clamp(2.3rem,4vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.052em]">Lo que podemos construir alrededor de esta necesidad.</h2></div><div class="grid grid-cols-2 gap-x-10 gap-y-8 max-[620px]:grid-cols-1">${props.capabilities.map((item) => renderTemplate`<article class="border-t border-white/20 pt-5">${renderComponent($$result, "CircleDot", CircleDot, {
		"class": "size-4 text-velyon-mint",
		"aria-hidden": "true"
	})}<h3 class="mt-5 font-display text-xl font-bold">${item.title}</h3><p class="mt-3 text-sm leading-7 text-white/65">${item.description}</p></article>`)}</div></div><div class="mt-20 border-t border-white/15 pt-10"><p class="mb-5 text-[10px] font-extrabold uppercase tracking-[.18em] text-velyon-mint">Entregables posibles</p><ul class="grid grid-cols-4 gap-3 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">${props.deliverables.map((item) => renderTemplate`<li class="flex min-h-16 items-center gap-3 border-l border-white/20 px-4 text-sm font-semibold">${renderComponent($$result, "Check", Check, {
		"class": "size-4 shrink-0 text-velyon-mint",
		"stroke-width": "3",
		"aria-hidden": "true"
	})}${item}</li>`)}</ul></div></div></section><section class="py-24"><div class="container-velyon"><div class="mb-14 max-w-[680px]"><span class="section-label">Proceso</span><h2 class="section-title">De una necesidad concreta a una solución funcionando.</h2></div><div class="grid grid-cols-3 border-y border-border max-[760px]:grid-cols-1">${props.steps.map((step, index) => renderTemplate`<article class="min-h-[280px] border-r border-border p-7 last:border-r-0 max-[760px]:border-b max-[760px]:border-r-0 max-[760px]:last:border-b-0"><span class="text-xs font-extrabold text-velyon-deep">0${index + 1}</span><h3 class="mt-16 font-display text-2xl font-bold tracking-tight">${step.title}</h3><p class="mt-4 text-sm leading-7 text-muted-foreground">${step.description}</p></article>`)}</div></div></section><section class="bg-velyon-mist py-24"><div class="container-velyon grid grid-cols-[.72fr_1.28fr] gap-20 max-[820px]:grid-cols-1 max-[820px]:gap-8"><div><span class="section-label">También puede interesarte</span><h2 class="section-title">Rutas relacionadas.</h2></div><div class="grid gap-3">${props.related.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="group grid grid-cols-[1fr_auto] items-center gap-6 rounded-2xl border border-border bg-white p-6 transition-transform hover:-translate-y-0.5"><span><strong class="block font-display text-lg">${item.title}</strong><small class="mt-2 block text-sm leading-6 text-muted-foreground">${item.description}</small></span>${renderComponent($$result, "ExternalLink", ExternalLink, {
		"class": "size-4 text-velyon-deep transition-transform group-hover:translate-x-0.5",
		"aria-hidden": "true"
	})}</a>`)}</div></div></section><section class="py-24"><div class="container-velyon grid grid-cols-[.65fr_1.35fr] gap-20 max-[800px]:grid-cols-1 max-[800px]:gap-8"><div><span class="section-label">Preguntas frecuentes</span><h2 class="section-title">Antes de empezar.</h2></div><div class="grid gap-3">${props.faqs.map((faq) => renderTemplate`<details class="faq-item rounded-2xl border border-border bg-white p-5"><summary class="cursor-pointer list-none pr-8 font-display text-base font-bold">${faq.question}</summary><p class="mt-4 text-sm leading-7 text-muted-foreground">${faq.answer}</p></details>`)}</div></div></section><section class="pb-24"><div class="container-velyon border-y border-velyon-deep/20 bg-velyon-mint-soft px-8 py-14 sm:px-14"><div class="flex items-end justify-between gap-8 max-[720px]:block"><div class="max-w-[760px]"><span class="section-label">Siguiente paso</span><h2 class="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-[-0.05em]">Conversemos sobre lo que tu negocio necesita resolver.</h2></div><a class="btn-primary shrink-0 max-[720px]:mt-7" href="/#contacto">Solicitar diagnóstico ${renderComponent($$result, "ArrowRight", ArrowRight, {
		"class": "size-4",
		"aria-hidden": "true"
	})}</a></div></div></section></main>` })}`;
}, "C:/Users/User/Desktop/velyon/src/components/SolutionPage.astro", void 0);
//#endregion
export { $$SolutionPage as t };
