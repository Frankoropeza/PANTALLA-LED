# Tipografía

**Fuente:** [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts), pesos 400–800, cargada en `src/layouts/Base.astro`.

```css
--font-sans: 'Outfit', 'Inter', system-ui, -apple-system, sans-serif;
```

## Escala fluida (clamp)

| Token | Valor | Uso típico |
|---|---|---|
| `--text-xs` | `clamp(0.75rem, 0.9vw, 0.875rem)` | Breadcrumbs, metadatos |
| `--text-sm` | `clamp(0.875rem, 1vw, 1rem)` | Botones, labels |
| `--text-base` | `clamp(1rem, 1.1vw, 1.125rem)` | Cuerpo |
| `--text-lg` → `--text-5xl` | hasta `clamp(3rem, 5.5vw, 4.5rem)` | Títulos crecientes |

## Pesos

`--weight-normal` 400 · `--weight-medium` 500 · `--weight-semibold` 600 · `--weight-bold` 700 · `--weight-black` 800

## Jerarquía aplicada

| Elemento | Patrón |
|---|---|
| H1 (hero) | `clamp(2.875rem, 5.5vw, 5.5rem)` · 800 · `letter-spacing: -0.035em` · `line-height: 1.02` |
| H2 sección (titulo-duo) | `clamp(2rem, 3.2vw, 2.75rem)` · 800 · `-0.03em` · acento `<span>` azul |
| H2 sidebar | `clamp(1.75rem, 2.2vw, 2.25rem)` · 800 |
| H3 card | `1.0625–1.125rem` · 700 · `-0.015em` |
| Eyebrow | `0.6875–0.75rem` · 600 · uppercase · `letter-spacing: 0.1–0.14em` · color primario |
| Descripción | `0.875–0.9375rem` · `--c-muted` · `line-height: 1.65–1.7` |
| Párrafo editorial | `0.9375rem` · `line-height: 1.8` |

## Reglas

1. Títulos siempre `--c-ink`, descripciones `--c-muted`, cuerpo `--c-ink-2`.
2. Acento de keyword en títulos: envolver en `<span>` → toma `--c-primary` automáticamente en [[Encabezados de Sección]].
3. Tracking negativo solo en títulos (≥1.5rem); tracking positivo + uppercase solo en eyebrows/badges/metas.
