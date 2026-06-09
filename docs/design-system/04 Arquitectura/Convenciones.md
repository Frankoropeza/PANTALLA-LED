# Convenciones de Código

## Nomenclatura

- **BEM laxo por sección:** `.seccion`, `.seccion__elemento`, `.seccion__elemento--modificador` (ej. `.czona__badge--flagship`).
- Componentes de sección: sufijo `Index` (`CategoriasIndex.astro`); cuando se generalicen para otras páginas, quitar el sufijo y mover datos a props.
- Comentarios de bloque en CSS con marco `═══` y separadores `───` (estilo existente).
- Idioma: español en comentarios, copy y nombres de dato; inglés en tokens/clases utilitarias.

## Astro

- Datos repetitivos → array en frontmatter + `.map()` (nunca markup repetido a mano).
- Props tipadas con `interface Props`.
- HTML en props (acentos de título) → `set:html` consciente y documentado.
- Imports: config (`../../config/site`) → utils → componentes UI.

## Accesibilidad (checklist por sección)

- [ ] `<section aria-labelledby>` ↔ `id` en el h2
- [ ] Jerarquía h1 (solo hero) → h2 → h3
- [ ] SVGs decorativos `aria-hidden="true"`; informativos con `aria-label`
- [ ] Fondos decorativos en wrapper `aria-hidden`
- [ ] Links de icono con `aria-label` descriptivo
- [ ] `role="list"/"listitem"` cuando la lista es semántica pero no `<ul>`
- [ ] No suprimir `:focus-visible`

## Prohibido (deuda ya saneada — no reintroducir)

1. ❌ Colores/radios/sombras hardcodeados → usar tokens ([[Colores]], [[Efectos]]).
2. ❌ Botones custom por sección → [[Botones]].
3. ❌ SVG paths duplicados → [[Iconos]].
4. ❌ `background` redundante cuando `.section--*` ya lo da.
5. ❌ Redefinir tokens fuera de `global.css` (Base.astro ya no tiene `<style is:global>`).
6. ❌ Duplicar contenido que tiene fuente única (FAQ, contacto, categorías).

## Git

Commits convencionales en español: `feat(scope):`, `fix:`, `refactor:` + cuerpo con bullets. Push directo a `main` (GitHub Pages).
