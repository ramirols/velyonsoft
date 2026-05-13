import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const proyectosCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/proyectos" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        result: z.string(),
        date: z.coerce.date(),
        cover: z.string(),
        url: z.string().optional(),
        featured: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
    }),
});

export const collections = {
    proyectos: proyectosCollection,
};
