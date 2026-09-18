import { T as createAstro, a as renderComponent, f as renderTemplate, h as addAttribute, o as Fragment, p as maybeRenderHead } from "./server_DA5ogtCn.mjs";
import { t as createComponent } from "./compiler_DVgYHClu.mjs";
import { a as ArrowRight, c as whatsappUrl, s as siteConfig, t as $$BaseLayout } from "./BaseLayout_-LWBpbU2.mjs";
import { t as Check } from "./check_DY0Jvdq_.mjs";
import { t as ChevronRight } from "./chevron-right_CetnjvxA.mjs";
import { n as MonitorSmartphone, t as Smartphone } from "./smartphone_BdK6KPWs.mjs";
import { t as $$LottieAnimation } from "./LottieAnimation_BLDGmJXd.mjs";
//#region src/components/ProductPage.astro
createAstro("https://www.velyonsoft.com");
var $$ProductPage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ProductPage;
	const props = Astro.props;
	const pageUrl = new URL(props.path, siteConfig.url).href;
	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"@id": `${pageUrl}#software`,
			name: props.productName,
			description: props.metaDescription,
			url: pageUrl,
			applicationCategory: "BusinessApplication",
			operatingSystem: props.platforms.join(", "),
			author: { "@id": `${siteConfig.url}/#organization` },
			featureList: props.modules.map((item) => item.title),
			inLanguage: "es-PE"
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
					name: "Productos",
					item: `${siteConfig.url}/#productos`
				},
				{
					"@type": "ListItem",
					position: 3,
					name: props.productName,
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
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main><section class="overflow-hidden bg-[#0d2521] py-16 text-white sm:py-24"><div class="container-velyon"><nav class="mb-10 flex items-center gap-2 text-xs font-semibold text-white/55" aria-label="Migas de pan"><a href="/" class="transition-colors hover:text-velyon-mint">Inicio</a>${renderComponent($$result, "ChevronRight", ChevronRight, {
		"class": "size-3.5",
		"aria-hidden": "true"
	})}<span>Productos</span>${renderComponent($$result, "ChevronRight", ChevronRight, {
		"class": "size-3.5",
		"aria-hidden": "true"
	})}<span aria-current="page">${props.productName}</span></nav><div class="grid grid-cols-[.9fr_1.1fr] items-center gap-16 max-[900px]:grid-cols-1"><div><div class="flex flex-wrap items-center gap-3"><span class="section-label !text-velyon-mint">Producto Velyon</span><span class="rounded-full border border-velyon-mint/25 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.14em] text-velyon-mint">${props.status}</span></div><p class="mt-8 font-display text-sm font-bold text-white/60">${props.productName}</p><h1 class="mt-3 max-w-[760px] font-display text-[clamp(2.8rem,5.7vw,5rem)] font-bold leading-[.97] tracking-[-0.064em]">${props.title}<em class="font-serif font-medium text-velyon-mint">${props.highlight}</em></h1><p class="mt-7 max-w-[650px] text-lg leading-8 text-white/65">${props.description}</p><div class="mt-8 flex flex-wrap gap-2">${props.platforms.map((platform) => renderTemplate`<span class="rounded-full border border-white/15 bg-white/[.05] px-4 py-2 text-xs font-bold">${platform}</span>`)}</div><div class="mt-9 flex flex-wrap gap-3"><a class="btn-light" href="/#contacto">Solicitar demostración ${renderComponent($$result, "ArrowRight", ArrowRight, {
		"class": "size-4",
		"aria-hidden": "true"
	})}</a><a class="border border-white/25 px-5 py-3 text-sm font-bold transition-colors hover:bg-white/10"${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a></div></div><div class="relative mx-auto w-full max-w-[620px]"><div class="rounded-[24px] border border-white/15 bg-white/[.07] p-3 shadow-2xl shadow-black/20 backdrop-blur"><div class="flex items-center gap-2 border-b border-white/10 px-3 py-3"><span class="size-2 rounded-full bg-velyon-mint"></span><span class="size-2 rounded-full bg-white/25"></span><span class="size-2 rounded-full bg-white/25"></span><small class="ml-auto text-[10px] text-white/40">Panel web</small></div><div class="grid min-h-[390px] grid-cols-[150px_1fr] max-[520px]:grid-cols-1"><div class="border-r border-white/10 p-4 max-[520px]:hidden"><p class="text-xs font-extrabold text-velyon-mint">${props.productName}</p><div class="mt-8 grid gap-2">${props.modules.slice(0, 4).map((item, index) => renderTemplate`<span${addAttribute(["rounded-lg px-3 py-2 text-[10px] font-bold", index === 0 ? "bg-white/10 text-white" : "text-white/45"], "class:list")}>${item.title}</span>`)}</div></div><div class="relative grid place-items-center bg-white/[.025] p-6">${props.lottieSrc ? renderTemplate`${renderComponent($$result, "LottieAnimation", $$LottieAnimation, {
		"class": "size-full max-h-[310px]",
		"src": props.lottieSrc,
		"label": `Vista animada de ${props.productName}`
	})}` : renderTemplate`${renderComponent($$result, "MonitorSmartphone", MonitorSmartphone, {
		"class": "size-24 text-velyon-mint",
		"aria-hidden": "true"
	})}`}<div class="absolute bottom-5 right-5 rounded-2xl border border-white/15 bg-[#143b34] p-3">${renderComponent($$result, "Smartphone", Smartphone, {
		"class": "size-5 text-velyon-mint",
		"aria-hidden": "true"
	})}<span class="mt-2 block text-[9px] font-bold">Aplicación móvil</span></div></div></div></div></div></div></div></section><section class="py-24"><div class="container-velyon"><div class="grid grid-cols-[.65fr_1.35fr] gap-20 max-[840px]:grid-cols-1 max-[840px]:gap-10"><div><span class="section-label">Módulos del producto</span><h2 class="section-title">Una sola operación, conectada entre web y móvil.</h2><p class="mt-6 text-sm leading-7 text-muted-foreground">El panel web, la aplicación móvil y el backend son partes del mismo producto cuando comparten usuarios, datos y proceso.</p></div><div class="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border max-[580px]:grid-cols-1">${props.modules.map((item, index) => renderTemplate`<article class="min-h-[230px] bg-white p-7">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="text-xs font-extrabold text-velyon-deep">${String(index + 1).padStart(2, "0")}</span><h3 class="mt-12 font-display text-xl font-bold">${item.title}</h3><p class="mt-3 text-sm leading-7 text-muted-foreground">${item.description}</p>` })}</article>`)}</div></div></div></section><section class="bg-velyon-lavender-soft py-24"><div class="container-velyon"><div class="mb-14 max-w-[720px]"><span class="section-label">Para quién es</span><h2 class="section-title">Un producto definido para un usuario definido.</h2></div><div class="grid grid-cols-3 gap-4 max-[760px]:grid-cols-1">${props.audiences.map((item) => renderTemplate`<article class="border-t-2 border-velyon-indigo bg-white/55 p-7">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h3 class="font-display text-xl font-bold">${item.title}</h3><p class="mt-4 text-sm leading-7 text-muted-foreground">${item.description}</p>` })}</article>`)}</div></div></section><section class="py-24"><div class="container-velyon grid grid-cols-[.7fr_1.3fr] gap-20 max-[820px]:grid-cols-1 max-[820px]:gap-10"><div><span class="section-label">Flujo de uso</span><h2 class="section-title">Del registro a la acción, sin información dispersa.</h2></div><ol>${props.workflow.map((item, index) => renderTemplate`<li class="relative grid grid-cols-[52px_1fr] gap-5 pb-10 before:absolute before:left-[19px] before:top-9 before:h-[calc(100%-24px)] before:w-px before:bg-border last:before:hidden"><span class="relative z-10 grid size-10 place-items-center rounded-full bg-velyon-deep text-xs font-extrabold text-white">${index + 1}</span><div class="pt-1">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<h3 class="font-display text-xl font-bold">${item.title}</h3><p class="mt-3 text-sm leading-7 text-muted-foreground">${item.description}</p>` })}</div></li>`)}</ol></div></section><section class="bg-velyon-deep py-24 text-white"><div class="container-velyon grid grid-cols-[.8fr_1.2fr] gap-20 max-[800px]:grid-cols-1 max-[800px]:gap-10"><div><span class="section-label !text-velyon-mint">Programa piloto</span><h2 class="font-display text-[clamp(2.3rem,4vw,3.6rem)] font-bold leading-tight tracking-[-0.05em]">Validamos el producto con operaciones reales.</h2><p class="mt-6 text-sm leading-7 text-white/65">No mostramos métricas inventadas ni funciones que todavía no existen. El alcance y el estado del producto se comunican con claridad.</p></div><div><ul class="grid gap-3">${props.pilotIncludes.map((item) => renderTemplate`<li class="flex items-center gap-3 border-b border-white/15 py-4 text-sm font-semibold">${renderComponent($$result, "Check", Check, {
		"class": "size-4 shrink-0 text-velyon-mint",
		"stroke-width": "3",
		"aria-hidden": "true"
	})}${item}</li>`)}</ul><a class="btn-light mt-8" href="/#contacto">Postular como cliente piloto ${renderComponent($$result, "ArrowRight", ArrowRight, {
		"class": "size-4",
		"aria-hidden": "true"
	})}</a></div></div></section><section class="py-24"><div class="container-velyon grid grid-cols-[.65fr_1.35fr] gap-20 max-[800px]:grid-cols-1 max-[800px]:gap-8"><div><span class="section-label">Preguntas frecuentes</span><h2 class="section-title">Sobre el producto.</h2></div><div class="grid gap-3">${props.faqs.map((faq) => renderTemplate`<details class="faq-item rounded-2xl border border-border bg-white p-5">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<summary class="cursor-pointer list-none pr-8 font-display text-base font-bold">${faq.question}</summary><p class="mt-4 text-sm leading-7 text-muted-foreground">${faq.answer}</p>` })}</details>`)}</div></div></section></main>` })}`;
}, "C:/Users/User/Desktop/velyon/src/components/ProductPage.astro", void 0);
//#endregion
export { $$ProductPage as t };
