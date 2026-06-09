# Tarjetas — patrón unificado

No hay una clase `.card` global; cada sección define la suya, pero **todas siguen la misma receta**. Al crear una tarjeta nueva, copiar esta base:

## Receta base

```css
.mi-card {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;                       /* ritmo interno */
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);     /* xl para cards hero */
  padding: 1.375rem 1.5rem;
  transition: border-color .2s var(--ease), box-shadow .2s var(--ease), transform .2s var(--ease);
}
.mi-card:hover {
  border-color: rgba(var(--c-primary-rgb), 0.4);
  box-shadow: 0 8px 28px rgba(0,0,0,.35), 0 0 20px rgba(var(--c-primary-rgb), .1);
  transform: translateY(-3px);
}
```

## Variantes existentes

| Card | Sección | Particularidades |
|---|---|---|
| `.ccat` | [[Categorías]] | radius-xl, gradiente de fondo, thumb 16/9 con fade, footer clickeable con flecha circular, **toda la card es link** (pseudo-elemento stretched) |
| `.proceso-paso` | [[Proceso]] | número circular que se rellena al hover, badge de tiempo (`__meta`) |
| `.czona` | [[Cobertura]] | tile de pin que se rellena al hover, variante `--flagship` con gradiente azul |
| `.review-card` | [[Reviews]] | estrellas `--c-star`, avatar inicial, footer autor |
| `.trust-item` | [[Trust]] | horizontal compacta (número + texto), hover solo borde/glow suave |
| `.cotizacion-card` | [[FAQ y Cotización]] | sticky, header con banda azul `border-top: 3px solid` |

## Micro-interacciones reutilizables

- **Tile/círculo que se rellena:** fondo `--c-primary-light` + borde primario → hover `background: var(--c-primary); color: var(--c-white)`. (Número de proceso, pin de zona, flecha de catálogo.)
- **Card 100% clickeable:** card `position: relative` y en el link interno `::after { content:''; position:absolute; inset:0; }`.
- **Footer de card:** `margin-top: auto` (o `flex:1` en la desc) + `padding-top` + `border-top: 1px solid var(--c-border)`.

## Chips y badges (ver también [[Utilidades]])

- **Chip spec** (P4, P5…): pill azul translúcido `rgba(primary,.08)` + borde `.18`, intensifica al hover de la card.
- **Badge glass** (sobre imagen): `rgba(8,12,24,.65)` + `backdrop-filter: blur(8px)` + borde blanco `.18`.
- **Badge de estado**: `--flagship` azul (`--c-primary-soft`) / neutro gris, uppercase 0.5625rem.
