import { T as createAstro, a as renderComponent, f as renderTemplate, h as addAttribute, o as Fragment, p as maybeRenderHead } from "./server_DA5ogtCn.mjs";
import { t as createComponent } from "./compiler_DVgYHClu.mjs";
import { a as ArrowRight, c as whatsappUrl, o as createLucideIcon_default, s as siteConfig, t as $$BaseLayout } from "./BaseLayout_-LWBpbU2.mjs";
import { t as ChevronRight } from "./chevron-right_CetnjvxA.mjs";
import { t as $$LottieAnimation } from "./LottieAnimation_BLDGmJXd.mjs";
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/icons/corner-down-right.ts
/**
* @component @name CornerDownRight
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUgMTAgNSA1LTUgNSIgLz4KICA8cGF0aCBkPSJNNCA0djdhNCA0IDAgMCAwIDQgNGgxMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/corner-down-right
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var CornerDownRight = createLucideIcon_default("corner-down-right", [["path", { "d": "m15 10 5 5-5 5" }], ["path", { "d": "M4 4v7a4 4 0 0 0 4 4h12" }]]);
//#endregion
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/icons/shield-check.ts
/**
* @component @name ShieldCheck
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtNy42NiA4Ljk1YTEgMSAwIDAgMS0uNjctLjAxQzcuNSAyMC41IDQgMTggNCAxM1Y2YTEgMSAwIDAgMSAxLTFjMiAwIDQuNS0xLjIgNi4yNC0yLjcyYTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXoiIC8+CiAgPHBhdGggZD0ibTkgMTIgMiAyIDQtNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/shield-check
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var ShieldCheck = createLucideIcon_default("shield-check", [["path", { "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }], ["path", { "d": "m9 12 2 2 4-4" }]]);
//#endregion
//#region src/components/SectorPage.astro
createAstro("https://www.velyonsoft.com");
var $$SectorPage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$SectorPage;
	const props = Astro.props;
	const pageUrl = new URL(props.path, siteConfig.url).href;
	const fullName = `${props.title} ${props.highlight}`.replace(/\s+/g, " ").trim();
	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			"@id": `${pageUrl}#webpage`,
			name: fullName,
			description: props.metaDescription,
			url: pageUrl,
			inLanguage: "es-PE",
			isPartOf: { "@id": `${siteConfig.url}/#website` },
			about: {
				"@type": "Thing",
				name: props.sector
			},
			mainEntity: {
				"@type": "ItemList",
				name: `Soluciones para ${props.sector}`,
				itemListElement: props.solutions.map((item, index) => ({
					"@type": "ListItem",
					position: index + 1,
					name: item.title,
					url: new URL(item.href, siteConfig.url).href
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
					name: "Sectores",
					item: `${siteConfig.url}/#sectores`
				},
				{
					"@type": "ListItem",
					position: 3,
					name: props.sector,
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
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main><section class="relative overflow-hidden border-b border-border bg-velyon-mist py-16 sm:py-24"><div class="absolute inset-y-0 right-0 w-[38%] border-l border-velyon-deep/10 bg-white/55 max-[820px]:hidden"></div><div class="container-velyon relative"><nav class="mb-10 flex items-center gap-2 text-xs font-semibold text-muted-foreground" aria-label="Migas de pan"><a href="/" class="transition-colors hover:text-velyon-deep">Inicio</a>${renderComponent($$result, "ChevronRight", ChevronRight, {
		"class": "size-3.5",
		"aria-hidden": "true"
	})}<span>Sectores</span>${renderComponent($$result, "ChevronRight", ChevronRight, {
		"class": "size-3.5",
		"aria-hidden": "true"
	})}<span aria-current="page">${props.sector}</span></nav><div class="grid grid-cols-[1fr_380px] items-center gap-14 max-[820px]:grid-cols-1"><div><span class="section-label">Sector · ${props.sector}</span><h1 class="max-w-[850px] font-display text-[clamp(2.8rem,6vw,5.3rem)] font-bold leading-[.97] tracking-[-0.065em] text-velyon-ink">${props.title}<em class="font-serif font-medium text-velyon-deep">${props.highlight}</em></h1><p class="mt-7 max-w-[720px] text-lg leading-8 text-muted-foreground">${props.description}</p><div class="mt-8 flex flex-wrap gap-2"${addAttribute(`Organizaciones de ${props.sector}`, "aria-label")}>${props.audiences.map((audience) => renderTemplate`<span class="rounded-full border border-velyon-deep/15 bg-white px-4 py-2 text-xs font-bold text-velyon-deep">${audience}</span>`)}</div></div><div class="relative mx-auto grid aspect-square w-full max-w-[360px] place-items-center"><div class="absolute inset-0 rounded-full border border-velyon-deep/10"></div><div class="absolute inset-10 rounded-full border border-velyon-deep/15"></div>${props.lottieSrc && renderTemplate`${renderComponent($$result, "LottieAnimation", $$LottieAnimation, {
		"class": "relative z-10 size-[72%]",
		"src": props.lottieSrc,
		"label": `Animación del sector ${props.sector}`
	})}`}</div></div></div></section><section class="py-24"><div class="container-velyon grid grid-cols-[.72fr_1.28fr] gap-20 max-[850px]:grid-cols-1 max-[850px]:gap-10"><div class="max-w-[470px]"><span class="section-label">Contexto del sector</span><h2 class="section-title">Primero entendemos dónde se pierde tiempo, información o atención.</h2><p class="mt-6 text-sm leading-7 text-muted-foreground">Una página sectorial no repite nuestra lista de servicios. Conecta problemas propios de ${props.sector.toLowerCase()} con una ruta tecnológica concreta.</p></div><div>${props.challenges.map((item, index) => renderTemplate`<article class="grid grid-cols-[64px_1fr] gap-5 border-t border-border py-7 last:border-b"><span class="font-serif text-3xl italic text-velyon-deep/45">${String(index + 1).padStart(2, "0")}</span><div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h3 class="font-display text-xl font-bold">${item.title}</h3><p class="mt-2 text-sm leading-7 text-muted-foreground">${item.description}</p>` })}</div></article>`)}</div></div></section><section class="bg-velyon-deep py-24 text-white"><div class="container-velyon"><div class="mb-14 max-w-[780px]"><span class="section-label !text-velyon-mint">Rutas de solución</span><h2 class="font-display text-[clamp(2.4rem,4.5vw,4rem)] font-bold leading-[1.02] tracking-[-0.055em]">No ofrecemos un paquete genérico. Combinamos capacidades según la operación.</h2></div><div class="grid grid-cols-3 border-y border-white/15 max-[840px]:grid-cols-1">${props.solutions.map((item, index) => renderTemplate`<a${addAttribute(item.href, "href")} class="group min-h-[330px] border-r border-white/15 p-7 last:border-r-0 max-[840px]:min-h-0 max-[840px]:border-b max-[840px]:border-r-0 max-[840px]:last:border-b-0"><span class="text-xs font-extrabold text-velyon-mint">${item.label ?? `0${index + 1}`}</span><h3 class="mt-20 font-display text-2xl font-bold max-[840px]:mt-10">${item.title}</h3><p class="mt-4 text-sm leading-7 text-white/65">${item.description}</p><span class="mt-7 flex items-center gap-2 text-xs font-bold text-velyon-mint">Explorar solución${" "}${renderComponent($$result, "ArrowRight", ArrowRight, {
		"class": "size-4 transition-transform group-hover:translate-x-1",
		"aria-hidden": "true"
	})}</span></a>`)}</div></div></section>${props.product && renderTemplate`<section class="py-24"><div class="container-velyon"><div class="grid grid-cols-[.85fr_1.15fr] overflow-hidden rounded-[28px] border border-velyon-deep/15 max-[780px]:grid-cols-1"><div class="bg-velyon-lavender-soft p-8 sm:p-12"><span class="inline-flex rounded-full border border-velyon-indigo/20 bg-white/60 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.16em] text-velyon-indigo">${props.product.status}</span><p class="mt-16 text-[10px] font-extrabold uppercase tracking-[.18em] text-velyon-indigo">${props.product.eyebrow}</p></div><div class="bg-white p-8 sm:p-12"><h2 class="font-display text-[clamp(2rem,4vw,3.3rem)] font-bold leading-tight tracking-[-0.05em]">${props.product.title}</h2><p class="mt-5 max-w-[650px] text-sm leading-7 text-muted-foreground">${props.product.description}</p><a${addAttribute(props.product.href, "href")} class="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-velyon-deep">Ver producto${" "}${renderComponent($$result, "ArrowRight", ArrowRight, {
		"class": "size-4",
		"aria-hidden": "true"
	})}</a></div></div></div></section>`}<section class="bg-velyon-mist py-24"><div class="container-velyon grid grid-cols-[.7fr_1.3fr] gap-20 max-[820px]:grid-cols-1 max-[820px]:gap-10"><div><span class="section-label">Criterios de implementación</span><h2 class="section-title">Tecnología responsable para el contexto real.</h2></div><div class="grid grid-cols-2 gap-4 max-[560px]:grid-cols-1">${props.principles.map((item) => renderTemplate`<article class="bg-white p-6 ring-1 ring-border">${renderComponent($$result, "ShieldCheck", ShieldCheck, {
		"class": "size-5 text-velyon-deep",
		"aria-hidden": "true"
	})}<h3 class="mt-8 font-display text-lg font-bold">${item.title}</h3><p class="mt-3 text-sm leading-7 text-muted-foreground">${item.description}</p></article>`)}</div></div></section><section class="py-24"><div class="container-velyon grid grid-cols-[.65fr_1.35fr] gap-20 max-[800px]:grid-cols-1 max-[800px]:gap-8"><div><span class="section-label">Preguntas frecuentes</span><h2 class="section-title">Decisiones antes de implementar.</h2></div><div class="grid gap-3">${props.faqs.map((faq) => renderTemplate`<details class="faq-item rounded-2xl border border-border bg-white p-5"><summary class="cursor-pointer list-none pr-8 font-display text-base font-bold">${faq.question}</summary><p class="mt-4 text-sm leading-7 text-muted-foreground">${faq.answer}</p></details>`)}</div></div></section><section class="pb-24"><div class="container-velyon grid grid-cols-[1fr_auto] items-end gap-8 border-t border-velyon-deep/20 pt-12 max-[700px]:grid-cols-1"><div class="max-w-[760px]"><span class="section-label">Siguiente paso</span><h2 class="section-title">Revisemos el proceso que hoy quieres mejorar.</h2></div><div class="flex flex-wrap gap-3"><a class="btn-primary" href="/#contacto">Solicitar diagnóstico ${renderComponent($$result, "CornerDownRight", CornerDownRight, {
		"class": "size-4",
		"aria-hidden": "true"
	})}</a><a class="btn-outline"${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer">WhatsApp</a></div></div></section></main>` })}`;
}, "C:/Users/User/Desktop/velyon/src/components/SectorPage.astro", void 0);
//#endregion
export { $$SectorPage as t };
