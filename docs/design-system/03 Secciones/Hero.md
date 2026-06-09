# Hero

**Archivo:** `src/components/sections/HeroIndex.astro` · **Orden:** 1º (obligatorio: Hero → [[CtaBar]] → resto)

## Diseño

Editorial de 2 columnas separadas por línea vertical degradada, `min-height: 88vh`:

- **Izquierda:** eyebrow pill con dot pulsante ("Proveedor directo · Sin intermediarios") → H1 gigante en 4 líneas con última palabra en gradiente azul → `stat-row` (+500 / 10+ años / 2 años).
- **Derecha:** kicker uppercase → 2 párrafos editoriales SEO (`line-height: 1.85`) → CTAs (`btn--primary btn--lg` catálogo + `btn--whatsapp-soft btn--lg` cotizar) → fila de 4 trust items con `IconCheck`.
- **Fondo:** grid de líneas azules (opacidad .035) + 2 glows elípticos blureados, todo `aria-hidden`.

## Claves de reuso

- El gradiente del título: `linear-gradient(130deg, #72c6ff 0%, #1a7fe8 45%, #0050b8 100%)` + `background-clip: text` — reservado para el H1 hero, no replicar en H2.
- Trust items renderizados desde array `trustItems` en frontmatter.
- Las clases `hero__btn-primary/hero__btn-wa` se conservan junto a `.btn` solo como hooks de mobile.css.

## Responsive

≤1024: 1 columna centrada, divisor oculto. ≤640: CTAs full-width apilados (48px touch), título `clamp(2.5rem, 10vw, 3.25rem)`.
