import { defineCollection, z } from 'astro:content';

const productos = defineCollection({
  type: 'content',
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
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { productos, servicios };
