# Page Hero (L2/L3)

**Archivo:** `src/components/sections/PageHero.astro` — hero **editorial de 2 columnas** para páginas interiores, mismo lenguaje que el [[Hero]] del index: izquierda eyebrow pill (dot pulsante) + H1 + stats opcionales; derecha kicker + 1–2 párrafos SEO + slot de acciones, separados por línea vertical degradada. Breadcrumb-bar arriba.

## Uso estándar (ej. /productos/)

```astro
<PageHero
  eyebrow="Catálogo 2026 · Proveedor directo"
  title="Catálogo de<br/>Pantallas <span>LED</span>"
  kicker="Tecnología SMD & COB · P2 a P10"        // opcional
  desc="Párrafo principal SEO."
  body2="Segundo párrafo (propuesta comercial)."   // opcional
  crumbs={[{ label: 'Inicio', href: '/' }, { label: 'Productos' }]}
/>
```

- `<span>` en title → acento azul; admite `<br/>` (set:html).
- H1 `id="page-hero-heading"`; el **schema BreadcrumbList lo emite la página** ([[SEO y Datos]]).
- Responsive: colapsa a 1 columna centrada en 1024 (igual que el hero L1).

## Reglas

1. **Hero limpio (regla del sitio, ver [[Hero]]):** solo eyebrow + título + kicker + párrafos. Los props `stats` y el slot `actions` existen pero **no se usan** — sin stats, sin CTAs, sin trust items en ningún hero.
2. Toda página L2 abre con PageHero; si tiene navegación interna, [[QuickNav]] inmediatamente después.
3. H1 único de la página vive aquí — las secciones siguientes usan h2.
