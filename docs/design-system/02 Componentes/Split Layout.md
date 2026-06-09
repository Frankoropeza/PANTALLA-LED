# Split Layout

**Fuente:** `src/styles/components.css`. Layout de 2 columnas con sidebar sticky — patrón de [[Trust]], [[Servicios]] y [[Cobertura]].

## Uso

```astro
<section class="section section--surface mi-seccion" aria-labelledby="mi-heading">
  <div class="container">
    <div class="split-layout">                 <!-- o split-layout--narrow (36%) -->

      <div class="split-layout__sidebar">
        <!-- sidebar-header + CTA + stat-row (ver [[Encabezados de Sección]] y [[Utilidades]]) -->
      </div>

      <div><!-- contenido: grid de cards, lista, tabla… --></div>

    </div>
  </div>
</section>
```

## Comportamiento

| Variante | Columnas |
|---|---|
| `.split-layout` | `38% / 1fr` |
| `.split-layout--narrow` | `36% / 1fr` |
| gap | `clamp(3rem, 5%, 6rem)` |

- El sidebar es **sticky**: `top: calc(var(--stack-height) + 2rem)` — queda fijo bajo el header mientras el contenido scrollea.
- ≤1024px colapsa a 1 columna y el sticky se desactiva (en components.css **y** reforzado en mobile.css §7 con `!important`).

## Anatomía típica del sidebar

1. `sidebar-header__eyebrow` + `__title` + `__desc`
2. CTA `.btn .btn--primary` (+ link secundario `.link-arrow`)
3. `stat-row` con 2–3 métricas o lista de garantías con `IconCheck`

## Cuándo usarlo

- Contenido tipo lista/grid que se beneficia de un contexto persistente (título + CTA siempre visibles).
- NO usarlo para contenido corto (el sticky no aporta) ni anidado dentro de otro split.
