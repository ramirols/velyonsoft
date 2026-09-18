import { S as unescapeHTML, T as createAstro, _ as createRenderInstruction, a as renderComponent, f as renderTemplate, h as addAttribute, l as renderSlot, m as renderHead, p as maybeRenderHead, t as spreadAttributes } from "./server_DA5ogtCn.mjs";
import { t as createComponent } from "./compiler_DVgYHClu.mjs";
//#region node_modules/.pnpm/astro@7.2.4_@emnapi+core@1._aeb4984d6b38db31b82311836907e2c0/node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region node_modules/.pnpm/astro@7.2.4_@emnapi+core@1._aeb4984d6b38db31b82311836907e2c0/node_modules/astro/components/ClientRouter.astro
createAstro("https://www.velyonsoft.com");
var $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ClientRouter;
	const { fallback = "animate" } = Astro.props;
	return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/User/Desktop/velyon/node_modules/.pnpm/astro@7.2.4_@emnapi+core@1._aeb4984d6b38db31b82311836907e2c0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/Desktop/velyon/node_modules/.pnpm/astro@7.2.4_@emnapi+core@1._aeb4984d6b38db31b82311836907e2c0/node_modules/astro/components/ClientRouter.astro", void 0);
//#endregion
//#region src/lib/site.ts
var siteConfig = {
	name: "Velyon",
	alternateName: "VelyonSoft",
	legalName: "VelyonSoft",
	descriptor: "Estudio de soluciones tecnológicas",
	tagline: "Tecnología para vender y operar mejor.",
	description: "Velyon desarrolla páginas web, tiendas online, automatizaciones y sistemas a medida para negocios y empresas en Perú.",
	url: "https://www.velyonsoft.com",
	email: "contacto@velyonsoft.com",
	location: "Lima, Perú",
	whatsappNumber: "51997676432",
	whatsappMessage: "Hola Velyon, quisiera conversar sobre una solución para mi negocio."
};
var socialNetworks = [
	{
		name: "Instagram",
		url: "https://instagram.com/velyonsoft",
		icon: "instagram"
	},
	{
		name: "Facebook",
		url: "https://facebook.com/velyonsoft",
		icon: "facebook"
	},
	{
		name: "LinkedIn",
		url: "https://linkedin.com/in/velyonsoft",
		icon: "linkedin"
	}
];
var whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
//#endregion
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/defaultAttributes.ts
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
//#endregion
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/utils/hasA11yProp.ts
/**
* Check if a component has an accessibility prop
*
* @param {object} props
* @returns {boolean} Whether the component has an accessibility prop
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/Icon.astro
createAstro("https://www.velyonsoft.com");
var $$Icon = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Icon;
	const { color = "currentColor", size = 24, "stroke-width": strokeWidth = 2, absoluteStrokeWidth = false, iconNode = [], class: className, ...rest } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes({
		...defaultAttributes,
		width: size,
		height: size,
		stroke: color,
		"stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
		...!hasA11yProp(rest) && { "aria-hidden": "true" },
		...rest
	})}${addAttribute(["lucide", className], "class:list")}>${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)}${renderSlot($$result, $$slots["default"])}</svg>`;
}, "C:/Users/User/Desktop/velyon/node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/Icon.astro", void 0);
//#endregion
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/utils/mergeClasses.ts
/**
* Merges classes into a single string
*
* @param {array} classes
* @returns {string} A string of classes
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/utils/toKebabCase.ts
/**
* Converts string to kebab case
*
* @param {string} string
* @returns {string} A kebabized string
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/createLucideIcon.ts
var createLucideIcon_default = (iconName, iconNode) => {
	return createComponent(($$result, $$props, $$slots) => {
		const { class: className, ...restProps } = $$props;
		return renderTemplate`${renderComponent($$result, "Icon", $$Icon, {
			class: mergeClasses(Boolean(iconName) && `lucide-${toKebabCase(iconName)}`, Boolean(className) && className),
			iconNode,
			...restProps
		}, { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` })}`;
	}, void 0, "none");
};
//#endregion
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/icons/arrow-right.ts
/**
* @component @name ArrowRight
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJtMTIgNSA3IDctNyA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-right
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var ArrowRight = createLucideIcon_default("arrow-right", [["path", { "d": "M5 12h14" }], ["path", { "d": "m12 5 7 7-7 7" }]]);
//#endregion
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/icons/chevron-down.ts
/**
* @component @name ChevronDown
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNiA5IDYgNiA2LTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chevron-down
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var ChevronDown = createLucideIcon_default("chevron-down", [["path", { "d": "m6 9 6 6 6-6" }]]);
//#endregion
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/icons/mail.ts
/**
* @component @name Mail
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjIgNy04Ljk5MSA1LjcyN2EyIDIgMCAwIDEtMi4wMDkgMEwyIDciIC8+CiAgPHJlY3QgeD0iMiIgeT0iNCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE2IiByeD0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/mail
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var Mail = createLucideIcon_default("mail", [["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }], ["rect", {
	"x": "2",
	"y": "4",
	"width": "20",
	"height": "16",
	"rx": "2"
}]]);
//#endregion
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/icons/map-pin.ts
/**
* @component @name MapPin
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTBjMCA0Ljk5My01LjUzOSAxMC4xOTMtNy4zOTkgMTEuNzk5YTEgMSAwIDAgMS0xLjIwMiAwQzkuNTM5IDIwLjE5MyA0IDE0Ljk5MyA0IDEwYTggOCAwIDAgMSAxNiAwIiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/map-pin
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var MapPin = createLucideIcon_default("map-pin", [["path", { "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }], ["circle", {
	"cx": "12",
	"cy": "10",
	"r": "3"
}]]);
//#endregion
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/icons/menu.ts
/**
* @component @name Menu
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCA1aDE2IiAvPgogIDxwYXRoIGQ9Ik00IDEyaDE2IiAvPgogIDxwYXRoIGQ9Ik00IDE5aDE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/menu
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var Menu = createLucideIcon_default("menu", [
	["path", { "d": "M4 5h16" }],
	["path", { "d": "M4 12h16" }],
	["path", { "d": "M4 19h16" }]
]);
//#endregion
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/icons/message-circle.ts
/**
* @component @name MessageCircle
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi45OTIgMTYuMzQyYTIgMiAwIDAgMSAuMDk0IDEuMTY3bC0xLjA2NSAzLjI5YTEgMSAwIDAgMCAxLjIzNiAxLjE2OGwzLjQxMy0uOTk4YTIgMiAwIDAgMSAxLjA5OS4wOTIgMTAgMTAgMCAxIDAtNC43NzctNC43MTkiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/message-circle
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var MessageCircle = createLucideIcon_default("message-circle", [["path", { "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }]]);
//#endregion
//#region node_modules/.pnpm/@lucide+astro@1.33.0_astro@_c9d3609ff2f8c2326941c945011884f6/node_modules/@lucide/astro/src/icons/x.ts
/**
* @component @name X
* @description Lucide SVG icon component, renders SVG Element with children.
*
* @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
* @see https://lucide.dev/guide/packages/lucide-astro - Documentation
*
* @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
* @returns {any} Astro Component
* 
*/
var X = createLucideIcon_default("x", [["path", { "d": "M18 6 6 18" }], ["path", { "d": "m6 6 12 12" }]]);
//#endregion
//#region src/components/Logo.astro
createAstro("https://www.velyonsoft.com");
var $$Logo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Logo;
	const { inverted = false, compact = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a href="/" class="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-velyon-mint/30" aria-label="Velyon, ir al inicio"><img${addAttribute(compact ? "/brand/isotipo-velyon-color.svg" : inverted ? "/brand/logo-velyon-white.svg" : "/brand/logo-velyon-color.svg", "src")}${addAttribute(compact ? 44 : 158, "width")}${addAttribute(compact ? 44 : 42, "height")}${addAttribute(compact ? "Símbolo de Velyon" : "Velyon", "alt")}${addAttribute([compact ? "size-11" : "h-[42px] w-auto"], "class:list")}></a>`;
}, "C:/Users/User/Desktop/velyon/src/components/Logo.astro", void 0);
//#endregion
//#region src/data/navigation.ts
var productLinks = [
	{
		label: "Velyon Salud",
		detail: "Agenda, seguimiento y operación para consultorios.",
		href: "/productos/sistema-para-consultorios",
		status: "Piloto en desarrollo",
		featured: false,
		type: "health",
		hero: "Agenda y operación conectadas para una atención más ordenada.",
		platforms: [
			"Panel web",
			"Aplicación móvil",
			"Backend conectado"
		],
		features: [
			"Agenda inteligente",
			"Solicitudes y confirmaciones",
			"Recordatorios automáticos",
			"Panel administrativo"
		]
	},
	{
		label: "Velyon Inventory",
		detail: "Control de inventario, almacenes y movimientos comerciales en tiempo real.",
		href: "/productos/sistema-inventario",
		status: "Producto en desarrollo",
		featured: false,
		type: "inventory",
		hero: "Controla tus productos, movimientos y stock desde un solo sistema.",
		platforms: ["Panel web", "Aplicación móvil"],
		features: [
			"Stock en tiempo real",
			"Entradas y salidas",
			"Control de almacenes",
			"Reportes comerciales"
		]
	},
	{
		label: "Plaga Software",
		detail: "Software empresarial desarrollado por VelyonSoft.",
		href: "/productos/plaga-software",
		status: "Producto activo",
		featured: true,
		type: "business",
		hero: "Una plataforma digital para ordenar procesos empresariales.",
		platforms: ["Aplicación web"],
		features: [
			"Gestión operativa",
			"Control de procesos",
			"Automatización",
			"Panel administrativo"
		]
	}
];
var sectorLinks = [
	{
		number: "01",
		label: "Salud",
		detail: "Soluciones para consultorios y centros de salud",
		href: "/sectores/salud"
	},
	{
		number: "02",
		label: "Inmobiliarias",
		detail: "Soluciones para inmobiliarias",
		href: "/sectores/inmobiliarias"
	},
	{
		number: "03",
		label: "Agricultura",
		detail: "Soluciones para agricultura",
		href: "/sectores/agricultura"
	},
	{
		number: "04",
		label: "Logística y transporte",
		detail: "Soluciones para logística y transporte",
		href: "/sectores/logistica-transporte"
	},
	{
		number: "05",
		label: "Pymes y servicios",
		detail: "Sistemas y herramientas para negocios",
		href: "/sectores/pymes-y-servicios"
	},
	{
		number: "06",
		label: "Educación",
		detail: "Tecnología para colegios, academias y formación",
		href: "/sectores/educacion"
	},
	{
		number: "07",
		label: "Servicios profesionales",
		detail: "Soluciones para profesionales y empresas de servicios",
		href: "/sectores/servicios-profesionales"
	},
	{
		number: "08",
		label: "Hoteles y turismo",
		detail: "Soluciones para hoteles, hospedajes y operadores turísticos",
		href: "/sectores/hoteles-turismo"
	},
	{
		number: "09",
		label: "Restaurantes y comida",
		detail: "Soluciones para restaurantes, cafeterías y negocios de comida",
		href: "/sectores/restaurantes-comida"
	}
];
var solutionLinks = [
	{
		number: "01",
		label: "Páginas web",
		detail: "Webs profesionales para captar clientes",
		href: "/soluciones/desarrollo-web"
	},
	{
		number: "02",
		label: "Ventas por internet",
		detail: "Ecommerce, catálogos y ventas online",
		href: "/soluciones/ventas-por-internet"
	},
	{
		number: "03",
		label: "Software a medida",
		detail: "Sistemas adaptados a cada negocio",
		href: "/soluciones/software-a-medida"
	},
	{
		number: "04",
		label: "Aplicaciones móviles",
		detail: "Apps para Android y iOS",
		href: "/soluciones/aplicaciones-moviles"
	},
	{
		number: "05",
		label: "Automatización de procesos",
		detail: "Integraciones y tareas automáticas",
		href: "/soluciones/automatizacion-de-procesos"
	},
	{
		number: "06",
		label: "Mantenimiento y evolución",
		detail: "Actualizaciones y soporte continuo",
		href: "/soluciones/mantenimiento-y-evolucion"
	}
];
//#endregion
//#region src/components/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="sticky top-0 z-50 border-b border-border/60 bg-white/85 backdrop-blur-md transition-all"><div class="mx-auto flex h-20 w-[min(1240px,calc(100%-2.5rem))] items-center justify-between max-[900px]:w-[calc(100%-2rem)]"><div class="flex items-center">${renderComponent($$result, "Logo", $$Logo, {})}</div><nav class="hidden items-center gap-1 lg:flex" aria-label="Navegación principal"><ul class="flex items-center gap-1 text-[13.5px] font-medium text-muted-foreground"><li><a class="rounded-full px-4 py-2 transition-colors hover:bg-velyon-mist hover:text-foreground" href="/">Inicio</a></li><li class="relative"><details class="nav-dropdown group"><summary class="flex cursor-pointer list-none items-center gap-1.5 rounded-full px-4 py-2 transition-colors hover:bg-velyon-mist hover:text-foreground"><span>Soluciones</span>${renderComponent($$result, "ChevronDown", ChevronDown, {
		"class": "size-3.5 transition-transform duration-200 group-open:rotate-180",
		"aria-hidden": "true"
	})}</summary><div class="soft-shadow absolute left-1/2 top-full mt-2.5 w-[380px] -translate-x-1/2 rounded-2xl border border-border/80 bg-white p-2 backdrop-blur-xl animate-in fade-in-50 zoom-in-95"><div class="grid gap-0.5">${solutionLinks.map((item) => renderTemplate`<a class="group/item flex items-center gap-3.5 rounded-xl p-3 transition-all hover:bg-velyon-mist"${addAttribute(item.href, "href")}><span class="grid size-9 shrink-0 place-items-center rounded-lg bg-velyon-mint-soft text-[11px] font-extrabold text-velyon-deep transition-transform group-hover/item:scale-105">${item.number}</span><span><strong class="block text-sm font-semibold text-foreground group-hover/item:text-velyon-deep">${item.label}</strong><small class="mt-0.5 block text-xs font-normal text-muted-foreground line-clamp-1">${item.detail}</small></span></a>`)}</div></div></details></li><li><a class="rounded-full px-4 py-2 transition-colors hover:bg-velyon-mist hover:text-foreground" href="/#productos">Productos</a></li><li class="relative"><details class="nav-dropdown group"><summary class="flex cursor-pointer list-none items-center gap-1.5 rounded-full px-4 py-2 transition-colors hover:bg-velyon-mist hover:text-foreground"><span>Sectores</span>${renderComponent($$result, "ChevronDown", ChevronDown, {
		"class": "size-3.5 transition-transform duration-200 group-open:rotate-180",
		"aria-hidden": "true"
	})}</summary><div class="soft-shadow absolute left-1/2 top-full mt-2.5 w-[320px] -translate-x-1/2 rounded-2xl border border-border/80 bg-white/95 p-2 backdrop-blur-xl animate-in fade-in-50 zoom-in-95"><div class="grid gap-0.5">${sectorLinks.map((item) => renderTemplate`<a class="group/item block rounded-xl p-3 transition-all hover:bg-velyon-mist"${addAttribute(item.href, "href")}><strong class="block text-sm font-semibold text-foreground group-hover/item:text-velyon-deep">${item.label}</strong><small class="mt-0.5 block text-xs font-normal text-muted-foreground">${item.detail}</small></a>`)}</div></div></details></li><li><a class="rounded-full px-4 py-2 transition-colors hover:bg-velyon-mist hover:text-foreground" href="/#planes">Planes</a></li></ul></nav><div class="hidden items-center gap-3 lg:flex"><a class="btn-primary min-h-10 px-5 text-xs font-semibold tracking-wide" href="/#contacto">Conversemos${renderComponent($$result, "ArrowRight", ArrowRight, {
		"class": "size-3.5",
		"aria-hidden": "true"
	})}</a></div><button id="menu-toggle" class="grid size-10 place-items-center rounded-xl border border-border/80 bg-white text-foreground transition-colors hover:bg-velyon-mist lg:hidden" type="button" aria-controls="mobile-nav" aria-expanded="false" aria-label="Abrir menú">${renderComponent($$result, "Menu", Menu, {
		"id": "menu-open-icon",
		"class": "size-5",
		"aria-hidden": "true"
	})}${renderComponent($$result, "X", X, {
		"id": "menu-close-icon",
		"class": "hidden size-5",
		"aria-hidden": "true"
	})}</button><nav id="mobile-nav" class="soft-shadow absolute inset-x-4 top-22 hidden max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl border border-border bg-white p-5 backdrop-blur-2xl lg:hidden animate-in fade-in-50 zoom-in-95" aria-label="Navegación móvil"><div class="flex flex-col gap-1.5"><a class="rounded-2xl px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-velyon-mist" href="/">Inicio</a><div class="my-1 border-t border-border/50"></div><p class="px-4 pt-2 text-[10px] font-extrabold uppercase tracking-widest text-velyon-deep">Soluciones</p><div class="grid gap-1 pl-2">${solutionLinks.map((item) => renderTemplate`<a class="rounded-xl px-3 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-velyon-mist hover:text-foreground"${addAttribute(item.href, "href")}>${item.label}</a>`)}</div><div class="my-1 border-t border-border/50"></div><p class="px-4 pt-2 text-[10px] font-extrabold uppercase tracking-widest text-velyon-deep">Sectores</p><div class="grid gap-1 pl-2">${sectorLinks.map((item) => renderTemplate`<a class="rounded-xl px-3 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-velyon-mist hover:text-foreground"${addAttribute(item.href, "href")}>${item.label}</a>`)}</div><div class="my-1 border-t border-border/50"></div><a class="rounded-2xl px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-velyon-mist" href="/#planes">Planes</a><div class="mt-4 pt-2"><a class="btn-primary w-full justify-center py-3 text-sm" href="/#contacto">Solicitar diagnóstico${renderComponent($$result, "ArrowRight", ArrowRight, {
		"class": "size-4",
		"aria-hidden": "true"
	})}</a></div></div></nav></div></header>${renderScript($$result, "C:/Users/User/Desktop/velyon/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/Desktop/velyon/src/components/Header.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-[#0b2924] pb-6 pt-[70px] text-white"><div class="container-velyon grid grid-cols-[1.5fr_repeat(3,1fr)] gap-[70px] max-[900px]:grid-cols-3 max-[640px]:grid-cols-2 max-[640px]:gap-x-6 max-[640px]:gap-y-10"><div class="max-[900px]:col-span-3 max-[640px]:col-span-2">${renderComponent($$result, "Logo", $$Logo, { "inverted": true })}<p class="mt-4 max-w-[230px] text-xs leading-6 text-white/55">${siteConfig.tagline}</p></div><div class="grid content-start gap-3"><strong class="mb-1 text-xs">Soluciones</strong>${solutionLinks.slice(1, 7).map((solution) => renderTemplate`<a class="text-[11px] text-white/55 hover:text-velyon-mint"${addAttribute(solution.href, "href")}>${solution.label}</a>`)}</div><div class="grid content-start gap-3"><strong class="mb-1 text-xs">Sectores</strong>${sectorLinks.slice(1, 7).map((sector) => renderTemplate`<a class="text-[11px] text-white/55 hover:text-velyon-mint"${addAttribute(sector.href, "href")}>${sector.label}</a>`)}</div><div class="grid content-start gap-3"><strong class="mb-1 text-xs">Contacto</strong><a class="flex items-center gap-2 text-[11px] text-white/55 hover:text-velyon-mint"${addAttribute(`mailto:${siteConfig.email}`, "href")}>${renderComponent($$result, "Mail", Mail, { "class": "size-3.5" })}${siteConfig.email}</a><a class="text-[11px] text-white/55 hover:text-velyon-mint" href="/#contacto">Solicitar diagnóstico</a><span class="flex items-center gap-2 text-[11px] text-white/55">${renderComponent($$result, "MapPin", MapPin, { "class": "size-3.5" })}${siteConfig.location}</span><strong class="mt-4 block text-xs">Redes Sociales</strong><ul class="mt-2 flex gap-3">${socialNetworks.map((network) => renderTemplate`<li><a${addAttribute(network.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(network.name, "aria-label")} class="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10">${network.icon === "instagram" && renderTemplate`<svg class="size-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>`}${network.icon === "facebook" && renderTemplate`<svg class="size-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.415V8z"></path></svg>`}${network.icon === "linkedin" && renderTemplate`<svg class="size-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>`}</a></li>`)}</ul></div></div><div class="container-velyon mt-14 flex justify-between border-t border-white/10 pt-5 text-[9px] text-white/40 max-[520px]:flex-col max-[520px]:gap-2"><span>© ${(/* @__PURE__ */ new Date()).getFullYear()} Velyon · ${siteConfig.legalName}. Todos los derechos reservados.</span><span>Privacidad · Términos</span></div></footer>`;
}, "C:/Users/User/Desktop/velyon/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/WhatsAppButton.astro
var $$WhatsAppButton = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noreferrer" class="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-2xl bg-velyon-mint text-velyon-deep-dark shadow-[0_16px_40px_rgba(20,92,80,.24)] transition hover:-translate-y-1 hover:bg-[#8be7cd] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-velyon-mint/35" aria-label="Conversar con Velyon por WhatsApp">${renderComponent($$result, "MessageCircle", MessageCircle, {
		"class": "size-6",
		"stroke-width": "2.2",
		"aria-hidden": "true"
	})}</a>`;
}, "C:/Users/User/Desktop/velyon/src/components/WhatsAppButton.astro", void 0);
//#endregion
//#region src/layouts/BaseLayout.astro
createAstro("https://www.velyonsoft.com");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title = `${siteConfig.name} — Tecnología para vender y operar mejor`, description = siteConfig.description, image = "/og.png", noindex = false, schema } = Astro.props;
	const canonical = new URL(Astro.url.pathname, siteConfig.url);
	const socialImage = new URL(image, siteConfig.url);
	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${siteConfig.url}/#website`,
		url: `${siteConfig.url}/`,
		name: siteConfig.name,
		alternateName: [
			siteConfig.legalName,
			"VelyonSoft",
			"velyonsoft.com"
		],
		inLanguage: "es-PE",
		publisher: { "@id": `${siteConfig.url}/#organization` }
	};
	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${siteConfig.url}/#organization`,
		name: siteConfig.name,
		alternateName: "VelyonSoft",
		legalName: siteConfig.legalName,
		url: `${siteConfig.url}/`,
		logo: {
			"@type": "ImageObject",
			url: `${siteConfig.url}/brand/isotipo-velyon-color.svg`
		},
		image: `${siteConfig.url}/og.png`,
		description: siteConfig.description,
		email: siteConfig.email,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Lima",
			addressCountry: "PE"
		},
		areaServed: {
			"@type": "Country",
			name: "Perú"
		},
		sameAs: socialNetworks.map((network) => network.url)
	};
	const isHomepage = Astro.url.pathname === "/";
	const pageSchemas = schema ? Array.isArray(schema) ? schema : [schema] : [];
	const structuredData = [...isHomepage ? [websiteSchema, organizationSchema] : [], ...pageSchemas];
	return renderTemplate`<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro.generator, "content")}><meta name="theme-color" content="#145C50"><meta name="description"${addAttribute(description, "content")}><meta name="robots"${addAttribute(noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1", "content")}><link rel="canonical"${addAttribute(canonical, "href")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><meta property="og:type" content="website"><meta property="og:locale" content="es_PE"><meta property="og:site_name"${addAttribute(siteConfig.name, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:image"${addAttribute(socialImage, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Velyon — Tecnología para vender y operar mejor"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(socialImage, "content")}><script async src="https://www.googletagmanager.com/gtag/js?id=G-D74ZW26T1V"><\/script><script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }

      gtag("js", new Date());
      gtag("config", "G-D74ZW26T1V", {
        send_page_view: false,
      });

      document.addEventListener("astro:page-load", () => {
        gtag("config", "G-D74ZW26T1V", {
          page_path: window.location.pathname,
          page_title: document.title,
        });
      });
    <\/script><script>
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "w2dxs0wpy6");
    <\/script>${structuredData.length > 0 && renderTemplate`<script type="application/ld+json">${unescapeHTML(JSON.stringify(structuredData))}<\/script>`}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}${renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, {})}</body></html>`;
}, "C:/Users/User/Desktop/velyon/src/layouts/BaseLayout.astro", void 0);
//#endregion
export { ArrowRight as a, whatsappUrl as c, Mail as i, renderScript as l, productLinks as n, createLucideIcon_default as o, MessageCircle as r, siteConfig as s, $$BaseLayout as t };
