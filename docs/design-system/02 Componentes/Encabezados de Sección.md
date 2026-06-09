# Encabezados de Sección

Tres patrones, en orden de preferencia. CSS compartido en `src/styles/components.css`.

## 1 · SectionHeaderDuo (estándar del index)

`src/components/ui/SectionHeaderDuo.astro` — **el patrón por defecto** para secciones de columna completa. Dos columnas separadas por línea vertical: izquierda título SEO, derecha dos párrafos de marketing.

```astro
<SectionHeaderDuo
  id="mi-heading"                       <!-- para aria-labelledby de la sección -->
  eyebrow="Eyebrow corto"
  title="Título SEO con <span>keyword acentuada</span>"
  desc="Descripción breve bajo el título (1 línea)."
  body1="Párrafo SEO 1: capacidades técnicas, keywords (paso de pixel, IP65, nits…)."
  body2="Párrafo SEO 2: propuesta de valor comercial (proveedor directo, garantía, cobertura)."
/>
```

- Clases: `.titulo-duo`, `__left/__right`, `__eyebrow`, `__title`, `__desc`, `__body`.
- El `<span>` del título toma `--c-primary` automáticamente.
- Responsive propio: 2 col → 1 col (640) con borde superior en vez de lateral.
- Usado en: [[Categorías]], [[Especificaciones]], [[Proceso]], [[Reviews]].

## 2 · sidebar-header (layouts con sidebar)

Clases sueltas para títulos dentro de [[Split Layout]] — no es componente Astro porque el sidebar siempre lleva contenido extra (CTAs, stats):

```astro
<p class="sidebar-header__eyebrow">Eyebrow</p>
<h2 id="mi-heading" class="sidebar-header__title">Título con <span>acento</span></h2>
<p class="sidebar-header__desc">Descripción.</p>
```

Usado en: [[Trust]], [[Servicios]], [[Cobertura]], y el eyebrow de [[FAQ y Cotización]].

## 3 · SectionHeader (centrado, legado del index)

`src/components/ui/SectionHeader.astro` — header centrado de una columna (`.section-header`). Ya no se usa en el index (migrado a Duo) pero sigue disponible para páginas interiores donde el duo sea demasiado: confirmaciones, páginas de utilidad. Props: `id`, `eyebrow`, `title`, `desc`, `align`.

## Regla de accesibilidad

Toda sección: `<section aria-labelledby="x-heading">` + `id="x-heading"` en el h2 (pásalo por prop `id`). Un solo h1 por página (hero); secciones h2; cards h3.
