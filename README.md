# PantallaLED México

Sitio web corporativo para venta, renta e instalación de pantallas LED en México.

## Stack

- [Astro](https://astro.build) — Framework web estático
- [TailwindCSS](https://tailwindcss.com) — Estilos utility-first
- [TypeScript](https://www.typescriptlang.org) — Tipado estático

## Estructura del proyecto

```
PANTALLA-LED/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Hero.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── productos/
│   │   │   ├── pantalla-exterior.md
│   │   │   ├── pantalla-interior.md
│   │   │   └── pantalla-flexible.md
│   │   └── servicios/
│   │       ├── instalacion.md
│   │       ├── renta.md
│   │       └── mantenimiento.md
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── productos.astro
│   │   ├── productos/[slug].astro
│   │   ├── servicios.astro
│   │   └── contacto.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Comandos

| Comando          | Acción                                      |
|-----------------|---------------------------------------------|
| `npm install`   | Instala dependencias                         |
| `npm run dev`   | Inicia servidor local en `localhost:4321`    |
| `npm run build` | Genera el sitio estático en `./dist/`        |
| `npm run preview` | Vista previa del build local              |

## Páginas

- `/` — Inicio con hero, servicios y productos destacados
- `/productos` — Catálogo de pantallas LED
- `/productos/[slug]` — Detalle de producto (generado desde Markdown)
- `/servicios` — Descripción de servicios
- `/contacto` — Formulario de contacto

## Agregar un nuevo producto

Crea un archivo `.md` en `src/content/productos/` con el siguiente frontmatter:

```yaml
---
title: "Nombre del Producto"
description: "Descripción breve"
tipo: "Exterior" # Exterior | Interior | Flexible | Personalizado
pixelPitch: "P4, P5"
luminosidad: "5,000 nits"
resolucion: "Configurable"
image: "/img/productos/mi-imagen.jpg"
destacado: false
order: 4
---
```

## Despliegue

El sitio está configurado para despliegue como sitio estático. Compatible con:
- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel
