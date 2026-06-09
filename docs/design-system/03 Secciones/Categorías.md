# Categorías (Catálogo de Productos)

**Archivo:** `src/components/sections/CategoriasIndex.astro` · `id="productos"` · fondo `--dark`

## Diseño

[[Encabezados de Sección|SectionHeaderDuo]] + **grid fijo de 3 cards por fila** (2 en 1024, 1 en 640) + CTA centrado `btn btn--outline btn--lg` "Ver catálogo completo".

### Card `.ccat` (la más rica del sitio — referencia de [[Tarjetas]])

1. **Thumb 16/9:** gradiente temático por categoría + grid de pixeles + glow radial + icono SVG 44px con drop-shadow + badge glass (IP65, Ultra HD 4K…) + fade inferior que la integra al cuerpo.
2. **Cuerpo:** H3 (hover → `--c-primary-soft`), descripción, chips de specs (P4, P5…) en pill azul.
3. **Footer:** borde superior, "Ver modelos" + flecha circular que se rellena de azul; **toda la card es clickeable** (stretched link).

### Colores temáticos (excepción documentada a los tokens)

| Categoría | Glow |
|---|---|
| Exteriores | naranja `rgba(255,130,0,…)` |
| Interiores | violeta `rgba(110,90,255,…)` |
| Flexibles | teal `rgba(0,210,170,…)` |
| Eventos | magenta `rgba(200,50,255,…)` |
| Piso | verde `rgba(0,220,110,…)` |
| Transparentes | cian `rgba(0,185,255,…)` |

## Datos

Array `categorias` en frontmatter (slug, title, badge, desc, specs[], href, visual, highlight). Los href apuntan a `/productos/<slug>/` — **páginas aún no creadas** (ver [[Crear una Página Nueva]]). Mantener sincronía con `PRODUCT_CATEGORIES` de `src/config/site.ts`.
