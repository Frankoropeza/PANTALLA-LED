# Utilidades compartidas

**Fuente:** `src/styles/components.css` y `global.css`.

## link-arrow

Enlace inline con flecha que se desliza al hover:

```astro
<a href={url('/nosotros/')} class="link-arrow">
  Conocer más de nosotros <IconArrowRight size={14} />
</a>
```

## stat-row / stat

Fila de métricas con borde superior — hero, sidebars:

```astro
<div class="stat-row">
  <div class="stat">
    <span class="stat__value stat__value--accent">+500</span>
    <span class="stat__label">Proyectos entregados</span>
  </div>
</div>
```

- `stat__value` → `--c-ink`; con `--accent` → azul primario.
- Responsive incluido (wrap + tamaño reducido en 640).
- ⚠️ Las cifras deben ser consistentes en todo el sitio: +500 proyectos/instalaciones, 10+ años, 2 años de garantía, 98% satisfacción, 32 estados. Fuente única de la verdad comercial: ver [[SEO y Datos]].

## tabla-seo / tabla-responsive

Tabla técnica con thead oscuro, hover de fila y scroll horizontal en móvil:

```astro
<div class="tabla-responsive" role="region" aria-label="…" tabindex="0">
  <table class="tabla-seo">
    <thead>…<th scope="col">…</thead>
    <tbody>
      <tr><td><strong>Nombre</strong></td><td><span class="text-accent">P2</span></td>…</tr>
    </tbody>
  </table>
</div>
```

Usada en [[Especificaciones]]. `min-width: 640px` garantiza legibilidad con scroll.

## Otros

| Clase | Función |
|---|---|
| `.text-accent` | color primario inline |
| `.sr-only` | texto solo para screen readers |
| `.breadcrumb-bar` + `.breadcrumb__*` | migas de pan (páginas interiores) |
| `:focus-visible` global | outline azul 2px — no suprimir |
