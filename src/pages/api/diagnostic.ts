import type { APIRoute } from "astro";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyaE_YZ0gJ9aj3FJJqhs_nTnBASkH8VHXjj_oweCaTiIY3wEXnnark2Z6DPbhQAN8aFHA/exec";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();

        const response = await fetch(
            GOOGLE_SCRIPT_URL,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.text();

        return new Response(
            JSON.stringify({
                success: true,
                response: result
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({
                success: false
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }
};