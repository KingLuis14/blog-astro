import { defineCollection, z } from "astro:content";

// Define una tupla inmutable con los valores
const VALUES_TAG = ['html', 'css', 'javascript'] as const;
// Define el arreglo mutable exportado si lo necesitas
export const TAGS = [...VALUES_TAG];



const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string(),

    author: z.string(),
    tags: z.array(z.enum(VALUES_TAG)),
  }),
});

export const collections = {
  blog: blogCollection,
};
