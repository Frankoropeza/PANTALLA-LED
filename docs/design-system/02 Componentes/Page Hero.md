# Page Hero (L2)

**Archivo:** `src/components/sections/PageHero.astro` — hero compacto para páginas interiores. Sustituye al hero editorial del index (que es exclusivo de L1).

## Uso

```astro
<PageHero
  eyebrow="Catálogo 2026"
  title="Catálogo de <span>Pantallas LED</span>"
  desc="Descripción SEO de 2–3 líneas con keywords."
  crumbs={[
    { label: 'Inicio', href: '/' },
    { label: 'Productos' },          // sin href = página actual
  ]}
/>
```

- Renderiza **breadcrumb-bar** (clases globales) + hero con H1 (`id="page-hero-heading"`).
- `<span>` en title → acento azul.
- Slot `actions` disponible para CTAs bajo la descripción.
- Fondo: grid de pixeles + glow lateral (mismo lenguaje que [[Hero]] L1), `border-bottom` para separar del CtaBar.
- El **schema BreadcrumbList lo emite la página**, no este componente (ver [[SEO y Datos]]).

## Reglas

1. Toda página L2 abre con PageHero + [[CtaBar]] inmediatamente después.
2. H1 único de la página vive aquí — las secciones siguientes usan h2.
3. Title ≤ 18ch por línea (max-width incluido); desc ≤ 62ch.
