import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { a as renderComponent, f as renderTemplate, g as defineScriptVars, h as addAttribute, p as maybeRenderHead } from "./server_DA5ogtCn.mjs";
import { t as createComponent } from "./compiler_DVgYHClu.mjs";
import { t as $$BaseLayout } from "./BaseLayout_-LWBpbU2.mjs";
//#region src/components/DiagnosticForm.astro
var $$DiagnosticForm = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<form id="diagnostic-form" class="rounded-[32px] border border-border bg-white p-8 shadow-[0_30px_80px_rgba(20,50,44,.08)] sm:p-10" data-astro-cid-h36hmb5d><!-- PROGRESS --><div class="mb-10" data-astro-cid-h36hmb5d><div class="flex justify-between text-xs font-bold text-muted-foreground" data-astro-cid-h36hmb5d><span id="step-label" data-astro-cid-h36hmb5d> Paso 1 de 4 </span><span data-astro-cid-h36hmb5d> Diagnóstico </span></div><div class="mt-3 h-1.5 overflow-hidden rounded-full bg-velyon-mist" data-astro-cid-h36hmb5d><div id="progress" class="h-full w-1/4 rounded-full bg-velyon-deep transition-all" data-astro-cid-h36hmb5d></div></div></div><!-- STEP 1 --><div class="form-step" data-step="0" data-astro-cid-h36hmb5d><h2 class="font-display text-2xl font-bold tracking-tight" data-astro-cid-h36hmb5d>Cuéntanos sobre ti</h2><p class="mt-2 text-sm text-muted-foreground" data-astro-cid-h36hmb5d>Necesitamos algunos datos para contactarte.</p><div class="mt-8 grid gap-5 sm:grid-cols-2" data-astro-cid-h36hmb5d><input name="nombre" required placeholder="Nombre completo" class="input-style" data-astro-cid-h36hmb5d><input name="empresa" required placeholder="Empresa o negocio" class="input-style" data-astro-cid-h36hmb5d><input name="cargo" placeholder="Cargo" class="input-style" data-astro-cid-h36hmb5d><input name="whatsapp" required placeholder="WhatsApp" class="input-style" data-astro-cid-h36hmb5d><input name="correo" type="email" placeholder="Correo electrónico" class="input-style sm:col-span-2" data-astro-cid-h36hmb5d></div></div><!-- STEP 2 --><div class="form-step hidden" data-step="1" data-astro-cid-h36hmb5d><h2 class="font-display text-2xl font-bold" data-astro-cid-h36hmb5d>Sobre tu negocio</h2><p class="mt-2 text-sm text-muted-foreground" data-astro-cid-h36hmb5d>Selecciona el sector donde trabajas.</p><div class="mt-8 grid gap-3 sm:grid-cols-2" data-astro-cid-h36hmb5d>${[
		"Salud",
		"Educación",
		"Agricultura",
		"Inmobiliaria",
		"Comercio",
		"Logística",
		"Servicios profesionales",
		"Otro"
	].map((sector) => renderTemplate`<label class="cursor-pointer" data-astro-cid-h36hmb5d><input type="radio" name="sector"${addAttribute(sector, "value")} class="peer hidden" data-astro-cid-h36hmb5d><div class="rounded-xl border border-border p-4 text-sm font-semibold transition peer-checked:border-velyon-deep peer-checked:bg-velyon-mint-soft" data-astro-cid-h36hmb5d>${sector}</div></label>`)}</div><h3 class="mt-10 font-display text-lg font-bold" data-astro-cid-h36hmb5d>¿Qué tienes actualmente?</h3><textarea name="presencia" rows="3" placeholder="Página web, redes sociales, Excel, sistemas actuales..." class="input-style mt-4" data-astro-cid-h36hmb5d></textarea></div><!-- STEP 3 --><div class="form-step hidden" data-step="2" data-astro-cid-h36hmb5d><h2 class="font-display text-2xl font-bold" data-astro-cid-h36hmb5d>¿Qué necesitas mejorar?</h2><p class="mt-2 text-sm text-muted-foreground" data-astro-cid-h36hmb5d>Puedes seleccionar varias opciones.</p><div class="mt-8 grid gap-3 sm:grid-cols-2" data-astro-cid-h36hmb5d>${[
		"Página web",
		"Tienda online",
		"Sistema personalizado",
		"Aplicación móvil",
		"Automatización",
		"Marketing digital"
	].map((item) => renderTemplate`<label class="cursor-pointer" data-astro-cid-h36hmb5d><input type="checkbox" name="solucion"${addAttribute(item, "value")} class="peer hidden" data-astro-cid-h36hmb5d><div class="rounded-xl border border-border p-4 text-sm font-semibold transition peer-checked:border-velyon-deep peer-checked:bg-velyon-mint-soft" data-astro-cid-h36hmb5d>${item}</div></label>`)}</div><textarea name="necesidad" rows="4" placeholder="Cuéntanos qué problema quieres resolver..." class="input-style mt-8" data-astro-cid-h36hmb5d></textarea></div><!-- STEP 4 --><div class="form-step hidden" data-step="3" data-astro-cid-h36hmb5d><h2 class="font-display text-2xl font-bold" data-astro-cid-h36hmb5d>Últimos detalles</h2><textarea name="referencias" rows="3" placeholder="Páginas web o empresas que tienes como referencia..." class="input-style mt-8" data-astro-cid-h36hmb5d></textarea><select name="presupuesto" class="input-style mt-5" data-astro-cid-h36hmb5d><option value="" data-astro-cid-h36hmb5d> Presupuesto aproximado </option><option data-astro-cid-h36hmb5d> Menos de S/1000 </option><option data-astro-cid-h36hmb5d> S/1000 - S/3000 </option><option data-astro-cid-h36hmb5d> S/3000 - S/7000 </option><option data-astro-cid-h36hmb5d> Más de S/7000 </option><option data-astro-cid-h36hmb5d> Todavía no definido </option></select></div><!-- BUTTONS --><div class="mt-10 flex justify-between gap-4" data-astro-cid-h36hmb5d><button type="button" id="prev" class="btn-outline hidden" data-astro-cid-h36hmb5d>Atrás</button><button type="button" id="next" class="btn-primary ml-auto" data-astro-cid-h36hmb5d>Continuar</button><button type="submit" id="submit" class="btn-primary hidden" data-astro-cid-h36hmb5d>Enviar diagnóstico</button></div><p id="message" class="mt-5 hidden text-center text-sm font-semibold" data-astro-cid-h36hmb5d></p></form><script>(function(){${defineScriptVars({ GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbyaE_YZ0gJ9aj3FJJqhs_nTnBASkH8VHXjj_oweCaTiIY3wEXnnark2Z6DPbhQAN8aFHA/exec" })}
    const form = document.querySelector("#diagnostic-form");

    const steps = [...document.querySelectorAll(".form-step")];

    const next = document.querySelector("#next");
    const prev = document.querySelector("#prev");
    const submit = document.querySelector("#submit");

    const progress = document.querySelector("#progress");
    const label = document.querySelector("#step-label");
    const message = document.querySelector("#message");

    let current = 0;

    function showMessage(text, type = "error") {
        message.textContent = text;

        message.classList.remove("hidden", "text-red-500", "text-velyon-deep");

        if (type === "success") {
            message.classList.add("text-velyon-deep");
        } else {
            message.classList.add("text-red-500");
        }
    }

    function update() {
        steps.forEach((step, index) => {
            step.classList.toggle("hidden", index !== current);
        });

        prev.classList.toggle("hidden", current === 0);

        next.classList.toggle("hidden", current === steps.length - 1);

        submit.classList.toggle("hidden", current !== steps.length - 1);

        progress.style.width = \`\${((current + 1) / steps.length) * 100}%\`;

        label.textContent = \`Paso \${current + 1} de \${steps.length}\`;
    }

    function validateCurrentStep() {
        const currentStep = steps[current];

        const fields = [
            ...currentStep.querySelectorAll("input, textarea, select"),
        ];

        for (const field of fields) {
            if (field.required && !field.value.trim()) {
                field.focus();

                showMessage(
                    \`Completa el campo: \${field.placeholder || field.name}\`,
                );

                return false;
            }
        }

        // validar radios

        const radios = currentStep.querySelectorAll(
            'input[type="radio"][required]',
        );

        if (radios.length) {
            const checked = [...radios].some((r) => r.checked);

            if (!checked) {
                showMessage("Selecciona una opción para continuar");

                return false;
            }
        }

        // validar checkbox soluciones

        if (current === 2) {
            const checks = currentStep.querySelectorAll(
                'input[type="checkbox"]',
            );

            const selected = [...checks].some((c) => c.checked);

            if (!selected) {
                showMessage("Selecciona al menos una solución");

                return false;
            }
        }

        return true;
    }

    next.addEventListener("click", () => {
        if (!validateCurrentStep()) return;

        current++;

        showMessage("");

        update();
    });

    prev.addEventListener("click", () => {
        current--;

        showMessage("");

        update();
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (!validateCurrentStep()) return;

        const data = new FormData(form);

        const payload = {
            nombre: data.get("nombre"),

            empresa: data.get("empresa"),

            cargo: data.get("cargo"),

            whatsapp: data.get("whatsapp"),

            correo: data.get("correo"),

            sector: data.get("sector"),

            presencia: data.get("presencia"),

            necesidad: data.get("necesidad"),

            solucion: data.getAll("solucion").join(", "),

            referencias: data.get("referencias"),

            presupuesto: data.get("presupuesto"),
        };

        try {
            await fetch("/api/diagnostic", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            showMessage(
                "Diagnóstico enviado correctamente. Abriremos WhatsApp.",
                "success",
            );

            const whatsapp = \`
Hola Velyon 👋

Acabo de completar el diagnóstico.

Nombre:
\${payload.nombre}

Empresa:
\${payload.empresa}

Sector:
\${payload.sector}

Necesidad:
\${payload.necesidad}

Solución:
\${payload.solucion}

Presupuesto:
\${payload.presupuesto}

\`;

            setTimeout(() => {
                window.open(
                    \`https://wa.me/51997676432?text=\${encodeURIComponent(whatsapp)}\`,
                    "_blank",
                );
            }, 800);
        } catch (error) {
            showMessage(
                "No pudimos enviar el diagnóstico. Intenta nuevamente.",
            );
        }
    });

    update();
})();<\/script>`;
}, "C:/Users/User/Desktop/velyon/src/components/DiagnosticForm.astro", void 0);
//#endregion
//#region src/pages/diagnostico/index.astro
var diagnostico_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Diagnóstico digital gratuito | Velyon",
		"description": "Cuéntanos sobre tu negocio y descubre qué solución digital puede ayudarte a vender, automatizar y operar mejor."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main><section class="bg-velyon-mist py-[120px] max-[640px]:py-20"><div class="container-velyon"><div class="mx-auto max-w-[760px] text-center"><span class="section-label"> Diagnóstico inicial </span><h1 class="section-title mt-4">Construyamos la solución digital que tu negocio<span class="font-serif italic text-velyon-deep">necesita.</span></h1><p class="mx-auto mt-6 max-w-[620px] text-[15px] leading-7 text-muted-foreground">Completa este diagnóstico y conoceremos mejor tu negocio, tus objetivos y los procesos que podemos ayudarte a mejorar.</p><div class="mt-8 flex flex-wrap justify-center gap-3"><span class="rounded-full border border-border bg-white px-4 py-2 text-xs font-bold text-muted-foreground">15 minutos</span><span class="rounded-full border border-border bg-white px-4 py-2 text-xs font-bold text-muted-foreground">Sin compromiso</span><span class="rounded-full border border-border bg-white px-4 py-2 text-xs font-bold text-muted-foreground">Propuesta personalizada</span></div></div><div class="mx-auto mt-14 max-w-[820px]">${renderComponent($$result, "DiagnosticForm", $$DiagnosticForm, {})}</div></div></section></main>` })}`;
}, "C:/Users/User/Desktop/velyon/src/pages/diagnostico/index.astro", void 0);
var $$file = "C:/Users/User/Desktop/velyon/src/pages/diagnostico/index.astro";
var $$url = "/diagnostico";
//#endregion
//#region \0virtual:astro:page:src/pages/diagnostico/index@_@astro
var page = () => diagnostico_exports;
//#endregion
export { page };
