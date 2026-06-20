import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const productos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tipo: z.enum(['Exterior', 'Interior', 'Flexible', 'Personalizado']),
    pixelPitch: z.string(),
    luminosidad: z.string().optional(),
    resolucion: z.string().optional(),
    image: z.string().optional(),
    precio: z.string().optional(),
    destacado: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { productos, servicios };
