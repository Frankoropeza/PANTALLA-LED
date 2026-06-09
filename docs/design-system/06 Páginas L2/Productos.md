# Página L2 · /productos/

**Archivo:** `src/pages/productos.astro` · migrada a `Base.astro` (jun 2026) — **plantilla de referencia para todas las L2**.

## Composición (todo reusado)

1. [[Page Hero|PageHero]] — breadcrumb Inicio › Productos + H1 + desc SEO
2. [[CtaBar]] — regla: inmediatamente después del hero
3. **Catálogo** (`--surface`): [[Encabezados de Sección|SectionHeaderDuo]] + `.catalogo-grid` + 6 × [[Tarjetas|CategoryCard]] desde `config/categorias.ts`
4. **Modelos destacados** (`--dark`): fichas desde la **colección markdown** `src/content/productos/` (orden por `order`), card `.pcard` con dl de specs y badge "Más solicitado" (`destacado: true`) → enlazan a `/productos/<slug>/`
5. [[Especificaciones]] — sección del index reusada tal cual
6. [[CTA Final]] — reusada tal cual

## SEO

- Title/description/canonical propios; schemas **BreadcrumbList** + **ItemList** (6 categorías).
- H1 único en PageHero; h2 por sección con `aria-labelledby`.

## Card `.pcard` (ficha técnica)

Receta canónica de [[Tarjetas]] + `dl` de specs en filas dt/dd con borde discontinuo + footer stretched-link. Reusable para listados de modelos en las páginas de categoría.

## Pendiente

- `/productos/[slug].astro` sigue en Layout legacy → migrar con el patrón de esta página + schema `Product` + `prose` para el markdown.
- Páginas de categoría `/productos/pantallas-*/` (6) — los CategoryCard ya enlazan a ellas.
