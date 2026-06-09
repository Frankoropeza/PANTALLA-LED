# Reviews (Testimonios)

**Archivo:** `src/components/sections/ReviewsIndex.astro` · `id="testimonios"` · fondo `--surface`

## Diseño

[[Encabezados de Sección|SectionHeaderDuo]] + grid 3 col (2 en 1024, 1 en 640) de 6 `.review-card` + badge de cierre centrado ("Reseñas verificadas… Sin testimonios fabricados" con check `--c-success`).

### Card `.review-card`

1. 5 estrellas (`--c-star`).
2. `<blockquote>` con el testimonio.
3. Footer con borde superior: avatar circular con inicial (fondo `--c-primary-light`) + nombre con check verde de verificado + rol · empresa.

## Datos

Array `reviews` (name, company, role, text, rating). Sectores cubiertos a propósito: publicidad exterior, centro comercial, eventos, restaurante, estadio, universidad — espejo de los segmentos objetivo.

## Pendiente

Schema.org `Review`/`AggregateRating` NO se emite aún (requiere reseñas verificables públicamente; emitirlo con testimonios internos arriesga penalización de rich snippets). Si algún día hay perfil de Google Business con reseñas, enlazarlo aquí.
