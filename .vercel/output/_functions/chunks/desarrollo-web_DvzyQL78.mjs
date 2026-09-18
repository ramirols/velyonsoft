import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { T as createAstro, a as renderComponent, f as renderTemplate, h as addAttribute, o as Fragment, p as maybeRenderHead } from "./server_DA5ogtCn.mjs";
import { t as createComponent } from "./compiler_DVgYHClu.mjs";
import { a as ArrowRight, c as whatsappUrl, s as siteConfig, t as $$BaseLayout } from "./BaseLayout_-LWBpbU2.mjs";
import { t as Check } from "./check_DY0Jvdq_.mjs";
import { t as ChevronRight } from "./chevron-right_CetnjvxA.mjs";
import { t as $$LottieAnimation } from "./LottieAnimation_BLDGmJXd.mjs";
//#region src/components/DetailPage.astro
createAstro("https://www.velyonsoft.com");
var $$DetailPage = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$DetailPage;
	const props = Astro.props;
	const pageUrl = new URL(props.path, "https://www.velyonsoft.com").href;
	const fullName = `${props.title} ${props.highlight}`.replace(/\s+/g, " ").trim();
	const schema = [
		{
			"@context": "https://schema.org",
			"@type": "Service",
			name: fullName,
			description: props.metaDescription,
			provider: {
				"@type": "ProfessionalService",
				name: "VelyonSoft",
				url: "https://www.velyonsoft.com"
			},
			areaServed: {
				"@type": "Country",
				name: "Perú"
			},
			url: pageUrl
		},
		{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [{
				"@type": "ListItem",
				position: 1,
				name: "Inicio",
				item: "https://www.velyonsoft.com"
			}, {
				"@type": "ListItem",
				position: 2,
				name: props.eyebrow,
				item: pageUrl
			}]
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
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main><section class="overflow-hidden border-b border-border bg-[linear-gradient(135deg,#f7fffc_0%,#ffffff_48%,#f1f1ff_100%)] py-20 sm:py-28"><div class="container-velyon grid grid-cols-[1.08fr_.72fr] items-center gap-16 max-[820px]:grid-cols-1"><div><nav class="mb-8 flex items-center gap-2 text-xs font-semibold text-muted-foreground" aria-label="Migas de pan"><a href="/" class="hover:text-velyon-deep">Inicio</a>${renderComponent($$result, "ChevronRight", ChevronRight, { "class": "size-3.5" })}<span>${props.eyebrow}</span></nav><span class="section-label">${props.eyebrow}</span><h1 class="max-w-[760px] font-display text-[clamp(2.8rem,5.6vw,4.8rem)] font-bold leading-[.99] tracking-[-0.064em] text-velyon-ink">${props.title}<em class="font-serif font-medium text-velyon-deep">${props.highlight}</em></h1><p class="mt-7 max-w-[690px] text-lg leading-8 text-muted-foreground">${props.description}</p><div class="mt-8 flex flex-wrap gap-4"><a class="btn-primary" href="/#contacto">Solicitar diagnóstico ${renderComponent($$result, "ArrowRight", ArrowRight, { "class": "size-4" })}</a><a class="btn-outline"${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer">Conversar por WhatsApp</a></div></div><div class="soft-shadow relative mx-auto grid aspect-square w-full max-w-[430px] place-items-center rounded-[40px] border border-velyon-deep/10 bg-white p-9"><div class="absolute inset-7 rounded-[32px] bg-gradient-to-br from-velyon-mint-soft to-velyon-lavender-soft"></div>${renderComponent($$result, "LottieAnimation", $$LottieAnimation, {
		"class": "relative z-10 size-full",
		"src": props.lottieSrc,
		"label": `Animación para ${fullName}`
	})}</div></div></section><section class="py-24"><div class="container-velyon grid grid-cols-[.8fr_1.2fr] gap-20 max-[820px]:grid-cols-1 max-[820px]:gap-10"><div><span class="section-label">Enfoque Velyon</span><h2 class="section-title">${props.introTitle}</h2><p class="mt-6 text-[15px] leading-7 text-muted-foreground">${props.intro}</p></div><div class="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">${props.benefits.map((item, index) => renderTemplate`<article class="rounded-[22px] border border-border bg-velyon-mist p-6">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="text-[10px] font-extrabold text-velyon-deep">0${index + 1}</span><h3 class="mt-8 font-display text-xl font-bold tracking-tight">${item.title}</h3><p class="mt-3 text-sm leading-7 text-muted-foreground">${item.description}</p>` })}</article>`)}</div></div></section><section class="bg-velyon-deep py-24 text-white"><div class="container-velyon grid grid-cols-[.8fr_1.2fr] gap-20 max-[820px]:grid-cols-1 max-[820px]:gap-10"><div><span class="section-label !text-velyon-mint">Qué puede incluir</span><h2 class="font-display text-4xl font-bold leading-tight tracking-[-0.05em]">Una solución con alcance claro.</h2><p class="mt-5 text-sm leading-7 text-white/65">El alcance final se define después del diagnóstico. Así inviertes solo en lo que aporta valor hoy y dejas una base preparada para crecer.</p></div><ul class="grid grid-cols-2 gap-3 max-[600px]:grid-cols-1">${props.deliverables.map((item) => renderTemplate`<li class="flex min-h-16 items-center gap-3 rounded-2xl border border-white/10 bg-white/[.06] px-5 text-sm font-semibold"><span class="check-dot bg-velyon-mint text-velyon-deep">${renderComponent($$result, "Check", Check, {
		"class": "size-3",
		"stroke-width": "3"
	})}</span>${item}</li>`)}</ul></div></section><section class="py-24"><div class="container-velyon"><div class="mb-12 max-w-[700px]"><span class="section-label">Proceso</span><h2 class="section-title">De la necesidad a una solución funcionando.</h2></div><div class="grid grid-cols-3 gap-4 max-[760px]:grid-cols-1">${props.steps.map((step, index) => renderTemplate`<article class="rounded-[22px] border border-border p-7">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="grid size-10 place-items-center rounded-xl bg-velyon-mint-soft text-xs font-extrabold text-velyon-deep">0${index + 1}</span><h3 class="mt-7 font-display text-xl font-bold">${step.title}</h3><p class="mt-3 text-sm leading-7 text-muted-foreground">${step.description}</p>` })}</article>`)}</div></div></section><section class="bg-velyon-mist py-24"><div class="container-velyon grid grid-cols-[.65fr_1.35fr] gap-20 max-[800px]:grid-cols-1 max-[800px]:gap-8"><div><span class="section-label">Preguntas frecuentes</span><h2 class="section-title">Antes de empezar.</h2></div><div class="grid gap-3">${props.faqs.map((faq) => renderTemplate`<details class="faq-item rounded-2xl border border-border bg-white p-5">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<summary class="cursor-pointer list-none pr-8 font-display text-base font-bold">${faq.question}</summary><p class="mt-4 text-sm leading-7 text-muted-foreground">${faq.answer}</p>` })}</details>`)}</div></div></section><section class="py-24"><div class="container-velyon rounded-[30px] bg-velyon-lavender-soft px-8 py-14 text-center sm:px-14"><span class="section-label">Siguiente paso</span><h2 class="mx-auto max-w-[760px] font-display text-4xl font-bold leading-tight tracking-[-0.05em]">Conversemos sobre lo que tu negocio necesita resolver.</h2><p class="mx-auto mt-5 max-w-[650px] text-sm leading-7 text-muted-foreground">Te ayudamos a priorizar una primera versión útil, medible y sostenible.</p><a class="btn-primary mt-7" href="/#contacto">Solicitar diagnóstico ${renderComponent($$result, "ArrowRight", ArrowRight, { "class": "size-4" })}</a></div></section></main>` })}`;
}, "C:/Users/User/Desktop/velyon/src/components/DetailPage.astro", void 0);
//#endregion
//#region src/pages/soluciones/desarrollo-web.astro
var desarrollo_web_exports = /* @__PURE__ */ __exportAll({
	default: () => $$DesarrolloWeb,
	file: () => $$file,
	url: () => $$url
});
var $$DesarrolloWeb = createComponent(($$result, $$props, $$slots) => {
	const benefits = [
		{
			title: "Una imagen profesional para tu negocio",
			description: "Diseñamos una página web que comunica claramente quién eres, qué haces y por qué tus clientes deberían elegirte."
		},
		{
			title: "Más oportunidades de contacto",
			description: "Creamos recorridos claros con botones, formularios y WhatsApp para facilitar que los visitantes se conviertan en clientes."
		},
		{
			title: "Preparada para aparecer en Google",
			description: "Construimos una estructura optimizada con SEO técnico, velocidad y buenas prácticas para facilitar su posicionamiento."
		},
		{
			title: "Una web preparada para crecer",
			description: "Desarrollamos sitios escalables que permiten agregar nuevas páginas, servicios, contenido e integraciones."
		}
	];
	const steps = [
		{
			title: "Estrategia y estructura",
			description: "Analizamos tu negocio, clientes y objetivos para definir las páginas, mensajes y funcionalidades necesarias."
		},
		{
			title: "Diseño y desarrollo web",
			description: "Creamos una experiencia moderna, rápida y adaptable para celulares, tablets y computadoras."
		},
		{
			title: "Publicación y optimización",
			description: "Lanzamos la web, configuramos medición y realizamos mejoras para aumentar resultados con el tiempo."
		}
	];
	const faqs = [
		{
			question: "¿Cuánto cuesta desarrollar una página web para un negocio en Perú?",
			answer: "El precio depende del tipo de página, cantidad de secciones, funcionalidades, contenido e integraciones necesarias. Una landing page tiene un alcance diferente a una web corporativa completa, catálogo digital o ecommerce."
		},
		{
			question: "¿Qué tipo de páginas web desarrollan?",
			answer: "Creamos páginas web corporativas, páginas para servicios profesionales, landing pages comerciales, catálogos digitales y soluciones web personalizadas según el objetivo del negocio."
		},
		{
			question: "¿La página web estará optimizada para Google?",
			answer: "Sí. Implementamos estructura SEO inicial, títulos, metadescripciones, URLs amigables, velocidad de carga, datos estructurados y configuración técnica necesaria para facilitar su posicionamiento."
		},
		{
			question: "¿La página funcionará correctamente en celulares?",
			answer: "Sí. Diseñamos páginas responsive adaptadas para celulares, tablets y computadoras, considerando la experiencia del usuario en cada dispositivo."
		},
		{
			question: "¿Incluyen dominio y hosting?",
			answer: "Podemos ayudarte con la configuración del dominio y hosting. El registro del dominio siempre debe quedar a nombre del cliente para conservar la propiedad."
		},
		{
			question: "¿Podré modificar información de mi página después?",
			answer: "Sí. Dependiendo del proyecto podemos integrar herramientas de administración de contenido o preparar una estructura editable para futuras actualizaciones."
		}
	];
	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		"@id": `${siteConfig.url}/soluciones/desarrollo-web#service`,
		name: "Diseño y desarrollo de páginas web profesionales",
		serviceType: "Desarrollo de páginas web corporativas, landing pages y sitios web empresariales",
		description: "Diseño y desarrollo de páginas web profesionales para negocios y empresas en Perú, optimizadas para velocidad, SEO y generación de clientes.",
		url: `${siteConfig.url}/soluciones/desarrollo-web`,
		provider: { "@id": `${siteConfig.url}/#organization` },
		areaServed: {
			"@type": "Country",
			name: "Perú"
		},
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Servicios de desarrollo web",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Página web corporativa"
					}
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Landing page comercial"
					}
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Catálogo digital"
					}
				}
			]
		}
	};
	return renderTemplate`${renderComponent($$result, "DetailPage", $$DetailPage, {
		"schema": serviceSchema,
		"eyebrow": "Solución · Diseño y desarrollo web",
		"title": "Una página web profesional que convierte visitas en",
		"highlight": "clientes.",
		"description": "Diseñamos páginas web corporativas, landing pages y catálogos digitales para negocios y empresas en Perú que necesitan atraer clientes, mostrar sus servicios y crecer en internet.",
		"metaTitle": "Diseño de páginas web profesionales en Perú | Velyon",
		"metaDescription": "Desarrollo de páginas web profesionales para negocios y empresas en Perú. Webs rápidas, responsive, optimizadas para Google, SEO técnico y enfocadas en generar clientes.",
		"path": "/soluciones/desarrollo-web",
		"lottieSrc": "/animations/desarrollo-web.lottie",
		"introTitle": "Tu página web debe explicar, convencer y generar oportunidades.",
		"intro": "Una web profesional no solo debe verse bien. Debe comunicar tu propuesta de valor, responder dudas de tus clientes y facilitar el contacto. Analizamos tu negocio, estructura y objetivos para crear una solución digital preparada para posicionarse y convertir visitantes en oportunidades comerciales.",
		"benefits": benefits,
		"deliverables": [
			"Estrategia y arquitectura web",
			"Diseño UX/UI personalizado",
			"Desarrollo responsive",
			"Landing pages comerciales",
			"Páginas corporativas",
			"Integración con WhatsApp",
			"Formularios de contacto",
			"SEO técnico inicial",
			"Configuración analítica",
			"Optimización de velocidad",
			"Capacitación y soporte"
		],
		"steps": steps,
		"faqs": faqs
	})}`;
}, "C:/Users/User/Desktop/velyon/src/pages/soluciones/desarrollo-web.astro", void 0);
var $$file = "C:/Users/User/Desktop/velyon/src/pages/soluciones/desarrollo-web.astro";
var $$url = "/soluciones/desarrollo-web";
//#endregion
//#region \0virtual:astro:page:src/pages/soluciones/desarrollo-web@_@astro
var page = () => desarrollo_web_exports;
//#endregion
export { page };
