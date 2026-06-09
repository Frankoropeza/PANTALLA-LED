# Responsive

## Estrategia

Doble capa:

1. **Cada componente** define su responsive básico en CSS scoped.
2. **`mobile.css`** (importado al FINAL de global.css) refuerza con `!important` quirúrgico lo que los estilos scoped podrían pisar. Organizado en secciones numeradas §1–§21.

## Breakpoints canónicos

| BP | Significado |
|---|---|
| `1024px` | tablet — colapso de layouts 2-col, header compacto |
| `768px` | mobile landscape — grids a 2/1 col, CTA final apila |
| `640px` | mobile — 1 columna, CTAs full-width, tipografía reducida |
| `480px` | small — paddings mínimos, topbar solo WhatsApp |
| `380px` | XS — ajustes finales |

## Garantías globales (mobile.css)

- Container fluido: padding 1.25rem → 1rem → 0.875rem.
- `--section-py` reducido por breakpoint (tokens en global.css + refuerzo §2).
- Touch targets ≥44px en botones (§17) y nav (§15); burger 44px.
- iOS: safe-areas con `env()` (§20), inputs `font-size: 16px` anti-zoom.
- Overflow-x bloqueado (§19); tap-highlight azul translúcido (§21).

## Reglas al crear secciones

1. El colapso de [[Split Layout]] y los grids comunes YA están en mobile.css §7 — no redeclarar.
2. Si una sección maneja todo su responsive en scoped CSS (como [[Proceso]]), dejar nota en mobile.css para que nadie lo duplique.
3. Selectores de mobile.css deben apuntar a clases REALES — al renombrar clases en un componente, grep en mobile.css (`grep 'mi-clase' src/styles/mobile.css`). Los selectores fantasma fueron una fuente de bugs ya saneada.
