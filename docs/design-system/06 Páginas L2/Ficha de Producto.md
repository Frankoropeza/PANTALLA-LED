# Página L3 · /productos/[slug]/

**Archivo:** `src/pages/productos/[slug].astro` · migrada a `Base.astro` (jun 2026). Genera una página por archivo de `src/content/productos/*.md`.

## Composición

1. [[Page Hero|PageHero]] con breadcrumb de 3 niveles (Inicio › Productos › Modelo), eyebrow = tipo, título con acento en la parte distintiva, y **slot `actions`**: `btn--whatsapp` "Cotizar este modelo" (mensaje WA con modelo y pixel pitch) + `btn--outline` teléfono.
2. **Contenido + specs** (`--surface`, grid 1fr/360px):
   - **`.prose-led`**: estilos de markdown con tokens del sistema — h2/h3, listas con bullet azul, tablas estilo [[Utilidades|tabla-seo]], links primarios. Reusar esta clase para cualquier markdown futuro (blog).
   - **Card de specs sticky**: dl tipo/pixel pitch/luminosidad/resolución + garantías con checks + CTA WhatsApp. En móvil sube arriba del contenido (`order: -1`).
3. [[CTA Final]] — reusada.

## SEO

Schemas BreadcrumbList (3 niveles) + **Product** (brand, additionalProperty con pixel pitch y luminosidad, offer de cotización en MXN).

## Para crear un modelo nuevo

Añadir `src/content/productos/<slug>.md` con el frontmatter del schema de `content/config.ts` — la página, el listado de [[Productos]] y los schemas se generan solos.
