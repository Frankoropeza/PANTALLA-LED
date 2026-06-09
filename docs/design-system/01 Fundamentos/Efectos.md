# Efectos — Radios, Sombras, Transiciones

## Border radius

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 4px | Focus outline, micro-elementos |
| `--radius-md` | 8px | Botones, tiles de iconos, tablas |
| `--radius-lg` | 12px | **Tarjetas estándar** |
| `--radius-xl` | 16px | Cards hero (catálogo), card de cotización |
| `--radius-full` | 9999px | Pills, badges, chips |

## Sombras

| Token | Uso |
|---|---|
| `--shadow-xs` … `--shadow-xl` | Elevación neutra (negra) |
| `--shadow-glow` | `0 0 24px rgba(primary, .25)` — glow azul |
| `--shadow-glow-lg` | versión grande |

**Hover canónico de tarjeta** (usar tal cual, ver [[Tarjetas]]):

```css
.card:hover {
  border-color: rgba(var(--c-primary-rgb), 0.4);
  box-shadow: 0 8px 28px rgba(0,0,0,.35), 0 0 20px rgba(var(--c-primary-rgb), .1);
  transform: translateY(-3px);
}
```

(Las cards grandes de catálogo usan `-5px` y sombras mayores.)

## Transiciones

```css
--ease: cubic-bezier(0.4, 0, 0.2, 1);
--duration: 200ms;        /* micro-interacciones */
--duration-slow: 350ms;   /* movimientos amplios */
--transition: var(--duration) var(--ease);
```

Regla: transicionar propiedades específicas (`border-color`, `box-shadow`, `transform`, `background`, `color`) — nunca `all`.

## Fondos decorativos

- **Grid de pixeles:** `radial-gradient(circle, rgba(255,255,255,.14) 1px, transparent 1px)` con `background-size: 6px 6px` (thumbnails) o `linear-gradient` 72px (hero).
- **Glows ambientales:** elipses `radial-gradient` con `filter: blur(140px)`, posicionadas absolute, `pointer-events: none`, dentro de un wrapper `aria-hidden="true"`.
- **Fade de integración:** `::after` con gradiente a `rgba(8,12,24,.55)` en la base de thumbnails ([[Categorías]]).
- **Animaciones:** `pulse` (dot del hero eyebrow, 2.2s). Mantener sutiles y pocas.
