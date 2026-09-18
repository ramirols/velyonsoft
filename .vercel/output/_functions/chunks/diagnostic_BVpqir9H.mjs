import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
//#region src/pages/api/diagnostic.ts
var diagnostic_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyaE_YZ0gJ9aj3FJJqhs_nTnBASkH8VHXjj_oweCaTiIY3wEXnnark2Z6DPbhQAN8aFHA/exec";
var POST = async ({ request }) => {
	try {
		const data = await request.json();
		const result = await (await fetch(GOOGLE_SCRIPT_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		})).text();
		return new Response(JSON.stringify({
			success: true,
			response: result
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ success: false }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/diagnostic@_@ts
var page = () => diagnostic_exports;
//#endregion
export { page };
