# Colores

**Fuente de verdad:** `src/styles/global.css` → `:root`. Nunca hardcodear hex/rgba en componentes; siempre `var(--token)`.

## Primarios

| Token | Valor | Uso |
|---|---|---|
| `--c-primary` | `#0066CC` | Azul de marca: CTAs, acentos, links |
| `--c-primary-dark` | `#004499` | Hover de botones primarios |
| `--c-primary-light` | `rgba(0,102,204,.12)` | Fondos suaves de acento |
| `--c-primary-rgb` | `0, 102, 204` | Para `rgba(var(--c-primary-rgb), X)` en glows/bordes |
| `--c-primary-soft` | `#60A5FA` | Azul claro: texto acentuado sobre fondos azulados, hover de títulos en cards |
| `--c-accent` | `#FF6600` | Naranja LED (acento secundario, poco usado) |

## Fondos (dark theme)

| Token | Valor | Uso |
|---|---|---|
| `--c-bg` | `#080C18` | Fondo base del body y `.section--dark` |
| `--c-bg-2` | `#0F1629` | `.section--surface` — alterna con bg para ritmo visual |
| `--c-surface` | `#141D35` | Fondo de tarjetas |
| `--c-surface-2` | `#1A2540` | Superficies elevadas (thead de tablas) |

**Ritmo del index:** las secciones alternan `--dark` / `--surface`: Hero → CtaBar(azul) → Categorías(dark) → Trust(surface) → Servicios(dark) → Specs(surface) → Proceso(dark) → Reviews(surface) → Cobertura(surface) → FAQ(dark) → CTA Final(dark+borde).

## Bordes y texto

| Token | Valor | Uso |
|---|---|---|
| `--c-border` | `#1E2D50` | Borde estándar de cards, separadores |
| `--c-border-2` | `#253560` | Borde más visible |
| `--c-ink` | `#F0F4FF` | Títulos |
| `--c-ink-2` | `#C5D0E6` | Cuerpo de texto |
| `--c-muted` | `#7A8CAB` | Texto secundario, descripciones |
| `--c-white` | `#FFFFFF` | Texto sobre fondos de color |

## Semánticos

| Token | Valor | Uso |
|---|---|---|
| `--c-success` | `#22C55E` | Checks de beneficios, verificado |
| `--c-star` | `#F59E0B` | Estrellas de reseñas |
| `--color-whatsapp` | `#25D366` | Botones/elementos WhatsApp |
| `--color-whatsapp-hover` | `#1EA855` | Hover WhatsApp |

## Reglas

1. Glow/borde azul translúcido → `rgba(var(--c-primary-rgb), 0.X)`, jamás `rgba(0,102,204,…)` literal.
2. Los gradientes temáticos de [[Categorías]] (naranja exterior, violeta interior, etc.) son la **única excepción** documentada de colores fuera de token.
3. Texto sobre azul primario → `--c-white` con opacidad para jerarquía (`rgba(255,255,255,.75)`).
