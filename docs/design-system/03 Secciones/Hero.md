# Hero

**Archivo:** `src/components/sections/HeroIndex.astro` · **Orden:** 1º (Hero → [[QuickNav]] → resto)

## ⭐ REGLA DEL SITIO — Hero limpio (jun 2026)

**Todo hero del sitio (L1, L2 y L3) contiene ÚNICAMENTE:**

1. **Eyebrow** pill con dot pulsante (izquierda)
2. **Título** H1 (izquierda)
3. **Divisor** vertical degradado
4. **Kicker** opcional + **1–2 párrafos** editoriales SEO (derecha)

**Prohibido dentro del hero:** stats/métricas, botones CTA, trust items, badges de garantía. La conversión vive en la [[QuickNav]] (inmediatamente debajo), en las secciones y en el [[CTA Final]]; las métricas viven en [[Trust]] y [[Cobertura]].

Esto aplica a `HeroIndex` (L1) y a [[Page Hero|PageHero]] (L2/L3): aunque PageHero conserva los props `stats` y el slot `actions` por flexibilidad técnica, **no se usan** — ninguna página debe pasarlos sin decisión explícita de Frank.

## Diseño (L1)

Editorial de 2 columnas separadas por línea vertical degradada, `min-height: 88vh`:

- **Izquierda:** eyebrow pill ("Proveedor directo · Sin intermediarios") → H1 gigante en 4 líneas con última palabra en gradiente azul.
- **Derecha:** kicker uppercase → 2 párrafos editoriales SEO (`line-height: 1.85`).
- **Fondo:** grid de líneas azules (opacidad .035) + 2 glows elípticos blureados, todo `aria-hidden`.

## Claves

- El gradiente del título (`linear-gradient(130deg, #72c6ff, #1a7fe8, #0050b8)` + `background-clip: text`) es exclusivo del H1 del index.
- Responsive: ≤1024 colapsa a 1 columna centrada sin divisor; ≤640 título `clamp(2.5rem, 10vw, 3.25rem)`.
