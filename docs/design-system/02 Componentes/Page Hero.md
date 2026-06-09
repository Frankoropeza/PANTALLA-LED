# Page Hero (L2/L3)

**Archivo:** `src/components/sections/PageHero.astro` — hero **editorial de 2 columnas** para páginas interiores, mismo lenguaje que el [[Hero]] del index: izquierda eyebrow pill (dot pulsante) + H1 + stats opcionales; derecha kicker + 1–2 párrafos SEO + slot de acciones, separados por línea vertical degradada. Breadcrumb-bar arriba.

## Uso completo (ej. /productos/)

```astro
<PageHero
  eyebrow="Catálogo 2026 · Proveedor directo"
  title="Catálogo de<br/>Pantallas <span>LED</span>"
  kicker="Tecnología SMD & COB · P2 a P10"        // opcional
  desc="Párrafo principal SEO."
  body2="Segundo párrafo (propuesta comercial)."   // opcional
  stats={[{ value: '6', label: 'Líneas de producto' }, …]}  // opcional, usa .stat-row
  crumbs={[{ label: 'Inicio', href: '/' }, { label: 'Productos' }]}
>
  <div slot="actions">…CTAs .btn…</div>            // opcional
</PageHero>
```

- `<span>` en title → acento azul; admite `<br/>` (set:html).
- H1 `id="page-hero-heading"`; el **schema BreadcrumbList lo emite la página** ([[SEO y Datos]]).
- Responsive: colapsa a 1 columna centrada en 1024 (igual que el hero L1).

## Reglas

1. Toda página L2 abre con PageHero; si tiene navegación interna, [[QuickNav]] inmediatamente después.
2. H1 único de la página vive aquí — las secciones siguientes usan h2.
3. Sin `stats/body2/kicker/actions` queda en modo simple (servicios, contacto).
