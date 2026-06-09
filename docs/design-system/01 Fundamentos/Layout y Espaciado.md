# Layout y Espaciado

## Filosofía: full-width

El sitio es **100% de ancho** — no hay max-width global. El aire lo da el padding porcentual del container:

```css
--container-px: clamp(1.5rem, 5%, 5rem);
--section-py:   clamp(4rem, 6vw, 5.5rem);
```

## Clases estructurales

| Clase | Función |
|---|---|
| `.container` | `width: 100%` + `padding-inline: var(--container-px)` |
| `.section` | `padding-block: var(--section-py)` |
| `.section--dark` | fondo `--c-bg` |
| `.section--surface` | fondo `--c-bg-2` |
| `.section--sm` | padding reducido |

**Esqueleto canónico de toda sección:**

```astro
<section class="section section--dark mi-seccion" id="ancla" aria-labelledby="mi-heading">
  <div class="container">
    <!-- encabezado + contenido -->
  </div>
</section>
```

⚠️ El fondo lo da SIEMPRE la clase `.section--*` — no redeclarar `background` en el CSS scoped (era un patrón duplicado que ya se eliminó).

## Grid de espaciado (8px)

`--sp-1` (0.25rem) → `--sp-24` (6rem). Para gaps/márgenes usar la escala; valores ad-hoc solo si el diseño lo exige.

## Stack de navegación

| Token | Desktop | ≤1024 | ≤640 | ≤380 |
|---|---|---|---|---|
| `--topbar-height` | 36px | 36px | 32px | 32px |
| `--header-height` | 80px | 72px | 64px | 60px |
| `--stack-height` | 116px | calc | calc | calc |

Los elementos sticky (sidebars de [[Split Layout]], card de cotización) usan `top: calc(var(--stack-height) + 2rem)`.

## Grids de contenido

| Patrón | Columnas | Dónde |
|---|---|---|
| Cards de catálogo | 3 → 2 (1024) → 1 (640) | [[Categorías]] |
| Cards de proceso | 2 → 1 (768), último span completo | [[Proceso]] |
| Cards de zona | 2 → 1 (640) | [[Cobertura]] |
| Reviews | 3 → 2 (1024) → 1 (640) | [[Reviews]] |
| Razones trust | 2 → 3 (≥1400) → 1 (640) | [[Trust]] |
