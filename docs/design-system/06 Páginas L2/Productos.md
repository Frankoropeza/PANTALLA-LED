# Página L2 · /productos/

**Archivo:** `src/pages/productos.astro` · migrada a `Base.astro` (jun 2026) — **plantilla de referencia para todas las L2**.

## Composición (todo reusado)

1. [[Page Hero|PageHero]] — hero limpio 2 col (Inicio › Productos)
2. [[QuickNav]] accent — pill por categoría → anclas `#<slug>-detalle`
3. **TrustStrip** (`sections/TrustStrip.astro`, genérico por props) — 4 mini-cards: originales, documentación, stock, precio de fábrica
4. **Catálogo** (`--surface`): [[Encabezados de Sección|SectionHeaderDuo]] + `.catalogo-grid` + 6 × [[Tarjetas|CategoryCard]] desde `config/categorias.ts`
5. **CategoriaSpotlight ×6** (`sections/CategoriaSpotlight.astro`) — detalle SEO por categoría con fondos alternados (patrón Firefighters MX homologado): [[Split Layout]] con sidebar sticky (badge + H2 + intro + chips + CTA WhatsApp + link a ficha) | grid 2×2 de capacidades (títulos con barra azul). Datos: `CATEGORIAS[].spotlight` (intro + 4 features + fichaHref opcional). `id="<slug>-detalle"` = ancla pública usada por QuickNav y por los CategoryCard de todo el sitio (los `href` de categorías apuntan aquí — ya no hay 404s)
6. **Modelos destacados** (`--dark`): fichas markdown `src/content/productos/`, card `.pcard` → `/productos/<slug>/`
7. [[Especificaciones]] + [[CTA Final]] — reusadas tal cual

## SEO

- Title/description/canonical propios; schemas **BreadcrumbList** + **ItemList** (6 categorías).
- H1 único en PageHero; h2 por sección con `aria-labelledby`.

## Card `.pcard` (ficha técnica)

Receta canónica de [[Tarjetas]] + `dl` de specs en filas dt/dd con borde discontinuo + footer stretched-link. Reusable para listados de modelos en las páginas de categoría.

## Pendiente

- `/productos/[slug].astro` sigue en Layout legacy → migrar con el patrón de esta página + schema `Product` + `prose` para el markdown.
- Páginas de categoría `/productos/pantallas-*/` (6) — los CategoryCard ya enlazan a ellas.
