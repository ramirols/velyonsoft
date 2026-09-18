import { T as createAstro, f as renderTemplate, h as addAttribute, p as maybeRenderHead } from "./server_DA5ogtCn.mjs";
import { t as createComponent } from "./compiler_DVgYHClu.mjs";
import { l as renderScript } from "./BaseLayout_-LWBpbU2.mjs";
//#region src/components/LottieAnimation.astro
createAstro("https://www.velyonsoft.com");
var $$LottieAnimation = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LottieAnimation;
	const { src = "/animations/velyon.lottie", label = "Animación de tecnología conectada", class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(["lottie-shell", className], "class:list")} data-lottie${addAttribute(src, "data-src")} role="img"${addAttribute(label, "aria-label")}><canvas class="h-full w-full" aria-hidden="true"></canvas><noscript><img src="/brand/isotipo-velyon-color.svg" width="180" height="180" alt="Velyon"></noscript></div>${renderScript($$result, "C:/Users/User/Desktop/velyon/src/components/LottieAnimation.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/Desktop/velyon/src/components/LottieAnimation.astro", void 0);
//#endregion
export { $$LottieAnimation as t };
