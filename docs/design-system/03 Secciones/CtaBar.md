# CtaBar

**Archivo:** `src/components/CtaBar.astro` · **Orden:** 2º — **regla de layout:** va inmediatamente después del Hero en TODAS las páginas (comentario en `Base.astro`); no insertar nada entre ambos.

## Diseño

Banda azul sólida (`--c-primary`) con 5 métricas separadas por divisores verticales blancos translúcidos:

+500 instalaciones · +10 años · 2 años garantía · 24/7 soporte · República (cobertura).

- Valor: `clamp(1.1rem, 2vw, 1.5rem)` 800 blanco; label `0.75rem` blanco 75%.
- ≤900: divisores ocultos, stats envuelven en 2 filas.
- ≤640: scroll horizontal (`overflow-x: auto`, `flex-wrap: nowrap`).

## Notas

- Es intencionalmente redundante con los stats del [[Hero]] (refuerzo de confianza above-the-fold); las cifras deben coincidir siempre.
- Para páginas interiores se reusa tal cual — es estático, sin props.
